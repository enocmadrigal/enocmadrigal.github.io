import { Game } from "../models/Game";

export const games: Game[] = [
  {
    id: 1,
    title: "Catan",
    publisher: "Kosmos",
    categories: ["Estrategia", "Familiar"],
    players: "3-4",
    duration: "60-90 min",
    mode: "Individual o en equipos",
    description: "Construye y expande tu colonia en la isla de Catan.",
    rules: "Cada jugador recibe recursos según la tirada de dados y puede construir caminos, asentamientos y ciudades.",
    video: "assets/videos/catan.mp4",
    image: "assets/images/catan_main.jpg",
    secondaryImages: [
      "assets/images/catan_1.jpg",
      "assets/images/catan_2.jpg"
    ],
    rankValue: 10,
    orderPurchased: 1
  },
  {
    id: 2,
    title: "Dixit",
    publisher: "Libellud",
    categories: ["Party", "Familiar"],
    players: "3-6",
    duration: "30 min",
    mode: "Individual",
    description: "Juego de cartas imaginativo donde cuentas historias con tus imágenes.",
    rules: "Un jugador elige una carta y da una pista. Los demás jugadores eligen cartas que coincidan con la pista y votan.",
    video: "assets/videos/dixit.mp4",
    image: "assets/images/dixit_main.jpg",
    secondaryImages: [
      "assets/images/dixit_1.jpg",
      "assets/images/dixit_2.jpg"
    ],
    rankValue: 8,
    orderPurchased: 2
  },
  {
    id: 3,
    title: "Terraforming Mars",
    publisher: "FryxGames",
    categories: ["Estrategia"],
    players: "1-5",
    duration: "120 min",
    mode: "Individual",
    description: "Compite por terraformar Marte a través de proyectos y recursos.",
    rules: "Cada jugador usa cartas para incrementar temperatura, oxígeno y océanos y ganar puntos de victoria.",
    video: "assets/videos/terraforming_mars.mp4",
    image: "assets/images/terraforming_mars_main.jpg",
    secondaryImages: [
      "assets/images/terraforming_mars_1.jpg",
      "assets/images/terraforming_mars_2.jpg"
    ],
    rankValue: 9,
    orderPurchased: 3
  },
  {
    id: 4,
    title: "Azul",
    publisher: "NextMove Games",
    categories: ["Familiar", "Estrategia"],
    players: "2-4",
    duration: "30-45 min",
    mode: "Individual",
    description: "Coloca baldosas de colores para completar patrones y ganar puntos.",
    rules: "En cada ronda, los jugadores eligen baldosas de la fábrica y las colocan en su tablero personal.",
    video: "assets/videos/azul.mp4",
    image: "assets/images/azul_main.jpg",
    secondaryImages: [
      "assets/images/azul_1.jpg",
      "assets/images/azul_2.jpg"
    ],
    rankValue: 7,
    orderPurchased: 4
  },
  {
    id: 5,
    title: "Ticket to Ride",
    publisher: "Days of Wonder",
    categories: ["Familiar", "Estrategia"],
    players: "2-5",
    duration: "45-60 min",
    mode: "Individual",
    description: "Conecta ciudades con trenes y completa rutas para ganar puntos.",
    rules: "Los jugadores roban cartas, colocan trenes en rutas y completan tickets de destino.",
    video: "assets/videos/ticket_to_ride.mp4",
    image: "assets/images/ticket_to_ride_main.jpg",
    secondaryImages: [
      "assets/images/ticket_to_ride_1.jpg",
      "assets/images/ticket_to_ride_2.jpg"
    ],
    rankValue: 9,
    orderPurchased: 5
  }
];
