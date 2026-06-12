# PROJECT_STATE — projetchloe

> Mémoire persistante du projet. Mettre à jour à chaque jalon.

## 1. Identité du projet

- **Nom** : projetchloe — landing page portfolio de Chloé, étudiante en communication visuelle
- **Type** : landing page statique (1 page), vitrine de compétences + CV
- **Repo GitHub** : https://github.com/MisterSad/projetchloe
- **Déploiement** : Vercel (à connecter au repo via le dashboard — voir README)
- **Supabase** : aucun — pas de données, pas d'auth, pas de formulaire

## 2. Stack

- Next.js 16 (App Router, Turbopack) + TypeScript strict
- Tailwind CSS v4 (tokens dans `globals.css` : paper / ink / muted / accent / line)
- Motion (`motion/react`) pour les animations
- Polices : Fraunces (display) + Instrument Sans, auto-hébergées via `next/font`
- Aucune autre dépendance runtime — déviation « pas de Supabase » justifiée : site 100 % statique sans donnée utilisateur

## 3. Architecture

- `src/app/` : layout (fonts, metadata fr), page (assemblage), globals.css (design system, grain, marquee, reduced-motion)
- `src/components/` : Nav (progress bar scroll), Hero (reveal masqué ligne par ligne + parallaxe), Marquee, About (chiffres), Skills (disciplines + outils), Projects (cartes placeholder), Parcours (timeline animée + bouton CV), Footer (contact), Reveal (primitive scroll-reveal)
- `public/cv.pdf` : **placeholder à remplacer par le vrai CV**

## 4. Sécurité (threat model + mesures)

Surface minimale : site statique, zéro entrée utilisateur, zéro secret, zéro script tiers.

- Headers dans `next.config.ts` : CSP (`default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`), HSTS preload, nosniff, Referrer-Policy, Permissions-Policy, X-Frame-Options DENY, `poweredByHeader: false`
- **Trade-off documenté** : `script-src 'unsafe-inline'` requis par l'hydratation Next.js (pas de nonce car site statique ; migrer vers middleware+nonce si du contenu dynamique apparaît). `unsafe-eval` ajouté en dev uniquement.
- Liens externes : `rel="noopener noreferrer"`
- `npm audit` : 2 vulnérabilités **modérées** (postcss via Next.js lui-même, aucune version corrigée en aval au 2026-06-12) — sous le seuil bloquant, à re-vérifier à la prochaine session
- TODO : activer Dependabot + protection de branche `main` sur GitHub (droits admin requis)

## 5. Accessibilité & perf

- `prefers-reduced-motion` respecté (CSS global + `useReducedMotion` dans chaque composant animé)
- HTML sémantique, `lang="fr"`, aria-label sur la nav, marquee/déco en `aria-hidden`
- Page 100 % prerendered (statique), aucune image réseau (dégradés CSS), polices self-hosted

## 6. Contenu placeholder à personnaliser

- Prénom seul « Chloé » (ajouter le nom de famille)
- E-mail `chloe@exemple.fr` (Footer.tsx)
- Liens Behance/Instagram/LinkedIn génériques (Footer.tsx)
- Projets fictifs (Projects.tsx) — remplacer dégradés par vrais visuels via `next/image`
- Étapes du parcours (Parcours.tsx), chiffres (About.tsx)
- `public/cv.pdf`

## 7. Dernière session

- **2026-06-12** : création complète du projet. Scaffold Next.js + Tailwind, design system éditorial (papier/encre/orange), 9 composants, headers sécurité, vérification visuelle desktop + mobile (preview), quality gates passés (tsc, eslint, build statique). Reste : push GitHub (fait en fin de session), connexion Vercel par l'utilisateur, personnalisation du contenu.
