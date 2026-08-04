import React, { useState } from 'react';
import { ArrowRight, BarChart3, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtUl3L7gMMAND5LSV0OM2i6LO_ZHM-CcvCYhENfZaiHxnciNPa_TE36DZg2NF63Czc/exec';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'Email', href: 'mailto:hello@customercategorizer.ai', icon: Mail },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bottomLinks = [
    { label: 'Privacy Policy', href: '/resources#documentation' },
    { label: 'Terms of Service', href: '/resources#faqs' },
  ];

  async function handleSubscribe(e) {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatusType('error');
      setStatusMessage('Please enter your email address.');
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setStatusType('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending...');
    setStatusType('loading');

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const rawBody = await response.text();
      let responseBody = rawBody;

      try {
        responseBody = rawBody ? JSON.parse(rawBody) : {};
      } catch {
        responseBody = rawBody;
      }

      const responseMessage = typeof responseBody === 'string'
        ? responseBody
        : responseBody?.message || responseBody?.error || responseBody?.status || '';

      if (!response.ok) {
        const message = responseMessage || `Subscription failed with status ${response.status}.`;
        if (message.includes('Email already exists')) {
          setStatusType('error');
          setStatusMessage('Email already exists');
        } else {
          setStatusType('error');
          setStatusMessage(message);
        }
        return;
      }

      if (String(responseMessage).includes('Email already exists')) {
        setStatusType('error');
        setStatusMessage('Email already exists');
        return;
      }

      setEmail('');
      setStatusType('success');
      setStatusMessage(responseMessage || 'Subscription successful.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatusType('error');
      setStatusMessage(message.includes('Email already exists') ? 'Email already exists' : 'Unable to subscribe right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner glass-panel">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="brand">
              <div className="brand-icon"><BarChart3 size={18} strokeWidth={2} aria-hidden="true" /></div>
              <div>
                <p className="footer-title">cryptoXnueron</p>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (statusMessage) {
                    setStatusMessage('');
                    setStatusType('');
                  }
                }}
                aria-label="Email address"
                required
              />
              <button aria-label={isSubmitting ? 'Subscribing' : 'Subscribe'} type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </button>
            </form>
            {statusMessage ? (
              <p className="footer-copy newsletter-status" aria-live="polite" aria-atomic="true" data-status={statusType}>
                {statusMessage}
              </p>
            ) : null}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">{`© ${new Date().getFullYear()} cryptoXneuron©. All rights reserved.`}</p>
          <div className="footer-bottom-links">
            {bottomLinks.map((l) => (
              <a key={l.label} href={l.href} aria-label={l.label}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
