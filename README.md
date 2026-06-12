# Chloé — Portfolio Communication Visuelle

Landing page portfolio : compétences, projets, parcours et CV. Next.js 16 + TypeScript + Tailwind CSS v4 + Motion + Lenis (smooth scroll). Thème clair multi-températures avec accent bleu électrique, typographie grotesque (Archivo), animations split-text et texte scrubbé au scroll. Site 100 % statique, sécurisé par des headers HTTP stricts, accessible (reduced-motion respecté) et sans aucun tracker.

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Déployer sur Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new) et se connecter avec le compte GitHub.
2. Importer le repo `MisterSad/projetchloe`.
3. Laisser les réglages par défaut (framework Next.js détecté automatiquement) et cliquer **Deploy**.
4. Chaque `git push` sur `main` redéploiera automatiquement le site ; chaque PR aura son URL de preview.

Aucune variable d'environnement n'est nécessaire.

## Personnaliser le contenu

| Quoi | Où |
|---|---|
| **E-mail** (nav + footer) | constante `EMAIL` dans `src/components/CopyEmail.tsx` |
| Réseaux sociaux | `src/components/Footer.tsx` |
| Texte du hero | `src/components/Hero.tsx` |
| Compétences et outils | `src/components/Services.tsx` |
| Phrase « conviction » | `src/components/Statement.tsx` |
| Projets (visuels + titres) | `src/components/Projects.tsx` + `public/projet-*.svg` |
| Atouts | `src/components/Atouts.tsx` |
| Parcours / formation | `src/components/Parcours.tsx` |
| **CV** | remplacer `public/cv.pdf` |
| Couleurs et police | `src/app/globals.css` et `src/app/layout.tsx` |
| Titre et description SEO | `src/app/layout.tsx` |

Les visuels de projets sont des affiches SVG générées sur mesure dans `public/`. Pour utiliser de vraies images : les déposer dans `public/` et mettre à jour le tableau `projets` de `Projects.tsx`.

## Notes techniques

- Headers de sécurité (CSP, HSTS, nosniff…) : `next.config.ts`
- État et décisions du projet : `PROJECT_STATE.md`
- Animations désactivées automatiquement si l'utilisateur préfère réduire les animations (`prefers-reduced-motion`)
