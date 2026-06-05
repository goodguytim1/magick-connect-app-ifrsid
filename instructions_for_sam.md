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

**Run in development (use these instead of `npm run ...` — more reliable):**
```bash
npx expo start           # Start dev server (scan QR code with Expo Go app)
npx expo start --tunnel  # Start with tunnel (better for physical devices on different networks)
npx expo start --web     # Open in browser
npx expo start --android # Open on Android emulator
npx expo start --ios     # Open on iOS simulator (Mac only)
```

**Build for production:**
```bash
# Web build — creates a dist/ folder
npx expo export -p web
```

---

### iOS Build for Apple (App Store)

You **cannot** build an iOS `.ipa` locally on Windows — Apple requires macOS. This project uses **EAS Build**, which compiles the app in Expo's cloud and gives you a file to submit to Apple.

**Step 1 — Log in to Expo:**
```bash
npx eas-cli login
```

**Step 2 — Build the iOS app in the cloud:**
```bash
npx eas-cli build --platform ios --profile production
```
This uploads your code to Expo's servers, builds it on a Mac in the cloud, and gives you a download link for the `.ipa` file when done. It takes ~10–20 minutes.

**Step 3 — Submit to the App Store:**
```bash
npx eas-cli submit --platform ios
```
This sends the `.ipa` directly to Apple's App Store Connect. You'll need your Apple Developer account credentials ready.

**Or do both in one command:**
```bash
npx eas-cli build --platform ios --profile production --auto-submit
```

> You need an [Apple Developer account](https://developer.apple.com) ($99/year) and to be logged into EAS (`npx eas-cli login`) before any of this works.

---

### Android Build

```bash
npx eas-cli build --platform android --profile production
```
Outputs an `.aab` file for the Google Play Store, also built in the cloud.

---

> Note: The `npm run dev` / `npm run web` etc. scripts use bash-style env vars (`EXPO_NO_TELEMETRY=1`) that don't work on Windows. Use the `npx expo` / `npx eas-cli` commands above instead.

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
