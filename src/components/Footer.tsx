import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'accreditations', hash?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer role="contentinfo">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <div className="footer-brand-icon">
              <img
                src="/Logo Icon.png.png"
                alt="SRCAA Emblem"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/logo.svg') {
                    target.src = '/logo.svg';
                  }
                }}
              />
            </div>
            <span className="footer-brand-text">SRCAA</span>
          </div>
          <p className="footer-desc">
            Shakti Research Centre &amp; Academia (Est. 2024). An accredited digital research institution committed to interdisciplinary scholarship, ethical evaluation, and academic capacity building.
          </p>
          <div className="footer-trust-chips">
            <span className="footer-chip"><i className="fas fa-check-circle"></i> ITC Accredited</span>
            <span className="footer-chip"><i className="fas fa-globe-asia"></i> GAOTE Registered</span>
            <span className="footer-chip"><i className="fas fa-database"></i> ROR Listed</span>
            <span className="footer-chip"><i className="fas fa-scroll"></i> DORA Endorser</span>
          </div>
        </div>

        <div>
          <h3 className="footer-col-title">Academic Directory</h3>
          <ul className="footer-links">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#about');
                }}
              >
                <i className="fas fa-chevron-right"></i> About SRCAA
              </a>
            </li>
            <li>
              <a
                href="#founder"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#founder');
                }}
              >
                <i className="fas fa-chevron-right"></i> Founder's Desk
              </a>
            </li>
            <li>
              <a
                href="#anjana"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#anjana');
                }}
              >
                <i className="fas fa-chevron-right"></i> Dr. Anjana Radhakrishna
              </a>
            </li>
            <li>
              <a
                href="#board"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#board');
                }}
              >
                <i className="fas fa-chevron-right"></i> Academic Board &amp; Faculty
              </a>
            </li>
            <li>
              <a
                href="#press"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#press');
                }}
              >
                <i className="fas fa-chevron-right"></i> Scholarly Publications
              </a>
            </li>
            <li>
              <a
                href="https://www.sgrcr.srcaa.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-highlight-link"
                title="Visit SGRCR Journal Portal (opens in new tab)"
              >
                <i className="fas fa-external-link-alt"></i> <span>SGRCR Journal Portal</span> <span className="footer-tag-live">Live</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Accreditations &amp; Policy</h3>
          <ul className="footer-links">
            <li>
              <a
                href="/accreditations.html"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('accreditations');
                }}
              >
                <i className="fas fa-chevron-right"></i> Accreditations &amp; Quality
              </a>
            </li>
            <li>
              <a
                href="#dora"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#dora');
                }}
              >
                <i className="fas fa-chevron-right"></i> DORA Statement
              </a>
            </li>
            <li>
              <a
                href="#cert"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#cert');
                }}
              >
                <i className="fas fa-chevron-right"></i> Quality Certification
              </a>
            </li>
            <li>
              <a
                href="#internship"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#internship');
                }}
              >
                <i className="fas fa-chevron-right"></i> Research Internship Program
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', '#contact');
                }}
              >
                <i className="fas fa-chevron-right"></i> Academic Inquiries
              </a>
            </li>
          </ul>
          <div className="footer-contact-row" style={{ marginTop: '1.25rem' }}>
            <i className="fas fa-envelope"></i>
            <a href="mailto:srcaacontact@gmail.com">srcaacontact@gmail.com</a>
          </div>
          <div className="footer-contact-row">
            <i className="fab fa-whatsapp"></i>
            <a href="https://chat.whatsapp.com/LGCXLxBGFJJBmOolmmUYPX" target="_blank" rel="noopener noreferrer">
              Join Academic WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        &copy; 2026 SRCAA &mdash; Shakti Research Centre and Academia. All rights reserved. &middot; Operating under International Trade Council (ITC) Framework &middot; GAOTE Registered
      </div>
    </footer>
  );
}
