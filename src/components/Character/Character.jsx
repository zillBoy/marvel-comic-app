/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import { characterList } from "../../utils/constants";

import CharacterList from "./CharacterList";

const Character = () => {
  return <CharacterList characterList={characterList} />;
};

export default Character;
