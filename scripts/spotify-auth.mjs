import http from 'node:http';
import { URL } from 'node:url';
import { exec } from 'node:child_process';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://127.0.0.1:3000/callback';
const SCOPES = 'user-top-read';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    '\n  Missing environment variables. Run with:\n\n' +
      '  SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=xxx node scripts/spotify-auth.mjs\n'
  );
  process.exit(1);
}

const authUrl = new URL('https://accounts.spotify.com/authorize');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('scope', SCOPES);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:3000`);

  if (url.pathname !== '/callback') {
    res.writeHead(404);
    res.end();
    return;
  }

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error || !code) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Authorization failed</h1><p>Check your terminal.</p>');
    console.error('\n  Authorization denied:', error);
    process.exit(1);
  }

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await tokenResponse.json();

  if (!data.refresh_token) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Failed to get refresh token</h1><p>Check your terminal.</p>');
    console.error('\n  Token exchange failed:', data);
    process.exit(1);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
    '<h1>Done!</h1><p>Refresh token printed in your terminal. You can close this tab.</p>'
  );

  console.log('\n  ===================================');
  console.log('  Your Spotify credentials:');
  console.log('  ===================================\n');
  console.log(`  SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
  console.log(`  SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
  console.log(`  SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
  console.log('\n  Add these to .env.local and Vercel.\n');

  server.close();
  process.exit(0);
});

server.listen(3000, () => {
  console.log('\n  Opening Spotify authorization in your browser...\n');
  exec(`open "${authUrl.toString()}"`);
});
