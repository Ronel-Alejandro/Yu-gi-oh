import React, { useState } from "react";
import Modal from "./Modal";

function CharacterList({ data }) {
  const [modal, setModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
    setModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
    setModal(false);
  };

  return (
    <div className="px-8 mx-auto max-w-8xl bg-[#0c0c0d]">
      <img
        src="/src/assets/fondo2.jpg"
        alt=""
        padding-top= "50px"
        width="100%" height="2000px" 
        className="object-cover" 
      />
      <div className=" grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {data.map((character, index) => (
          <div
            className="pt-5"
            key={index}
            onClick={() => handleOpenModal(character)}
          >
            <div className="my-2 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-400 bg-[#5f9ff7] dark:bg-[#5f9ff7]">
              <img
                src={character.card_images[0].image_url}
                className="rounded-t h-auto w-full object-cover"
                alt={character.name}
              />
             {/*  <div className="flex justify-center items-center h-10">
                <h5 className="text-5x1 font-bold leading-relaxed text-gray-800 ">
                  {character.name}
                </h5>
              </div> */}

              {/* <p className="leading-5 text-   ">{character.type}</p> */}
              {/*            <button
                  type="button"
                  className="border border-green-500 bg-green-500 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline "
                  
                >
                  Ver detalles
                </button> */}
            </div>
          </div>
        ))}
        {selectedCharacter && (
          <Modal
            character={selectedCharacter}
            setModal={setModal}
            openModal={modal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default CharacterList;
