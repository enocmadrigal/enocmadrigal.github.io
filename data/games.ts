import { Game } from "../models/Game.js";

export const games: Game[] = [
  {
    id: 1,
    rankValue: 100,
    name: "Catan",
    publisher: "Kosmos",
    categories: ["Estrategia", "Familiar"],
    players: "3-4",
    duration: "60-90 min",
    mode: "Individual",
    description: "Construye y expande tu colonia en la isla de Catan.",
    rules: "Cada jugador recibe recursos según la tirada de dados y puede construir caminos, asentamientos y ciudades.",
    videoUrl: "assets/video/catan.mp4",
    mainImage: "assets/img/catan_main.jpg",
    secondaryImages: [
      "assets/img/catan_1.jpg",
      "assets/img/catan_2.jpg"
    ],
    purchaseOrder: 1
  }
  // ...agrega más juegos aquí...
];