import { useRef } from "react";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import Footer from "../../components/Footer";
import Head from "next/head";
import Cursor from "../../components/Cursor";

// Local Data
import data from "../../data/portfolio.json";

export default function Analog() {
  // Ref
  // const workRef = useRef();
  // const aboutRef = useRef();

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

      <div className="gradient-circle"></div>
      

      <div className="container mx-auto mb-10">
        <Header/>
        <div className="text-center">
            <h1>Mau jualan preset nanti diisi...</h1>
        </div>
        <div className="mt-10 laptop:mt-30 tablet:p-0 laptop:p-0">
          <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            
              {/* <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {data.projects_1.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {data.projects_2.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div>

              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                {data.projects_3.map((project) => (
                  <WorkCard
                    key={project.id}
                    img={project.imageSrc}
                    // name={project.title}
                    // description={project.description}
                    // onClick={() => window.open(project.url)}
                  />
                ))}
              </div> */}
          </div>
        </div>
      </div>
      <Socials className="mt-10 laptop:mt-5 justify-center" />
      <Footer/>
    </div>
    
  );
}
