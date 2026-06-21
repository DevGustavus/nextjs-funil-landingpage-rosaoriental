export type BudgetCategory = 
  | "Tratamento Inicial" 
  | "Tratamento Longo" 
  | "Tratamento Premium" 
  | "Promoção";

export type Treatment = {
  id: string;
  name: string;
  durationMonths: number;
  price: number;
  budgetCategory: BudgetCategory;
  bonus?: string;
  tag?: string; // e.g. "Mais Popular", "-30% OFF"
  isTurbo?: boolean;
  items: string[];
  link: string;
};
