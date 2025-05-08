import type { ProductType } from "@/types/product"

export const products: ProductType[] = [
  {
    id: "1",
    name: "Combo Animales de la Selva",
    shortDescription: "Decoración completa con temática de animales salvajes",
    fullDescription:
      "Transforma tu fiesta en una aventura salvaje con nuestro combo de animales de la selva. Perfecto para niños que aman los animales, este conjunto incluye todo lo que necesitas para crear un ambiente de safari, incluyendo adorables bolsitas de souvenir con diseños de animales.",
    price: 1299.99,
    mainImage: "/images/combo-animales-selva.png",
    additionalImages: [
      "/images/bolsa-souvenir-animales-1.png",
      "/images/bolsa-souvenir-animales-2.png",
      "/images/bolsa-souvenir-animales-3.png",
      "/images/bolsa-souvenir-animales-4.png",
    ],
    items: [
      "10 platos de cartón",
      "10 vasos de papel",
      "20 servilletas",
      "10 gorros de fiesta",
      "1 mantel temático",
      "10 bolsas de souvenir con diseños de animales",
      "20 globos surtidos",
      "1 piñata de león",
    ],
    isNew: true,
    colors: {
      primary: "#618C03",
      secondary: "#A9BF04",
      tertiary: "#D9AE79",
      quaternary: "#A66038",
      background: "from-[#618C03]/10 via-[#A9BF04]/10 to-[#D9AE79]/10",
      gradient: "bg-gradient-to-r from-[#618C03] via-[#A9BF04] to-[#D9AE79]",
      textGradient: "from-[#618C03] via-[#A9BF04] to-[#D9AE79]",
    },
  },
  {
    id: "2",
    name: "Combo Sirenita Encantada",
    shortDescription: "Todo para una fiesta mágica bajo el mar",
    fullDescription:
      "Sumérgete en un mundo submarino mágico con nuestro combo de Sirenita. Decoraciones brillantes y accesorios encantadores que transformarán cualquier espacio en un reino bajo el mar lleno de maravillas y fantasía.",
    price: 1499.99,
    mainImage: "/images/portada-sirenita-encantada.png",
    additionalImages: [
      "/images/globo-cola-sirena.png",
      "/images/globo-estrella.png",
      "/images/globo-concha.png",
      "/placeholder.svg?height=200&width=300",
    ],
    items: [
      "10 platos con diseño marino",
      "10 vasos decorados",
      "20 servilletas azules",
      "10 coronas de sirena",
      "1 mantel oceánico",
      "10 bolsas de regalo",
      "20 globos metálicos",
      "1 centro de mesa de castillo submarino",
    ],
    colors: {
      primary: "#F2CEDB",
      secondary: "#B59CD9",
      tertiary: "#8265BF",
      quaternary: "#80DDF2",
      background: "from-[#F2CEDB]/10 via-[#B59CD9]/10 to-[#80DDF2]/10",
      gradient: "bg-gradient-to-r from-[#F2CEDB] via-[#B59CD9] to-[#80DDF2]",
      textGradient: "from-[#F2CEDB] via-[#B59CD9] to-[#80DDF2]",
    },
  },
]
