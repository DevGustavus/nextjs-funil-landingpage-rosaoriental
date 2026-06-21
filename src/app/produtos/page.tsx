import ProductCard from "@/components/ProductCard";
import TreatmentCard from "@/components/TreatmentCard";
import { treatments } from "@/data/treatments";
import { products } from "@/data/products";

export default function Produtos() {
  const promoTreatments = treatments.filter((t) => t.budgetCategory === "Promoção");

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
              src="/images/linha-de-tratamento.png"
            />
          </div>
        </div>
      </section>

      {/* INDIVIDUAL PRODUCT CARDS */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMOÇÕES IMPERDÍVEIS */}
      {promoTreatments.length > 0 && (
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <h2 className="text-2xl md:text-3xl font-serif text-wine-accent mb-6 border-b-2 border-primary-container pb-3 text-left font-semibold flex items-center gap-3">
              Promoções Imperdíveis
              <svg className="w-7 h-7 text-[#C97A8F] animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 11 5 8 8C4.5 11.5 4.5 16 4.5 16C4.5 20.14 7.86 23.5 12 23.5C16.14 23.5 19.5 20.14 19.5 16C19.5 16 19.5 11.5 16 8C13 5 12 2 12 2ZM12 21.5C9.52 21.5 7.5 19.48 7.5 17C7.5 15.65 8.08 14.43 9 13.58C9 13.58 9 16 11 18L12 18L13 18C15 16 15 13.58 15 13.58C15.92 14.43 16.5 15.65 16.5 17C16.5 19.48 14.48 21.5 12 21.5Z" />
              </svg>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
              {promoTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
