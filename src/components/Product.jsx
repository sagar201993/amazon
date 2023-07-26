import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image, name }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 truncate ...">{description}</p>
      <div>
        <p className="mb-5">${price}</p>
      </div>

      <button className=" mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
