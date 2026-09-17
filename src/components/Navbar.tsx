import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: 'home' | 'accreditations';
  onNavigate: (page: 'home' | 'accreditations', hash?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: 'home' | 'accreditations', hash?: string) => {
    setIsMobileOpen(false);
    onNavigate(page, hash);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''} role="navigation">
      <div className="nav-inner">
        <a
          href="/"
          className="nav-logo"
          aria-label="SRCAA Homepage"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          <div className="nav-logo-icon">
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
          <div className="nav-logo-meta">
            <span className="nav-logo-text">SRCAA</span>
            <span className="nav-logo-sub">Research &amp; Academia</span>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={isMobileOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div className="nav-links" id="navLinks">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#about');
            }}
          >
            <i className="fas fa-landmark"></i> About
          </a>
          <a
            href="#founder"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#founder');
            }}
          >
            <i className="fas fa-user-tie"></i> Founder
          </a>
          <a
            href="#anjana"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#anjana');
            }}
          >
            <i className="fas fa-user-graduate"></i> Dr. Anjana
          </a>
          <a
            href="#board"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#board');
            }}
          >
            <i className="fas fa-users"></i> Academic Board
          </a>
          <a
            href="/accreditations.html"
            className={currentPage === 'accreditations' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('accreditations');
            }}
          >
            <i className="fas fa-certificate"></i> Accreditations
          </a>
          <a
            href="#press"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#press');
            }}
          >
            <i className="fas fa-book-open"></i> Publications
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', '#contact');
            }}
          >
            <i className="fas fa-envelope"></i> Contact
          </a>
        </div>
      </div>

      <div className={`nav-mobile ${isMobileOpen ? 'active' : ''}`} id="navMobile">
        <a
          href="https://www.sgrcr.srcaa.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-highlight"
          id="navMobileSgrcr"
          onClick={() => setIsMobileOpen(false)}
        >
          <span><i className="fas fa-book-journal-whills"></i> <strong>SGRCR Journal Portal</strong></span>
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#about');
          }}
        >
          <i className="fas fa-landmark"></i> About SRCAA
        </a>
        <a
          href="#founder"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#founder');
          }}
        >
          <i className="fas fa-user-tie"></i> Founder's Desk
        </a>
        <a
          href="#anjana"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#anjana');
          }}
        >
          <i className="fas fa-user-graduate"></i> Dr. Anjana Radhakrishna
        </a>
        <a
          href="#board"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#board');
          }}
        >
          <i className="fas fa-users"></i> Academic Board &amp; Faculty
        </a>
        <a
          href="/accreditations.html"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('accreditations');
          }}
        >
          <i className="fas fa-certificate"></i> Accreditations &amp; Quality
        </a>
        <a
          href="#press"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#press');
          }}
        >
          <i className="fas fa-book-open"></i> Scholarly Publications
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home', '#contact');
          }}
        >
          <i className="fas fa-envelope"></i> Institutional Contact
        </a>
      </div>
    </nav>
  );
}
