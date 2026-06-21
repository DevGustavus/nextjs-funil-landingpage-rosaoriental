"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Quiz", href: "/quiz" },
    { label: "Produtos", href: "/produtos" },
  ];

  return (
    <header className="bg-surface sticky top-0 z-50 shadow-sm w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
        <Link href="/" className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-wine-accent">
          Rosa Oriental
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                className={`${isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant"
                  } text-label-bold font-label-bold hover:text-secondary-container transition-colors duration-300`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="hidden md:block border border-secondary text-secondary px-6 py-2 rounded-lg font-label-bold text-label-bold hover:bg-pastel-hover transition-colors duration-300 hover-lift cursor-pointer">
          Falar com Especialista
        </button>
        <button className="md:hidden text-secondary">
          <span className="material-symbols-outlined text-[32px]">menu</span>
        </button>
      </div>
    </header>
  );
}
