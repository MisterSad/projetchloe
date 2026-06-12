# Chloé — Portfolio Communication Visuelle

Landing page portfolio : compétences, projets, parcours et CV. Next.js 16 + TypeScript + Tailwind CSS v4 + Motion. Site 100 % statique, sécurisé par des headers HTTP stricts, accessible (reduced-motion respecté) et sans aucun tracker.

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
| E-mail et réseaux sociaux | `src/components/Footer.tsx` |
| Texte du hero | `src/components/Hero.tsx` |
| Phrase d'intro et chiffres | `src/components/About.tsx` |
| Compétences et outils | `src/components/Skills.tsx` |
| Projets (visuels + titres) | `src/components/Projects.tsx` |
| Parcours / formation | `src/components/Parcours.tsx` |
| **CV** | remplacer `public/cv.pdf` |
| Couleurs et polices | `src/app/globals.css` et `src/app/layout.tsx` |
| Titre et description SEO | `src/app/layout.tsx` |

Pour ajouter de vrais visuels de projets : déposer les images dans `public/` puis remplacer les dégradés de `Projects.tsx` par `<Image>` de `next/image`.

## Notes techniques

- Headers de sécurité (CSP, HSTS, nosniff…) : `next.config.ts`
- État et décisions du projet : `PROJECT_STATE.md`
- Animations désactivées automatiquement si l'utilisateur préfère réduire les animations (`prefers-reduced-motion`)
