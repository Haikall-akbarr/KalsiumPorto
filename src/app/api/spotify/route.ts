import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID || "";
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || "";
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || "";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });

  return response.json();
}

export async function GET() {
  try {
    if (!client_id || !client_secret || !refresh_token) {
      // Graceful fallback to prevent client errors when environment variables are not set yet
      return NextResponse.json({
        isPlaying: false,
        title: "Senja Teduh Menanti",
        artist: "Maliq & D'Essentials",
        albumCoverUrl: "",
        songUrl: "https://open.spotify.com",
      });
    }

    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ 
        isPlaying: false, 
        title: "Senja Teduh Menanti", 
        artist: "Maliq & D'Essentials",
        albumCoverUrl: "",
        songUrl: "https://open.spotify.com"
      });
    }

    const song = await response.json();
    
    if (!song || song.item === null) {
      return NextResponse.json({ 
        isPlaying: false, 
        title: "Senja Teduh Menanti", 
        artist: "Maliq & D'Essentials",
        albumCoverUrl: "",
        songUrl: "https://open.spotify.com"
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(", ");
    const albumCoverUrl = song.item.album.images[0]?.url || "";
    const songUrl = song.item.external_urls.spotify;
    const progressMs = song.progress_ms;
    const durationMs = song.item.duration_ms;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      albumCoverUrl,
      songUrl,
      progressMs,
      durationMs,
    });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json({
      isPlaying: false,
      title: "Senja Teduh Menanti",
      artist: "Maliq & D'Essentials",
      albumCoverUrl: "",
      songUrl: "https://open.spotify.com",
    });
  }
}
