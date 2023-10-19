import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      {/* <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div> */}
      {/* <h1 className=" items-center text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        
      </h1> */}
      <p className="mb-20  mt-5 font-small text-sm/[5px] text-center p-1 laptop:p-0">Roby Julian Copyright © All rights reserved.</p>
      <div className="gradient-circle-bottom"></div>
    </>
  );
};

export default Footer;
