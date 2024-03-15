import { useRef, useState } from "react";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Each } from "@/utils/each";
import dynamic from 'next/dynamic';

const LazyWorkCard = dynamic(() => import('../components/WorkCard'));


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const concert = data.concert

  // const handleAboutScroll = () => {
  //   window.scrollTo({
  //     top: aboutRef.current.offsetTop,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* <div className="gradient-circle"></div> */}
      

      <div className="container mx-auto mb-10">
        <Header/>
        
        <div className="mt-10 laptop:mt-30 tablet:p-0 laptop:p-0">
          <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            
              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                <Each of={concert.first} render={(item ,index) =>
                  <LazyWorkCard
                    key={item.id}
                    img={item.imageSrc}
                    name={item.title}
                    // description={project.description}
                    // onClick={showModal(item.imageSrc)}
                  />
                }/>
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                <Each of={concert.second} render={(item ,index) =>
                  <LazyWorkCard
                    key={item.id}
                    img={item.imageSrc}
                    name={item.title}
                    // description={project.description}
                    // onClick={showModal(item.imageSrc)}
                  />
                }/>
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                <Each of={concert.third} render={(item ,index) =>
                  <LazyWorkCard
                    key={item.id}
                    img={item.imageSrc}
                    name={item.title}
                    // description={project.description}
                    // onClick={showModal(item.imageSrc)}
                  />
                }/>
              </div>            
          </div>
        </div>
      </div>
      <Socials className="mt-10 laptop:mt-5 justify-center" />
      <Footer/>
      <SpeedInsights/>
    </div>
    
  );
}
