"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  RefreshCw,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";

type Contact = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
  createdAt: string;
};

export default function Page() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/contacts", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load contacts");
      }

      const data = await response.json();

      setContacts(data.contacts ?? []);
    } catch (error) {
      console.error("CONTACTS_LOAD_ERROR:", error);
      setError("Impossible de charger les contacts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const getContactName = (contact: Contact) => {
    const fullName = [contact.firstName, contact.lastName]
      .filter(Boolean)
      .join(" ")
      .trim();

    if (fullName) {
      return fullName;
    }

    if (contact.name) {
      return contact.name;
    }

    return "—";
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17265f]">
              <Users className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500">
                BRINGO
              </p>

              <h1 className="text-xl font-black text-[#17265f]">
                CRM Contacts
              </h1>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={loadContacts}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  loading ? "animate-spin" : ""
                }`}
              />
              Actualiser
            </button>

            <Link
              href="/fr/dashboard"
              className="flex items-center gap-2 rounded-xl bg-[#17265f] px-4 py-2.5 font-bold text-white transition hover:bg-[#102153]"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
            CRM
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#17265f]">
            Vos contacts
          </h2>

          <p className="mt-2 text-slate-500">
            Gérez les prospects qui vous contactent via BRINGO.
          </p>
        </div>

        {/* STATISTICS */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {/* TOTAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Users className="mb-4 h-6 w-6 text-cyan-500" />

            <p className="text-sm text-slate-500">
              Total contacts
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {contacts.length}
            </p>
          </div>

          {/* EMAILS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Mail className="mb-4 h-6 w-6 text-indigo-500" />

            <p className="text-sm text-slate-500">
              Emails
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {contacts.filter((contact) => Boolean(contact.email)).length}
            </p>
          </div>

          {/* PHONES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Phone className="mb-4 h-6 w-6 text-emerald-500" />

            <p className="text-sm text-slate-500">
              Téléphones
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {contacts.filter((contact) => Boolean(contact.phone)).length}
            </p>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* CONTACT TABLE */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h3 className="text-lg font-black text-[#17265f]">
              Liste des prospects
            </h3>
          </div>

          {loading ? (
            <div className="flex min-h-[250px] items-center justify-center">
              <RefreshCw className="h-7 w-7 animate-spin text-cyan-500" />
            </div>
          ) : contacts.length === 0 ? (
            <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
              <Users className="mb-4 h-10 w-10 text-slate-300" />

              <h4 className="font-bold text-[#17265f]">
                Aucun contact
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Les nouveaux prospects apparaîtront ici.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Nom
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Email
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Téléphone
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Entreprise
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Message
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-t border-slate-100"
                    >
                      {/* NAME */}
                      <td className="px-6 py-5 font-bold text-[#17265f]">
                        {getContactName(contact)}
                      </td>

                      {/* EMAIL */}
                      <td className="px-6 py-5">
                        {contact.email || "—"}
                      </td>

                      {/* PHONE */}
                      <td className="px-6 py-5">
                        {contact.phone || "—"}
                      </td>

                      {/* COMPANY */}
                      <td className="px-6 py-5">
                        {contact.company || "—"}
                      </td>

                      {/* MESSAGE */}
                      <td className="max-w-[350px] px-6 py-5 text-sm text-slate-500">
                        {contact.message || "—"}
                      </td>

                      {/* DATE */}
                      <td className="px-6 py-5 text-sm text-slate-500">
                        {new Date(
                          contact.createdAt
                        ).toLocaleDateString("fr-FR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}