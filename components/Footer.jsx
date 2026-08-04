import React, { useState } from 'react';
import { ArrowRight, Facebook, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Email', href: 'mailto:hello@customercategorizer.ai', icon: Mail },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const bottomLinks = [
    { label: 'Privacy Policy', href: '/resources#documentation' },
    { label: 'Terms of Service', href: '/resources#faqs' },
  ];

  function handleSubscribe(e) {
    e.preventDefault();
    // placeholder: integrate with real subscription endpoint
    setEmail('');
    // could show a toast or success state
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner glass-panel">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="brand">
              <div className="brand-icon">📊</div>
              <div>
                <p className="footer-title">CustomerIQ</p>
                <p className="footer-copy">AI-powered customer intelligence platform that helps businesses understand, segment, and engage customers smarter.</p>
              </div>
            </div>

            <div className="footer-social">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    className="social-button"
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={s.label}
                  >
                    <s.icon size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                ))}
            </div>
          </div>

          <div className="footer-right">
            <h3 className="footer-section-title">Stay Updated</h3>
            <p className="footer-copy">Subscribe to our newsletter for the latest insights and product updates.</p>
            <form className="newsletter" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button aria-label="Subscribe" type="submit">
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">{`© ${new Date().getFullYear()} cryptoXneuron©. All rights reserved.`}</p>
          <div className="footer-bottom-links">
            {bottomLinks.map((l, i) => (
              <a key={l.label} href={l.href} aria-label={l.label}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
