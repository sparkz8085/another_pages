import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CircleHelp, Download, FileCode2, Github, LifeBuoy, Newspaper, PlayCircle } from 'lucide-react';

const resourceSections = [
  { id: 'documentation', title: 'Documentation', description: 'Read the platform overview, setup flow, and usage notes.', icon: BookOpen },
  { id: 'api-reference', title: 'API Reference', description: 'Inspect integration points and backend endpoints.', icon: FileCode2 },
  { id: 'blog', title: 'Blog', description: 'Explore product stories, updates, and implementation ideas.', icon: Newspaper },
  { id: 'tutorials', title: 'Tutorials', description: 'Step-by-step guides for onboarding and operations.', icon: PlayCircle },
  { id: 'faqs', title: 'FAQs', description: 'Answers to common product and deployment questions.', icon: CircleHelp },
  { id: 'support-center', title: 'Support Center', description: 'Get help with setup, billing, and troubleshooting.', icon: LifeBuoy },
  { id: 'github-repository', title: 'GitHub Repository', description: 'Track source, issues, and contribution workflows.', icon: Github },
  { id: 'downloads', title: 'Downloads', description: 'Access assets, exports, and installation bundles.', icon: Download },
];

export default function ResourcesPage() {
  return (
    <section className="page-section resources-page">
      <div className="section-intro compact">
        <span className="badge">Resources</span>
        <h2>Clear documentation for teams moving fast.</h2>
        <p>A clean, premium resource center designed for product discovery, onboarding, and support.</p>
      </div>

      <div className="resources-stack">
        {resourceSections.map((resource, index) => (
          <motion.article
            id={resource.id}
            key={resource.title}
            className="resource-card glass-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="resource-copy">
              <div className="resource-topline">
                <span className="card-icon"><resource.icon size={18} strokeWidth={2} aria-hidden="true" /></span>
                <span className="resource-index">0{index + 1}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
            <a href="https://cryptox-neuron-ai.onrender.com/" className="secondary-button button-with-icon resource-action">
              <span>Open</span>
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}