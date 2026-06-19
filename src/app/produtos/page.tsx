export default function Produtos() {
  return (
    <>
      {/* PRODUCT GALLERY */}
      <section className="bg-primary-container py-section-padding-mobile md:py-section-padding-desktop">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-wine-accent mb-stack-lg">
            Nossa Linha Completa
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-section-padding-desktop max-w-2xl mx-auto">
            Descubra o ritual perfeito para a sua pele. Produtos desenvolvidos com a sabedoria oriental para restaurar, nutrir e iluminar.
          </p>
          <div className="rounded-xl overflow-hidden shadow-sm shadow-bloom mx-auto aspect-[16/9] md:aspect-[21/9] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Linha Completa Rosa Oriental"
              className="w-full h-full object-cover"
              src="https://placehold.co/1200x500/F5E6E0/8B4457?text=Linha+Completa"
            />
          </div>
        </div>
      </section>

      {/* INDIVIDUAL PRODUCT CARDS */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Rosa Oriental (Principal) */}
            <div className="bg-surface-container-lowest rounded-[16px] shadow-bloom p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square bg-surface-container-low rounded-lg mb-stack-md overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Rosa Oriental Sérum"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  src="https://placehold.co/400x400/F5E6E0/8B4457?text=Rosa+Oriental+Serum"
                />
              </div>
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-stack-sm flex-grow">Rosa Oriental Sérum</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Tratamento principal para vitalidade e brilho.</p>
              <div className="flex items-center justify-between mt-auto pt-stack-sm border-t border-surface-container-highest">
                <span className="font-headline-md-mobile text-headline-md-mobile text-wine-accent">R$ 220</span>
                <button className="bg-[#C97A8F] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95 duration-150 cursor-pointer">
                  Comprar
                </button>
              </div>
            </div>

            {/* Sérum Facial (Upsell) */}
            <div className="bg-surface-container-lowest rounded-[16px] shadow-bloom p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square bg-surface-container-low rounded-lg mb-stack-md overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Creme Facial"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  src="https://placehold.co/400x400/F5E6E0/8B4457?text=Creme+Facial"
                />
              </div>
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-stack-sm flex-grow">Creme Facial</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Hidratação profunda e textura aveludada.</p>
              <div className="flex items-center justify-between mt-auto pt-stack-sm border-t border-surface-container-highest">
                <span className="font-headline-md-mobile text-headline-md-mobile text-wine-accent">R$ 110</span>
                <button className="bg-[#C97A8F] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95 duration-150 cursor-pointer">
                  Comprar
                </button>
              </div>
            </div>

            {/* Detox (Upsell) */}
            <div className="bg-surface-container-lowest rounded-[16px] shadow-bloom p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square bg-surface-container-low rounded-lg mb-stack-md overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Detox Suplemento"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  src="https://placehold.co/400x400/F5E6E0/8B4457?text=Detox+Suplemento"
                />
              </div>
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-stack-sm flex-grow">Detox Suplemento</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Cuidado de dentro para fora.</p>
              <div className="flex items-center justify-between mt-auto pt-stack-sm border-t border-surface-container-highest">
                <span className="font-headline-md-mobile text-headline-md-mobile text-wine-accent">R$ 130</span>
                <button className="bg-[#C97A8F] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95 duration-150 cursor-pointer">
                  Comprar
                </button>
              </div>
            </div>

            {/* Rosa Sono (Upsell) */}
            <div className="bg-surface-container-lowest rounded-[16px] shadow-bloom p-6 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square bg-surface-container-low rounded-lg mb-stack-md overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Rosa Sono"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  src="https://placehold.co/400x400/F5E6E0/8B4457?text=Rosa+Sono"
                />
              </div>
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-stack-sm flex-grow">Rosa Sono</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Para um sono reparador da beleza.</p>
              <div className="flex items-center justify-between mt-auto pt-stack-sm border-t border-surface-container-highest">
                <span className="font-headline-md-mobile text-headline-md-mobile text-wine-accent">R$ 180</span>
                <button className="bg-[#C97A8F] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95 duration-150 cursor-pointer">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
