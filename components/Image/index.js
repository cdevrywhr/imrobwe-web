import React from "react";

const Image = ({ img, name, description }) => {
  return (
    <figure>
          <h2 className="mt-3 mb-5 text-left text-base">
            {name ? name : "Name"}
          </h2>
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={img}
            alt={name}
          />
          <p className="mt-3 mb-10 text-center text-xs ml-10 mr-10">
            {description ? description : "Description"}
          </p>
    </figure>
  );
};

export default Image;
