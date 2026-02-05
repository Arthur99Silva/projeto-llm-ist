'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre o Projeto' },
    { href: '/privacidade', label: 'Política de Privacidade' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(26, 26, 46, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        @media (min-width: 768px) {
          .nav-container {
            padding: 0 24px;
          }
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.85;
          text-decoration: none;
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          position: relative;
          padding: 8px 0;
          color: #a8a8b8;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #81D8D0;
          text-decoration: none;
        }

        .nav-link.active {
          color: #81D8D0;
        }

        .menu-button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .menu-button:hover {
          background: rgba(129, 216, 208, 0.1);
        }

        @media (min-width: 768px) {
          .menu-button {
            display: none;
          }
        }

        .menu-line {
          width: 24px;
          height: 2px;
          background: #81D8D0;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-line:not(:last-child) {
          margin-bottom: 6px;
        }

        .menu-button.open .menu-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .menu-button.open .menu-line:nth-child(2) {
          opacity: 0;
        }

        .menu-button.open .menu-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(26, 26, 46, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 20px 16px;
          animation: slideDown 0.3s ease;
        }

        .mobile-menu.open {
          display: block;
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-link {
          display: block;
          padding: 16px 20px;
          border-radius: 12px;
          color: #a8a8b8;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.2s ease;
          margin-bottom: 8px;
        }

        .mobile-nav-link:hover {
          color: #81D8D0;
          background: rgba(129, 216, 208, 0.08);
          text-decoration: none;
        }

        .mobile-nav-link.active {
          color: #81D8D0;
          background: rgba(129, 216, 208, 0.1);
        }
      `}</style>

      <nav className="navbar" role="navigation" aria-label="Navegação principal">
        <div className="nav-container">
          <Link href="/" className="logo" aria-label="Espaço Acolher - Ir para página inicial">
            <Image
              src="/images/logo.png"
              alt="Espaço Acolher"
              width={75}
              height={20}
              priority
              unoptimized
              style={{ objectFit: 'contain', background: 'transparent' }}
            />
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className={`menu-button ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>

        <div 
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
          role="menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}