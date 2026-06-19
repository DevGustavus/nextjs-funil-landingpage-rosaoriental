"use client";
import { useState } from "react";

export default function QuizPage() {
  const [step, setStep] = useState<"quiz" | "result">("quiz");

  if (step === "result") {
    return (
      <section className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12 md:mb-16">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-wine-accent mb-stack-md">
            Seu Diagnóstico Personalizado
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Com base nas suas respostas, notamos que sua pele anseia por nutrição profunda e rejuvenescimento estrutural. Preparamos rituais exclusivos para restaurar sua luminosidade natural e firmeza, respeitando a delicadeza que sua fase exige.
          </p>
        </div>
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1: Low Ticket */}
          <div className="bg-surface rounded-2xl p-6 shadow-bloom flex flex-col relative transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="h-48 w-full rounded-xl bg-surface-container-high mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Tratamento Inicial"
                className="w-full h-full object-cover"
                src="https://placehold.co/400x300/F5E6E0/8B4457?text=Tratamento+Inicial"
              />
            </div>
            <h3 className="font-title-sm text-title-sm text-wine-accent mb-2">Tratamento Inicial</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Para os primeiros passos no cuidado intenso.</p>
            <div className="mb-6 border-t border-primary-container pt-4">
              <ul className="space-y-3 font-body-md text-body-md text-text-gray">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Sérum Facial Rejuvenescedor
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="font-headline-md-mobile text-headline-md-mobile text-wine-accent mb-4">R$ 110<span className="text-sm font-normal text-on-surface-variant"> /único</span></div>
              <button className="w-full bg-[#C97A8F] text-white font-label-bold text-label-bold py-4 rounded-lg hover:bg-pastel-hover hover:text-wine-accent transition-colors duration-300 shadow-sm cursor-pointer">Comprar Agora</button>
            </div>
          </div>
          {/* Card 2: Best Value (Highlighted) */}
          <div className="bg-surface rounded-2xl p-6 shadow-bloom flex flex-col relative transition-transform duration-300 hover:-translate-y-1 border-2 border-[#C97A8F] scale-100 md:scale-105 z-10 cursor-pointer">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C97A8F] text-white font-label-bold text-label-bold py-1 px-4 rounded-full shadow-md">
              Mais Popular
            </div>
            <div className="h-48 w-full rounded-xl bg-surface-container-high mb-6 overflow-hidden mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Ritual de Equilíbrio"
                className="w-full h-full object-cover"
                src="https://placehold.co/400x300/F5E6E0/8B4457?text=Ritual+de+Equilibrio"
              />
            </div>
            <h3 className="font-title-sm text-title-sm text-wine-accent mb-2">Ritual de Equilíbrio</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">A combinação perfeita para nutrição e hidratação profunda.</p>
            <div className="mb-6 border-t border-primary-container pt-4">
              <ul className="space-y-3 font-body-md text-body-md text-text-gray">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Sérum Facial Rejuvenescedor
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Creme Nutritivo Rosa Oriental
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="font-headline-md-mobile text-headline-md-mobile text-wine-accent mb-4">R$ 280<span className="text-sm font-normal text-on-surface-variant line-through ml-2">R$ 320</span></div>
              <button className="w-full bg-[#C97A8F] text-white font-label-bold text-label-bold py-4 rounded-lg hover:bg-pastel-hover hover:text-wine-accent transition-colors duration-300 shadow-sm cursor-pointer">Comprar Agora</button>
            </div>
          </div>
          {/* Card 3: Long Term/Intensive */}
          <div className="bg-surface rounded-2xl p-6 shadow-bloom flex flex-col relative transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="absolute -top-3 right-4 bg-secondary text-white text-xs font-bold py-1 px-2 rounded-lg shadow-sm">
              -30% OFF
            </div>
            <div className="h-48 w-full rounded-xl bg-surface-container-high mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Transformação Completa"
                className="w-full h-full object-cover"
                src="https://placehold.co/400x300/F5E6E0/8B4457?text=Transformacao+Completa"
              />
            </div>
            <h3 className="font-title-sm text-title-sm text-wine-accent mb-2">Transformação Completa</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">O ritual definitivo para renovação celular e descanso da pele.</p>
            <div className="mb-6 border-t border-primary-container pt-4">
              <ul className="space-y-3 font-body-md text-body-md text-text-gray">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Sérum Facial Rejuvenescedor
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Creme Nutritivo Rosa Oriental
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Loção Detox Purificante
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Tratamento Noturno Rosa Sono
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="font-headline-md-mobile text-headline-md-mobile text-wine-accent mb-4">R$ 450<span className="text-sm font-normal text-on-surface-variant line-through ml-2">R$ 642</span></div>
              <button className="w-full bg-[#C97A8F] text-white font-label-bold text-label-bold py-4 rounded-lg hover:bg-pastel-hover hover:text-wine-accent transition-colors duration-300 shadow-sm cursor-pointer">Comprar Agora</button>
            </div>
          </div>
        </div>
        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">Ainda tem dúvidas sobre qual é o melhor ritual para você?</p>
          <button className="bg-transparent border border-[#8B4457] text-[#8B4457] font-label-bold text-label-bold py-3 px-8 rounded-lg hover:bg-pastel-hover transition-colors duration-300 flex items-center gap-2 mx-auto cursor-pointer">
            <span className="material-symbols-outlined">forum</span>
            Falar com Especialista
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full bg-primary-container py-section-padding-mobile md:py-section-padding-desktop text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h1 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-wine-accent mb-stack-sm">
            Inicie seu Diagnóstico Personalizado
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Descubra a rotina de cuidados ideal para a sua pele em poucos passos.
          </p>
        </div>
      </section>

      {/* Quiz Interface Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-gutter">
          {/* Progress Bar */}
          <div className="mb-stack-lg">
            <div className="w-full bg-primary-container h-1 rounded-full overflow-hidden">
              <div className="bg-wine-accent h-full transition-all duration-500 ease-in-out" style={{ width: "100%" }}></div>
            </div>
            <div className="text-right mt-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
              Passo Único
            </div>
          </div>
          {/* Quiz Card */}
          <div className="bg-surface rounded-[16px] shadow-bloom p-6 md:p-12 border border-surface-variant relative overflow-hidden">
            <h2 className="font-title-sm text-title-sm text-center text-wine-accent mb-stack-lg">
              Qual sua idade?
            </h2>
            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">
              <label className="cursor-pointer group">
                <input className="peer sr-only" name="age" type="radio" value="18-25" />
                <div className="p-6 bg-surface border-2 border-primary-container rounded-lg text-center transition-all duration-300 ease-out group-hover:border-[#C97A8F] peer-checked:border-[#C97A8F] peer-checked:bg-surface-bright hover-lift flex flex-col items-center gap-2">
                  <span className="font-body-lg text-body-lg text-on-surface peer-checked:text-wine-accent font-medium">18-25</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase">Anos</span>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input className="peer sr-only" name="age" type="radio" value="26-35" defaultChecked />
                <div className="p-6 bg-surface border-2 border-[#C97A8F] rounded-lg text-center transition-all duration-300 ease-out bg-surface-bright shadow-bloom flex flex-col items-center gap-2 relative">
                  <span className="material-symbols-outlined absolute top-3 right-3 text-[#C97A8F]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-lg text-body-lg text-wine-accent font-medium">26-35</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase">Anos</span>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input className="peer sr-only" name="age" type="radio" value="36-45" />
                <div className="p-6 bg-surface border-2 border-primary-container rounded-lg text-center transition-all duration-300 ease-out group-hover:border-[#C97A8F] peer-checked:border-[#C97A8F] peer-checked:bg-surface-bright hover-lift flex flex-col items-center gap-2">
                  <span className="font-body-lg text-body-lg text-on-surface peer-checked:text-wine-accent font-medium">36-45</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase">Anos</span>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input className="peer sr-only" name="age" type="radio" value="46+" />
                <div className="p-6 bg-surface border-2 border-primary-container rounded-lg text-center transition-all duration-300 ease-out group-hover:border-[#C97A8F] peer-checked:border-[#C97A8F] peer-checked:bg-surface-bright hover-lift flex flex-col items-center gap-2">
                  <span className="font-body-lg text-body-lg text-on-surface peer-checked:text-wine-accent font-medium">46+</span>
                  <span className="font-label-sm text-label-sm text-outline uppercase">Anos</span>
                </div>
              </label>
            </div>
            {/* Action Button */}
            <div className="flex justify-center mt-stack-lg pt-stack-md border-t border-surface-variant">
              <button
                onClick={() => setStep("result")}
                className="bg-[#C97A8F] text-on-tertiary font-label-bold text-label-bold py-4 px-12 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover-lift flex items-center gap-2 cursor-pointer"
              >
                Ver Resultado
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
