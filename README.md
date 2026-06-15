# Sunday Volleyball Stats Dashboard

A stats dashboard for a Sunday volleyball group at Supercamp Vanier (Montreal). Built with vanilla HTML, CSS, and JavaScript — no framework, no build step. Markup, styles, and render logic live in `index.html`; all session data lives in `data.js`, loaded as a plain script so the app still works opened directly over `file://`.

## What it tracks

- **Overview** — season progress, active streaks, attendance heatmap, fun facts
- **Leaderboard** — regulars ranked by attendance with medals and streak badges; sub leaderboard ranked by appearances
- **Chemistry** — per-player partner frequency, "never played together" list, top duos, and a "most connections" ranking
- **Team History** — every session's teams with player names, theme, and YouTube link
- **Schedule / Calendar** — full season schedule in list and calendar views for both Winter and Summer 2026

## How it works

All session data lives in a `WEEKS` array in `data.js`. Each entry contains the date, theme, and the four teams with every player, plus optional match `results` (with optional `s:[scoreA, scoreB]` scores). Everything else — attendance counts, streaks, sub counts, never-played pairs, W/L and point differentials — is computed from that array at page load via `computeStats()` / `computeWL()`. To add a new session, append one entry to `WEEKS` in `data.js`.

## Data model

```
WEEKS  →  computeStats()  →  ATT, STREAK, SUB_COUNTS, SUBS_SORTED
```

- `REGULARS` — list of `{n, g}` for the 24 winter regulars
- `SUMMER_REGULARS` — list of `{n, g}` for the 24 summer regulars
- `GM` — gender map for all players (regulars + subs)
- `THEMES` — week number → theme name and color
- `YT` — week number → YouTube video URL
- `WINTER_SCHED` / `SUMMER_SCHED` — schedule entries with status labels

## Features

- Light / dark mode (persisted in localStorage, respects system preference)
- Sticky nav with per-tab season switcher (Winter / Summer)
- Slide-in player profile drawer with attendance, streak, and top partners
- Clickable duo detail in Chemistry tab linking back to Team History
- Calendar view with volleyball session highlights

## Running it

Open `index.html` in any browser. No server required.
