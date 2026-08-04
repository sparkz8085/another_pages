import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, HeartPulse, Landmark, Megaphone, ShieldCheck, ShoppingBag, ShoppingCart, UsersRound } from 'lucide-react';
import { PrismaticBurst } from '../components/AnimatedBackgrounds';

const solutions = [
  { name: 'Retail', description: 'Track shopping behavior, basket preferences, and retention opportunities.', benefits: ['Loyalty segmentation', 'Promotion planning'], useCase: 'Merchandising', icon: ShoppingCart },
  { name: 'Healthcare', description: 'Personalize patient engagement and service programs responsibly.', benefits: ['Risk-based outreach', 'Patient profiling'], useCase: 'Clinical Ops', icon: HeartPulse },
  { name: 'Banking', description: 'Improve customer value analysis and targeted financial services.', benefits: ['Portfolio planning', 'Upsell detection'], useCase: 'Finance Growth', icon: Landmark },
  { name: 'Insurance', description: 'Reveal policyholder patterns and premium opportunities.', benefits: ['Retention workflows', 'Cross-sell prioritization'], useCase: 'Claims Intelligence', icon: ShieldCheck },
  { name: 'E-Commerce', description: 'Optimize campaigns using buying frequency and category affinity.', benefits: ['Cart recovery', 'Offer targeting'], useCase: 'Conversion Lift', icon: ShoppingBag },
  { name: 'Education', description: 'Identify learner segments and personalize student journeys.', benefits: ['Engagement scoring', 'Course personalization'], useCase: 'Academic Success', icon: GraduationCap },
  { name: 'Marketing', description: 'Align campaigns with high-value customer groups and channels.', benefits: ['Audience building', 'Creative planning'], useCase: 'Campaign Studio', icon: Megaphone },
  { name: 'Enterprise CRM', description: 'Unify customer intelligence across sales, success, and support.', benefits: ['Account scoring', 'Lifecycle automation'], useCase: 'Revenue OS', icon: UsersRound },
];

export default function SolutionsPage() {
  return (
    <section className="page-section page-with-bg">
      <PrismaticBurst />
      <div className="section-intro">
        <span className="badge">Industry Solutions</span>
        <h2>Operationalize customer categorization across every growth team.</h2>
        <p>Built to feel like a premium AI SaaS while staying adaptable to multiple business contexts and workflows.</p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <motion.article
            key={solution.name}
            className="solution-card glass-panel"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="solution-top">
              <span className="card-icon"><solution.icon size={18} strokeWidth={2} aria-hidden="true" /></span>
              <div>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
              </div>
            </div>
            <div className="solution-list">
              <h4>Benefits</h4>
              <ul>
                {solution.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="solution-list">
              <h4>Use Cases</h4>
              <p>{solution.useCase}</p>
            </div>
            <a href="https://cryptox-neuron-ai.onrender.com/" className="secondary-button full-width button-with-icon">
              <span>Explore {solution.name}</span>
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}