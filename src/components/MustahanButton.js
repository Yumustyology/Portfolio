import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// SVG text animation (uses CSS variables from the active palette)
const textAnimate = keyframes`
  0% { stroke-dasharray: 0 300; fill: transparent; }
  50% { stroke-dasharray: 300 0; fill: var(--accent-color); }
  100% { stroke-dasharray: 300 0; fill: var(--accent-deep); }
`;

const ButtonMain = styled.button`
  position: relative;
  background-color: var(--primary-bg);
  font-size: 1rem;
  width: 155px;
  height: 52px;
  border: 2px solid var(--accent-color);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;
  overflow: visible;
  padding: 0;
  transform: scale(0.8);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--secondary-bg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: -8px;
    bottom: -8px;
    border: 2px solid var(--accent-color);
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border-color: var(--accent-deep);
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  svg text {
    font-family: 'Brush Script MT', cursive;
    font-size: 28px;
    font-style: italic;
    stroke: var(--accent-color);
    stroke-width: 0.8px;
    fill: transparent;
    animation: ${textAnimate} 6s infinite alternate;
    dominant-baseline: middle;
    text-anchor: middle;
  }
`;

const MustahanButton = ({ onClick }) => {
  const textRef = useRef();
  
  useEffect(() => {
    if (textRef.current) {
      const length = textRef.current.getComputedTextLength();
      textRef.current.style.strokeDasharray = `${length} ${length}`;
    }
  }, []);
  
  return (
    <ButtonMain onClick={onClick}>
      <svg viewBox="0 0 155 52" preserveAspectRatio="xMidYMid meet">
        <text ref={textRef} x="50%" y="68%">
          Mustahan
        </text>
      </svg>
    </ButtonMain>
  );
};

export default MustahanButton;