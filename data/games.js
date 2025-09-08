export const games = [
    // 1
    {
        id: 1,
        name: "Ajedrez",
        publisher: "Genérico",
        categories: ["Estrategia", "Clásico"],
        players: "2",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Juego de estrategia clásico donde dos jugadores intentan dar jaque mate al rey rival.",
        rules: "Cada jugador mueve sus piezas por turnos según las reglas del ajedrez. Gana quien da jaque mate.",
        videoUrl: "assets/video/ajedrez.mp4",
        mainImage: "assets/img/ajedrez1.jpg",
        secondaryImages: [],
        rankValue: 100, //TODO
        purchaseOrder: 1,
        acquisitionDate: "01/01/2007",
        aproxDate: true
    },
    // 2
    {
        id: 2,
        name: "Turista Dragon Ball",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión de Turista con temática de Dragon Ball.",
        rules: "Compra propiedades y recorre el mundo de Dragon Ball.",
        videoUrl: "assets/video/turistaDragonBall.mp4",
        mainImage: "assets/img/turistaDragonBall1.jpg",
        secondaryImages: ["turistaDragonBall2.jpg"],
        rankValue: 99, //TODO
        purchaseOrder: 2,
        acquisitionDate: "14/12/2022",
        aproxDate: false
    },
    // 3
    {
        id: 3,
        name: "Casino Fabuloso",
        publisher: "Genérico",
        categories: ["Cartas", "Apuestas"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas y apuestas con temática de casino.",
        rules: "Depende de la variante jugada.",
        videoUrl: "assets/video/casinoFabuloso.mp4",
        mainImage: "assets/img/casinoFabuloso1.jpg",
        secondaryImages: ["casinoFabuloso2.jpg"],
        rankValue: 98, //TODO
        purchaseOrder: 3,
        acquisitionDate: "24/12/2022",
        aproxDate: false
    },
    // 4
    {
        id: 4,
        name: "Divertilandia Extrema",
        publisher: "Genérico",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia y retos para toda la familia.",
        rules: "Responde preguntas y supera retos para avanzar.",
        videoUrl: "assets/video/divertilandiaExtrema.mp4",
        mainImage: "assets/img/divertilandiaExtrema1.jpg",
        secondaryImages: ["divertilandiaExtrema2.jpg"],
        rankValue: 97, //TODO
        purchaseOrder: 4,
        acquisitionDate: "01/03/2023",
        aproxDate: true
    },
    // 5
    {
        id: 5,
        name: "Maratón Clásico",
        publisher: "Maratón",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "60-90 min",
        mode: "Competitivo",
        description: "Juego de trivia mexicano con preguntas de cultura general.",
        rules: "Responde preguntas correctamente para avanzar en el tablero.",
        videoUrl: "assets/video/maratonClasico.mp4",
        mainImage: "assets/img/maratonClasico.jpg",
        secondaryImages: [],
        rankValue: 96, //TODO
        purchaseOrder: 5,
        acquisitionDate: "01/03/2023",
        aproxDate: true
    },
    // 6
    {
        id: 6,
        name: "Mejor Peor Amigo",
        publisher: "Genérico",
        categories: ["Party", "Preguntas"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de preguntas para descubrir cuánto conoces a tus amigos.",
        rules: "Responde preguntas sobre los demás jugadores.",
        videoUrl: "assets/video/mejorPeorAmigo.mp4",
        mainImage: "assets/img/mejorPeorAmigo1.jpg",
        secondaryImages: ["mejorPeorAmigo2.jpg"],
        rankValue: 95, //TODO
        purchaseOrder: 6,
        acquisitionDate: "01/03/2023",
        aproxDate: true
    },
    // 7
    {
        id: 7,
        name: "Stratego",
        publisher: "Jumbo",
        categories: ["Estrategia", "Clásico"],
        players: "2",
        duration: "45 min",
        mode: "Competitivo",
        description: "Juego de estrategia donde debes capturar la bandera del oponente.",
        rules: "Coloca tus piezas estratégicamente y ataca las del rival.",
        videoUrl: "assets/video/stratego.mp4",
        mainImage: "assets/img/stratego1.jpg",
        secondaryImages: ["stratego2.jpeg"],
        rankValue: 94, //TODO
        purchaseOrder: 7,
        acquisitionDate: "01/03/2023",
        aproxDate: true
    },
    // 8
    {
        id: 8,
        name: "Turista de la Suerte",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión mexicana del clásico Monopoly.",
        rules: "Compra propiedades, cobra rentas y evita la bancarrota.",
        videoUrl: "assets/video/turistaDeLaSuerte.mp4",
        mainImage: "assets/img/turistaDeLaSuerte1.jpg",
        secondaryImages: ["turistaDeLaSuerte2.jpg"],
        rankValue: 93, //TODO
        purchaseOrder: 8,
        acquisitionDate: "01/03/2023",
        aproxDate: true
    },
    // 9
    {
        id: 9,
        name: "Catan Plus",
        publisher: "Kosmos",
        categories: ["Estrategia", "Expansión"],
        players: "3-6",
        duration: "90-120 min",
        mode: "Competitivo",
        description: "Edición especial de Catan que incluye expansiones y minijuegos.",
        rules: "Incluye reglas del juego base y de las expansiones incluidas.",
        videoUrl: "assets/video/catanPlus.mp4",
        mainImage: "assets/img/catanPlus1.jpg",
        secondaryImages: ["catanPlus2.jpg"],
        rankValue: 92, //TODO
        purchaseOrder: 9,
        acquisitionDate: "03/07/2023",
        aproxDate: false
    },
    // 10
    {
        id: 10,
        name: "Baraja Poker Dorada",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-10",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja de poker dorada para juegos como Poker, Blackjack, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "assets/video/barajaPokerDorada.mp4",
        mainImage: "assets/img/barajaPokerDorada1.jpg",
        secondaryImages: [],
        rankValue: 91, //TODO
        purchaseOrder: 10,
        acquisitionDate: "15/08/2023",
        aproxDate: false
    },
    // 11
    {
        id: 11,
        name: "Baraja Poker Plateada",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-10",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja de poker plateada para juegos como Poker, Blackjack, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "assets/video/barajaPokerPlateada.mp4",
        mainImage: "assets/img/barajaPokerPlateada1.jpg",
        secondaryImages: [],
        rankValue: 90, //TODO
        purchaseOrder: 11,
        acquisitionDate: "06/09/2023",
        aproxDate: false
    },
    // 12
    {
        id: 12,
        name: "Backgammon",
        publisher: "Genérico",
        categories: ["Clásico", "Estrategia"],
        players: "2",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de mesa clásico donde los jugadores mueven sus fichas según el resultado de los dados.",
        rules: "El objetivo es sacar todas tus fichas del tablero antes que tu oponente.",
        videoUrl: "assets/video/backgammon.mp4",
        mainImage: "assets/img/backgammon.jpg",
        secondaryImages: [],
        rankValue: 89, //TODO
        purchaseOrder: 12,
        acquisitionDate: "01/10/2023",
        aproxDate: true
    },
    // 13
    {
        id: 13,
        name: "Exit",
        publisher: "Devir",
        categories: ["Escape Room", "Cooperativo"],
        players: "1-4",
        duration: "45-90 min",
        mode: "Cooperativo",
        description: "Juego de escape room de mesa donde los jugadores resuelven acertijos para escapar.",
        rules: "Resuelve los acertijos y sigue la historia para completar el reto.",
        videoUrl: "assets/video/exit.mp4",
        mainImage: "assets/img/exit.jpg",
        secondaryImages: [],
        rankValue: 88, //TODO
        purchaseOrder: 13,
        acquisitionDate: "27/09/2023",
        aproxDate: false
    },
    // 14
    {
        id: 14,
        name: "Rummy",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas clásico donde los jugadores forman combinaciones de cartas.",
        rules: "Forma tríos, escaleras y gana puntos.",
        videoUrl: "assets/video/rummy.mp4",
        mainImage: "assets/img/rummy.jpg",
        secondaryImages: [],
        rankValue: 87, //TODO
        purchaseOrder: 14,
        acquisitionDate: "27/09/2023",
        aproxDate: false
    },
    // 15
    {
        id: 15,
        name: "Hitster",
        publisher: "Jumbo",
        categories: ["Música", "Party"],
        players: "2-10",
        duration: "30 min",
        mode: "Competitivo",
        description: "Juego de mesa musical donde debes adivinar canciones y ordenarlas cronológicamente.",
        rules: "Escucha fragmentos de canciones y colócalas en la línea de tiempo.",
        videoUrl: "assets/video/hitster.mp4",
        mainImage: "assets/img/hitster1.jpg",
        secondaryImages: ["hitster2.jpg"],
        rankValue: 86, //TODO
        purchaseOrder: 15,
        acquisitionDate: "15/11/2023",
        aproxDate: true
    },
    // 16
    {
        id: 16,
        name: "Catan: Navegantes",
        publisher: "Kosmos",
        categories: ["Estrategia", "Expansión"],
        players: "3-4",
        duration: "90-120 min",
        mode: "Competitivo",
        description: "Expansión de Catan que añade navegación y nuevas islas para explorar.",
        rules: "Incluye reglas de navegación y escenarios adicionales. Requiere el juego base.",
        videoUrl: "assets/video/catanNavegantes.mp4",
        mainImage: "assets/img/catanNavegantes1.jpg",
        secondaryImages: ["catanNavegantes2.jpg"],
        rankValue: 85, //TODO
        purchaseOrder: 16,
        acquisitionDate: "25/12/2023",
        aproxDate: false
    },
    // 17
    {
        id: 17,
        name: "Damas Chinas",
        publisher: "Genérico",
        categories: ["Clásico", "Estrategia"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego clásico donde los jugadores intentan mover todas sus piezas al lado opuesto del tablero.",
        rules: "Mueve tus piezas saltando sobre otras para llegar al lado opuesto.",
        videoUrl: "assets/video/damasChinas.mp4",
        mainImage: "assets/img/damasChinas.jpg",
        secondaryImages: [],
        rankValue: 84, //TODO
        purchaseOrder: 17,
        acquisitionDate: "25/12/2023",
        aproxDate: false
    },
    // 18
    {
        id: 18,
        name: "Risas Fotográficas",
        publisher: "Genérico",
        categories: ["Party", "Familiar"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de mesa donde los jugadores deben imitar fotos divertidas.",
        rules: "Imita la foto que te toque y gana puntos por creatividad.",
        videoUrl: "assets/video/risasFotograficas.mp4",
        mainImage: "assets/img/risasFotograficas.jpg",
        secondaryImages: [],
        rankValue: 83, //TODO
        purchaseOrder: 18,
        acquisitionDate: "23/12/2023",
        aproxDate: false
    },
    // 19
    {
        id: 19,
        name: "Temas de Sobremesa",
        publisher: "Genérico",
        categories: ["Party", "Conversación"],
        players: "2+",
        duration: "Variable",
        mode: "Competitivo",
        description: "Juego de cartas con temas para conversar y debatir.",
        rules: "Saca una carta y conversa sobre el tema propuesto.",
        videoUrl: "assets/video/temasDeSobremesa.mp4",
        mainImage: "assets/img/temasDeSobremesa1.jpg",
        secondaryImages: ["temasDeSobremesa2.jpg"],
        rankValue: 82, //TODO
        purchaseOrder: 19,
        acquisitionDate: "23/12/2023",
        aproxDate: false
    },
    // 20
    {
        id: 20,
        name: "Scrabble Star Wars",
        publisher: "Hasbro",
        categories: ["Palabras", "Familiar"],
        players: "2-4",
        duration: "60 min",
        mode: "Competitivo",
        description: "Versión de Star Wars del clásico juego de palabras Scrabble.",
        rules: "Forma palabras en el tablero para ganar puntos.",
        videoUrl: "assets/video/scrabbleStarWars.mp4",
        mainImage: "assets/img/scrabbleStarWars1.jpg",
        secondaryImages: ["scrabbleStarWars2.jpeg", "scrabbleStarWars3.jpg"],
        rankValue: 81, //TODO
        purchaseOrder: 20,
        acquisitionDate: "24/12/2023",
        aproxDate: false
    },
    // 21
    {
        id: 21,
        name: "Sequence",
        publisher: "Jax Games",
        categories: ["Cartas", "Estrategia"],
        players: "2-12",
        duration: "30-60 min",
        mode: "Equipos",
        description: "Juego de cartas y tablero donde debes formar líneas de cinco fichas.",
        rules: "Coloca fichas en el tablero según las cartas jugadas. Gana quien forme dos secuencias.",
        videoUrl: "assets/video/sequence.mp4",
        mainImage: "assets/img/sequence1.jpg",
        secondaryImages: ["sequence2.jpg"],
        rankValue: 80, //TODO
        purchaseOrder: 21,
        acquisitionDate: "24/12/2023",
        aproxDate: false
    },
    // 22
    {
        id: 22,
        name: "UNO",
        publisher: "Mattel",
        categories: ["Cartas", "Familiar"],
        players: "2-10",
        duration: "15-30 min",
        mode: "Competitivo",
        description: "Juego de cartas donde debes deshacerte de todas tus cartas antes que los demás.",
        rules: "Juega cartas del mismo color o número y usa cartas especiales para cambiar el juego.",
        videoUrl: "assets/video/uno.mp4",
        mainImage: "assets/img/uno.jpg",
        secondaryImages: [],
        rankValue: 79, //TODO
        purchaseOrder: 22,
        acquisitionDate: "24/12/2023",
        aproxDate: false
    },
    // 23
    {
        id: 23,
        name: "Caras y Gestos",
        publisher: "Hasbro",
        categories: ["Party", "Mímica"],
        players: "4-16",
        duration: "20-30 min",
        mode: "Equipos",
        description: "Juego de mímica donde los jugadores deben adivinar palabras o frases.",
        rules: "Un jugador actúa y su equipo debe adivinar la palabra antes de que se acabe el tiempo.",
        videoUrl: "assets/video/carasYGestos.mp4",
        mainImage: "assets/img/carasYGestos.jpg",
        secondaryImages: ["carasYGestos1.jpg", "carasYGestos2.jpg"],
        rankValue: 78, //TODO
        purchaseOrder: 23,
        acquisitionDate: "2/01/2024",
        aproxDate: false
    },
    // 24
    {
        id: 24,
        name: "Baraja Española",
        publisher: "Genérico",
        categories: ["Cartas", "Clásico"],
        players: "2-6",
        duration: "10-60 min",
        mode: "Competitivo",
        description: "Baraja tradicional española para juegos como Brisca, Mus, Tute, etc.",
        rules: "Depende del juego jugado.",
        videoUrl: "assets/video/barajaEspanola.mp4",
        mainImage: "assets/img/barajaEspañola1.jpg",
        secondaryImages: [],
        rankValue: 77, //TODO
        purchaseOrder: 24,
        acquisitionDate: "01/03/2024",
        aproxDate: true
    },
    // 25
    {
        id: 25,
        name: "Domino Clásico",
        publisher: "Genérico",
        categories: ["Clásico", "Familiar"],
        players: "2-4",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego clásico de fichas donde los jugadores deben emparejar los números.",
        rules: "Coloca fichas emparejando los números en los extremos. Gana quien se quede sin fichas primero.",
        videoUrl: "assets/video/dominoClasico.mp4",
        mainImage: "assets/img/dominoClasico.jpg",
        secondaryImages: [],
        rankValue: 76, //TODO
        purchaseOrder: 25,
        acquisitionDate: "01/03/2024",
        aproxDate: true
    },
    // 26
    {
        id: 26,
        name: "Lotería Millenial",
        publisher: "Genérico",
        categories: ["Cartas", "Familiar"],
        players: "2-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión moderna del clásico juego de lotería mexicana.",
        rules: "Marca las cartas que salgan y completa tu tabla para ganar.",
        videoUrl: "assets/video/loteriaMillenial.mp4",
        mainImage: "assets/img/loteriaMillenial.jpg",
        secondaryImages: [],
        rankValue: 75, //TODO
        purchaseOrder: 26,
        acquisitionDate: "01/03/2024",
        aproxDate: true
    },
    // 27
    {
        id: 27,
        name: "Basta Original",
        publisher: "Genérico",
        categories: ["Party", "Palabras"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego de palabras donde los jugadores deben escribir palabras que empiecen con una letra determinada.",
        rules: "Se elige una letra y los jugadores deben escribir palabras en diferentes categorías lo más rápido posible.",
        videoUrl: "assets/video/bastaOriginal.mp4",
        mainImage: "assets/img/bastaOriginal.jpg",
        secondaryImages: [],
        rankValue: 74, //TODO
        purchaseOrder: 27,
        acquisitionDate: "10/09/2024",
        aproxDate: false
    },
    // 28
    {
        id: 28,
        name: "Canicas",
        publisher: "Genérico",
        categories: ["Clásico", "Habilidad"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego tradicional de habilidad con canicas.",
        rules: "Los jugadores lanzan canicas para sacar las de los demás de un círculo.",
        videoUrl: "assets/video/canicas.mp4",
        mainImage: "assets/img/canicas1.jpg",
        secondaryImages: ["canicas2.jpg", "canicas3.jpg"],
        rankValue: 73, //TODO
        purchaseOrder: 28,
        acquisitionDate: "07/09/2024",
        aproxDate: false
    },
    // 29
    {
        id: 29,
        name: "Trivia Chavos vs Rucos",
        publisher: "Genérico",
        categories: ["Trivia", "Familiar"],
        players: "2-10",
        duration: "30-60 min",
        mode: "Equipos",
        description: "Juego de trivia donde compiten generaciones jóvenes contra mayores.",
        rules: "Responde preguntas de cultura general y gana puntos para tu equipo.",
        videoUrl: "assets/video/triviaChavosVsRucos.mp4",
        mainImage: "assets/img/triviaChavosVsRucos1.jpg",
        secondaryImages: ["triviaChavosVsRucos2.jpg"],
        rankValue: 72, //TODO
        purchaseOrder: 29,
        acquisitionDate: "01/09/2024",
        aproxDate: true
    },
    // 30
    {
        id: 30,
        name: "Turista Disneyland",
        publisher: "Genérico",
        categories: ["Estrategia", "Familiar"],
        players: "2-6",
        duration: "60-120 min",
        mode: "Competitivo",
        description: "Versión de Turista con temática de Disneyland.",
        rules: "Compra propiedades y recorre Disneyland para ganar.",
        videoUrl: "assets/video/turistaDisneyland.mp4",
        mainImage: "assets/img/turistaDisneyland1.jpg",
        secondaryImages: ["turistaDisneyland2.jpeg"],
        rankValue: 71, //TODO
        purchaseOrder: 30,
        acquisitionDate: "01/09/2024",
        aproxDate: true
    },
    // 31
    {
        id: 31,
        name: "Yu-Gi-Oh!",
        publisher: "Konami",
        categories: ["Cartas", "Estrategia"],
        players: "2",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas coleccionables donde los jugadores invocan monstruos y lanzan hechizos para derrotar a su oponente.",
        rules: "Construye tu mazo y reduce los puntos de vida del rival a cero.",
        videoUrl: "assets/video/yuGiOh.mp4",
        mainImage: "assets/img/yuGiOh1.jpg",
        secondaryImages: [],
        rankValue: 70, //TODO
        purchaseOrder: 31,
        acquisitionDate: "05/09/2024",
        aproxDate: false
    },
    // 32
    {
        id: 32,
        name: "Ni Sí Ni No",
        publisher: "Genérico",
        categories: ["Party", "Preguntas"],
        players: "3-10",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de preguntas donde no puedes responder ni 'sí' ni 'no'.",
        rules: "Responde preguntas sin decir 'sí' o 'no'.",
        videoUrl: "assets/video/niSiNiNo.mp4",
        mainImage: "assets/img/niSiNiNo1.jpg",
        secondaryImages: [],
        rankValue: 69, //TODO
        purchaseOrder: 32,
        acquisitionDate: "27/09/2024",
        aproxDate: false
    },
    // 33
    {
        id: 33,
        name: "Domino Resina",
        publisher: "Genérico",
        categories: ["Clásico", "Familiar"],
        players: "2-4",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión de dominó con fichas de resina.",
        rules: "Coloca fichas emparejando los números en los extremos. Gana quien se quede sin fichas primero.",
        videoUrl: "assets/video/dominoResina.mp4",
        mainImage: "assets/img/dominoResina.jpg",
        secondaryImages: [],
        rankValue: 68, //TODO
        purchaseOrder: 33,
        acquisitionDate: "16/11/2024",
        aproxDate: false
    },
    // 34
    {
        id: 34,
        name: "Blockbuster",
        publisher: "Big Potato Games",
        categories: ["Party", "Películas"],
        players: "4-12",
        duration: "30 min",
        mode: "Equipos",
        description: "Juego de adivinanza y mímica sobre películas, ideal para fiestas.",
        rules: "Los equipos compiten adivinando películas a través de mímica, frases y palabras clave.",
        videoUrl: "assets/video/blockbuster.mp4",
        mainImage: "assets/img/blockbuster1.jpg",
        secondaryImages: [],
        rankValue: 67, //TODO
        purchaseOrder: 34,
        acquisitionDate: "15/11/2024",
        aproxDate: false
    },
    // 35
    {
        id: 35,
        name: "Disney Mania",
        publisher: "Disney",
        categories: ["Trivia", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia con preguntas sobre películas y personajes de Disney.",
        rules: "Responde preguntas de trivia para avanzar en el tablero.",
        videoUrl: "assets/video/disneyMania.mp4",
        mainImage: "assets/img/disneyMania1.jpg",
        secondaryImages: [],
        rankValue: 66, //TODO
        purchaseOrder: 35,
        acquisitionDate: "15/11/2024",
        aproxDate: false
    },
    // 36
    {
        id: 36,
        name: "Liar",
        publisher: "Genérico",
        categories: ["Cartas", "Bluff"],
        players: "3-6",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Juego de cartas donde debes engañar a los demás sobre las cartas que juegas.",
        rules: "Juega cartas boca abajo y declara su valor. Los demás pueden creer o dudar.",
        videoUrl: "assets/video/liar.mp4",
        mainImage: "assets/img/liar1.jpg",
        secondaryImages: [],
        rankValue: 65, //TODO
        purchaseOrder: 36,
        acquisitionDate: "15/11/2024",
        aproxDate: false
    },
    // 37
    {
        id: 37,
        name: "That's Not a Hat",
        publisher: "Ravensburger",
        categories: ["Party", "Memoria"],
        players: "3-8",
        duration: "15-20 min",
        mode: "Competitivo",
        description: "Juego de memoria y engaño donde debes recordar qué objeto tiene cada jugador.",
        rules: "Pasa cartas y recuerda qué objeto tiene cada uno.",
        videoUrl: "assets/video/thatsNotAHat.mp4",
        mainImage: "assets/img/thatsNotAHat1.jpg",
        secondaryImages: [],
        rankValue: 64, //TODO
        purchaseOrder: 37,
        acquisitionDate: "15/11/2024",
        aproxDate: false
    },
    // 38
    {
        id: 38,
        name: "Clue",
        publisher: "Hasbro",
        categories: ["Misterio", "Deducción"],
        players: "2-6",
        duration: "45-60 min",
        mode: "Competitivo",
        description: "Juego de deducción donde los jugadores intentan resolver un asesinato.",
        rules: "Los jugadores hacen preguntas y deducen quién, con qué arma y en qué lugar ocurrió el crimen.",
        videoUrl: "assets/video/clue.mp4",
        mainImage: "assets/img/clue1.jpg",
        secondaryImages: [],
        rankValue: 63, //TODO
        purchaseOrder: 38,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 39
    {
        id: 39,
        name: "Candy Land",
        publisher: "Hasbro",
        categories: ["Infantil", "Clásico"],
        players: "2-4",
        duration: "15-30 min",
        mode: "Competitivo",
        description: "Juego de mesa clásico para niños donde avanzas por un tablero de caramelos.",
        rules: "Los jugadores avanzan según las cartas de colores, el primero en llegar al final gana.",
        videoUrl: "assets/video/candyLand.mp4",
        mainImage: "assets/img/candyLand1.jpg",
        secondaryImages: [],
        rankValue: 62, //TODO
        purchaseOrder: 39,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 40
    {
        id: 40,
        name: "History Channel",
        publisher: "History Channel",
        categories: ["Trivia", "Historia"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de trivia con preguntas sobre historia mundial.",
        rules: "Responde preguntas de historia para avanzar en el tablero.",
        videoUrl: "assets/video/historyChannel.mp4",
        mainImage: "assets/img/historyChannel1.jpg",
        secondaryImages: [],
        rankValue: 61, //TODO
        purchaseOrder: 40,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 41
    {
        id: 41,
        name: "Life Mario",
        publisher: "Hasbro",
        categories: ["Familiar", "Aventura"],
        players: "2-4",
        duration: "60 min",
        mode: "Competitivo",
        description: "Versión de Mario Bros del clásico Juego de la Vida.",
        rules: "Avanza por el tablero tomando decisiones y recolectando monedas.",
        videoUrl: "assets/video/lifeMario.mp4",
        mainImage: "assets/img/lifeMario1.jpg",
        secondaryImages: [],
        rankValue: 60, //TODO
        purchaseOrder: 41,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 42
    {
        id: 42,
        name: "Tetris",
        publisher: "Hasbro",
        categories: ["Puzzle", "Habilidad"],
        players: "2",
        duration: "20-40 min",
        mode: "Competitivo",
        description: "Versión de mesa del clásico videojuego Tetris.",
        rules: "Coloca piezas para completar líneas y ganar puntos.",
        videoUrl: "assets/video/tetris.mp4",
        mainImage: "assets/img/tetris1.jpg",
        secondaryImages: [],
        rankValue: 59, //TODO
        purchaseOrder: 42,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 43
    {
        id: 43,
        name: "We’re Not Really Strangers",
        publisher: "WNRS",
        categories: ["Conversación", "Party"],
        players: "2+",
        duration: "30-60 min",
        mode: "Cooperativo",
        description: "Juego de cartas para profundizar relaciones y conocerse mejor.",
        rules: "Responde preguntas personales y reflexiona con los demás jugadores.",
        videoUrl: "assets/video/weAreNotReallyStrangers.mp4",
        mainImage: "assets/img/weAreNotReallyStrangers1.jpg",
        secondaryImages: [],
        rankValue: 58, //TODO
        purchaseOrder: 43,
        acquisitionDate: "18/11/2024",
        aproxDate: false
    },
    // 44
    {
        id: 44,
        name: "Cubo Rubik 3x3",
        publisher: "Rubik's",
        categories: ["Habilidad", "Puzzle"],
        players: "1",
        duration: "Variable",
        mode: "Individual",
        description: "El clásico cubo de Rubik 3x3 para resolver rompecabezas.",
        rules: "Gira las caras del cubo hasta que cada una tenga un solo color.",
        videoUrl: "assets/video/cuboRubik3x3.mp4",
        mainImage: "assets/img/cuboRubik3x3.jpg",
        secondaryImages: [],
        rankValue: 57, //TODO
        purchaseOrder: 44,
        acquisitionDate: "07/12/2024",
        aproxDate: false
    },
    // 45
    {
        id: 45,
        name: "Phase 10",
        publisher: "Mattel",
        categories: ["Cartas", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas donde los jugadores deben completar fases específicas antes que los demás.",
        rules: "Completa las fases en orden antes que los demás jugadores.",
        videoUrl: "assets/video/phase10.mp4",
        mainImage: "assets/img/phase10.jpg",
        secondaryImages: [],
        rankValue: 56, //TODO
        purchaseOrder: 45,
        acquisitionDate: "07/12/2024",
        aproxDate: false
    },
    // 46
    {
        id: 46,
        name: "Tiro al Blanco",
        publisher: "Genérico",
        categories: ["Habilidad", "Clásico"],
        players: "2+",
        duration: "10-30 min",
        mode: "Competitivo",
        description: "Juego de puntería donde debes acertar a un blanco con dardos o pelotas.",
        rules: "Lanza y suma puntos según el lugar donde aciertes.",
        videoUrl: "assets/video/tiroAlBlanco.mp4",
        mainImage: "assets/img/tiroAlBlanco1.jpg",
        secondaryImages: [],
        rankValue: 55, //TODO
        purchaseOrder: 46,
        acquisitionDate: "07/12/2024",
        aproxDate: false
    },
    // 47
    {
        id: 47,
        name: "Marvel Lucha Libre",
        publisher: "Marvel",
        categories: ["Cartas", "Familiar"],
        players: "2-6",
        duration: "30-60 min",
        mode: "Competitivo",
        description: "Juego de cartas con temática de lucha libre y superhéroes de Marvel.",
        rules: "Juega cartas para atacar y defender, gana quien quede en pie.",
        videoUrl: "assets/video/marvelLuchaLibre.mp4",
        mainImage: "assets/img/marvelLuchaLibre1.jpg",
        secondaryImages: ["marvelLuchaLibre2.jpg"],
        rankValue: 54, //TODO
        purchaseOrder: 47,
        acquisitionDate: "10/12/2024",
        aproxDate: false
    }
];
