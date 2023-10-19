import Head from "next/head";
import Router, { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";

const Blog = ({ posts }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [text.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  //   if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
  //   else router.push("/");
  // }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

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
            <div className="mt-10 laptop:mt-30 tablet:p-0 laptop:p-0">
              <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                  
                    {/* <img src={`${data.profilepic}`}>
                    </img> */}
              </div>
              <div className="mt- laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
                  <h5
                    ref={text}
                    className="mx-auto mob:p-2 text-bold text-2xl laptop:text-2xl w-full"
                    >
                    the man behind the gun.
                  </h5>
                  <p>
                    masih dibuat...
                  </p>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
             
            </div>
          </div>
        </div>
      </>
    
  );
};

export default Blog;
