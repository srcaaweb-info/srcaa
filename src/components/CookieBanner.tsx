import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookieConsent='));
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 864e5);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const acceptCookies = () => {
    setCookie('cookieConsent', 'accepted', 365);
    setIsVisible(false);
  };

  const declineCookies = () => {
    setCookie('cookieConsent', 'declined', 7);
    setIsVisible(false);
  };

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      className={isVisible ? 'show' : ''}
    >
      <div className="cookie-content">
        <div className="cookie-icon">
          <i className="fas fa-shield-alt"></i>
        </div>
        <div className="cookie-text">
          We value institutional privacy and data integrity. By continuing you agree to our academic usage guidelines and policy.
        </div>
      </div>
      <div className="cookie-buttons">
        <button
          className="cookie-btn cookie-btn-decline"
          onClick={declineCookies}
          aria-label="Decline cookies"
        >
          Decline
        </button>
        <button
          className="cookie-btn cookie-btn-accept"
          onClick={acceptCookies}
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
