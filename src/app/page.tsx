export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-primary-container relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop flex flex-col md:flex-row items-center gap-stack-lg min-h-[80vh]">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center z-10 text-center md:text-left">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-stack-md">
              30 Dias Para Sua Melhor Versão
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-lg mx-auto md:mx-0">
              Descubra como o Rosa Oriental transforma peles maduras e deixa você radiante novamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-sm justify-center md:justify-start">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-on-secondary-fixed-variant transition-colors hover-lift cursor-pointer">
                Começar Meu Quiz
              </button>
              <button className="border border-wine-accent text-wine-accent px-8 py-4 rounded-lg font-label-bold text-label-bold hover:bg-pastel-hover transition-colors hover-lift cursor-pointer">
                Falar com Especialista
              </button>
            </div>
          </div>
          {/* Visual Content */}
          <div className="w-full md:w-1/2 relative z-10 mt-stack-lg md:mt-0">
            <div className="relative w-full aspect-[4/5] md:aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-bloom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Mulher radiante usando produtos Rosa Oriental"
                className="object-cover w-full h-full"
                src="/images/modelo-rosaOriental.png"
              />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary-container/30 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        </div>
      </section>

      {/* QUIZ EXPLANATION SECTION */}
      <section className="bg-surface-container-lowest py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center">
          <svg
            viewBox="0 0 100 100"
            className="w-16 h-16 text-secondary"
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
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-secondary mb-stack-md">
            Sua Pele Realmente Precisa de Quê?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
            Você já pagou caro em produtos que não funcionaram? Não é culpa sua - era só o produto errado para você. Deixe a gente te ajudar a encontrar o CERTO.
          </p>
          <p className="font-title-sm text-title-sm text-secondary mb-stack-lg font-semibold bg-primary-container/50 inline-block px-6 py-3 rounded-full">
            Há quanto tempo sua pele não recebe exatamente o que ela precisa?
          </p>
          <button className="bg-secondary text-white px-10 py-4 rounded-lg font-label-bold text-label-bold hover:bg-on-secondary-fixed-variant transition-colors hover-lift flex items-center gap-2 cursor-pointer">
            Começar Meu Diagnóstico
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="bg-primary-container py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center flex flex-col items-center">
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-secondary mb-stack-lg max-w-2xl mx-auto">
            Quando uma mulher finalmente descobre o que sua pele precisava
          </h2>
          {/* Video Player */}
          <div className="w-full max-w-4xl mx-auto aspect-video bg-surface-container-high rounded-2xl relative overflow-hidden shadow-bloom">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/lTBSDW5M-gk"
              title="Rosa Oriental"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-stack-md flex justify-center gap-2 text-secondary">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </section>
    </>
  );
}
