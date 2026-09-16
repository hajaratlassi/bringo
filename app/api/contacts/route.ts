import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      contacts,
      stats: {
        total: contacts.length,
        emails: contacts.filter((c) => c.email).length,
        phones: contacts.filter((c) => c.phone).length,
      },
    });
  } catch (error) {
    console.error("CONTACTS_API_ERROR:", error);

    return NextResponse.json(
      {
        error: "Impossible de charger les contacts.",
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}