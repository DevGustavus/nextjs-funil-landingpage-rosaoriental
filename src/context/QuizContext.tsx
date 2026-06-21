"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AnswersState } from "@/types/quiz";

type QuizStep = "quiz" | "result";

interface QuizContextData {
  step: QuizStep;
  setStep: (step: QuizStep) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: AnswersState;
  setAnswers: (answers: AnswersState) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextData | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<QuizStep>("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});

  const resetQuiz = () => {
    setStep("quiz");
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return (
    <QuizContext.Provider
      value={{
        step,
        setStep,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        answers,
        setAnswers,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
