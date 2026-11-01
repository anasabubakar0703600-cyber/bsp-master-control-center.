# BSP MASTER CONTROL CENTER — Audio Library MVP

Private owner dashboard for BSP audio lessons and WhatsApp voice-note exports.

## Features
- Supabase email/password authentication
- Private audio storage and metadata
- Browser microphone recording and preview
- Upload saved WhatsApp audio files
- Responsive Hausa-first green and white interface

## Deploy
Use Vercel with the Next.js framework. Add environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in Vercel. Never add a Supabase service-role or secret key to this browser application.

## Local development
Requires Node.js 20 or later: npm install, then npm run dev.

WhatsApp voice notes must first be saved/exported to the device, then uploaded here.