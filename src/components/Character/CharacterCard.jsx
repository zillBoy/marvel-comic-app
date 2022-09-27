/**
 * React Dependencies
 */
import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="w-1/6">
      <img
        className="w-100 h-96 object-cover"
        src={character.image}
        alt={`character ${character.name}`}
      />
    </div>
  );
};

export default CharacterCard;
