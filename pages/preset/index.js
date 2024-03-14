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
import { getAllPreset } from "../../utils/api";
import Socials from "../../components/Socials";
import Image from "next/image"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Preset = ({ presets }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createBlog = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/preset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  const deleteBlog = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };
  return (
    showBlog.current && (
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
          <div className="mt-3">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-4xl laptop:text-7xl w-full"
            >
              Preset.
            </h1>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
              {presets &&
                presets.map((post) => (
                  <div
                    className="cursor-pointer relative desabled"
                    key={post.slug}
                    onClick={() => Router.push(`/preset/${post.slug}`)}
                  >
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
                      
                      <Image className="rounded-lg" src={post.cover} alt={post.title} width={500} height={500}/>
                  
                      <figcaption className="absolute px-5 text-3xl text-white bottom-6">
                          <h2>{post.title}</h2>
                      </figcaption>
                    </figure>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Socials className="mt-10 laptop:mt-5 justify-center" />
        <Footer/>
        <SpeedInsights/>
      </>
    )
  );
};

export async function getStaticProps() {
  const presets = getAllPreset([
    "slug",
    "title",
    "cover",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      presets: [...presets],
    },
  };
}

export default Preset;
