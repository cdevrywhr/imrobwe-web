import React from "react";
import { Carousel } from "@material-tailwind/react";

import yourData from "../../data/blog.json";

const BlogCarousel = ({}) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link text-center`}>
      <Carousel transition={{ duration: 2 }} className="w-full rounded-xl">
            {yourData.ris23.map((photo) =>
              <img
                  src={photo.url}
                  alt="carousel"
                  className="h-full w-full object-cover"
              />
            )}
        </Carousel>
    </div>
  );
};

export default BlogCarousel;
