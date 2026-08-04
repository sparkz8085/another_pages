import React from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import ResourcesPage from '../pages/ResourcesPage';
import SolutionsPage from '../pages/SolutionsPage';
import LoginPage from '../pages/LoginPage';

const navItems = [
  ['/', 'Home'],
  ['/features', 'Features'],
  ['/solutions', 'Solutions'],
  ['/pricing', 'Pricing'],
  ['/resources', 'Resources'],
  ['/login', 'Login'],
];

function Shell() {
  return (
    <div className="app-shell">
      <header className="topbar glass-panel">
        <div>
          <span className="brand-mark">ANOTHER</span>
          <h1>Customer Intelligence</h1>
        </div>
        <nav aria-label="Main navigation" className="nav-links">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={to === '/'}
            >
              {label}
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
    </div>
  );
}

export default function App() {
  return <Shell />;
}