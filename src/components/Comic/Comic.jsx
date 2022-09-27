/**
 * React Dependencies
 */
import React, { useState, useEffect } from "react";

/**
 * Internal Dependencies
 */
import ComicList from "./ComicList";

/**
 * External Dependencies
 */
import { comicData } from "../../utils/constants";

const Comic = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  const getComics = () => {
    setLoading(true);
    setComics(comicData);
    setLoading(false);
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <div>
      {!loading && (
        <>
          <ComicList comics={comics} />
        </>
      )}
    </div>
  );
};

export default Comic;
