import React, { useEffect, useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { BarChart3, BookOpen, Home, LayoutGrid, Layers3, LogIn } from 'lucide-react';
import HomePage from '../pages/HomePage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import ResourcesPage from '../pages/ResourcesPage';
import SolutionsPage from '../pages/SolutionsPage';
import LoginPage from '../pages/LoginPage';
import Footer from '../components/Footer';
import Lightfall from '../components/Lightfall';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/features', label: 'Features', icon: LayoutGrid },
  { to: '/solutions', label: 'Solutions', icon: Layers3 },
  { to: '/pricing', label: 'Pricing', icon: BarChart3 },
  { to: '/resources', label: 'Resources', icon: BookOpen },
  { to: '/login', label: 'Login', icon: LogIn },
];

function useLightfallEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const desktopQuery = window.matchMedia('(min-width: 1025px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setEnabled(desktopQuery.matches && !motionQuery.matches);

    update();

    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', update);
    else desktopQuery.addListener(update);

    if (motionQuery.addEventListener) motionQuery.addEventListener('change', update);
    else motionQuery.addListener(update);

    return () => {
      if (desktopQuery.removeEventListener) desktopQuery.removeEventListener('change', update);
      else desktopQuery.removeListener(update);

      if (motionQuery.removeEventListener) motionQuery.removeEventListener('change', update);
      else motionQuery.removeListener(update);
    };
  }, []);

  return enabled;
}

function Shell() {
  const showLightfall = useLightfallEnabled();

  return (
    <div className="app-shell">
      {showLightfall ? (
        <div className="site-lightfall" aria-hidden="true">
          <Lightfall
            colors={['#A6C8FF', '#7C4DFF', '#FF9FFC']}
            backgroundColor="#08111f"
            speed={0.3}
            streakCount={1}
            streakWidth={0.9}
            streakLength={0.7}
            glow={0.8}
            density={0.45}
            twinkle={0.18}
            zoom={3.4}
            backgroundGlow={0.12}
            opacity={0.34}
            mouseInteraction={false}
            mouseStrength={0}
            mouseRadius={0.85}
            mouseDampening={0.18}
            mixBlendMode="screen"
            className="site-lightfall-canvas"
          />
        </div>
      ) : null}

      <div className="site-content">
        <header className="topbar glass-panel">
        <div>
          <span className="brand-mark">cryptoXneuron</span>
          <h1>Customer Intelligence</h1>
        </div>
        <nav aria-label="Main navigation" className="nav-links">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={to === '/'}
            >
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </header>

        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return <Shell />;
}