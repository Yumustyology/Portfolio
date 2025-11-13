import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  .highlight {
    /* reset default button styles when using a button element */
    display: inline-block;
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: var(--green-tint);
    padding: 0 4px;
    border-bottom: 1.5px dotted var(--accent-deep);
    cursor: pointer;
    border-radius: 2px;
    color: inherit;
    font: inherit;
  }

  /* Tooltip (appears on hover or keyboard focus) */
  .highlight::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 10px);
    background: var(--navy);
    color: var(--white);
    padding: 6px 8px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.18s ease, transform 0.18s ease;
    box-shadow: 0 6px 20px rgba(2,12,27,0.6);
    z-index: 20;
  }

  .highlight::before {
    /* small arrow */
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 4px);
    width: 8px;
    height: 8px;
    background: var(--navy);
    transform-origin: center;
    transform: translateX(-50%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.18s ease;
    z-index: 20;
  }

  .highlight:hover::after,
  .highlight:focus::after,
  .highlight:focus-visible::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
    pointer-events: auto;
  }

  .highlight:hover::before,
  .highlight:focus::before,
  .highlight:focus-visible::before {
    opacity: 1;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Yusuf Mustahan.</h2>;
  const three = (
    <h3 className="big-heading">
      I'm a <button
        type="button"
        className="highlight"
        data-tooltip="cutting across web, mobile, frontend, backend, blockchain and AI ML"
      >
        full-stack
      </button>{' '}
      developer.
    </h3>
  );
  const four = (
    <>
      <p>
        I build fast, accessible, and user-friendly applications. As a senior software engineer with
        six years of experience, I create fullstack and blockchain solutions, focusing on
        high-quality, maintainable code that solves real business problems.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="mailto:yumustyology@gmail.com">
      Get in touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
