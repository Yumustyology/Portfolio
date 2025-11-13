/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import { useState, useEffect } from 'react';
const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () =>
  // For the initial server render we must pick a deterministic default
  // that matches what the client will likely compute. Previously this
  // hook returned `true` on the server (assume reduced motion), while the
  // client frequently computes `false` (no-preference). That caused the
  // server to render the reduced-motion UI and the client to render the
  // animated UI, creating a hydration mismatch on Vercel.
  //
  // Use `false` on the server (assume no reduced motion) to match the
  // majority client-case and keep SSR and client markup consistent.
  isRenderingOnServer ? false : !window.matchMedia(QUERY).matches;
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = event => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addListener(listener);
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []);
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
