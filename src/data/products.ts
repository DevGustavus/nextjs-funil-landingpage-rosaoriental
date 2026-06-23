import { Product } from "@/types/product";
import { treatmentGroups } from "./treatments";

export const products: Product[] = [
  { 
    id: "1", 
    name: "Rosa Oriental", 
    description: "Tratamento principal para vitalidade e brilho.", 
    imageSrc: "/images/rosa-oriental.jpg",
    fullDescription: "O Rosa Oriental é um tratamento exclusivo formulado para restaurar a vitalidade e o brilho natural da sua pele. Combinando a sabedoria ancestral com a ciência moderna, ele atua profundamente para rejuvenescer e nutrir.",
    price: 197.90,
    benefits: ["Pele mais iluminada", "Redução de linhas finas", "Hidratação profunda"],
    ingredients: ["Extrato de Rosa", "Ácido Hialurônico", "Vitamina C"],
    usageInstructions: "Aplique de 3 a 4 gotas no rosto limpo e seco, massageando suavemente até completa absorção.",
    treatments: treatmentGroups.find(g => g.id === "rosa-oriental")?.treatments || []
  },
  { 
    id: "2", 
    name: "GlowEssence Sérum", 
    description: "Tratamento externo para hidrataçao facial.", 
    imageSrc: "/images/glowEssence-serum.jpg",
    fullDescription: "GlowEssence Sérum é a solução perfeita para quem busca uma hidratação intensa e duradoura. Sua textura leve é rapidamente absorvida, deixando a pele com um toque aveludado e radiante.",
    price: 147.90,
    benefits: ["Hidratação 24h", "Toque seco", "Ação antioxidante"],
    ingredients: ["Niacinamida", "Extrato de Chá Verde", "Glicerina"],
    usageInstructions: "Use diariamente, pela manhã e à noite, antes do seu creme hidratante habitual.",
    treatments: treatmentGroups.find(g => g.id === "glowessence-serum")?.treatments || []
  },
  { 
    id: "3", 
    name: "Creme LisseaNutri", 
    description: "Creme hidratante corporal contra celulite.", 
    imageSrc: "/images/creme-lissea-nutri.png",
    fullDescription: "Este Creme é especialmente desenvolvido para combater os sinais visíveis da celulite, enquanto hidrata profundamente a pele, deixando-a mais firme e tonificada.",
    price: 127.90,
    benefits: ["Melhora a firmeza da pele", "Reduz aspecto de casca de laranja", "Rápida absorção"],
    ingredients: ["Cafeína", "Óleo de Amêndoas", "Colágeno"],
    usageInstructions: "Aplique nas áreas desejadas com movimentos circulares até a completa absorção do produto.",
    treatments: treatmentGroups.find(g => g.id === "lisseanutri")?.treatments || []
  },
  { 
    id: "4", 
    name: "Detox Suplemento", 
    description: "Para desintoxicar e emagrecer.", 
    imageSrc: "/images/detox-oriental.jpg",
    fullDescription: "O Detox Suplemento atua de dentro para fora, promovendo a desintoxicação do organismo e auxiliando de forma natural e saudável no processo de emagrecimento.",
    price: 97.90,
    benefits: ["Acelera o metabolismo", "Reduz o inchaço", "Aumenta a energia"],
    ingredients: ["Chá Verde", "Gengibre", "Limão"],
    usageInstructions: "Tome 2 cápsulas ao dia, preferencialmente antes das principais refeições.",
    treatments: treatmentGroups.find(g => g.id === "detox-oriental")?.treatments || []
  },
  { 
    id: "5", 
    name: "Rosa Sono", 
    description: "Para um sono reparador da beleza.", 
    imageSrc: "/images/rosa-do-sono.jpg",
    fullDescription: "O Rosa Sono foi criado para potencializar a regeneração celular que ocorre durante a noite. Acorde com uma pele descansada, nutrida e visivelmente mais jovem.",
    price: 157.90,
    benefits: ["Regeneração celular noturna", "Relaxamento profundo", "Pele revitalizada ao acordar"],
    ingredients: ["Óleo Essencial de Lavanda", "Melatonina (uso tópico)", "Extrato de Camomila"],
    usageInstructions: "Aplique no rosto, pescoço e colo todas as noites antes de dormir.",
    treatments: treatmentGroups.find(g => g.id === "rosa-do-sono")?.treatments || []
  },
];
