export const games = [
    {
        id: 1,
        rankValue: 100, //TODO
        name: "Catan",
        publisher: "Kosmos",
        categories: ["Estrategia", "Familiar"],
        players: "3-4",
        duration: "60-90 min",
        mode: "Competitivo",
        description: "Construye y expande tu colonia en la isla de Catan, comerciando y gestionando recursos para ganar puntos de victoria.",
        rules: "Cada jugador tira los dados, recibe recursos, comercia y construye caminos, asentamientos y ciudades. Gana el primero en llegar a 10 puntos de victoria.",
        videoUrl: "catan.mp4", //TODO
        mainImage: "catan.jpg",
        secondaryImages: ["catan_1.jpg", "catan_2.jpg", "catan.jpeg"],
        purchaseOrder: 1 //TODO
    },
    {
        id: 2,
        rankValue: 99, //TODO
        name: "Catan: Navegantes",
        publisher: "Kosmos",
        categories: ["Estrategia", "Expansión"],
        players: "3-4",
        duration: "90-120 min",
        mode: "Competitivo",
        description: "Expansión de Catan que añade navegación y nuevas islas para explorar.",
        rules: "Incluye reglas de navegación y escenarios adicionales. Requiere el juego base.",
        videoUrl: "catanNavegantes.mp4", //TODO
        mainImage: "catanNavegantes1.jpg",
        secondaryImages: ["catanNavegantes2.jpg"],
        purchaseOrder: 2 //TODO
    },
    {
        id: 3,
        rankValue: 98, //TODO
        name: "Catan Plus",
        publisher: "Kosmos",
        categories: ["Estrategia", "Expansión"],
        players: "3-6",
        duration: "90-120 min",
        mode: "Competitivo",
        description: "Edición especial de Catan que incluye expansiones y minijuegos.",
        rules: "Incluye reglas del juego base y de las expansiones incluidas.",
        videoUrl: "catanPlus.mp4", //TODO
        mainImage: "catanPlus1.jpg",
        secondaryImages: ["catanPlus2.jpg"],
        purchaseOrder: 3 //TODO
    },
    {
        id: 4,
        rankValue: 97, //TODO
        name: "Ajedrez",
        publisher: "Genérico",
        categories: ["Estrategia", "Clásico"],
        players: "2",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Juego de estrategia clásico donde dos jugadores intentan dar jaque mate al rey rival.",
        rules: "Cada jugador mueve sus piezas por turnos según las reglas del ajedrez. Gana quien da jaque mate.",
        videoUrl: "ajedrez.mp4", //TODO
        mainImage: "ajedrez1.jpg",
        secondaryImages: [],
        purchaseOrder: 4 //TODO
    },
    {
        id: 5,
        rankValue: 96, //TODO
        name: "Backgammon",
        publisher: "Genérico",
        categories: ["Clásico", "Estrategia"],
        players: "2",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de mesa clásico donde los jugadores mueven sus fichas según el resultado de los dados.",
        rules: "El objetivo es sacar todas tus fichas del tablero antes que tu oponente.",
        videoUrl: "backgammon.mp4", //TODO
        mainImage: "backgammon.jpg",
        secondaryImages: [],
        purchaseOrder: 5 //TODO
    },
    {
        id: 6,
        rankValue: 95, //TODO
        name: "Baraja Española",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-6",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja tradicional española para juegos como Brisca, Mus, Tute, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "barajaEspanola.mp4", //TODO
        mainImage: "barajaEspañola1.jpg",
        secondaryImages: [],
        purchaseOrder: 6 //TODO
    },
    {
        id: 7,
        rankValue: 94, //TODO
        name: "Baraja Poker Dorada",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-10",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja de poker dorada para juegos como Poker, Blackjack, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "barajaPokerDorada.mp4", //TODO
        mainImage: "barajaPokerDorada1.jpg",
        secondaryImages: [],
        purchaseOrder: 7 //TODO
    },
    {
        id: 8,
        rankValue: 93, //TODO
        name: "Baraja Poker Plateada",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-10",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja de poker plateada para juegos como Poker, Blackjack, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "barajaPokerPlateada.mp4", //TODO
        mainImage: "barajaPokerPlateada1.jpg",
        secondaryImages: [],
        purchaseOrder: 8 //TODO
    },
    {
        id: 9,
        rankValue: 92, //TODO
        name: "Basta Original",
        publisher: "Genérico",
        categories: ["Party", "Palabras"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego de palabras donde los jugadores deben escribir palabras que empiecen con una letra determinada.",
        rules: "Se elige una letra y los jugadores deben escribir palabras en diferentes categorías lo más rápido posible.",
        videoUrl: "bastaOriginal.mp4", //TODO
        mainImage: "bastaOriginal.jpg",
        secondaryImages: [],
        purchaseOrder: 9 //TODO
    },
    {
        id: 10,
        rankValue: 91, //TODO
        name: "BattleShip",
        publisher: "Hasbro",
        categories: ["Estrategia", "Clásico"],
        players: "2",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de estrategia donde los jugadores intentan hundir la flota de su oponente.",
        rules: "Coloca tus barcos en el tablero y adivina las posiciones de los barcos rivales.",
        videoUrl: "battleShip.mp4", //TODO
        mainImage: "battleShip1.jpg",
        secondaryImages: ["battleShip2.jpg"],
        purchaseOrder: 10 //TODO
    },
    {
        id: 11,
        rankValue: 90, //TODO
        name: "Blockbuster",
        publisher: "Big Potato Games",
        categories: ["Party", "Películas"],
        players: "4-12",
        duration: "30 min",
        mode: "Equipos",
        description: "Juego de adivinanza y mímica sobre películas, ideal para fiestas.",
        rules: "Los equipos compiten adivinando películas a través de mímica, frases y palabras clave.",
        videoUrl: "blockbuster.mp4", //TODO
        mainImage: "blockbuster1.jpg",
        secondaryImages: [],
        purchaseOrder: 11 //TODO
    },
    {
        id: 12,
        rankValue: 89, //TODO
        name: "Candy Land",
        publisher: "Hasbro",
        categories: ["Infantil", "Clásico"],
        players: "2-4",
        duration: "15-30 min",
        mode: "Competitivo",
        description: "Juego de mesa clásico para niños donde avanzas por un tablero de caramelos.",
        rules: "Los jugadores avanzan según las cartas de colores, el primero en llegar al final gana.",
        videoUrl: "candyLand.mp4", //TODO
        mainImage: "candyLand1.jpg",
        secondaryImages: [],
        purchaseOrder: 12 //TODO
    },
    {
        id: 13,
        rankValue: 88, //TODO
        name: "Canicas",
        publisher: "Genérico",
        categories: ["Clásico", "Habilidad"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego tradicional de habilidad con canicas.",
        rules: "Los jugadores lanzan canicas para sacar las de los demás de un círculo.",
        videoUrl: "canicas.mp4", //TODO
        mainImage: "canicas1.jpg",
        secondaryImages: ["canicas2.jpg", "canicas3.jpg"],
        purchaseOrder: 13 //TODO
    },
    {
        id: 14,
        rankValue: 87, //TODO
        name: "Caras y Gestos",
        publisher: "Hasbro",
        categories: ["Party", "Mímica"],
        players: "4-16",
        duration: "20-30 min",
        mode: "Equipos",
        description: "Juego de mímica donde los jugadores deben adivinar palabras o frases.",
        rules: "Un jugador actúa y su equipo debe adivinar la palabra antes de que se acabe el tiempo.",
        videoUrl: "carasYGestos.mp4", //TODO
        mainImage: "carasYGestos.jpg",
        secondaryImages: ["carasYGestos1.jpg", "carasYGestos2.jpg"],
        purchaseOrder: 14 //TODO
    },
    {
        id: 15,
        rankValue: 86, //TODO
        name: "Casino Fabuloso",
        publisher: "Genérico",
        categories: ["Cartas", "Apuestas"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas y apuestas con temática de casino.",
        rules: "Depende de la variante jugada.",
        videoUrl: "casinoFabuloso.mp4", //TODO
        mainImage: "casinoFabuloso1.jpg",
        secondaryImages: ["casinoFabuloso2.jpg"],
        purchaseOrder: 15 //TODO
    },
    {
        id: 16,
        rankValue: 85, //TODO
        name: "Clue",
        publisher: "Hasbro",
        categories: ["Misterio", "Deducción"],
        players: "2-6",
        duration: "45-60 min",
        mode: "Competitivo",
        description: "Juego de deducción donde los jugadores intentan resolver un asesinato.",
        rules: "Los jugadores hacen preguntas y deducen quién, con qué arma y en qué lugar ocurrió el crimen.",
        videoUrl: "clue.mp4", //TODO
        mainImage: "clue1.jpg",
        secondaryImages: [],
        purchaseOrder: 16 //TODO
    },
    {
        id: 17,
        rankValue: 84, //TODO
        name: "Cubo Rubik 3x3",
        publisher: "Rubik's",
        categories: ["Habilidad", "Puzzle"],
        players: "1",
        duration: "Variable",
        mode: "Individual",
        description: "El clásico cubo de Rubik 3x3 para resolver rompecabezas.",
        rules: "Gira las caras del cubo hasta que cada una tenga un solo color.",
        videoUrl: "cuboRubik3x3.mp4", //TODO
        mainImage: "cuboRubik3x3.jpg",
        secondaryImages: [],
        purchaseOrder: 17 //TODO
    },
    {
        id: 18,
        rankValue: 83, //TODO
        name: "Damas Chinas",
        publisher: "Genérico",
        categories: ["Clásico", "Estrategia"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego clásico donde los jugadores intentan mover todas sus piezas al lado opuesto del tablero.",
        rules: "Mueve tus piezas saltando sobre otras para llegar al lado opuesto.",
        videoUrl: "damasChinas.mp4", //TODO
        mainImage: "damasChinas.jpg",
        secondaryImages: [],
        purchaseOrder: 18 //TODO
    },
    {
        id: 19,
        rankValue: 82, //TODO
        name: "Disney Mania",
        publisher: "Disney",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia con preguntas sobre películas y personajes de Disney.",
        rules: "Responde preguntas de trivia para avanzar en el tablero.",
        videoUrl: "disneyMania.mp4", //TODO
        mainImage: "disneyMania1.jpg",
        secondaryImages: [],
        purchaseOrder: 19 //TODO
    },
    {
        id: 20,
        rankValue: 81, //TODO
        name: "Divertilandia Extrema",
        publisher: "Genérico",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia y retos para toda la familia.",
        rules: "Responde preguntas y supera retos para avanzar.",
        videoUrl: "divertilandiaExtrema.mp4", //TODO
        mainImage: "divertilandiaExtrema1.jpg",
        secondaryImages: ["divertilandiaExtrema2.jpg"],
        purchaseOrder: 20 //TODO
    },
    // ...continuación del array games...
    {
        id: 21,
        rankValue: 80, //TODO
        name: "Domino Clásico",
        publisher: "Genérico",
        categories: ["Clásico", "Familiar"],
        players: "2-4",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego clásico de fichas donde los jugadores deben emparejar los números.",
        rules: "Coloca fichas emparejando los números en los extremos. Gana quien se quede sin fichas primero.",
        videoUrl: "dominoClasico.mp4", //TODO
        mainImage: "dominoClasico.jpg",
        secondaryImages: [],
        purchaseOrder: 21 //TODO
    },
    {
        id: 22,
        rankValue: 79, //TODO
        name: "Domino Resina",
        publisher: "Genérico",
        categories: ["Clásico", "Familiar"],
        players: "2-4",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión de dominó con fichas de resina.",
        rules: "Coloca fichas emparejando los números en los extremos. Gana quien se quede sin fichas primero.",
        videoUrl: "dominoResina.mp4", //TODO
        mainImage: "dominoResina.jpg",
        secondaryImages: [],
        purchaseOrder: 22 //TODO
    },
    {
        id: 23,
        rankValue: 78, //TODO
        name: "Exit",
        publisher: "Devir",
        categories: ["Escape Room", "Cooperativo"],
        players: "1-4",
        duration: "45-90 min",
        mode: "Cooperativo",
        description: "Juego de escape room de mesa donde los jugadores resuelven acertijos para escapar.",
        rules: "Resuelve los acertijos y sigue la historia para completar el reto.",
        videoUrl: "exit.mp4", //TODO
        mainImage: "exit.jpg",
        secondaryImages: [],
        purchaseOrder: 23 //TODO
    },
    {
        id: 24,
        rankValue: 77, //TODO
        name: "History Channel",
        publisher: "History Channel",
        categories: ["Trivia", "Historia"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia con preguntas sobre historia mundial.",
        rules: "Responde preguntas de historia para avanzar en el tablero.",
        videoUrl: "historyChannel.mp4", //TODO
        mainImage: "historyChannel1.jpg",
        secondaryImages: [],
        purchaseOrder: 24 //TODO
    },
    {
        id: 25,
        rankValue: 76, //TODO
        name: "Hitster",
        publisher: "Jumbo",
        categories: ["Música", "Party"],
        players: "2-10",
        duration: "30 min",
        mode: "Competitivo",
        description: "Juego de mesa musical donde debes adivinar canciones y ordenarlas cronológicamente.",
        rules: "Escucha fragmentos de canciones y colócalas en la línea de tiempo.",
        videoUrl: "hitster.mp4", //TODO
        mainImage: "hitster1.jpg",
        secondaryImages: ["hitster2.jpg"],
        purchaseOrder: 25 //TODO
    },
    {
        id: 26,
        rankValue: 75, //TODO
        name: "Jenga",
        publisher: "Hasbro",
        categories: ["Habilidad", "Clásico"],
        players: "2+",
        duration: "10-20 min",
        mode: "Competitivo",
        description: "Juego de habilidad donde los jugadores retiran bloques de una torre sin que se caiga.",
        rules: "En tu turno, retira un bloque y colócalo arriba. Pierde quien derribe la torre.",
        videoUrl: "jenga.mp4", //TODO
        mainImage: "jenga1.jpg", //TODO (ajusta si el nombre es diferente)
        secondaryImages: [],
        purchaseOrder: 26 //TODO
    },
    {
        id: 27,
        rankValue: 74, //TODO
        name: "Liar",
        publisher: "Genérico",
        categories: ["Cartas", "Bluff"],
        players: "3-6",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de cartas donde debes engañar a los demás sobre las cartas que juegas.",
        rules: "Juega cartas boca abajo y declara su valor. Los demás pueden creer o dudar.",
        videoUrl: "liar.mp4", //TODO
        mainImage: "liar1.jpg",
        secondaryImages: [],
        purchaseOrder: 27 //TODO
    },
    {
        id: 28,
        rankValue: 73, //TODO
        name: "Life Mario",
        publisher: "Hasbro",
        categories: ["Familiar", "Aventura"],
        players: "2-4",
        duration: "60 min",
        mode: "Competitivo",
        description: "Versión de Mario Bros del clásico Juego de la Vida.",
        rules: "Avanza por el tablero tomando decisiones y recolectando monedas.",
        videoUrl: "lifeMario.mp4", //TODO
        mainImage: "lifeMario1.jpg",
        secondaryImages: [],
        purchaseOrder: 28 //TODO
    },
    {
        id: 29,
        rankValue: 72, //TODO
        name: "Lotería Millenial",
        publisher: "Genérico",
        categories: ["Cartas", "Familiar"],
        players: "2-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión moderna del clásico juego de lotería mexicana.",
        rules: "Marca las cartas que salgan y completa tu tabla para ganar.",
        videoUrl: "loteriaMillenial.mp4", //TODO
        mainImage: "loteriaMillenial.jpg",
        secondaryImages: [],
        purchaseOrder: 29 //TODO
    },
    {
        id: 30,
        rankValue: 71, //TODO
        name: "Maratón Clásico",
        publisher: "Maratón",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "60-90 min",
        mode: "Competitivo",
        description: "Juego de trivia mexicano con preguntas de cultura general.",
        rules: "Responde preguntas correctamente para avanzar en el tablero.",
        videoUrl: "maratonClasico.mp4", //TODO
        mainImage: "maratonClasico.jpg",
        secondaryImages: [],
        purchaseOrder: 30 //TODO
    },
    {
        id: 31,
        rankValue: 70, //TODO
        name: "Marvel Lucha Libre",
        publisher: "Marvel",
        categories: ["Cartas", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas con temática de lucha libre y superhéroes de Marvel.",
        rules: "Juega cartas para atacar y defender, gana quien quede en pie.",
        videoUrl: "marvelLuchaLibre.mp4", //TODO
        mainImage: "marvelLuchaLibre1.jpg",
        secondaryImages: ["marvelLuchaLibre2.jpg"],
        purchaseOrder: 31 //TODO
    },
    {
        id: 32,
        rankValue: 69, //TODO
        name: "Mejor Peor Amigo",
        publisher: "Genérico",
        categories: ["Party", "Preguntas"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de preguntas para descubrir cuánto conoces a tus amigos.",
        rules: "Responde preguntas sobre los demás jugadores.",
        videoUrl: "mejorPeorAmigo.mp4", //TODO
        mainImage: "mejorPeorAmigo1.jpg",
        secondaryImages: ["mejorPeorAmigo2.jpg"],
        purchaseOrder: 32 //TODO
    },
    {
        id: 33,
        rankValue: 68, //TODO
        name: "Ni Sí Ni No",
        publisher: "Genérico",
        categories: ["Party", "Preguntas"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de preguntas donde no puedes responder ni 'sí' ni 'no'.",
        rules: "Responde preguntas sin decir 'sí' o 'no'.",
        videoUrl: "niSiNiNo.mp4", //TODO
        mainImage: "niSiNiNo1.jpg",
        secondaryImages: [],
        purchaseOrder: 33 //TODO
    },
    {
        id: 34,
        rankValue: 67, //TODO
        name: "Phase 10",
        publisher: "Mattel",
        categories: ["Cartas", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas donde los jugadores deben completar fases específicas antes que los demás.",
        rules: "Completa las fases en orden antes que los demás jugadores.",
        videoUrl: "phase10.mp4", //TODO
        mainImage: "phase10.jpg",
        secondaryImages: [],
        purchaseOrder: 34 //TODO
    },
    {
        id: 35,
        rankValue: 66, //TODO
        name: "Risas Fotográficas",
        publisher: "Genérico",
        categories: ["Party", "Familiar"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de mesa donde los jugadores deben imitar fotos divertidas.",
        rules: "Imita la foto que te toque y gana puntos por creatividad.",
        videoUrl: "risasFotograficas.mp4", //TODO
        mainImage: "risasFotograficas.jpg",
        secondaryImages: [],
        purchaseOrder: 35 //TODO
    },
    {
        id: 36,
        rankValue: 65, //TODO
        name: "Rummy",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas clásico donde los jugadores forman combinaciones de cartas.",
        rules: "Forma tríos, escaleras y gana puntos.",
        videoUrl: "rummy.mp4", //TODO
        mainImage: "rummy.jpg",
        secondaryImages: [],
        purchaseOrder: 36 //TODO
    },
    {
        id: 37,
        rankValue: 64, //TODO
        name: "Scrabble Star Wars",
        publisher: "Hasbro",
        categories: ["Palabras", "Familiar"],
        players: "2-4",
        duration: "60 min",
        mode: "Competitivo",
        description: "Versión de Star Wars del clásico juego de palabras Scrabble.",
        rules: "Forma palabras en el tablero para ganar puntos.",
        videoUrl: "scrabbleStarWars.mp4", //TODO
        mainImage: "scrabbleStarWars1.jpg",
        secondaryImages: ["scrabbleStarWars2.jpeg", "scrabbleStarWars3.jpg"],
        purchaseOrder: 37 //TODO
    },
    {
        id: 38,
        rankValue: 63, //TODO
        name: "Sequence",
        publisher: "Jax Games",
        categories: ["Cartas", "Estrategia"],
        players: "2-12",
        duration: "30-60 min",
        mode: "Equipos",
        description: "Juego de cartas y tablero donde debes formar líneas de cinco fichas.",
        rules: "Coloca fichas en el tablero según las cartas jugadas. Gana quien forme dos secuencias.",
        videoUrl: "sequence.mp4", //TODO
        mainImage: "sequence1.jpg",
        secondaryImages: ["sequence2.jpg"],
        purchaseOrder: 38 //TODO
    },
    {
        id: 39,
        rankValue: 62, //TODO
        name: "Stratego",
        publisher: "Jumbo",
        categories: ["Estrategia", "Clásico"],
        players: "2",
        duration: "45 min",
        mode: "Competitivo",
        description: "Juego de estrategia donde debes capturar la bandera del oponente.",
        rules: "Coloca tus piezas estratégicamente y ataca las del rival.",
        videoUrl: "stratego.mp4", //TODO
        mainImage: "stratego1.jpg",
        secondaryImages: ["stratego2.jpeg"],
        purchaseOrder: 39 //TODO
    },
    {
        id: 40,
        rankValue: 61, //TODO
        name: "Temas de Sobremesa",
        publisher: "Genérico",
        categories: ["Party", "Conversación"],
        players: "2+",
        duration: "Variable",
        mode: "Competitivo",
        description: "Juego de cartas con temas para conversar y debatir.",
        rules: "Saca una carta y conversa sobre el tema propuesto.",
        videoUrl: "temasDeSobremesa.mp4", //TODO
        mainImage: "temasDeSobremesa1.jpg",
        secondaryImages: ["temasDeSobremesa2.jpg"],
        purchaseOrder: 40 //TODO
    },
    {
        id: 41,
        rankValue: 60, //TODO
        name: "Tetris",
        publisher: "Hasbro",
        categories: ["Puzzle", "Habilidad"],
        players: "2",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión de mesa del clásico videojuego Tetris.",
        rules: "Coloca piezas para completar líneas y ganar puntos.",
        videoUrl: "tetris.mp4", //TODO
        mainImage: "tetris1.jpg",
        secondaryImages: [],
        purchaseOrder: 41 //TODO
    },
    {
        id: 42,
        rankValue: 59, //TODO
        name: "That's Not a Hat",
        publisher: "Ravensburger",
        categories: ["Party", "Memoria"],
        players: "3-8",
        duration: "15-20 min",
        mode: "Competitivo",
        description: "Juego de memoria y engaño donde debes recordar qué objeto tiene cada jugador.",
        rules: "Pasa cartas y recuerda qué objeto tiene cada uno.",
        videoUrl: "thatsNotAHat.mp4", //TODO
        mainImage: "thatsNotAHat1.jpg",
        secondaryImages: [],
        purchaseOrder: 42 //TODO
    },
    {
        id: 43,
        rankValue: 58, //TODO
        name: "Tiro al Blanco",
        publisher: "Genérico",
        categories: ["Habilidad", "Clásico"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego de puntería donde debes acertar a un blanco con dardos o pelotas.",
        rules: "Lanza y suma puntos según el lugar donde aciertes.",
        videoUrl: "tiroAlBlanco.mp4", //TODO
        mainImage: "tiroAlBlanco1.jpg",
        secondaryImages: [],
        purchaseOrder: 43 //TODO
    },
    {
        id: 44,
        rankValue: 57, //TODO
        name: "Trivia Chavos vs Rucos",
        publisher: "Genérico",
        categories: ["Trivia", "Familiar"],
        players: "2-10",
        duration: "30-60 min",
        mode: "Equipos",
        description: "Juego de trivia donde compiten generaciones jóvenes contra mayores.",
        rules: "Responde preguntas de cultura general y gana puntos para tu equipo.",
        videoUrl: "triviaChavosVsRucos.mp4", //TODO
        mainImage: "triviaChavosVsRucos1.jpg",
        secondaryImages: ["triviaChavosVsRucos2.jpg"],
        purchaseOrder: 44 //TODO
    },
    {
        id: 45,
        rankValue: 56, //TODO
        name: "Turista de la Suerte",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión mexicana del clásico Monopoly.",
        rules: "Compra propiedades, cobra rentas y evita la bancarrota.",
        videoUrl: "turistaDeLaSuerte.mp4", //TODO
        mainImage: "turistaDeLaSuerte1.jpg",
        secondaryImages: ["turistaDeLaSuerte2.jpg"],
        purchaseOrder: 45 //TODO
    },
    {
        id: 46,
        rankValue: 55, //TODO
        name: "Turista Disneyland",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión de Turista con temática de Disneyland.",
        rules: "Compra propiedades y recorre Disneyland para ganar.",
        videoUrl: "turistaDisneyland.mp4", //TODO
        mainImage: "turistaDisneyland1.jpg",
        secondaryImages: ["turistaDisneyland2.jpeg"],
        purchaseOrder: 46 //TODO
    },
    {
        id: 47,
        rankValue: 54, //TODO
        name: "Turista Dragon Ball",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión de Turista con temática de Dragon Ball.",
        rules: "Compra propiedades y recorre el mundo de Dragon Ball.",
        videoUrl: "turistaDragonBall.mp4", //TODO
        mainImage: "turistaDragonBall1.jpg",
        secondaryImages: ["turistaDragonBall2.jpg"],
        purchaseOrder: 47 //TODO
    },
    {
        id: 48,
        rankValue: 53, //TODO
        name: "UNO",
        publisher: "Mattel",
        categories: ["Cartas", "Familiar"],
        players: "2-10",
        duration: "15-30 min",
        mode: "Competitivo",
        description: "Juego de cartas donde debes deshacerte de todas tus cartas antes que los demás.",
        rules: "Juega cartas del mismo color o número y usa cartas especiales para cambiar el juego.",
        videoUrl: "uno.mp4", //TODO
        mainImage: "uno.jpg",
        secondaryImages: [],
        purchaseOrder: 48 //TODO
    },
    {
        id: 49,
        rankValue: 52, //TODO
        name: "We’re Not Really Strangers",
        publisher: "WNRS",
        categories: ["Conversación", "Party"],
        players: "2+",
        duration: "30-60 min",
        mode: "Cooperativo",
        description: "Juego de cartas para profundizar relaciones y conocerse mejor.",
        rules: "Responde preguntas personales y reflexiona con los demás jugadores.",
        videoUrl: "weAreNotReallyStrangers.mp4", //TODO
        mainImage: "weAreNotReallyStrangers1.jpg",
        secondaryImages: [],
        purchaseOrder: 49 //TODO
    },
    {
        id: 50,
        rankValue: 51, //TODO
        name: "Yu-Gi-Oh!",
        publisher: "Konami",
        categories: ["Cartas", "Estrategia"],
        players: "2",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas coleccionables donde los jugadores invocan monstruos y lanzan hechizos para derrotar a su oponente.",
        rules: "Construye tu mazo y reduce los puntos de vida del rival a cero.",
        videoUrl: "yuGiOh.mp4", //TODO
        mainImage: "yuGiOh1.jpg",
        secondaryImages: [],
        purchaseOrder: 50 //TODO
    }
    // Puedes seguir agregando más juegos aquí si tienes más en tus HTML.
];
