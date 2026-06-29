# LNS Pay App

Vraie base applicative pour LNS Pay : admin, marchands, dashboard, checkout et integration Stripe preparee.

## Ce que contient cette base

- Application Next.js pour le site, l'admin, le dashboard marchand et le checkout.
- Schema Prisma pour les utilisateurs, marchands, paiements, reglages checkout, connexions providers et webhooks.
- Couche `PaymentProvider` pour cacher Stripe derriere LNS Pay et garder la possibilite d'ajouter un autre partenaire.
- Routes API preparees pour creer un PaymentIntent et recevoir les webhooks Stripe.
- Design LNS Pay sobre, moderne, inspire d'un PSP white-label.

## Ce qu'il faut faire avant de deployer

1. Installer les dependances avec `npm install`.
2. Copier `.env.example` vers `.env.local`.
3. Ajouter les cles Stripe test et l'URL PostgreSQL.
4. Lancer `npm run prisma:migrate`.
5. Lancer `npm run dev`.

## Etapes GitHub / Vercel

1. Envoyer ce dossier vers `https://github.com/menjoteliott31-arch/lns-pay-app.git`.
2. Dans Vercel, cliquer sur `Import Project`.
3. Choisir le depot GitHub `lns-pay-app`.
4. Ajouter les variables d'environnement.
5. Deployer.
