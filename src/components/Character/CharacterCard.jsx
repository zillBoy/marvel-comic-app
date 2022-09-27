/**
 * React Dependencies
 */
import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="relative  w-1/2 sm:w-1/6 hover:cursor-pointer bg-black">
      <img
        className="w-100 h-96 object-cover opacity-80"
        src={character.image}
        alt={`character ${character.name}`}
      />
      <p className="absolute text-white text-xl font-bold px-2 bottom-2 italic">
        {character.name}
      </p>
    </div>
  );
};

export default CharacterCard;
