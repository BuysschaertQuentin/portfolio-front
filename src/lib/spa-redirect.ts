const BASE_PATH = "/portfolio-front";

/**
 * Restore the original route after a GitHub Pages 404 → index.html redirect.
 *
 * GitHub Pages serves 404.html for unknown paths. Our 404.html encodes
 * the requested path into a `?route=` query param and redirects here.
 * This function reads that param, validates it, and restores the URL
 * via `history.replaceState` so React Router sees the correct path.
 *
 * Must be called synchronously **before** React renders, because
 * BrowserRouter reads `window.location` on mount.
 */
export const restoreSpaRoute = (): void => {
  const params = new URLSearchParams(window.location.search);
  const encodedRoute = params.get("route");

  if (!encodedRoute) return;

  const decoded = decodeURIComponent(encodedRoute);

  // Security: only accept relative paths starting with "/" and
  // block protocol-relative URLs ("//evil.com") or scheme injection.
  const isValid =
    decoded.startsWith("/") &&
    !decoded.startsWith("//") &&
    !/^\/[a-z]+:/i.test(decoded);

  if (!isValid) return;

  window.history.replaceState(null, "", BASE_PATH + decoded);
};
