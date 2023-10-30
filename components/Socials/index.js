import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link text-center`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
           <img
                    className="h-4"
                    src={`${social.icon}`}
                  ></img>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
