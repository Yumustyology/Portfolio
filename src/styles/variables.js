import { css } from 'styled-components';

const variables = css`
  :root {
   /* ========================================
     OPTION 1: CYBER PURPLE (default)
     Rich, energetic, modern (recommended)
     ======================================== */
   --dark-navy: #0f0520;
   --navy: #1a0b2e;
   --light-navy: #2d1b4e;
   --lightest-navy: #3e2a5f;
   --navy-shadow: rgba(26, 11, 46, 0.7);

   --dark-slate: #6b5b95;
   --slate: #9d8ec7;
   --light-slate: #b8a9d9;
   --lightest-slate: #e5dff5;
   --white: #f5f2ff;

   --green: #c77dff; /* vibrant purple accent */
   --green-tint: rgba(199, 125, 255, 0.10);

   /* ========================================
     OPTION 2: ELECTRIC CYAN (commented)
     Clean, tech-forward, professional
     ======================================== */
   /*
   --dark-navy: #0a1929;
   --navy: #0f2942;
   --light-navy: #1a3a52;
   --lightest-navy: #284b63;
   --navy-shadow: rgba(15, 41, 66, 0.7);

   --dark-slate: #4a6fa5;
   --slate: #7a9cc6;
   --light-slate: #a8c0d9;
   --lightest-slate: #d1e0f0;
   --white: #e8f4f8;

   --green: #00e5ff;
   --green-tint: rgba(0, 229, 255, 0.10);
   */

   /* ========================================
     OPTION 3: NEON EMERALD (commented)
     Bold, fresh, eye-catching
     ======================================== */
   /*
   --dark-navy: #0d1b2a;
   --navy: #1b263b;
   --light-navy: #2d3a52;
   --lightest-navy: #415a77;
   --navy-shadow: rgba(27, 38, 59, 0.7);

   --dark-slate: #5a7d9a;
   --slate: #8ba5bc;
   --light-slate: #b8ccd9;
   --lightest-slate: #d9e8f2;
   --white: #e9f5f9;

   --green: #00ff9f;
   --green-tint: rgba(0, 255, 159, 0.10);
   */

   /* ========================================
     OPTION 4: SUNSET CORAL (ACTIVE)
     Warm, inviting, energetic
     ======================================== */
   --dark-navy: #1a0f1f;
   --navy: #2b1a33;
   --light-navy: #3d2947;
   --lightest-navy: #4f3a5c;
   --navy-shadow: rgba(43, 26, 51, 0.7);

   --dark-slate: #7a5d8a;
   --slate: #a687b5;
   --light-slate: #c5afd1;
   --lightest-slate: #e3d8ec;
   --white: #f5f0f7;

   --green: #ff6b9d;
   --green-tint: rgba(255, 107, 157, 0.10);
  /* deeper accent variant for high-contrast lines and accents */
  --accent-deep: #ff4f80;

   /* ========================================
     OPTION 5: TOKYO NIGHT (commented)
     Deep, sophisticated, developer-favorite
     ======================================== */
   /*
   --dark-navy: #16161e;
   --navy: #1a1b26;
   --light-navy: #24283b;
   --lightest-navy: #414868;
   --navy-shadow: rgba(26, 27, 38, 0.7);

   --dark-slate: #565f89;
   --slate: #787c99;
   --light-slate: #a9b1d6;
   --lightest-slate: #c0caf5;
   --white: #e2e8f0;

   --green: #7dcfff;
   --green-tint: rgba(125, 207, 255, 0.10);
   */

   /* Friendly variable names */
   --primary-bg: var(--navy);
   --secondary-bg: var(--light-navy);
   --accent-color: var(--green);
   --text-color: var(--lightest-slate);

   --pink: #f57dff;
   --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
