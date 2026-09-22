"use client";

import { useEffect, useState } from "react";
import {
  Settings,
  User,
  Lock,
  Bell,
  Globe,
  Save,
  CheckCircle2,
} from "lucide-react";

type SettingsData = {
  name: string;
  email: string;
  language: string;
  notifications: boolean;
};

const DEFAULT_SETTINGS: SettingsData = {
  name: "BRINGO Admin",
  email: "admin@bringo.fr",
  language: "Français",
  notifications: true,
};

const STORAGE_KEY = "bringo-settings";
const COOKIE_KEY = "bringo-settings";

function loadSettings(): SettingsData {
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    if (local) {
      const parsed = JSON.parse(local);

      return {
        name: parsed.name ?? DEFAULT_SETTINGS.name,
        email: parsed.email ?? DEFAULT_SETTINGS.email,
        language: parsed.language ?? DEFAULT_SETTINGS.language,
        notifications:
          typeof parsed.notifications === "boolean"
            ? parsed.notifications
            : DEFAULT_SETTINGS.notifications,
      };
    }

    const cookies = document.cookie.split("; ");

    const cookie = cookies.find((item) =>
      item.startsWith(`${COOKIE_KEY}=`)
    );

    if (cookie) {
      const value = cookie.substring(COOKIE_KEY.length + 1);

      const parsed = JSON.parse(decodeURIComponent(value));

      return {
        name: parsed.name ?? DEFAULT_SETTINGS.name,
        email: parsed.email ?? DEFAULT_SETTINGS.email,
        language: parsed.language ?? DEFAULT_SETTINGS.language,
        notifications:
          typeof parsed.notifications === "boolean"
            ? parsed.notifications
            : DEFAULT_SETTINGS.notifications,
      };
    }
  } catch (error) {
    console.error("SETTINGS_LOAD_ERROR:", error);
  }

  return DEFAULT_SETTINGS;
}

function savePersistentSettings(settings: SettingsData) {
  try {
    const serialized = JSON.stringify(settings);

    localStorage.setItem(STORAGE_KEY, serialized);

    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(
      serialized
    )}; path=/; max-age=31536000; SameSite=Lax`;
  } catch (error) {
    console.error("SETTINGS_SAVE_ERROR:", error);
  }
}

export default function SettingsPage() {
  const [name, setName] = useState(DEFAULT_SETTINGS.name);
  const [email, setEmail] = useState(DEFAULT_SETTINGS.email);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);
  const [notifications, setNotifications] = useState(
    DEFAULT_SETTINGS.notifications
  );

  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const settings = loadSettings();

    setName(settings.name);
    setEmail(settings.email);
    setLanguage(settings.language);
    setNotifications(settings.notifications);

    setLoaded(true);
  }, []);

  function saveSettings() {
    const settings: SettingsData = {
      name: name.trim() || DEFAULT_SETTINGS.name,
      email: email.trim() || DEFAULT_SETTINGS.email,
      language,
      notifications,
    };

    savePersistentSettings(settings);

    setName(settings.name);
    setEmail(settings.email);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  if (!loaded) {
    return (
      <main className="min-h-screen bg-[#f7f9fc] px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#e1e7f0] bg-white p-10 text-center shadow-sm">
            <p className="font-semibold text-[#64789d]">
              Chargement des paramètres...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#192d68]">
              <Settings className="h-7 w-7 text-[#00c7e8]" />
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-[#00bddf]">
                BRINGO
              </p>

              <h1 className="text-3xl font-extrabold text-[#172b68]">
                Paramètres
              </h1>

              <p className="mt-1 text-[#64789d]">
                Gérez votre compte et les préférences du dashboard.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={saveSettings}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#172b68] px-6 py-3 font-bold text-white shadow-sm transition hover:bg-[#102153]"
          >
            <Save className="h-4 w-4" />
            Enregistrer
          </button>
        </div>

        {/* SUCCESS */}
        {saved && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
            <CheckCircle2 className="h-5 w-5" />

            <span className="font-semibold">
              Paramètres enregistrés avec succès.
            </span>
          </div>
        )}

        <div className="space-y-6">

          {/* ACCOUNT */}
          <section className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eefaff]">
                <User className="h-5 w-5 text-[#00bddf]" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-[#172b68]">
                  Compte administrateur
                </h2>

                <p className="text-sm text-[#64789d]">
                  Informations de votre compte BRINGO.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-[#172b68]">
                  Nom
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#dce4ef] bg-white px-4 py-3 text-[#172b68] outline-none transition focus:border-[#00bddf] focus:ring-2 focus:ring-[#00bddf]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#172b68]">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#dce4ef] bg-white px-4 py-3 text-[#172b68] outline-none transition focus:border-[#00bddf] focus:ring-2 focus:ring-[#00bddf]/10"
                />
              </div>

            </div>
          </section>

          {/* SECURITY */}
          <section className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1f3ff]">
                <Lock className="h-5 w-5 text-[#6157ff]" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-[#172b68]">
                  Sécurité
                </h2>

                <p className="text-sm text-[#64789d]">
                  Sécurisez votre espace administrateur.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f7f9fc] p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                  <p className="font-bold text-[#172b68]">
                    Mot de passe administrateur
                  </p>

                  <p className="mt-1 text-sm text-[#64789d]">
                    Le mot de passe est configuré dans les variables
                    d’environnement.
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  Protégé
                </span>

              </div>
            </div>
          </section>

          {/* NOTIFICATIONS */}
          <section className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
            <div className="mb-7 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff8e8]">
                <Bell className="h-5 w-5 text-[#ff9f00]" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-[#172b68]">
                  Notifications
                </h2>

                <p className="text-sm text-[#64789d]">
                  Gérez les notifications du dashboard.
                </p>
              </div>

            </div>

            <div className="flex items-center justify-between gap-5">

              <div>
                <p className="font-bold text-[#172b68]">
                  Notifications administrateur
                </p>

                <p className="mt-1 text-sm text-[#64789d]">
                  Recevoir les alertes importantes concernant BRINGO.
                </p>
              </div>

              <button
                type="button"
                aria-label="Activer ou désactiver les notifications"
                aria-pressed={notifications}
                onClick={() => setNotifications(!notifications)}
                className={`relative h-7 w-12 rounded-full transition ${
                  notifications
                    ? "bg-[#00bddf]"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    notifications
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>

            </div>
          </section>

          {/* LANGUAGE */}
          <section className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">

            <div className="mb-7 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eefaff]">
                <Globe className="h-5 w-5 text-[#00bddf]" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-[#172b68]">
                  Langue
                </h2>

                <p className="text-sm text-[#64789d]">
                  Choisissez la langue de votre interface.
                </p>
              </div>

            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl border border-[#dce4ef] bg-white px-4 py-3 text-[#172b68] outline-none focus:border-[#00bddf] md:max-w-md"
            >
              <option value="Français">
                Français
              </option>

              <option value="English">
                English
              </option>
            </select>

          </section>

          {/* SYSTEM STATUS */}
          <section className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">

            <h2 className="mb-6 text-xl font-extrabold text-[#172b68]">
              État du système
            </h2>

            <div className="grid gap-4 md:grid-cols-3">

              <Status
                label="Base de données"
                status="Opérationnelle"
              />

              <Status
                label="API Audit"
                status="Opérationnelle"
              />

              <Status
                label="CRM"
                status="Opérationnel"
              />

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

function Status({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#f7f9fc] p-4">

      <span className="text-sm font-semibold text-[#64789d]">
        {label}
      </span>

      <span className="flex items-center gap-2 text-sm font-bold text-green-600">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        {status}
      </span>

    </div>
  );
}