import fs from "node:fs";
import path from "node:path";
import { SITE, pages, pageIntrouvable } from "../src/data/pages.js";
import { profile } from "../src/data/profile.js";

// Référencement généré à partir de src/data/pages.js et src/data/profile.js :
// - remplace __SITE__ et les données structurées dans index.html ;
// - au build, écrit une page HTML par adresse (titre, description et adresse canonique déjà en place
//   pour Google et l'aperçu des liens partagés), 404.html, sitemap.xml et robots.txt.

const echapper = (texte) =>
  texte.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function donneesStructurees() {
  const adresse = { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" };
  const personne = {
    "@type": "Person",
    "@id": `${SITE}/#franck`,
    name: profile.nom,
    jobTitle: "Technicien supérieur en informatique",
    url: `${SITE}/`,
    image: SITE + profile.portrait,
    ...(profile.email && { email: `mailto:${profile.email}` }),
    worksFor: { "@type": "GovernmentOrganization", name: "Mairie de Port-Bouët" },
    address: adresse,
    knowsAbout: [
      "Support informatique",
      "Maintenance informatique",
      "Systèmes et réseaux",
      "Développement d'applications web",
      "Cybersécurité",
      "Intelligence artificielle",
      "Photographie événementielle",
    ],
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
  };
  const photographie = {
    "@type": "ProfessionalService",
    name: `${profile.nom} — Photographie événementielle`,
    description: "Photographe événementiel à Abidjan : mariages, anniversaires, cérémonies, portraits et reportages.",
    url: `${SITE}/photographie`,
    image: `${SITE}/images/partage.png`,
    founder: { "@id": `${SITE}/#franck` },
    address: adresse,
    areaServed: "Abidjan",
    ...(profile.whatsapp && { telephone: `+${profile.whatsapp}` }),
  };
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": [personne, photographie] }, null, 2);
  return `<script type="application/ld+json">\n${json.replace(/</g, "\\u003c")}\n    </script>`;
}

// Remplace le contenu d'une balise du <head> repérée par son attribut (name, property ou rel).
function remplacer(html, motif, valeur) {
  if (!motif.test(html)) throw new Error(`Balise introuvable dans index.html : ${motif}`);
  return html.replace(motif, (_, debut, fin) => debut + echapper(valeur) + fin);
}

function pageHtml(modele, { titre, description, chemin }) {
  let html = modele;
  html = remplacer(html, /(<title>)[^<]*(<\/title>)/, titre);
  html = remplacer(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, description);
  html = remplacer(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, titre);
  html = remplacer(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, description);
  if (chemin) {
    html = remplacer(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, SITE + chemin);
    html = remplacer(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, SITE + chemin);
  } else {
    // Page introuvable : pas d'adresse canonique, et Google ne l'indexe pas.
    html = html.replace(/\s*<link\s+rel="canonical"[^>]*>/, "").replace(/\s*<meta\s+property="og:url"[^>]*>/, "");
    html = html.replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
  }
  return html;
}

export default function seo() {
  let dossier;
  return {
    name: "portfolio-seo",
    configResolved(config) {
      dossier = path.resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html) {
      return html
        .replace("<!-- donnees-structurees -->", donneesStructurees())
        .replaceAll("__SITE__", SITE);
    },
    closeBundle() {
      const fichierModele = path.join(dossier, "index.html");
      if (!fs.existsSync(fichierModele)) return;
      const modele = fs.readFileSync(fichierModele, "utf8");
      const ecrire = (nom, contenu) => fs.writeFileSync(path.join(dossier, nom), contenu);

      // /informatique est servi par informatique.html (option cleanUrls de vercel.json).
      for (const page of pages) {
        ecrire(page.chemin === "/" ? "index.html" : `${page.chemin.slice(1)}.html`, pageHtml(modele, page));
      }
      ecrire("404.html", pageHtml(modele, pageIntrouvable));

      const date = new Date().toISOString().slice(0, 10);
      const urls = pages
        .map((p) => `  <url>\n    <loc>${SITE}${p.chemin}</loc>\n    <lastmod>${date}</lastmod>\n    <priority>${p.priorite}</priority>\n  </url>`)
        .join("\n");
      ecrire(
        "sitemap.xml",
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );
      ecrire("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
    },
  };
}
