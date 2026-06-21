import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wine-accent w-full pt-12 pb-[84px] md:pt-16 md:pb-[108px] px-margin-mobile md:px-gutter text-center md:text-left mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col gap-6">

        {/* Top Area: Logo and Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pb-4">
          <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white font-serif tracking-tight leading-none">
            Rosa Oriental
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <Link className="font-label-sm text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200" href="#">
              WhatsApp
            </Link>
            <Link className="font-label-sm text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200" href="#">
              Email
            </Link>
            <Link className="font-label-sm text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200" href="#">
              Termos de Uso
            </Link>
            <Link className="font-label-sm text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200" href="#">
              Privacidade
            </Link>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 w-full"></div>

        {/* Bottom Area: Copyright info */}
        <div className="pt-2">
          <p className="font-body-md text-body-md text-white/70 text-center md:text-left">
            © 2024 Rosa Oriental. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
          </p>
        </div>

      </div>
    </footer>
  );
}
