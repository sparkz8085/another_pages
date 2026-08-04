import React from 'react';
import { motion } from 'framer-motion';

function BackgroundLayer({ className }) {
  return <div className={className} aria-hidden="true" />;
}

export function DarkVeil() {
  return (
    <div className="animated-bg animated-bg-dark" aria-hidden="true">
      <BackgroundLayer className="bg-orb bg-orb-one" />
      <BackgroundLayer className="bg-orb bg-orb-two" />
      <BackgroundLayer className="bg-grid" />
      <motion.div
        className="bg-sheen"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function PrismaticBurst() {
  return (
    <div className="animated-bg animated-bg-prismatic" aria-hidden="true">
      <BackgroundLayer className="bg-burst bg-burst-one" />
      <BackgroundLayer className="bg-burst bg-burst-two" />
      <motion.div
        className="bg-glow"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export function Hyperspeed() {
  return (
    <div className="animated-bg animated-bg-hyperspeed" aria-hidden="true">
      <BackgroundLayer className="bg-radial" />
      <motion.div
        className="bg-streaks"
        animate={{ backgroundPositionY: ['0%', '100%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}