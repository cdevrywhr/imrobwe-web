import React from "react";
import Image from "next/image"
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link text-center`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
           <Image
                    className="h-4"
                    src={`${social.icon}`}
                  />
        </Button>
      ))}
    </div>
  );
};

export default Socials;
