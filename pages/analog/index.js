import { useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import Header from "../../components/Header";
import WorkCard from "../../components/WorkCard";
import Socials from "../../components/Socials";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import Head from "next/head";
import Button from "../../components/Button";
import Link from "next/link";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function Analog() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const analog = data.analog
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
        <title>{data.name} - Analog</title>
      </Head>

      <div className="gradient-circle"></div>

      <div className="container mx-auto mb-10">
        <Header isBlog={true}></Header>
        <div className="mt-10 laptop:mt-30 tablet:p-0 laptop:p-0">
          <Carousel transition={{ duration: 2 }} className="rounded-xl">
            {data.analog.first.map((photo) =>
              <img
                  src={photo.link}
                  alt="image 1"
                  className="h-full w-full object-cover"
              />
            )}
          </Carousel>
          {/* <div className="mt-10 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            
              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {analog.first.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.link}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {analog.second.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.link}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {analog.third.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.link}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div>
          </div> */}
        </div>
      </div>
      <Socials className="mt-10 laptop:mt-5 justify-center" />
      <Footer/>
    </div>
    
  );
}
