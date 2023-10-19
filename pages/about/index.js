import Head from "next/head";
import Router, { useRouter } from "next/router";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";

import Socials from "../../components/Socials";



export default function About(){
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();


  return (
    showBlog.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>About</title>
          
        </Head>
       
        <div
          className={`container mx-auto mb-10 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <div className="mt-10 laptop:mt-30 tablet:p-0 laptop:p-0 laptop:grid  laptop:grid-cols-3">
              <div className="mt-3 mb-10 laptop:mt-3 grid laptop:grid-cols-1 tablet:grid-cols-1 gap-4">
                  <div className="col-end-7 col-span-2 mr-10">
                      <img src="https://raw.githubusercontent.com/cdevrywhr/imrobwe-web/concert/about/DSC019411x1.jpg" className="w-auto tablet:h-60 laptop:h-60">
                    </img>
                  </div>
              </div>
              <div className="mt-5 laptop:mt-3 grid laptop:grid-cols-0 col-start-2 col-span-4 gap-4">
                  <h6
                    ref={text}
                    className="mx-auto mob:p-0 text-bold text-2xl laptop:text-2xl w-full"
                    >
                    The Man Behind The Gun.
                  </h6>
                  <p>
                    Roby Julian, dia lahir di Indonesia tepatnya dikota Sungailiat yang terletak pada pulau Bangka Belitung. Dia mendapatkan kamera pertamanya pada tahun 2019 dari hasil menabung. Sejak saat itu dia mencoba untuk menekuni Street Photography, bisa dilihat pada akun Instagramnya <a href="https://www.instagram.com/robyjulian_/">@robyjulian_</a>. 
                    <br/> 
                    Her authenticity behind the camera brings out the humanity in her subject matter. Paola's ability to transport you directly into a scene is experienced boldly through both her personal and professional work, taking her all around the world. From documenting the energy of Rio de Janeiro during Carnaval to showcasing the Americana charm of the United States' Midwest and leading photography workshops, she has partnered with some of the world's most prominent brands to create and tell stories from her unique visual lens.
                    
                    What once started as a hobby many years ago has transpired into Paola’s truest vocation. As a result, her creative journey has changed her life in unimaginable ways. Storytelling is a key element cemented in Paola's creative vision — something she holds near and dear to her heart.

                  </p>

                  <h5
                    ref={text}
                    className="mx-auto mob:p-0 text-bold text-2xl laptop:text-2xl w-full"
                    >
                    Artist Statement
                  </h5>
                  <p>
                    I'm always trying to push boundaries within myself by mastering timing and refining my ability to observe and record those decisive moments in time. I am a reader of people and fascinated by human behavior.  Always curious, and wondering what the people I capture are experiencing, what emotions they are going through, and I try to share their stories. A snapshot of a passing moment that will never happen again. 
                    I hope for people to go beyond their senses with my images, as I wish to evoke emotion behind the lives that people lead.
                  </p>
                  <h5
                    ref={text}  
                    className="mx-auto mob:p-0 text-bold text-2xl laptop:text-2xl w-full"
                    >
                    Select Clients
                  </h5>
                  <p>
                    Budweiser, American Airlines, Mercedes Benz, Nike, Sony, Adobe, Acura, ESPN, Viking Cruises, Uber, Verizon, StreetEasy, Samsung, among others. 
                  </p>
              </div>
              
            </div>
            
          </div>
        </div>
        <Socials className="mt-10 laptop:mt-5 justify-center" />
        <Footer/>
      </>
    )
  );
};
