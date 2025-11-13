import React, { useEffect, useRef } from 'react';
// removed useStaticQuery/graphql: using hardcoded jobsData instead
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledExperience = styled.section`
  max-width: 900px;

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 20px;
  }

  .item {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 20px;
    align-items: start;

    @media (max-width: 700px) {
      grid-template-columns: 90px 1fr;
    }
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
    text-align: right;
  }

  .card {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.03);
    padding: 20px 18px 12px; /* pt ~20px */
    border-radius: 6px;
  }

  h3 {
    margin: 0 0 6px 0;
    font-size: var(--fz-lg);
  }

  .company-link {
    color: var(--green);
    margin-left: 6px;
    font-weight: 600;
  }

  .tags {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tag {
    background: rgba(255,255,255,0.04);
    color: var(--green);
    padding: 0 12px; /* horizontal padding only; use fixed height to vertically center */
    height: 30px;
    border-radius: 999px;
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    line-height: 30px; /* match height for robust vertical centering */
    vertical-align: middle;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: rgba(0,0,0,0.08) 0 1px 0 inset;
    transition: transform 120ms ease-out; /* small scale on hover for snappiness */
    cursor: default; /* not interactive pointer */
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding-top: 5px; /* optical alignment */
  }

  .tag:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100,255,218,0.06);
  }


  .resume-cta {
    ${({ theme }) => theme.mixins.smallButton};
    margin-top: 28px;
  }
`;

const Jobs = () => {
  // Hardcoded job entries (first-person, concise highlights).
  // These replace the markdown-driven data for a simple, self-contained component.
  const jobsData = [
    {
      node: {
        frontmatter: {
          title: 'Frontend Engineer & SDK Developer',
          company: 'CDIAL.AI (Indigenius AI), Lagos, Nigeria',
          range: 'Aug 2024 - Present',
          url: 'https://indigenius.ai',
          tags: ['React', 'TypeScript', 'SWR', 'SDK'],
        },
        html:
          '<p>CDIAL.AI is focused on digitizing indigenous African languages and building no-code voice AI agents across channels.</p>' +
          '<ul>' +
          '<li>Led development of interfaces using React and TypeScript, integrating conversational voice agents into the Agent Pro web app.</li>' +
          '<li>Implemented SWR-based real-time data fetching to keep the UI responsive and up to date.</li>' +
          '<li>Built and published the Agent Pro SDK (npm & CDN) to make integration straightforward for client platforms.</li>' +
          '<li>Designed a CRM workflow to automate lead and task management for AI agents.</li>' +
          '</ul>',
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Fullstack Web Application Developer',
          company: 'Walkmetru, United Kingdom',
          range: 'Sep 2023 - Jul 2024',
          url: 'https://walkmetru.com',
          tags: ['Next.js', 'Firebase', 'Stripe', 'AI'],
        },
        html:
          '<p>Walkmetru is a learning platform that enables live classes, bookings and collaboration for instructors and students.</p>' +
          '<ul>' +
          '<li>Built the frontend with Next.js, focusing on performance and an optimized UX.</li>' +
          '<li>Integrated DALL·E and GPT-based helpers to improve content creation for instructors.</li>' +
          '<li>Integrated Stripe (plus Apple & Google Pay) to streamline payments and checkout flows.</li>' +
          '<li>Implemented real-time chat and notifications with Firebase to boost engagement.</li>' +
          '</ul>',
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Backend Developer',
          company: 'Circlein (Pluno), London',
          range: 'Nov 2021 - Jun 2022',
          url: 'https://pluno.io',
          tags: ['Next.js', 'web3.js', 'Firebase', 'WalletConnect'],
        },
        html:
          '<p>Pluno ( Circlein ) is a 3D workspace for design and collaboration; I worked across frontend and backend features.</p>' +
          '<ul>' +
          '<li>Built the landing page and dashboard, collaborating with a three.js engineer to integrate 3D experiences.</li>' +
          '<li>Implemented the frontend with Next.js and optimized performance and resource rendering.</li>' +
          '<li>Integrated Web3 (web3.js) and WalletConnect to enable user wallet connections and NFT workflows.</li>' +
          '<li>Wrote JavaScript utilities for uploading and rendering 2D/3D assets used by the product.</li>' +
          '</ul>',
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Mobile Application Developer',
          company: 'Aibanc, Nigeria',
          range: 'Nov 2020 - Oct 2021',
          url: 'https://aibanc.co',
          tags: ['React Native', 'Okra', 'Apollo', 'Paystack'],
        },
        html:
          '<p>Aibanc is a fintech loan app that provided credit limits and BVN verification for borrowers.</p>' +
          '<ul>' +
          '<li>Contributed across the project lifecycle and helped shape the app architecture for scalability.</li>' +
          '<li>Built the frontend using React Native and TypeScript to improve user experience and performance.</li>' +
          '<li>Integrated the Okra SDK to enable BVN verification and credit limit generation.</li>' +
          '<li>Assisted with deployment to the App Store and Google Play and ongoing maintenance post-launch.</li>' +
          '</ul>',
      },
    },
  ];
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Hover / focus animations for skill tags using anime.js
  useEffect(() => {
    if (prefersReducedMotion) { return undefined; }
    const root = revealContainer.current;
    if (!root) { return undefined; }

    const rootStyles = getComputedStyle(document.documentElement);
    const green = (rootStyles.getPropertyValue('--green') || '#64ffda').trim();
    const hoverBg = 'rgba(100,255,218,0.06)';
    const hoverBorder = green;

    const tags = Array.from(root.querySelectorAll('.tag'));
    const listeners = [];

    tags.forEach(tag => {
      const onEnter = () => {
        anime.remove(tag);
        anime({
          targets: tag,
          backgroundColor: hoverBg,
          borderColor: hoverBorder,
          duration: 300,
          easing: 'easeOutQuad',
        });
      };

      const onLeave = () => {
        anime.remove(tag);
        anime({
          targets: tag,
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderColor: 'rgba(255,255,255,0.04)',
          duration: 300,
          easing: 'easeOutQuad',
        });
      };

      tag.addEventListener('mouseenter', onEnter);
      tag.addEventListener('mouseleave', onLeave);

      listeners.push({ tag, onEnter, onLeave });
    });

    return () => {
      listeners.forEach(({ tag, onEnter, onLeave }) => {
        tag.removeEventListener('mouseenter', onEnter);
        tag.removeEventListener('mouseleave', onLeave);
        anime.remove(tag);
      });
    };
  }, [revealContainer, prefersReducedMotion]);

  return (
    <StyledExperience id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="timeline">
        {jobsData.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, company, range, url, tags } = frontmatter;

          return (
            <div className="item" key={i}>
              <div className="date">{range}</div>
              <div className="card">
                <h3>
                  {title}
                  {url && (
                    <a href={url} className="company-link" target="_blank" rel="noopener noreferrer">
                      &nbsp;↗ {company}
                    </a>
                  )}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                {tags && tags.length > 0 && (
                  <div className="tags">
                    {tags.map((t, idx) => (
                      <div className="tag" key={idx}>
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <a className="resume-cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        View Full Résumé ↗
      </a>
    </StyledExperience>
  );
};

export default Jobs;
