import React, { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [cartitas, setCartitas] = useState([]);
  const [cardsPlayerOne, setCardsPlayerOne] = useState([]);
  const [cardsPlayerTwo, setCardsPlayerTwo] = useState([]);
  //   const obtenerBaraja = async () => {
  //     const data = await fetch(
  //       "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  //     );
  //     const idBaraja = await data.json();
  //   };
  //para que se muestren las primeras 10 cartas a cada jugador
  useEffect(() => {
    cartasJugador1();
    cartasJugador2();
  }, []);

  const obtenerDosCartas = async () => {
    const data = await fetch(
      "https://deckofcardsapi.com/api/deck/l7u4jw7n79eh/draw/?count=2"
    );
    const cartas = await data.json();
    console.log("aca estan las cartas", cartas.cards);
    setCartitas(cartas.cards);
  };
  //LLAMADO A LAS 10 PRIMERAS CARTAS DEL JUGADOR 1
  const cartasJugador1 = async () => {
    const data = await fetch(
      "https://deckofcardsapi.com/api/deck/0cz5xw0qwep5/draw/?count=2"
    );
    const cartas = await data.json();
    console.log("aca estan las cartas", cartas.cards);
    setCardsPlayerOne(cartas.cards);
  };
  //LLAMADO A LAS 10 PRIMERAS CARTAS DEL JUGADOR 2
  const cartasJugador2 = async () => {
    const data = await fetch(
      "https://deckofcardsapi.com/api/deck/0cz5xw0qwep5/draw/?count=2"
    );
    const cartas = await data.json();
    console.log("aca estan las cartas", cartas.cards);
    setCardsPlayerTwo(cartas.cards);
  };

  //   repartir cartas
  //   const repartir = async () => {
  //     const cartaRepartida = await obtenerDosCartas();
  //     setCardsPlayerOne(cartaRepartida);
  //     setCardsPlayerTwo(cartaRepartida);
  //   };

  //   const handleClick = async () => {
  //     await repartir();
  //   };

  return (
    <div className="containerPp">
      <div className="cardContainer">
        <h4>Jugador 1</h4>
        <div className="containerPlayer">
          {cardsPlayerOne.map((carta, i) => (
            <div className="cardContainer" key={i}>
              <img className="cardImage" src={carta.image} alt={carta.value} />
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={handleClick}>Shuffle</button> */}
      <div className="cardContainer">
        <h4>Jugador 2</h4>
        <div className="containerPlayer">
          {cardsPlayerTwo.map((carta, i) => (
            <div className="cardContainer" key={i}>
              <img className="cardImage" src={carta.image} alt={carta.value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
