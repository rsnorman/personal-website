'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './nav.module.css';

export interface NavItem {
  label: string;
  href: string;
  decorator?: string;
}

export interface NavProps {
  items: NavItem[];
  className?: string;
}

export function Nav({ items, className }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`${styles.nav} ${className ?? ''}`}
        aria-label="Main navigation"
      >
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLink} aria-label="Home">
            <span className={styles.decorator} aria-hidden="true">
              {'>'}
            </span>
            RN
          </Link>
          <ul className={styles.navLinks}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
                >
                  {item.decorator && (
                    <span className={styles.decorator} aria-hidden="true">
                      {item.decorator}
                    </span>
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            [=]
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={mobileOpen}
      >
        <button
          ref={closeRef}
          className={styles.closeButton}
          onClick={() => {
            setMobileOpen(false);
            hamburgerRef.current?.focus();
          }}
          aria-label="Close menu"
        >
          [x]
        </button>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            {item.decorator && (
              <span className={styles.decorator} aria-hidden="true">
                {item.decorator}
              </span>
            )}
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
