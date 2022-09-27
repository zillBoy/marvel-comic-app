/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterList = [] }) => {
  return (
    <div className="flex flex-wrap">
      {characterList.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
