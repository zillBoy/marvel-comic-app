/**
 * React Dependencies
 */
import React from "react";

const ComicCard = ({ comic: { name, image, genre } }) => {
  const comicDetailHandler = () => {
    // TODO: When clicked go to a new page which contains the comic details
  };

  return (
    <div
      onClick={comicDetailHandler}
      className="w-36 sm:w-60 hover:cursor-pointer m-2"
    >
      <img
        className="w-36 h-40 sm:w-60 sm:h-80 object-cover"
        src={image}
        alt={`comic ${name}`}
      />
      <div className="pt-2">
        <p className="text-lg text-white leading-5">{name}</p>
        <p className="text-sm text-gray-400">{genre}</p>
      </div>
    </div>
  );
};

export default ComicCard;
