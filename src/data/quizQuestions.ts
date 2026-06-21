import { Question } from "@/types/quiz";

export const quizQuestions: Question[] = [
  {
    id: "age",
    title: "1. Qual sua faixa de idade?",
    options: [
      { id: "A", text: "30 a 39 anos" },
      { id: "B", text: "40 a 49 anos" },
      { id: "C", text: "50 a 59 anos" },
      { id: "D", text: "60 anos ou mais" },
    ],
  },
  {
    id: "concern",
    title: "2. O que mais incomoda você na sua pele hoje?",
    options: [
      { id: "A", text: "Rugas e linhas de expressão" },
      { id: "B", text: "Flacidez no rosto, pescoço ou papada" },
      { id: "C", text: "Manchas, olheiras ou pele sem viço" },
      { id: "D", text: "Ressecamento e aparência cansada" },
      { id: "E", text: "Um pouco de tudo" },
    ],
  },
  {
    id: "history",
    title: "3. Você já tentou algum produto ou tratamento para melhorar a aparência da pele?",
    options: [
      { id: "A", text: "Sim, cremes ou séruns" },
      { id: "B", text: "Sim, colágeno comum de farmácia" },
      { id: "C", text: "Sim, procedimentos estéticos" },
      { id: "D", text: "Sim, várias coisas, mas nada me satisfez" },
      { id: "E", text: "Ainda não tentei nada específico" },
    ],
  },
  {
    id: "goal",
    title: "4. O que você mais gostaria de melhorar primeiro?",
    options: [
      { id: "A", text: "Firmeza da pele" },
      { id: "B", text: "Hidratação e brilho natural" },
      { id: "C", text: "Aparência mais jovem e descansada" },
      { id: "D", text: "Manchas e sinais do tempo" },
      { id: "E", text: "Minha autoestima ao me olhar no espelho" },
    ],
  },
  {
    id: "routine",
    title: "5. Você teria facilidade para seguir uma rotina simples em cápsulas todos os dias?",
    options: [
      { id: "A", text: "Sim, acho prático" },
      { id: "B", text: "Sim, principalmente se tiver orientação" },
      { id: "C", text: "Tenho interesse, mas quero entender melhor" },
      { id: "D", text: "Prefiro apenas cremes ou tratamentos externos" },
    ],
  },
  {
    id: "investment",
    title: "6. Qual faixa de investimento faz mais sentido para você hoje em um tratamento de cuidados com a pele?",
    options: [
      { id: "A", text: "Até R$ 297,00 — quero começar com algo mais acessível" },
      { id: "B", text: "Entre R$ 347,00 e R$ 447,00 — quero um tratamento intermediário" },
      { id: "C", text: "Entre R$ 547,00 e R$ 697,00 — quero um cuidado mais completo" },
      { id: "D", text: "Entre R$ 897,00 e R$ 1.097,00 — quero um tratamento mais prolongado" },
      { id: "E", text: "Acima de R$ 1.197,00 — quero o plano mais completo, com bônus e maior duração" },
      { id: "F", text: "Ainda não sei, quero uma orientação para escolher o melhor plano" },
    ],
  },
];
