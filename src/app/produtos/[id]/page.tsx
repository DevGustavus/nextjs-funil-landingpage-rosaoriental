import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductPurchaseBox from "@/components/ProductPurchaseBox";

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface py-section-padding-mobile md:py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <Link 
          href="/produtos" 
          className="inline-flex items-center text-wine-accent hover:underline mb-8 font-label-large"
        >
          &larr; Voltar para produtos
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image */}
          <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-bloom aspect-square relative border border-surface-variant">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.imageSrc} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="font-display-md text-display-md text-wine-accent mb-4">
              {product.name}
            </h1>
            
            <p className="font-title-md text-title-md text-on-surface-variant mb-6 pb-6 border-b border-surface-container-highest">
              {product.description}
            </p>



            <div className="mb-8">
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Sobre o produto</h3>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Benefícios</h3>
              <ul className="space-y-3">
                {product.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                    <svg className="w-6 h-6 text-[#C97A8F] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Ingredientes Principais</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients?.map((ingredient, index) => (
                  <span key={index} className="bg-primary-container text-wine-accent px-4 py-2 rounded-full font-label-md text-label-md">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Como usar</h3>
              <p className="font-body-md text-body-md text-on-surface bg-surface-container-lowest p-4 rounded-xl border border-surface-variant">
                {product.usageInstructions}
              </p>
            </div>

            <ProductPurchaseBox product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
