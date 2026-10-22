# Portfolio professionnel — Kouakou Kouadio Franck

Portfolio Informatique & Photographie, développé avec **React + Vite** et déployé sur **Vercel**.

## Lancer le projet en local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère le dossier dist/
npm run preview  # teste la version de production
```

## Structure

```text
public/            images, favicon, cv.pdf
src/components/    Navbar, Footer, ProjectCard, SkillCard, PhotoGallery, ContactLinks
src/pages/         Accueil, Informatique, Projets, Photographie, Apropos, Contact, NotFound
src/data/          profile.js, skills.js, projects.js, photos.js  ← contenus à modifier
vercel.json        évite les erreurs 404 au rechargement d'une page
```

Tous les contenus se modifient dans `src/data/`, sans toucher aux composants.

## Contenus à compléter avant la mise en ligne

- [ ] `src/data/profile.js` : e-mail, numéro WhatsApp, LinkedIn
- [ ] `public/cv.pdf` : CV à jour (sans adresse ni date de naissance)
- [ ] `public/images/portrait.jpg`, puis mettre à jour `profile.portrait`
- [ ] `src/data/skills.js` : niveau réel de chaque compétence (« Maîtrisé », « Utilisé en projet », « Notions »)
- [ ] `src/data/projects.js` : fiches des projets, captures dans `public/images/projets/`, statut exact
- [ ] `src/data/photos.js` : vos photos (WebP, 1600 px max, < 300 Ko) et miniatures (~600 px), prestations, zone, délais
- [ ] `src/pages/Apropos.jsx` : parcours réel (expériences, formation)
- [ ] `src/pages/Photographie.jsx` : texte de présentation de l'activité photo
- [x] `index.html` : adresse publique https://franck-kouakou.vercel.app et image de partage `public/images/partage.png`
- [ ] Supprimer les images d'exemple (`exemple-*.svg`, `portrait.svg`)

## Déploiement sur Vercel

1. Se connecter sur https://vercel.com avec le compte GitHub.
2. « Add New Project », choisir le dépôt `portfolio-pro`.
3. Vercel détecte Vite : commande `npm run build`, dossier de sortie `dist`.
4. Cliquer sur « Deploy ». Chaque `git push` redéploie ensuite le site automatiquement.

## Choix techniques

- Pas de formulaire de contact en V1 : aucun service d'envoi n'est connecté, et le site ne doit pas simuler un envoi. Les visiteurs écrivent par e-mail ou WhatsApp.
- Visionneuse photo avec l'élément natif `<dialog>` (Échap pour fermer, flèches pour naviguer), sans bibliothèque.
- Rubrique Photographie en thème sombre pour la distinguer de la partie informatique.
- Les liens de contact vides dans `profile.js` ne sont pas affichés.
