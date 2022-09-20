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
    <div className="">
      <h3>{title}</h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap space-x-4">
          {!!comics &&
            comics.map((comic) => <ComicCard key={comic?.id} comic={comic} />)}
        </div>
      </div>
    </div>
  );
};

export default ComicList;
