import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Cloud, FileDown, ShieldCheck, Sparkles, UsersRound, BriefcaseBusiness } from 'lucide-react';
import { PrismaticBurst } from '../components/AnimatedBackgrounds';

const features = [
  { title: 'AI Categorization', description: 'Convert raw customer data into meaningful, revenue-focused clusters.', number: '01', icon: Sparkles },
  { title: 'Dashboard Analytics', description: 'Interactive visual panels for tracking performance and behavior.', number: '02', icon: BarChart3 },
  { title: 'Machine Learning Models', description: 'Reliable inference flow with clear prediction states.', number: '03', icon: BrainCircuit },
  { title: 'Business Intelligence', description: 'See the commercial impact of customer behavior at a glance.', number: '04', icon: BriefcaseBusiness },
  { title: 'Customer Insights', description: 'Understand spending, loyalty, and channel preferences.', number: '05', icon: UsersRound },
  { title: 'Security', description: 'Preserve data integrity and a trust-first user experience.', number: '06', icon: ShieldCheck },
  { title: 'Cloud Storage', description: 'Ready for scalable cloud workflows and persistence.', number: '07', icon: Cloud },
  { title: 'Export Reports', description: 'Package insights for teams and stakeholders in one click.', number: '08', icon: FileDown },
];

export default function FeaturesPage() {
  return (
    <section className="page-section page-with-bg">
      <PrismaticBurst />
      <div className="section-intro">
        <span className="badge">Platform Capabilities</span>
        <h2>Feature-rich AI operations for modern customer intelligence.</h2>
        <p>Every capability is designed as a polished SaaS experience with elegant motion and enterprise-grade clarity.</p>
      </div>
      <div className="feature-detail-grid">
        {features.map((feature, position) => (
          <motion.article
            key={feature.title}
            className="detail-card glass-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: position * 0.05 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="detail-card-top">
              <span className="card-icon"><feature.icon size={18} strokeWidth={2} aria-hidden="true" /></span>
              <span className="detail-number">{feature.number}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}