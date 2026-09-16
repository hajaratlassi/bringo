import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const audits = await prisma.audit.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = audits.length;

    const averageScore =
      total > 0
        ? Math.round(
            audits.reduce((sum, audit) => sum + audit.score, 0) / total
          )
        : 0;

    const goodScores = audits.filter((audit) => audit.score >= 70).length;

    const needsImprovement = audits.filter(
      (audit) => audit.score < 70
    ).length;

    return NextResponse.json({
      audits,
      stats: {
        total,
        averageScore,
        goodScores,
        needsImprovement,
      },
    });
  } catch (error) {
    console.error("AUDITS_API_ERROR:", error);

    return NextResponse.json(
      {
        error: "Impossible de charger les audits.",
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}