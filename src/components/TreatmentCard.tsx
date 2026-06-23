"use client";

import React from "react";
import { Treatment } from "@/types/treatment";

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const isHighlighted = treatment.tag === "Mais Popular";

  const handleBuy = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(treatment.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={() => handleBuy()}
      className={`bg-surface rounded-2xl p-6 shadow-bloom flex flex-col relative transition-transform duration-300 hover:-translate-y-1 cursor-pointer h-full ${isHighlighted
          ? "border-2 border-[#C97A8F] scale-100 md:scale-105 z-10"
          : "border border-surface-variant"
        }`}
    >
      {treatment.isPromo && (
        <div className="absolute -top-3 -right-3 bg-[#E53E3E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 z-20 animate-pulse">
          🔥 PROMO
        </div>
      )}
      {treatment.hasBonus && (
        <div className="absolute -top-3 -left-3 bg-[#C97A8F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12 z-20">
          🎁 BRINDE
        </div>
      )}
      {treatment.tag && (
        <div
          className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${isHighlighted ? "bg-[#C97A8F]" : "bg-secondary"
            } text-white font-label-bold text-label-bold py-1 px-4 rounded-full shadow-md whitespace-nowrap`}
        >
          {treatment.tag}
        </div>
      )}
      <h3 className={`font-title-sm text-title-sm text-wine-accent mb-2 ${treatment.tag ? "mt-4" : ""}`}>
        {treatment.name}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
        {treatment.budgetCategory === "Tratamento Premium"
          ? "O ritual definitivo para renovação celular e descanso da pele."
          : treatment.budgetCategory === "Promoção" || isHighlighted
            ? "A combinação perfeita para nutrição e hidratação profunda."
            : "Para os primeiros passos no cuidado intenso."}
      </p>
      <div className="mb-6 border-t border-primary-container pt-4">
        <ul className="space-y-3 font-body-md text-body-md text-text-gray">
          {treatment.items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {item}
            </li>
          ))}
          {treatment.bonus && (
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-wine-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4 15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span className="font-medium text-wine-accent">
                Brinde: {treatment.bonus}
              </span>
            </li>
          )}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="font-headline-md-mobile text-headline-md-mobile text-wine-accent mb-4">
          R$ {treatment.price.toFixed(2).replace(".", ",")}
          <span className="text-sm font-normal text-on-surface-variant">
            {" "}
            /único
          </span>
        </div>
        <button
          onClick={handleBuy}
          className="w-full bg-[#C97A8F] text-white font-label-bold text-label-bold py-4 rounded-lg hover:bg-pastel-hover hover:text-wine-accent transition-colors duration-300 shadow-sm cursor-pointer"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
}
