import Head from "next/head";

import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";

import Socials from "../../components/Socials";



export default function About(){
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();


  return (
    
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>{data.name}</title>
          
        </Head>
       
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header isBlog={true}></Header>

          <div className="mt-5">
            <div className="mt-0 laptop:mt-30 tablet:p-0 laptop:p-0 laptop:grid  laptop:grid-cols-3">
              <div className="mt-0 mb-10 laptop:mt-3 grid laptop:grid-cols-1 tablet:grid-cols-1 gap-4">
                  <div className="col-end-5 col-span-2 mr-10 justify-center">
                      <img src={`${data.profilepic}`} className="w-auto tablet:h-50 laptop:h-60 ">
                    </img>
                  </div>
              </div>
              <div className="mt-5 laptop:mt-2 laptop:mr-20 grid laptop:grid-cols-0 col-start-2 col-span-4 gap-5">
                  <h6
                      ref={text1}
                      className="mx-auto mob:p-2 text-bold text-2xl laptop:text-2xl w-full"
                      >
                      Harmonizing Moments: Roby Julian's Journey Begins
                      </h6>
                      <p class="mob:p-5"><br/>
                      In 2017, Palembang was a city rarely visited by concerts and music festivals. However, that was the first year for a man named Roby Julian, who ventured into the world of concert photography. Roby created unforgettable memories when he borrowed a camera from a friend and attended Bingenfest, one of the rare music festivals in the city.
                      <br/><br/>
                      During that event, he captured the performances of bands such as Mustache and Beard and Dialog Dini Hari. The borrowed camera became a window into the live music world, where every beam of light and musician's expression was captured in the photos he produced.
                      <br/><br/>
                      2019 marked the beginning of his personal journey into photography. Roby decided to buy his first camera, entering the realm of street photography, and delving deeper into the art of capturing moments. His work can be found on his personal Instagram account <a href="https://www.instagram.com/robyjulian_/">(Click Here.)</a>, where he shares captivating portraits he captures on his journey. 
                      <br/>  <br/>
                      In 2023, Roby made a significant decision to move to Jakarta, the vibrant capital of music and arts. This decision was made with the aim of gaining more opportunities to attend concerts and photograph musicians. He wanted to experience the pulsating beat of the music scene more intensely and embrace it through the lens of his camera.
                      <br/><br/>
                      Throughout his life's journey, Roby always remembers the words of an old friend, "Moments can't be repeated, and human memories are not eternal." These words serve as a reminder of the importance of preserving memories in the form of images that he captures, turning every moment he captures in his photos into an enduring story.
                      <br/><br/>
                      So, this is the story of Roby Julian, a music enthusiast who has turned his love into beautiful art through the world of photography. He continues to explore, chasing irreplaceable moments, and preserving memories that will never fade through his camera lens.             
                      </p>

              </div>
              
            </div>
            
          </div>
        </div>
        <Socials className="mt-10 laptop:mt-5 justify-center" />
        <Footer/>
      </>
    
  );
};
