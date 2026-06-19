import Link from 'next/link';

export default function Sobre() {
  return (
    <>
      {/* ESPECIALISTA Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-bloom transition-transform duration-500 hover:-translate-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Professional workspace"
              className="object-cover w-full h-full"
              src="/images/perfil_whatsapp.png"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-stack-lg">
            <div>
              <h4 className="font-label-bold text-label-bold text-primary tracking-widest uppercase mb-4">O Especialista</h4>
              <h1 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-secondary">
                A sabedoria por trás de cada fórmula
              </h1>
            </div>
            <div className="font-body-lg text-body-lg text-text-gray space-y-6">
              <p>
                Com dedicação ao estudo do rejuvenescimento, da pele madura e dos cuidados de beleza de dentro para fora, Gustavo Machado atua no acompanhamento de mulheres que desejam recuperar uma aparência mais bonita, firme e bem cuidada com o Rosa Oriental.
              </p>

              <p>
                Sua abordagem une orientação personalizada, constância e cuidado contínuo, mostrando que a beleza madura pode ser valorizada com um tratamento simples, completo e pensado para nutrir a pele de dentro para fora.
              </p>
            </div>
            <div>
              <Link href="/quiz" className="inline-block bg-wine-accent text-on-tertiary hover:bg-pastel-hover hover:text-wine-accent transition-all duration-300 hover:-translate-y-1 px-8 py-3 rounded-lg font-label-bold text-label-bold uppercase tracking-wider shadow-bloom cursor-pointer text-center">
                Conheça o Tratamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO DE PRODUÇÃO Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter bg-surface-container-low">
        <div className="max-w-container-max mx-auto flex flex-col gap-12 items-center">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-secondary">
              Por Trás das Fórmulas: Nossa Produção
            </h2>
            <p className="font-body-md text-body-md text-text-gray">
              Acompanhe de perto o rigoroso padrão de qualidade, higiene e a alta tecnologia envolvida na fabricação de cada lote do Rosa Oriental. Transparência e compromisso em cada detalhe.
            </p>
          </div>

          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-bloom border border-outline-variant/50 bg-black/5 relative">
            <iframe
              className="w-full h-full absolute inset-0 border-0"
              src="https://www.youtube.com/embed/nnvEyn9u428"
              title="Produção do Rosa Oriental"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* EMPRESA Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter bg-primary-container relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-stack-lg relative z-10">
          <div className="flex flex-col items-center gap-4">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 text-wine-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central petal */}
              <path d="M 50 15 C 36 35, 36 65, 50 85 C 64 65, 64 35, 50 15 Z" />
              {/* Left petal top curve */}
              <path d="M 18 38 C 30 38, 42 55, 50 85" />
              {/* Right petal top curve */}
              <path d="M 82 38 C 70 38, 58 55, 50 85" />
              {/* Bottom outer bowl */}
              <path d="M 18 38 C 18 72, 32 85, 50 85 C 68 85, 82 72, 82 38" />
            </svg>
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-wine-accent">
              A Rosa Oriental
            </h2>
          </div>
          <div className="font-body-lg text-body-lg text-text-gray space-y-6">
            <p>
              Nascemos da crença de que o envelhecimento é um privilégio, não um problema a ser &quot;corrigido&quot;. A Rosa Oriental é mais do que uma marca de skincare premium; somos um manifesto de amor-próprio e rejuvenescimento da autoconfiança.
            </p>
            <p>
              Avaliamos cada detalhe para que sua rotina de cuidados não seja uma obrigação apressada, mas sim um momento de pausa, um ritual sagrado onde você se reconecta consigo mesma. Nossos valores são guiados pela pureza, eficácia e pelo compromisso de entregar não apenas resultados visíveis, mas uma experiência sensorial inesquecível.
            </p>
          </div>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* FÁBRICA & DIFERENCIAIS Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-secondary mb-6">
              Padrão de Excelência
            </h2>
            <p className="font-body-md text-body-md text-text-gray">
              Da seleção meticulosa das matérias-primas ao laboratório de alta tecnologia. Cada gota dos nossos séruns e cremes carrega inovação, segurança e respeito à natureza.
            </p>
          </div>
          {/* Bento Grid / Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-bloom flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8B4457" fillRule="evenodd">
                  {/* Flower center cutout */}
                  <path d="M 12 4.5 C 13 4.5, 14 5.5, 14 6.5 C 15.2 5.8, 16.5 6.5, 16.5 7.7 C 17.5 7.7, 18.2 8.8, 17.8 9.8 C 18.2 10.8, 17.5 12, 16.5 12 C 16.5 13.2, 15.2 13.8, 14 13.2 C 14 14.2, 13 15.2, 12 15.2 C 11 15.2, 10 14.2, 10 13.2 C 8.8 13.8, 7.5 13.2, 7.5 12 C 6.5 12, 5.8 10.8, 6.2 9.8 C 5.8 8.8, 6.5 7.7, 7.5 7.7 C 7.5 6.5, 8.8 5.8, 10 6.5 C 10 5.5, 11 4.5, 12 4.5 Z M 12 7.2 A 1.8 1.8 0 1 0 12 10.8 A 1.8 1.8 0 1 0 12 7.2 Z" />
                  {/* Leaves */}
                  <path d="M 12 20.5 C 9.5 20 7.5 18, 7.5 15.5 C 7.5 13, 10 12, 11.5 12.5 C 11.8 14.5 12 17.5 12 20.5 Z" />
                  <path d="M 12 20.5 C 14.5 20 16.5 18, 16.5 15.5 C 16.5 13, 14 12, 12.5 12.5 C 12.2 14.5 12 17.5 12 20.5 Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Ingredientes Naturais</h3>
                <p className="font-body-md text-body-md text-text-gray">
                  Fórmulas limpas e ricas em ativos botânicos inspirados na flora oriental. Extraímos a potência da natureza sem agredir sua pele ou o meio ambiente.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-bloom flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8B4457">
                  <path d="M 8 4 h 8 v 1.5 h -1.5 v 4.5 l 5.2 8.3 A 1.5 1.5 0 0 1 18.4 20 H 5.6 a 1.5 1.5 0 0 1 -1.3 -2.3 L 9.5 10 V 5.5 H 8 V 4 Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Tecnologia de Ponta</h3>
                <p className="font-body-md text-body-md text-text-gray">
                  Nossa fábrica utiliza processos de nanoencapsulamento para garantir que os nutrientes penetrem nas camadas mais profundas da epiderme madura.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-bloom flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8B4457">
                  <path d="M12 2l1.9 2.2 2.9-.3.9 2.8 2.7 1.1-.3 2.9 1.9 2.2-1.4 2.6.9 2.8-2.3 1.8-.9 2.8-2.8-.7-1.9 2.2-1.9-2.2-2.8.7-.9-2.8-2.3-1.8.9-2.8-1.4-2.6 1.9-2.2-.3-2.9 2.7-1.1.9-2.8 2.9.3L12 2z" />
                  <path d="M 9.5 12.5 L 11.5 14.5 L 15.5 10" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Qualidade Certificada</h3>
                <p className="font-body-md text-body-md text-text-gray">
                  Testado dermatologicamente em peles maduras, sem testes em animais e com rigorosos padrões de controle de qualidade a cada lote produzido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
