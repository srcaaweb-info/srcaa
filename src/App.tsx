import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AccreditationsPage from './pages/AccreditationsPage';
import AcademicCopilot from './components/AcademicCopilot';
import './styles.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'accreditations'>('home');

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash;
      if (path.includes('accreditations') || hash.includes('accreditations')) {
        setCurrentPage('accreditations');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (page: 'home' | 'accreditations', hash?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', '/' + (hash ? hash : ''));
    } else {
      window.history.pushState(null, '', '/accreditations.html' + (hash ? hash : ''));
    }
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div id="app-root">
      <CookieBanner />
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      {currentPage === 'home' ? (
        <HomePage onNavigate={navigate} />
      ) : (
        <AccreditationsPage onNavigate={navigate} />
      )}
      <Footer onNavigate={navigate} />
      <AcademicCopilot onNavigate={navigate} />
    </div>
  );
}
