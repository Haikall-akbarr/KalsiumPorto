# Development Guidelines

## Build Commands
*   **Run local dev server**: `npm run dev`
*   **Compile production build**: `npm run build`
*   **Start production server**: `npm run start`
*   **Run linter & TypeScript check**: `npm run lint`

## Environment Setup
Copy `.env.example` to `.env.local` and fill in the required keys:
*   Supabase URL & Anon Public Key (for contact submissions & projects list)
*   Spotify client credentials & refresh token (for live "Now Playing" bento card)

## Supabase Database Setup
Execute the queries in `supabase_schema.sql` inside the Supabase SQL editor to create:
1.  `messages` (stores contact form inputs)
2.  `projects` (stores portfolio project logs with GitHub URLs, live links, and image paths)
