import React from 'react';
import { ArrowLeft, CheckCircle2, Copy, QrCode } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function UpgradePage() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') === 'enterprise' ? 'Enterprise' : 'Professional';
  const amount = plan === 'Professional' ? '₹999/month' : 'Custom Pricing';

  return (
    <section className="page-section upgrade-page">
      <div className="upgrade-panel glass-panel">
        <Link to="/pricing" className="back-link upgrade-back">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to pricing</span>
        </Link>

        <div className="upgrade-heading">
          <span className="badge">
            <QrCode size={14} aria-hidden="true" />
            Secure payment
          </span>
          <h2>{plan} plan</h2>
          <p>Scan the QR code below to complete your payment.</p>
        </div>

        <div className="payment-card">
          <div className="payment-qr-wrap">
            <img
              src="/payment/cryptoX-neuron-payment-qr.svg"
              alt="Payment QR code"
              className="payment-qr"
            />
          </div>

          <div className="payment-meta">
            <div>
              <span className="payment-label">Selected plan</span>
              <strong>{plan}</strong>
            </div>
            <div>
              <span className="payment-label">Plan price</span>
              <strong>{amount}</strong>
            </div>
          </div>

          <div className="payment-note">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>After payment, keep your transaction reference ready for verification.</span>
          </div>
        </div>

        <div className="upgrade-actions">
          <Link to="/pricing" className="secondary-button button-with-icon">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Choose another plan</span>
          </Link>
          <Link to="/login" className="primary-button button-with-icon">
            <span>Continue to CryptoX Neuron AI</span>
            <Copy size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
