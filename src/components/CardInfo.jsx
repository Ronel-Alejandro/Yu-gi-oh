import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

function CardInfo() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php"
      );
      const data = await response.json();
      setCards(data.data.slice(15, 50));
      setIsLoading(false);

      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 z-50">
          <p className="text-white">Cargando Cartas :D</p>
        </div>
      )}
      <CharacterList data={cards} />
    </>
  );
}

export default CardInfo;
