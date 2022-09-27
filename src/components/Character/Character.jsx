/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { characterList } from "../../utils/constants";
import Legend from "../Legend/Legend";

import CharacterList from "./CharacterList";

const Character = () => {
  return (
    <div>
      <Legend title="Marvel Characters" className="w-72" />
      <CharacterList characterList={characterList} />
    </div>
  );
};

export default Character;
