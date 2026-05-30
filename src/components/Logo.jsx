import React from 'react';
import logoImg from '../assets/Logo.png';

/**
 * Reusable Logo Component
 * Renders the corporate Logo.png image.
 * Uses a CSS drop-shadow filter for dark backgrounds to ensure high contrast and legibility.
 *
 * @param {Object} props
 * @param {string} props.className - Additional classes for the logo container
 * @param {boolean} props.lightBg - True if rendered on a light background, false for a dark background
 */
export default function Logo({ className = "", lightBg = true }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="Sahasranam" 
        className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        style={{
          // Apply a premium soft glow/drop shadow on dark backgrounds so the dark blue gradient parts remain readable
          filter: lightBg 
            ? 'none' 
            : 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 6px rgba(56, 189, 248, 0.45))'
        }}
      />
    </div>
  );
}
