/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import ComicCard from "./ComicCard";

const ComicList = ({ title, comics = [] }) => {
  return (
    <div className="my-4">
      <h3 className="comic-list-title text-xl sm:text-2xl text-white py-2 px-6 mb-2 bg-red-500 w-48">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {!!comics &&
          comics.map((comic) => <ComicCard key={comic?.id} comic={comic} />)}
      </div>
    </div>
  );
};

export default ComicList;
