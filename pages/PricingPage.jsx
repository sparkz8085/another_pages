import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Check, Rocket, Sparkles } from 'lucide-react';
import { Hyperspeed } from '../components/AnimatedBackgrounds';

const plans = [
  {
    name: 'Starter',
    price: '₹0/month',
    features: ['Basic Analytics', 'Demo Dataset', 'Community Support'],
    cta: 'Start for Free',
    icon: Sparkles,
  },
  {
    name: 'Professional',
    price: '₹999/month',
    features: ['Unlimited Customers', 'AI Predictions', 'Reports', 'API Access'],
    featured: true,
    cta: 'Start Professional',
    icon: Rocket,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    features: ['Dedicated AI Models', 'Custom Integrations', 'Priority Support', 'Team Management'],
    cta: 'Contact Sales',
    icon: Building2,
  },
];

export default function PricingPage() {
  return (
    <section className="page-section page-with-bg pricing-page">
      <Hyperspeed />
      <div className="section-intro">
        <span className="badge">Pricing</span>
        <h2>Flexible plans for modern teams scaling customer intelligence.</h2>
        <p>Choose the right plan for your growth stage with a polished, conversion-friendly layout.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            className={`pricing-card glass-panel ${plan.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="pricing-card-top">
              <span className="card-icon"><plan.icon size={18} strokeWidth={2} aria-hidden="true" /></span>
              {plan.featured && <span className="featured-tag">Most Popular</span>}
            </div>
            <h3>{plan.name}</h3>
            <div className="plan-price">{plan.price}</div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature} className="feature-list-item">
                  <Check size={16} strokeWidth={2} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="https://cryptox-neuron-ai.onrender.com/" className={plan.featured ? 'primary-button full-width button-with-icon' : 'secondary-button full-width button-with-icon'}>
              <span>{plan.cta}</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
