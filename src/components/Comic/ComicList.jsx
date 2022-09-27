/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import ComicCard from "./ComicCard";
import Legend from "../Legend/Legend";

const ComicList = ({ title, comics = [] }) => {
  return (
    <div>
      <Legend title="Top Comics" className="mb-2" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {!!comics &&
          comics.map((comic) => <ComicCard key={comic?.id} comic={comic} />)}
      </div>
    </div>
  );
};

export default ComicList;
