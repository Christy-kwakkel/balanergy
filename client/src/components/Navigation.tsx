/**
 * BALANERGY NAVIGATION COMPONENT
 * Design: "Warme Aarde – Organisch & Sensueel"
 * Reusable header with mobile hamburger menu and desktop navigation
 */

import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const ONLINE_AGENDA_URL = "https://www.supersaas.nl/schedule/balanergy/Balanergy";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Behandelingen", href: "/behandelingen" },
  { label: "Over Mij", href: "/over-mij" },
  { label: "Arrangementen", href: "/arrangementen" },
  { label: "Workshops & Opleidingen", href: "/workshops" },
  { label: "Personal Training", href: "/personal-training" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="font-display text-2xl font-bold" style={{ color: "#3E3A37" }}>
            Balanergy
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className="font-body text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#6B6560" }}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href={ONLINE_AGENDA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block px-4 py-2 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8DA089" }}
        >
          BOEK NU
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} style={{ color: "#3E3A37" }} />
          ) : (
            <Menu size={24} style={{ color: "#3E3A37" }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t"
          style={{ borderColor: "#E8D5C4", backgroundColor: "#FCF9F5" }}
        >
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="font-body text-sm font-medium py-2 hover:opacity-70 transition-opacity block"
                  style={{ color: "#6B6560" }}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a
              href={ONLINE_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90 mt-2"
              style={{ backgroundColor: "#8DA089" }}
              onClick={handleNavClick}
            >
              BOEK NU
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
