const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtUl3L7gMMAND5LSV0OM2i6LO_ZHM-CcvCYhENfZaiHxnciNPa_TE36DZg2NF63Czc/exec';

function sendJson(res, statusCode, payload) {
  res.status(statusCode).json(payload);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  try {
    const { email, apiKey } = req.body || {};

    const upstreamResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, apiKey }),
    });

    const rawBody = await upstreamResponse.text();
    let parsedBody = rawBody;

    try {
      parsedBody = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      parsedBody = rawBody;
    }

    const message = typeof parsedBody === 'string'
      ? parsedBody
      : parsedBody?.message || parsedBody?.error || parsedBody?.status || '';

    const isGooglePageNotFound =
      String(message).includes('Page not found') ||
      String(message).includes('unable to open the file at present') ||
      String(message).includes('docs.google.com');

    if (upstreamResponse.ok) {
      return sendJson(res, 200, {
        message: message || 'Subscription successful.',
      });
    }

    if (isGooglePageNotFound) {
      return sendJson(res, 502, {
        error: 'Subscription service is not available right now. Please check the Google Apps Script Web App deployment URL.',
      });
    }

    if (String(message).includes('Email already exists')) {
      return sendJson(res, 409, { error: 'Email already exists' });
    }

    const fallbackMessage = message || `Subscription failed with status ${upstreamResponse.status}.`;
    return sendJson(res, upstreamResponse.status, { error: fallbackMessage });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Subscription failed.';
    return sendJson(res, 502, { error: message });
  }
}