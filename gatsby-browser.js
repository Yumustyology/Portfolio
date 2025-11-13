/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Small runtime helpers to avoid serving a stale app shell from a previously
// installed service worker. On some deployments (or after updates) an older
// cached shell can be served which may not include current styled-component
// CSS or class names — resulting in unstyled or mis-styled content (eg.
// nav links stacking vertically). Unregister any existing service workers on
// first client render to ensure users get the latest assets. This is a
// defensive, short-term fix; for long-term stability consider removing
// `gatsby-plugin-offline` or implementing a proper SW update UX.

export const onInitialClientRender = () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    // Unregister all service workers (best-effort). This prevents a stale
    // cached shell from being used on first visit after a deploy.
    try {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => {
          try {
            reg.unregister();
          } catch (e) {
            // ignore individual unregister errors
          }
        });
      });
    } catch (err) {
      // ignore
    }
  }
};

// When the offline plugin detects a new service worker (new content), force
// a reload so visitors see the latest build. This runs when the plugin's
// service worker update lifecycle signals a ready update.
export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== 'undefined') {
    // Force a reload to pick up the new assets.
    window.location.reload(true);
  }
};
