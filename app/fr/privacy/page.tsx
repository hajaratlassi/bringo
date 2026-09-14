import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez comment Bringo collecte, utilise et protège vos données personnelles.",
};

export default function FrenchPrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-cyan-50/30 py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-cyan-600">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Confidentialité
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-6xl">
            Politique de{" "}
            <span className="text-cyan-500">confidentialité.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Votre confidentialité est importante pour nous. Cette politique
            explique comment Bringo collecte, utilise et protège vos
            informations.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="space-y-12">
            {/* 1 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                1. Introduction
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Bringo accorde une grande importance à la protection de vos
                données personnelles. Cette politique décrit les informations
                que nous pouvons collecter lorsque vous utilisez notre site
                internet ou lorsque vous nous contactez.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                2. Données que nous pouvons collecter
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Selon votre interaction avec notre site, nous pouvons
                collecter certaines informations, notamment :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                <li>Votre nom et prénom.</li>
                <li>Votre adresse e-mail.</li>
                <li>Le nom de votre entreprise.</li>
                <li>Les informations que vous fournissez dans un formulaire.</li>
                <li>
                  Les informations techniques liées à votre navigation sur le
                  site.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                3. Utilisation des informations
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Les informations collectées peuvent être utilisées afin de :
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                <li>Répondre à vos demandes.</li>
                <li>Vous contacter concernant votre projet.</li>
                <li>Améliorer notre site et nos services.</li>
                <li>Analyser les performances de notre site.</li>
                <li>Améliorer nos systèmes d’acquisition et de conversion.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                4. Protection des données
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Nous mettons en œuvre des mesures raisonnables pour protéger
                les informations qui nous sont transmises contre l’accès,
                l’utilisation, la modification ou la divulgation non
                autorisée.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                5. Partage des informations
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Bringo ne vend pas vos données personnelles. Certaines
                informations peuvent toutefois être traitées par des
                prestataires techniques nécessaires au fonctionnement du site
                ou de nos services.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                6. Cookies
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Notre site peut utiliser des cookies ou technologies
                similaires afin d'assurer son fonctionnement, mesurer son
                audience et améliorer l'expérience utilisateur.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                7. Vos droits
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Selon la réglementation applicable, vous pouvez disposer de
                droits concernant vos données personnelles, notamment le droit
                d'accès, de rectification, de suppression ou d'opposition à
                certains traitements.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                8. Contact
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Pour toute question concernant cette politique ou le traitement
                de vos données personnelles, vous pouvez contacter l'équipe
                Bringo via notre page de contact.
              </p>

              <a
                href="/fr/contact"
                className="mt-5 inline-flex items-center rounded-lg bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-900"
              >
                Nous contacter →
              </a>
            </section>

            {/* LAST UPDATE */}
            <div className="border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-400">
                Dernière mise à jour : septembre 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}