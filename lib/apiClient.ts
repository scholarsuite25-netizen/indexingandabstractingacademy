import { getStoredAccessCode } from './access';

/**
 * fetch() wrapper that attaches the stored course access code to every
 * API call, so the serverless functions can enforce the access gate.
 */
export async function apiFetch(
  path: string,
  init: RequestInit = {}
): Promise<Response> {
  const headers = new Headers(init.headers);
  const code = getStoredAccessCode();
  if (code) {
    headers.set('x-access-code', code);
  }
  return fetch(path, { ...init, headers });
}
