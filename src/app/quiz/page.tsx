"use client";

import { useQuiz } from "@/context/QuizContext";
import { quizQuestions } from "@/data/quizQuestions";
import { treatments } from "@/data/treatments";
import TreatmentCard from "@/components/TreatmentCard";

export default function QuizPage() {
  const {
    step,
    setStep,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswers,
    resetQuiz,
  } = useQuiz();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progressPercentage =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const currentAnswer = answers[currentQuestion.id];

  const handleSelectOption = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId,
    });
  };

  const handleNext = () => {
    if (!currentAnswer) return; // Prevent proceeding without an answer
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Respostas completas:", answers);
      setStep("result");
    }
  };

  const selectedAnswers = quizQuestions.reduce((acc, question) => {
    const selectedOptionId = answers[question.id];
    const option = question.options.find((opt) => opt.id === selectedOptionId);
    acc[question.id] = option ? option.text : "";
    return acc;
  }, {} as Record<string, string>);

  if (step === "result") {
    // Definindo 3 opções padrão para exibir no resultado:
    const recommendedIds = ["rosa-1m", "rosa-5l6", "rosa-12m-creme"];
    const recommendedTreatments = treatments.filter((t) =>
      recommendedIds.includes(t.id)
    );
    recommendedTreatments.sort((a, b) => a.price - b.price);

    // Determine recommended category based on investment
    const investmentAns = answers.investment; // e.g., "A", "B", "C"...
    let recommendedCategoryValue = "Tratamento Inicial";
    if (investmentAns === "A" || investmentAns === "B") {
      recommendedCategoryValue = "Tratamento Inicial";
    } else if (investmentAns === "C") {
      recommendedCategoryValue = "Tratamento Longo";
    } else if (investmentAns === "D" || investmentAns === "E") {
      recommendedCategoryValue = "Tratamento Premium";
    }

    const baseCategories = [
      { title: "Tratamento Inicial (Orçamento Baixo)", value: "Tratamento Inicial" },
      { title: "Tratamento Longo (Orçamento Médio)", value: "Tratamento Longo" },
      { title: "Tratamento Premium (Orçamento Alto)", value: "Tratamento Premium" }
    ];

    const orderedCategories = [];
    const recCatObj = baseCategories.find(c => c.value === recommendedCategoryValue);
    if (recCatObj) {
      orderedCategories.push({ title: `Recomendado para você: ${recCatObj.title.split(" (")[0]}`, value: recCatObj.value });
    }
    orderedCategories.push({ title: "Promoções Imperdíveis", value: "Promoção" });

    baseCategories.forEach(c => {
      if (c.value !== recommendedCategoryValue) {
        orderedCategories.push(c);
      }
    });

    return (
      <section className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding-mobile md:py-section-padding-desktop flex flex-col items-center pb-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12 md:mb-16 space-y-4">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-wine-accent mb-stack-md">
            Seu Diagnóstico Personalizado
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Analisamos suas respostas e preparamos um plano ideal para você que está na faixa de{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.age || "sua faixa de idade"}</span>. Identificamos que o ponto que mais incomoda na sua pele hoje é:{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.concern || "sinais de envelhecimento"}</span>.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Sobre seu histórico com outros produtos ou procedimentos:{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.history || "outros cuidados"}</span>. Por isso, compreendemos o seu desejo de focar em{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.goal || "melhorar a pele"}</span> como sua prioridade número um.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Sobre a facilidade em seguir uma rotina em cápsulas:{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.routine || "seguir o tratamento"}</span>. O Rosa Oriental é ideal para cuidar da sua beleza de dentro para fora com máxima praticidade.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-medium">
            Considerando a faixa de investimento escolhida de{" "}
            <span className="font-bold text-[#C97A8F]">{selectedAnswers.investment || "investimento planejado"}</span>, estruturamos as melhores recomendações abaixo para que você inicie sua transformação!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={resetQuiz}
              className="w-full sm:w-auto bg-transparent border-2 border-[#C97A8F] text-[#C97A8F] font-label-bold text-label-bold py-3 px-8 rounded-lg hover:bg-[#C97A8F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
              </svg>
              Refazer Quiz
            </button>
            <button
              className="w-full sm:w-auto bg-[#8B4457] text-white font-label-bold text-label-bold py-3 px-8 rounded-lg hover:bg-opacity-95 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
              </svg>
              Falar com Especialista
            </button>
          </div>
        </div>
        {/* Offers Grid grouped by Category */}
        <div className="w-full space-y-16">
          {orderedCategories.map((category) => {
            const categoryTreatments = treatments.filter(
              (t) => t.budgetCategory === category.value
            );
            if (categoryTreatments.length === 0) return null;

            return (
              <div key={category.value} className="w-full">
                <h2 className="text-2xl md:text-3xl font-serif text-wine-accent mb-6 border-b-2 border-primary-container pb-3 text-left font-semibold flex items-center gap-3">
                  {category.title}
                  {category.value === "Promoção" && (
                    <svg className="w-7 h-7 text-[#C97A8F] animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C12 2 11 5 8 8C4.5 11.5 4.5 16 4.5 16C4.5 20.14 7.86 23.5 12 23.5C16.14 23.5 19.5 20.14 19.5 16C19.5 16 19.5 11.5 16 8C13 5 12 2 12 2ZM12 21.5C9.52 21.5 7.5 19.48 7.5 17C7.5 15.65 8.08 14.43 9 13.58C9 13.58 9 16 11 18L12 18L13 18C15 16 15 13.58 15 13.58C15.92 14.43 16.5 15.65 16.5 17C16.5 19.48 14.48 21.5 12 21.5Z" />
                    </svg>
                  )}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
                  {categoryTreatments.map((treatment) => (
                    <TreatmentCard key={treatment.id} treatment={treatment} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            Ainda tem dúvidas sobre qual é o melhor ritual para você?
          </p>
          <button className="bg-transparent border border-[#8B4457] text-[#8B4457] font-label-bold text-label-bold py-3 px-8 rounded-lg hover:bg-pastel-hover transition-colors duration-300 flex items-center gap-2 mx-auto cursor-pointer">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
            </svg>
            Falar com Especialista
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full bg-primary-container py-section-padding-mobile md:py-section-padding-desktop text-center transition-opacity duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <h1 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-wine-accent mb-stack-sm">
            Descubra o cuidado ideal para sua pele
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Responda este quiz rápido para sabermos mais sobre você e suas necessidades.
          </p>
        </div>
      </section>

      {/* Quiz Interface Section */}
      <section className="w-full py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest min-h-[60vh] flex flex-col">
        <div className="max-w-3xl w-full mx-auto px-margin-mobile md:px-gutter">
          {/* Progress Bar */}
          <div className="mb-stack-lg">
            <div className="w-full bg-primary-container h-2 rounded-full overflow-hidden">
              <div
                className="bg-wine-accent h-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-right mt-2 text-outline font-label-sm text-label-sm uppercase tracking-wider">
              Passo {currentQuestionIndex + 1} de {quizQuestions.length}
            </div>
          </div>
          {/* Quiz Card */}
          <div className="bg-surface rounded-[16px] shadow-bloom p-6 md:p-12 border border-surface-variant relative overflow-hidden flex flex-col transition-all duration-300">
            <h2 className="font-title-sm text-title-sm md:text-title-md text-center text-wine-accent mb-stack-lg">
              {currentQuestion.title}
            </h2>
            {/* Options Grid */}
            <div className="flex flex-col gap-4 mb-stack-lg">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer === option.id;
                return (
                  <label key={option.id} className="cursor-pointer group block">
                    <input
                      className="peer sr-only"
                      name={currentQuestion.id}
                      type="radio"
                      value={option.id}
                      checked={isSelected}
                      onChange={() => handleSelectOption(option.id)}
                    />
                    <div
                      className={`p-4 md:p-6 bg-surface border-2 rounded-lg text-left transition-all duration-300 ease-out shadow-sm flex items-center gap-4 relative hover-lift
                        ${
                          isSelected
                            ? "border-[#C97A8F] bg-surface-bright shadow-bloom"
                            : "border-primary-container group-hover:border-[#C97A8F]"
                        }
                      `}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-300
                          ${
                            isSelected
                              ? "border-[#C97A8F] bg-[#C97A8F]"
                              : "border-outline"
                          }
                        `}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span
                        className={`font-body-md md:font-body-lg text-body-md md:text-body-lg transition-colors duration-300
                          ${
                            isSelected
                              ? "text-wine-accent font-medium"
                              : "text-on-surface"
                          }
                        `}
                      >
                        {option.text}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
            {/* Action Button */}
            <div className="flex justify-between mt-auto pt-stack-md border-t border-surface-variant">
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                  }
                }}
                disabled={currentQuestionIndex === 0}
                className={`font-label-bold text-label-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer
                  ${
                    currentQuestionIndex === 0
                      ? "opacity-50 cursor-not-allowed text-outline"
                      : "text-[#8B4457] hover:bg-pastel-hover"
                  }
                `}
              >
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={!currentAnswer}
                className={`bg-[#C97A8F] text-white font-label-bold text-label-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2
                  ${
                    !currentAnswer
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-opacity-90 hover-lift shadow-sm cursor-pointer"
                  }
                `}
              >
                {isLastQuestion ? "Ver Resultado" : "Próxima"}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    currentAnswer ? "group-hover:translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
