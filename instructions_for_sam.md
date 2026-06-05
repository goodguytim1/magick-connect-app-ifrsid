# Magick Connect — Instructions for Sam

## What This App Is

**Magick Connect** is a couples/group activity card game app built with React Native and Expo. It has multiple themed card decks — conversation starters, intimacy questions, icebreakers, missions, and more. Users draw cards, save favorites, and get a daily card from their chosen deck.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React Native + Expo + TypeScript |
| Navigation | Expo Router (file-based) |
| Backend | Fastify (Node.js) + Drizzle ORM |
| Database | Neon PostgreSQL |
| Auth | Better Auth |
| Local Storage | AsyncStorage |
| Web PWA | Workbox service workers |

---

## Project Structure

```
magick-connect-app-ifrsid/
├── app/                    # All screens (Expo Router file-based routing)
│   ├── _layout.tsx         # Root layout — wraps everything in providers
│   └── (tabs)/             # Tab-based navigation screens
│       ├── (home)/         # Home / deck selection
│       ├── draw.tsx        # Draw a card
│       ├── daily.tsx       # Daily card
│       ├── favorites.tsx   # Saved favorites
│       └── settings.tsx    # App settings
├── components/             # Reusable UI components
├── contexts/               # React Context providers (Deck, Auth, Theme, Widget)
├── data/
│   └── decks.ts            # All card content — decks, questions, missions
├── utils/                  # Helper functions (API, storage, error logging)
├── assets/                 # Images, fonts, splash screens
├── backend/                # Fastify API server
│   └── src/
│       ├── index.ts        # Server entry point
│       └── db/             # Drizzle schema + migrations
└── constants/
    └── Colors.ts           # Color theme definitions
```

---

## Build Commands

### Frontend (React Native / Expo)

**Install dependencies first:**
```bash
npm install
```

**Run in development:**
```bash
npm run dev          # Start with tunnel (for physical device testing)
npm run android      # Start on Android emulator
npm run ios          # Start on iOS simulator
npm run web          # Start in browser
```

**Build for production:**
```bash
# Web build (creates a dist/ folder)
npm run build:web

# Android build (generates native Android project in android/ folder)
npm run build:android
```

> The web build runs `expo export -p web` then generates a PWA service worker with Workbox. The output lands in a `dist/` folder.

---

### Backend (Fastify API)

Navigate to the backend folder first:
```bash
cd backend
npm install
```

**Run in development:**
```bash
npm run dev          # Starts server with hot reload (tsx watch)
```

**Build for production (creates dist/ folder inside backend/):**
```bash
npm run build        # Bundles src/index.ts → backend/dist/index.js
```

**Start the production build:**
```bash
npm run start        # Runs backend/dist/index.js
```

**Database commands:**
```bash
npm run db:generate  # Generate Drizzle migration files
npm run db:migrate   # Run migrations against the database
npm run db:push      # Generate + migrate in one step
```

---

## Card Decks

All card content lives in `data/decks.ts`. The decks are:

| Deck | Description |
|------|-------------|
| Magick Mixer 🍹 | Social icebreaker games (21+) |
| Midnight Magick ❤️ | Intimacy questions (18+) |
| Spark Questions ⚡ | Deep conversation starters |
| Mirror Moments 🪞 | Self-reflection prompts |
| Playful Sparks 🎭 | Fun activities |
| Bond Builders 🤝 | Connection-strengthening activities |
| Adventure Sparks 🗺️ | Exciting challenges |
| Creative Charms 🎨 | Artistic prompts |
| Mirror Quests 🔮 | Personal growth missions |

---

## Key Config Files

| File | Purpose |
|------|---------|
| `app.json` | Expo app manifest (name, icon, splash, bundle IDs) |
| `eas.json` | EAS build profiles (development / production) |
| `tsconfig.json` | TypeScript config — use `@/` as a path alias for the root |
| `babel.config.js` | Babel config (module resolver, reanimated worklets) |
| `metro.config.js` | Metro bundler config |
| `workbox-config.js` | PWA service worker config for web builds |

---

## Tips

- The backend API URL is configured in `app.json` — look for the `extra` or `env` section.
- Favorites are stored locally on the device using AsyncStorage.
- Navigation uses Expo Router's file-based system — adding a file to `app/(tabs)/` automatically creates a new tab route.
- All theme colors are centralized in `constants/Colors.ts`.
