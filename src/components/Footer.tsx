import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wine-accent w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter text-center md:text-left mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-lg">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-surface mb-stack-sm">
            Rosa Oriental
          </div>
          <p className="font-body-md text-body-md text-surface-variant opacity-80 max-w-sm">
            © 2026 Rosa Oriental. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          <Link className="font-label-sm text-label-sm text-surface-variant opacity-80 hover:text-primary-fixed transition-opacity duration-200" href="#">WhatsApp</Link>
          <Link className="font-label-sm text-label-sm text-surface-variant opacity-80 hover:text-primary-fixed transition-opacity duration-200" href="#">Email</Link>
          <Link className="font-label-sm text-label-sm text-surface-variant opacity-80 hover:text-primary-fixed transition-opacity duration-200" href="#">Termos de Uso</Link>
          <Link className="font-label-sm text-label-sm text-surface-variant opacity-80 hover:text-primary-fixed transition-opacity duration-200" href="#">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
