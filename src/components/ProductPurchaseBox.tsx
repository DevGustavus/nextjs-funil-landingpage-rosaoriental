"use client";

import { useState } from "react";
import { Product } from "@/types/product";

export default function ProductPurchaseBox({ product }: { product: Product }) {
  const hasTreatments = product.treatments && product.treatments.length > 0;
  
  // By default, select the first treatment if available, or undefined
  const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState<number>(0);
  
  const currentTreatment = hasTreatments ? product.treatments![selectedTreatmentIndex] : null;
  const displayPrice = currentTreatment ? currentTreatment.price : product.price;
  const checkoutUrl = currentTreatment ? currentTreatment.link : "#";

  const handleBuy = () => {
    if (checkoutUrl !== "#") {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {hasTreatments && (
        <div className="mb-6">
          <h3 className="font-title-sm text-title-sm text-wine-accent mb-3">Selecione o Tratamento</h3>
          <div className="flex flex-wrap gap-2">
            {product.treatments!.map((treatment, index) => (
              <button
                key={treatment.id}
                onClick={() => setSelectedTreatmentIndex(index)}
                className={`py-2 px-4 rounded-xl border text-sm font-medium transition-colors cursor-pointer ${
                  selectedTreatmentIndex === index
                    ? "bg-[#C97A8F] text-white border-[#C97A8F] shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant border-surface-variant hover:border-[#C97A8F]"
                }`}
              >
                {(treatment.isTurbo ? "Turbo " : "") + (treatment.name.includes(" - ") ? treatment.name.split(" - ")[1] : treatment.name)}
              </button>
            ))}
          </div>
          {currentTreatment?.isPromo && (
             <div className="mt-3 flex items-center">
               <span className="bg-[#E53E3E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                 🔥 OFERTA ESPECIAL
               </span>
             </div>
          )}
          {currentTreatment?.hasBonus && currentTreatment?.bonus && (
             <p className="text-sm text-[#C97A8F] mt-3 font-medium flex items-center gap-1 border border-[#C97A8F] bg-surface-container-low px-3 py-2 rounded-lg inline-flex shadow-sm">
               <span>🎁</span> Brinde Incluso: {currentTreatment.bonus}
             </p>
          )}
        </div>
      )}

      <div className="mb-8 border-t border-surface-container-highest pt-6">
        <div className="text-4xl font-serif text-wine-accent font-semibold mb-2">
          R$ {displayPrice?.toFixed(2).replace(".", ",")}
        </div>
        <p className="text-sm text-on-surface-variant">
          Ou em até 12x no cartão
        </p>
      </div>

      <button 
        onClick={handleBuy}
        className="w-full bg-[#C97A8F] text-white font-label-bold text-label-bold py-4 rounded-xl hover:bg-opacity-90 transition-colors shadow-md active:scale-95 duration-150 cursor-pointer text-lg flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Comprar Agora
      </button>
    </>
  );
}
