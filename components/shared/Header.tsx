"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/mentoria", label: "Mentoria" },
  { href: "/sobre", label: "A Agência" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logotipo */}
          <Link
            href="/"
            className="font-bold text-xl text-upiii-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange rounded"
            aria-label="Agência Upiii — Página inicial"
          >
            Upiii
          </Link>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-upiii-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-upiii-orange text-white text-sm font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-upiii-orange"
            >
              Diagnóstico Gratuito
            </Link>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-base font-medium text-gray-700 hover:text-upiii-orange hover:bg-gray-50 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="mt-3 block text-center py-3 px-4 rounded-md bg-upiii-orange text-white font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upiii-orange"
            >
              Diagnóstico Gratuito
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
