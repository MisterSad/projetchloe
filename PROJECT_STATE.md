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
- Tailwind CSS v4 — tokens dans `globals.css` : 3 fonds (cold #e9ebf2 / grey #f4f4f3 / warm #faf6ee), ink #0f0f10, **bleu électrique #2b50ff**, grey-txt #94908a
- Motion (`motion/react`) pour les animations + **Lenis** (smooth scroll, option `anchors`)
- Police : **Archivo** (grotesque variable), auto-hébergée via `next/font` ; classe utilitaire `.display` (weight 800, tracking -0.04em, leading 0.92)
- Déviation « pas de Supabase » justifiée : site 100 % statique sans donnée utilisateur

## 3. Architecture & direction artistique

**Refonte 2026-06-12** : thème inspiré de l'analyse UI/UX de juanmora.co (Webflow + GSAP SplitText/ScrollTrigger + Lenis + WebGL) — patterns réimplémentés en code original Motion/Lenis, thème clair multi-températures + bleu électrique, typo grotesque lourde très serrée.

- `src/app/` : layout (Archivo, SmoothScroll, metadata fr), page, globals.css
- `src/components/` :
  - `SmoothScroll` — Lenis (désactivé si reduced-motion)
  - `Nav` — fixe, blur au scroll, e-mail + bouton copier
  - `Hero` — nom géant en split-chars (masque + rotation), halo bleu qui suit la souris (springs), mots-pilules interactifs dans l'intro
  - `Services` — « Je peux vous aider sur : » 4 lignes numérotées + boîte à outils
  - `Statement` — phrase qui s'allume mot à mot au scroll (scrub façon GSAP, via useScroll/useTransform)
  - `Projects` — 3 affiches **SVG originales créées sur mesure** (`public/projet-*.svg`)
  - `Atouts` — 4 raisons de travailler avec elle
  - `Parcours` — timeline (ligne qui se dessine) + bouton CV
  - `Footer` — bleu électrique, CTA géant en line-reveal, copier l'e-mail, crédits
  - `Reveal`, `CopyEmail` — primitives partagées
- `public/cv.pdf` : **placeholder à remplacer par le vrai CV**

**Piège résolu** : ne jamais mettre `whileInView` sur l'élément translaté hors d'un parent `overflow-hidden` — l'IntersectionObserver ne le voit jamais (élément clippé). Observer le masque parent avec `useInView` et déclencher `animate` (voir `Footer.tsx > LineReveal`).

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
- E-mail `chloe@exemple.fr` (constante `EMAIL` dans CopyEmail.tsx)
- Liens Behance/Instagram/LinkedIn génériques (Footer.tsx)
- Projets fictifs (Projects.tsx) — affiches SVG générées, remplaçables par de vrais visuels
- Étapes du parcours (Parcours.tsx), textes Services/Atouts/Statement
- `public/cv.pdf`

## 7. Dernière session

- **2026-06-12 (matin)** : création du projet v1 (thème papier/orange/Fraunces), quality gates passés.
- **2026-06-12 (après-midi)** : refonte complète du thème d'après l'analyse de juanmora.co (voir section 3). Ajout de Lenis, passage à Archivo, création de 3 affiches SVG originales, nouveau découpage des sections (Services / Statement / Atouts). Quality gates re-passés. **Bloquant : push GitHub impossible — aucun identifiant sur la machine. `gh` installé via brew, l'utilisateur doit lancer `gh auth login` puis `git push -u origin main`.** Vercel à connecter ensuite.
