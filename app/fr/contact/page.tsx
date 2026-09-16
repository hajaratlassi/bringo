"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function FrenchContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const nameParts = name.split(/\s+/);

    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || firstName;

    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const need = String(formData.get("need") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          message: `Besoin : ${need}\n\n${message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Impossible d'envoyer votre demande."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-cyan-50/30 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="text-sm font-bold uppercase tracking-wide text-cyan-600">
                  Contactez-nous
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
                Construisons
                <br />
                <span className="text-cyan-500">
                  votre système.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Vous souhaitez améliorer votre acquisition client,
                développer votre visibilité ou automatiser votre croissance ?
                Parlons de votre projet.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                    <Mail size={20} className="text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 font-semibold text-blue-950">
                      contact@bringo.ma
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                    <Phone size={20} className="text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Téléphone
                    </p>
                    <p className="mt-1 font-semibold text-blue-950">
                      Disponible sur demande
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                    <MapPin size={20} className="text-cyan-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Localisation
                    </p>
                    <p className="mt-1 font-semibold text-blue-950">
                      Maroc & Europe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-500">
                      Parlons de votre projet
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold text-blue-950">
                      Dites-nous ce dont vous avez besoin.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Remplissez le formulaire et notre équipe reviendra vers
                      vous.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-blue-950"
                      >
                        Nom complet
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-blue-950"
                      >
                        Adresse email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="vous@entreprise.com"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-blue-950"
                      >
                        Entreprise
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="need"
                        className="mb-2 block text-sm font-semibold text-blue-950"
                      >
                        Votre besoin
                      </label>

                      <select
                        id="need"
                        name="need"
                        required
                        defaultValue=""
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-blue-950 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      >
                        <option value="" disabled>
                          Sélectionnez votre besoin
                        </option>
                        <option value="acquisition">
                          Acquisition client
                        </option>
                        <option value="ai-search">
                          Recherche IA / GEO
                        </option>
                        <option value="conversion">
                          Optimisation de la conversion
                        </option>
                        <option value="automation">
                          Automatisation
                        </option>
                        <option value="other">
                          Autre
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-blue-950"
                      >
                        Votre message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Parlez-nous de votre projet..."
                        className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                      />
                    </div>

                    {error && (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-950 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                      {!loading && <ArrowRight size={18} />}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-50">
                    <Check size={38} className="text-cyan-500" />
                  </div>

                  <h2 className="mt-7 text-3xl font-extrabold text-blue-950">
                    Merci pour votre message !
                  </h2>

                  <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                    Votre demande a bien été enregistrée. Notre équipe
                    reviendra vers vous prochainement.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-cyan-500"
                  >
                    Envoyer un autre message
                    <ArrowRight size={17} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Une question ?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Parlons de votre
            <br />
            <span className="text-cyan-400">
              prochaine étape.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Que vous cherchiez plus de visibilité, plus de leads ou un système
            d’acquisition plus automatisé, nous pouvons vous aider à définir
            la meilleure approche.
          </p>
        </div>
      </section>
    </main>
  );
}