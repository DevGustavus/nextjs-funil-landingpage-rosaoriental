import { Treatment, TreatmentGroup } from "@/types/treatment";

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: "rosa-oriental",
    title: "Rosa Oriental",
    description: "Tratamentos em cápsulas do Rosa Oriental para cuidados com a pele e rejuvenescimento.",
    treatments: [
      {
        id: "rosa-1m",
        name: "Rosa Oriental - 1 Mês de Tratamento",
        durationMonths: 1,
        price: 207,
        commission: 111.78,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "1 Frasco de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam69192x"
      },
      {
        id: "rosa-2m",
        name: "Rosa Oriental - 2 Meses de Tratamento",
        durationMonths: 2,
        price: 297,
        commission: 160.38,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "2 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camk7g75o"
      },
      {
        id: "rosa-3m",
        name: "Rosa Oriental - 3 Meses de Tratamento",
        durationMonths: 3,
        price: 347,
        commission: 187.38,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "3 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camx6p61k"
      },
      {
        id: "rosa-3l4",
        name: "Rosa Oriental - Promoção Compra 3 leva 4",
        durationMonths: 4,
        price: 347,
        commission: 156.15,
        budgetCategory: "Promoção",
        tag: "Promoção",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "4 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camn707p1"
      },
      {
        id: "rosa-5m",
        name: "Rosa Oriental - 5 Meses de Tratamento",
        durationMonths: 5,
        price: 447,
        commission: 241.38,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "5 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camp7k7r4"
      },
      {
        id: "rosa-5l6",
        name: "Rosa Oriental - Promoção Compra 5 leva 6",
        durationMonths: 6,
        price: 447,
        commission: 201.15,
        budgetCategory: "Promoção",
        tag: "Mais Popular",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "6 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam54042e"
      },
      {
        id: "rosa-7m",
        name: "Rosa Oriental - 7 Meses de Tratamento",
        durationMonths: 7,
        price: 547,
        commission: 295.38,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "7 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam7jzj2n"
      },
      {
        id: "rosa-9m",
        name: "Rosa Oriental - 9 Meses de Tratamento",
        durationMonths: 9,
        price: 697,
        commission: 376.38,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "9 Frascos de Rosa Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camyxnxk0"
      },
      {
        id: "rosa-12m-creme",
        name: "Rosa Oriental - 12 Meses + 1 Creme LisseaNutri",
        durationMonths: 12,
        price: 897,
        commission: 484.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Creme LisseaNutri",
        isTurbo: false,
        hasBonus: true,
        isPromo: false,
        items: [
          "12 Frascos de Rosa Oriental",
          "1 Creme LisseaNutri",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camlg9gyg"
      },
      {
        id: "rosa-12m-massager",
        name: "Rosa Oriental - 12 Meses + 1 Massageador Facial",
        durationMonths: 12,
        price: 897,
        commission: 484.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Massageador Facial",
        isTurbo: false,
        hasBonus: true,
        isPromo: false,
        items: [
          "12 Frascos de Rosa Oriental",
          "1 Massageador Facial",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam0m8m2o"
      },
      {
        id: "rosa-16m-creme",
        name: "Rosa Oriental - 16 Meses + 1 Creme LisseaNutri",
        durationMonths: 16,
        price: 1097,
        commission: 592.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Creme LisseaNutri",
        isTurbo: false,
        hasBonus: true,
        isPromo: false,
        items: [
          "16 Frascos de Rosa Oriental",
          "1 Creme LisseaNutri",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camrm6m8d"
      },
      {
        id: "rosa-16m-massager",
        name: "Rosa Oriental - 16 Meses + 1 Massageador Facial",
        durationMonths: 16,
        price: 1097,
        commission: 592.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Massageador Facial",
        isTurbo: false,
        hasBonus: true,
        isPromo: false,
        items: [
          "16 Frascos de Rosa Oriental",
          "1 Massageador Facial",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam18m82p"
      },
      {
        id: "rosa-turbo-12m",
        name: "Rosa Oriental Turbo - 12 Meses + Creme + Massageador",
        durationMonths: 12,
        price: 1197,
        commission: 646.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Creme + Massageador",
        isTurbo: true,
        hasBonus: true,
        isPromo: false,
        items: [
          "12 Frascos de Rosa Oriental Turbo",
          "1 Creme LisseaNutri",
          "1 Massageador Facial",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam9161z4"
      },
      {
        id: "rosa-turbo-16m",
        name: "Rosa Oriental Turbo - 16 Meses + Creme + Massageador",
        durationMonths: 16,
        price: 1497,
        commission: 808.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Creme + Massageador",
        isTurbo: true,
        hasBonus: true,
        isPromo: false,
        items: [
          "16 Frascos de Rosa Oriental Turbo",
          "1 Creme LisseaNutri",
          "1 Massageador Facial",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camgmrmdz"
      },
      {
        id: "rosa-turbo-20m",
        name: "Rosa Oriental Turbo - 20 Meses + Creme + Massageador",
        durationMonths: 20,
        price: 1897,
        commission: 1024.38,
        budgetCategory: "Tratamento Premium",
        bonus: "Creme + Massageador",
        isTurbo: true,
        hasBonus: true,
        isPromo: false,
        items: [
          "20 Frascos de Rosa Oriental Turbo",
          "1 Creme LisseaNutri",
          "1 Massageador Facial",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camgmrmdz"
      }
    ]
  },
  {
    id: "glowessence-serum",
    title: "GlowEssence Sérum",
    description: "Tratamentos com GlowEssence Sérum para cuidados faciais, hidratação, viço e aparência renovada da pele.",
    treatments: [
      {
        id: "glow-1m",
        name: "GlowEssence Sérum - 1 Mês de Tratamento",
        durationMonths: 1,
        price: 207,
        commission: 113.85,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "1 Frasco de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camlg97od"
      },
      {
        id: "glow-3m",
        name: "GlowEssence Sérum - 3 Meses de Tratamento",
        durationMonths: 3,
        price: 327,
        commission: 179.85,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "3 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camm7ezdp"
      },
      {
        id: "glow-5m",
        name: "GlowEssence Sérum - 5 Meses de Tratamento",
        durationMonths: 5,
        price: 447,
        commission: 245.85,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "5 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam91649o"
      },
      {
        id: "glow-12m",
        name: "GlowEssence Sérum - 12 Meses de Tratamento",
        durationMonths: 12,
        price: 787,
        commission: 432.85,
        budgetCategory: "Tratamento Premium",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "12 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/came0pv9l"
      },
      {
        id: "glow-3l4",
        name: "GlowEssence Sérum - Promoção Compra 3 leva 4",
        durationMonths: 4,
        price: 327,
        commission: 147.15,
        budgetCategory: "Promoção",
        tag: "Promoção",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "4 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam18mkzv"
      },
      {
        id: "glow-5l6",
        name: "GlowEssence Sérum - Promoção Compra 5 leva 6",
        durationMonths: 6,
        price: 447,
        commission: 201.15,
        budgetCategory: "Promoção",
        tag: "Mais Popular",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "6 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camk7grjr"
      },
      {
        id: "glow-16m",
        name: "GlowEssence Sérum - 16 Meses de Tratamento",
        durationMonths: 16,
        price: 1087,
        commission: 597.85,
        budgetCategory: "Tratamento Premium",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "16 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camj2mn46"
      },
      {
        id: "glow-20m",
        name: "GlowEssence Sérum - 20 Meses de Tratamento",
        durationMonths: 20,
        price: 1427,
        commission: 784.85,
        budgetCategory: "Tratamento Premium",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "20 Frascos de GlowEssence Sérum",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camom1gx6"
      }
    ]
  },
  {
    id: "rosa-do-sono",
    title: "Rosa do Sono",
    description: "Tratamentos com Rosa do Sono para rotina noturna, descanso da pele e cuidados complementares.",
    treatments: [
      {
        id: "sono-1m",
        name: "Rosa do Sono - 1 Mês de Tratamento",
        durationMonths: 1,
        price: 147,
        commission: 79.38,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "1 Frasco de Rosa do Sono",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camdmlxgo"
      },
      {
        id: "sono-3m",
        name: "Rosa do Sono - 3 Meses de Tratamento",
        durationMonths: 3,
        price: 297,
        commission: 160.38,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "3 Frascos de Rosa do Sono",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam69148g"
      },
      {
        id: "sono-5m",
        name: "Rosa do Sono - 5 Meses de Tratamento",
        durationMonths: 5,
        price: 397,
        commission: 214.38,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "5 Frascos de Rosa do Sono",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camx6pn88"
      },
      {
        id: "sono-12m",
        name: "Rosa do Sono - 12 Meses de Tratamento",
        durationMonths: 12,
        price: 797,
        commission: 430.38,
        budgetCategory: "Tratamento Premium",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "12 Frascos de Rosa do Sono",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camvmyzrl"
      }
    ]
  },
  {
    id: "detox-oriental",
    title: "Detox Oriental",
    description: "Tratamentos com Detox Oriental para cuidados complementares, equilíbrio, bem-estar e rotina de autocuidado.",
    treatments: [
      {
        id: "detox-1m",
        name: "Detox Oriental - 1 Mês de Tratamento",
        durationMonths: 1,
        price: 197,
        commission: 108.35,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "1 Frasco de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camyxnrm9"
      },
      {
        id: "detox-3m",
        name: "Detox Oriental - 3 Meses de Tratamento",
        durationMonths: 3,
        price: 297,
        commission: 163.35,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "3 Frascos de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camlg97rd"
      },
      {
        id: "detox-5m",
        name: "Detox Oriental - 5 Meses de Tratamento",
        durationMonths: 5,
        price: 397,
        commission: 218.35,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "5 Frascos de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camn70mg2"
      },
      {
        id: "detox-12m",
        name: "Detox Oriental - 12 Meses de Tratamento",
        durationMonths: 12,
        price: 697,
        commission: 383.35,
        budgetCategory: "Tratamento Premium",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "12 Frascos de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camrm6xog"
      },
      {
        id: "detox-3l4",
        name: "Detox Oriental - Promoção Compra 3 leva 4",
        durationMonths: 4,
        price: 297,
        commission: 133.65,
        budgetCategory: "Promoção",
        tag: "Promoção",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "4 Frascos de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/cam8md4jn"
      },
      {
        id: "detox-5l6",
        name: "Detox Oriental - Promoção Compra 5 leva 6",
        durationMonths: 6,
        price: 397,
        commission: 178.65,
        budgetCategory: "Promoção",
        tag: "Mais Popular",
        isTurbo: false,
        hasBonus: false,
        isPromo: true,
        items: [
          "6 Frascos de Detox Oriental",
          "Acompanhamento Especializado"
        ],
        link: "https://pay.braip.co/campanhas/cpa/camm7ez8p"
      }
    ]
  },
  {
    id: "lisseanutri",
    title: "LisseaNutri",
    description: "Tratamentos com creme facial LisseaNutri para cuidados com a pele, hidratação, nutrição e rotina de skincare.",
    treatments: [
      {
        id: "lissea-1m",
        name: "LisseaNutri - 1 Mês de Tratamento",
        durationMonths: 1,
        price: 227,
        commission: 122.58,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "1 Creme Facial LisseaNutri",
          "Acompanhamento Especializado"
        ],
        link: ""
      },
      {
        id: "lissea-3m",
        name: "LisseaNutri - 3 Meses de Tratamento",
        durationMonths: 3,
        price: 437,
        commission: 235.98,
        budgetCategory: "Tratamento Inicial",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "3 Cremes Faciais LisseaNutri",
          "Acompanhamento Especializado"
        ],
        link: ""
      },
      {
        id: "lissea-5m",
        name: "LisseaNutri - 5 Meses de Tratamento",
        durationMonths: 5,
        price: 587,
        commission: 316.98,
        budgetCategory: "Tratamento Longo",
        isTurbo: false,
        hasBonus: false,
        isPromo: false,
        items: [
          "5 Cremes Faciais LisseaNutri",
          "Acompanhamento Especializado"
        ],
        link: ""
      }
    ]
  }
];

export const treatments: Treatment[] = treatmentGroups.flatMap(
  (group) => group.treatments
);
