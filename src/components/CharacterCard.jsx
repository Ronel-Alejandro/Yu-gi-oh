import React from "react";

function CharacterCard({ character }) {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
      <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-8">
      <img 
              src={character.card_images[0].image_url}
              alt={character.name}
              className="img-fluid mb-3 text-center "
              style={{ width: "15rem" }}
            />
      </div>
      <div class="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
      <p className="text-center">Nombre: {character.name}</p>
          <p>Tipo: {character.type}</p>
          <p>Raza: {character.race}</p>
          <p>Descripción: {character.desc}</p>
          <p>Definitivo: {character.race}</p>
          <p>Arquetipo: {character.archetype}</p>
          <p>Juego de cartas: {character.card_sets[0].set_name}</p>
          <p>Precio: {character.card_prices[0].cardmarket_price}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
