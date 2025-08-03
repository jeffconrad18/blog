import type { APIRoute } from 'astro';

// Der GitHub-Token wird als Environment-Variable auf dem Server konfiguriert
// und nicht im Client-seitigen Code verwendet
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const REPO_OWNER = 'jeffconrad18';
const REPO_NAME = 'blog';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Ungültige E-Mail-Adresse' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // GitHub API aufrufen, um den Repository-Dispatch-Event zu triggern
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'newsletter-signup',
          client_payload: { email }
        })
      }
    );

    if (response.ok || response.status === 204) {
      return new Response(
        JSON.stringify({ success: true, message: 'Anmeldung erfolgreich!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      console.error('GitHub API Fehler:', response.status, await response.text());
      return new Response(
        JSON.stringify({ success: false, message: 'Fehler bei der Anmeldung' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Server-Fehler:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Server-Fehler' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
