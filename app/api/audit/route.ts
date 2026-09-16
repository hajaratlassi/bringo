import dns from "node:dns";
import http from "node:http";
import https from "node:https";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

dns.setDefaultResultOrder("ipv4first");

type FetchResult = {
  html: string;
  finalUrl: string;
  statusCode: number;
};

function fetchWebsite(
  targetUrl: string,
  redirectCount = 0
): Promise<FetchResult> {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error("Trop de redirections."));
      return;
    }

    const parsed = new URL(targetUrl);

    const isHttps = parsed.protocol === "https:";
    const client = isHttps ? https : http;

    const request = client.get(
      {
        protocol: parsed.protocol,
        hostname: parsed.hostname,
        port:
          parsed.port ||
          (isHttps ? 443 : 80),
        path:
          (parsed.pathname || "/") +
          (parsed.search || ""),
        family: 4,
        timeout: 15000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; BRINGO-Audit/1.0)",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language":
            "fr-FR,fr;q=0.9,en;q=0.8",
        },

        ...(isHttps
          ? {
              servername: parsed.hostname,
              rejectUnauthorized: true,
            }
          : {}),
      },
      (response) => {
        const statusCode =
          response.statusCode || 500;

        // REDIRECTION
        if (
          statusCode >= 300 &&
          statusCode < 400 &&
          response.headers.location
        ) {
          const redirectUrl = new URL(
            response.headers.location,
            targetUrl
          ).toString();

          response.resume();

          fetchWebsite(
            redirectUrl,
            redirectCount + 1
          )
            .then(resolve)
            .catch(reject);

          return;
        }

        let html = "";

        response.setEncoding("utf8");

        response.on("data", (chunk) => {
          html += chunk;
        });

        response.on("end", () => {
          resolve({
            html,
            finalUrl: targetUrl,
            statusCode,
          });
        });
      }
    );

    request.on("timeout", () => {
      request.destroy(
        new Error("Connexion au site trop longue.")
      );
    });

    request.on("error", (error) => {
      reject(error);
    });
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    let website = String(
      body.website || ""
    ).trim();

    if (!website) {
      return NextResponse.json(
        {
          error: "Veuillez entrer une URL.",
        },
        { status: 400 }
      );
    }

    if (
      !website.startsWith("http://") &&
      !website.startsWith("https://")
    ) {
      website = `https://${website}`;
    }

    try {
      new URL(website);
    } catch {
      return NextResponse.json(
        {
          error: "URL invalide.",
        },
        { status: 400 }
      );
    }

    console.log(
      "🔍 BRINGO AUDIT:",
      website
    );

    // ============================
    // FETCH WEBSITE
    // ============================

    const result =
      await fetchWebsite(website);

    console.log(
      "✅ WEBSITE STATUS:",
      result.statusCode
    );

    if (
      result.statusCode < 200 ||
      result.statusCode >= 400
    ) {
      return NextResponse.json(
        {
          error: `Le site a retourné HTTP ${result.statusCode}.`,
        },
        { status: 400 }
      );
    }

    const html = result.html;

    const finalUrl =
      result.finalUrl;

    // ============================
    // SEO ANALYSIS
    // ============================

    const titleMatch = html.match(
      /<title[^>]*>([\s\S]*?)<\/title>/i
    );

    const title =
      titleMatch?.[1]?.trim() || "";

    const descriptionMatch =
      html.match(
        /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i
      );

    const metaDescription =
      descriptionMatch?.[1]?.trim() || "";

    const h1Matches =
      html.match(/<h1\b[^>]*>/gi) || [];

    const h1Count =
      h1Matches.length;

    const viewport =
      /<meta[^>]+name=["']viewport["']/i.test(
        html
      );

    const canonical =
      /<link[^>]+rel=["']canonical["']/i.test(
        html
      );

    const langMatch =
      html.match(
        /<html[^>]+lang=["']([^"']+)["']/i
      );

    const htmlLang =
      langMatch?.[1] || "";

    const robots =
      /<meta[^>]+name=["']robots["']/i.test(
        html
      );

    const images =
      html.match(/<img\b[^>]*>/gi) || [];

    const imagesWithoutAlt =
      images.filter(
        (image) =>
          !/\balt\s*=/i.test(image)
      ).length;

    // ============================
    // CHECKS
    // ============================

    const checks = [
      {
        name: "HTTPS",
        passed:
          finalUrl.startsWith("https://"),
        description:
          finalUrl.startsWith("https://")
            ? "Le site utilise HTTPS."
            : "Le site n'utilise pas HTTPS.",
      },

      {
        name: "Title SEO",
        passed:
          title.length > 0,
        description:
          title.length > 0
            ? `Title détecté : ${title.slice(
                0,
                100
              )}`
            : "Aucune balise title détectée.",
      },

      {
        name: "Meta description",
        passed:
          metaDescription.length >= 50 &&
          metaDescription.length <= 160,
        description:
          metaDescription.length > 0
            ? `Description détectée (${metaDescription.length} caractères).`
            : "Aucune meta description détectée.",
      },

      {
        name: "H1 principal",
        passed:
          h1Count === 1,
        description:
          h1Count === 1
            ? "Une balise H1 principale est présente."
            : `${h1Count} balise(s) H1 détectée(s).`,
      },

      {
        name: "Viewport mobile",
        passed:
          viewport,
        description:
          viewport
            ? "Viewport mobile détecté."
            : "Viewport mobile absent.",
      },

      {
        name: "URL Canonical",
        passed:
          canonical,
        description:
          canonical
            ? "Canonical détectée."
            : "Aucune canonical détectée.",
      },

      {
        name: "Langue HTML",
        passed:
          Boolean(htmlLang),
        description:
          htmlLang
            ? `Langue HTML : ${htmlLang}`
            : "Attribut lang absent.",
      },

      {
        name: "Robots metadata",
        passed:
          robots,
        description:
          robots
            ? "Meta robots détectée."
            : "Meta robots absente.",
      },

      {
        name: "Alt des images",
        passed:
          images.length === 0 ||
          imagesWithoutAlt === 0,
        description:
          images.length === 0
            ? "Aucune image détectée."
            : `${imagesWithoutAlt} image(s) sans attribut alt sur ${images.length}.`,
      },
    ];

    // ============================
    // SCORE
    // ============================

    const passedChecks =
      checks.filter(
        (check) => check.passed
      ).length;

    const score = Math.round(
      (passedChecks /
        checks.length) *
        100
    );

    const status =
      score >= 80
        ? "Good"
        : score >= 60
        ? "Needs Improvement"
        : "Poor";

    const summary =
      score >= 80
        ? "Votre site présente une bonne base technique et SEO."
        : score >= 60
        ? "Votre site possède une base correcte mais plusieurs améliorations sont recommandées."
        : "Votre site présente plusieurs points techniques et SEO à améliorer.";

    // ============================
    // SAVE DATABASE
    // ============================

    const audit =
      await prisma.audit.create({
        data: {
          website,
          finalUrl,
          score,
          status,
          summary,
        },
      });

    console.log(
      "💾 AUDIT SAVED:",
      audit.id
    );

    // ============================
    // RESPONSE
    // ============================

    return NextResponse.json({
      success: true,

      id: audit.id,

      website,

      finalUrl,

      score,

      status,

      summary,

      checks,

      details: {
        title,
        metaDescription,
        h1Count,
        htmlLang,
        imagesCount:
          images.length,
        imagesWithoutAlt,
      },
    });
  } catch (error) {
    console.error(
      "❌ AUDIT_API_ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Impossible d'effectuer l'audit.",
      },
      { status: 500 }
    );
  }
}