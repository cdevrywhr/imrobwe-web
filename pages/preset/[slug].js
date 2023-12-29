import React, { useRef, useState } from "react";
import { getPresetBySlug, getAllPreset } from "../../utils/api";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { useRouter } from "next/router";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";
import Socials from "../../components/Socials";
import PresetInfo from "../../components/PresetInfo";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { SpeedInsights } from "@vercel/speed-insights/next"


const PresetPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{"Preset - " + post.title}</title>
        <meta name="description" content={post.preview} />
      </Head>
      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto mt-0 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true} />
        <div className="mt-10 flex flex-col">
          <img
            className="w-full mob:h-full laptop:h-full rounded-lg shadow-lg object-cover"
            src={post.header}
            alt={post.title}
          ></img>
          <h1
            ref={textOne}
            className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold"
          >
            {post.title}
          </h1>
          {/* <h2
            ref={textTwo}
            className="mt-2 text-xl max-w-4xl text-darkgray opacity-50"
          >
            {post.tagline}
          </h2> */}
        </div>

        <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 justify-between gap-10">
          <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
            <ContentSection content={post.content}></ContentSection>
          </div>
          <div className="mt-3 laptop:mt-0 grid-rows-2 tablet:grid-cols-3 gap-4">
            <div className="mt-3 laptop:mt-20 grid grid-cols-1 grid-rows-1 tablet:grid-cols-3 gap-4">
              <img src={`${post.cover}`} className="w-auto tablet:h-50 laptop:h-60 "/>
              <img src={`${post.image1}`} className="w-auto tablet:h-50 laptop:h-60 "/>
              <img src={`${post.image2}`} className="w-auto tablet:h-50 laptop:h-60 "/>
            </div>
            <div className="mt-3 laptop:mt-10 grid grid-cols-1 grid-rows-1 tablet:grid-cols-3 gap-4">
              <img src={`${post.image3}`} className="w-auto tablet:h-50 laptop:h-60"/>
              <img src={`${post.image4}`} className="w-auto tablet:h-50 laptop:h-60"/>
              <img src={`${post.image5}`} className="w-auto tablet:h-50 laptop:h-60"/>
            </div>
          </div>
          
          {/* <div className="mt-0 laptop:mt-20 laptop:mr-20 grid laptop:grid-cols-1 col-start-2 col-span-4 gap-10 mr-20">
                  <div className="col-end-5 col-span-2 mr-0 justify-center">
                      <img src={`${post.image}`} className="w-auto tablet:h-50 laptop:h-60 "/>
                  </div>
            </div> */}
        </div>
 
        <div className=" mt-10 justify-center flex flex-wrap mob:flex-nowrap link text-center" >
          <Link href={`${post.url}`}>
            <Button ripple={true} variant="outlined" color="white">Download</Button>
          </Link>
        </div>
        
        <PresetInfo className="justify-center flex flex-wrap mob:flex-nowrap link text-center"/>

        <Socials className="mt-10 laptop:mt-10 justify-center" />
        <Footer />
        <SpeedInsights/>
      </div>
      {/* {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => setShowEditor(true)} type={"primary"}>
            Edit this blog
          </Button>
        </div>
      )} */}

      {/* {showEditor && (
        <BlogEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )} */}
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPresetBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "cover",
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "header",
    "url",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPreset(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default PresetPost;
