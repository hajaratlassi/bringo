import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d’utilisation",
  description:
    "Consultez les conditions d’utilisation du site et des services Bringo.",
};

export default function FrenchTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-cyan-50/30 py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-cyan-600">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Conditions d’utilisation
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-6xl">
            Conditions{" "}
            <span className="text-cyan-500">d’utilisation.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Retrouvez les conditions applicables à l’utilisation du site et
            des services proposés par Bringo.
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
                1. Objet
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Les présentes conditions d’utilisation définissent les règles
                applicables à l’utilisation du site internet Bringo et des
                informations qui y sont présentées.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                2. Accès au site
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Le site Bringo est accessible aux utilisateurs sous réserve de
                la disponibilité du service et du respect des présentes
                conditions.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Bringo peut modifier, suspendre ou interrompre temporairement
                tout ou partie du site pour des raisons techniques, de
                maintenance ou de sécurité.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                3. Utilisation du site
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                L’utilisateur s’engage à utiliser le site de manière légale,
                responsable et conforme aux présentes conditions.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Il est notamment interdit d’utiliser le site pour tenter
                d’obtenir un accès non autorisé à nos systèmes, perturber son
                fonctionnement ou porter atteinte aux droits de Bringo ou de
                tiers.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                4. Propriété intellectuelle
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Les contenus présents sur le site, notamment les textes,
                éléments graphiques, logos, images, interfaces et éléments de
                marque, peuvent être protégés par les règles applicables à la
                propriété intellectuelle.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Toute reproduction, modification, distribution ou utilisation
                non autorisée de ces éléments est interdite, sauf autorisation
                préalable de Bringo.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                5. Informations présentées
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Bringo s’efforce de fournir des informations utiles et à jour
                sur son site. Toutefois, certaines informations peuvent évoluer
                et ne constituent pas nécessairement une garantie de résultat.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                6. Services et projets
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Les informations présentées sur le site concernant les services
                Bringo sont fournies à titre informatif. Les conditions
                spécifiques applicables à un projet ou à une prestation peuvent
                faire l’objet d’un accord distinct entre Bringo et le client.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                7. Liens externes
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Le site peut contenir des liens vers des sites ou services
                externes. Bringo n’est pas responsable du contenu, de la
                disponibilité ou des pratiques de confidentialité de ces
                services externes.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                8. Limitation de responsabilité
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Dans la mesure permise par la réglementation applicable,
                Bringo ne saurait être tenu responsable des dommages résultant
                d’une indisponibilité temporaire du site, d’une erreur
                technique ou de l’utilisation des informations présentées sur
                le site.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                9. Modification des conditions
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Bringo peut mettre à jour les présentes conditions
                d’utilisation afin de tenir compte de l’évolution du site, de
                ses services ou des exigences applicables.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                La version publiée sur cette page est la version applicable à
                compter de sa date de mise à jour.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-extrabold text-blue-950">
                10. Contact
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Pour toute question concernant ces conditions d’utilisation,
                vous pouvez contacter l’équipe Bringo.
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