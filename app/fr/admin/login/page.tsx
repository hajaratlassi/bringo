"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Email ou mot de passe incorrect.");
        return;
      }

      router.push("/fr/dashboard");
      router.refresh();
    } catch {
      setError("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#17265f] text-cyan-400 text-3xl">
            🔒
          </div>

          <div className="text-cyan-500 font-bold tracking-[0.3em]">
            BRINGO
          </div>

          <h1 className="text-3xl font-black text-[#17265f] mt-2">
            Administration
          </h1>

          <p className="text-slate-500 mt-2">
            Connectez-vous à votre espace administrateur.
          </p>
        </div>

        <form
          onSubmit={login}
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl"
        >
          <label className="block text-sm font-bold text-[#17265f] mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@bringo.fr"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 mb-5 outline-none focus:border-cyan-400"
          />

          <label className="block text-sm font-bold text-[#17265f] mb-2">
            Mot de passe
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-cyan-400"
          />

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-[#17265f] py-4 font-bold text-white hover:bg-[#223574] disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter →"}
          </button>
        </form>
      </div>
    </main>
  );
}