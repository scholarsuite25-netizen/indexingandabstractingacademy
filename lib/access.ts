// Shared access-code gate for LIS 814 course materials.
//
// IMPORTANT: this is a *classroom access gate* (a shared code handed to
// enrolled students), not real authentication. The code ships inside the
// client bundle, so a determined visitor can still read the source. It
// keeps casual/ungated visitors out and stops anonymous abuse of the
// paid AI endpoints, but it must not be relied on for anything
// confidential.

export const ACCESS_CODE = 'LIS814';
export const ACCESS_STORAGE_KEY = 'indexmaster_access_code';

/** Case-insensitive, whitespace-tolerant check. */
export function isValidAccessCode(value: unknown): boolean {
  return (
    typeof value === 'string' &&
    value.trim().toUpperCase() === ACCESS_CODE
  );
}

/** Read the code the visitor entered earlier (browser only). */
export function getStoredAccessCode(): string | null {
  try {
    return localStorage.getItem(ACCESS_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Persist the entered code so the gate is only shown once per device. */
export function storeAccessCode(code: string): void {
  try {
    localStorage.setItem(ACCESS_STORAGE_KEY, code.trim());
  } catch {
    /* ignore */
  }
}

/** Server-side: validate the x-access-code header on API requests. */
export function hasValidAccessCode(
  headers: Record<string, unknown>
): boolean {
  const raw = headers['x-access-code'];
  const value = Array.isArray(raw) ? raw[0] : raw;
  return isValidAccessCode(value);
}
