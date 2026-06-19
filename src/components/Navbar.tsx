import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-surface sticky top-0 z-50 shadow-sm w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
        <Link href="/" className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-wine-accent">
          Rosa Oriental
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-bold font-label-bold hover:text-secondary-container transition-colors duration-300" href="/">
            Home
          </Link>
          <Link className="text-on-surface-variant text-label-bold font-label-bold hover:text-secondary-container transition-colors duration-300" href="/sobre">
            Sobre Nós
          </Link>
          <Link className="text-on-surface-variant text-label-bold font-label-bold hover:text-secondary-container transition-colors duration-300" href="/quiz">
            Quiz
          </Link>
          <Link className="text-on-surface-variant text-label-bold font-label-bold hover:text-secondary-container transition-colors duration-300" href="/produtos">
            Produtos
          </Link>
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
