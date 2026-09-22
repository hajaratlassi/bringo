import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "First name, last name and email are required.",
        },
        { status: 400 }
      );
    }

    const cleanFirstName = String(firstName).trim();
    const cleanLastName = String(lastName).trim();
    const cleanEmail = String(email).trim().toLowerCase();

    const contact = await prisma.contact.create({
      data: {
        firstName: cleanFirstName,
        lastName: cleanLastName,
        email: cleanEmail,
        phone: phone ? String(phone).trim() : null,
        company: company ? String(company).trim() : null,
        message: message ? String(message).trim() : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact saved successfully.",
        contact: {
          id: contact.id,
          createdAt: contact.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to save contact.",
      },
      { status: 500 }
    );
  }
}
