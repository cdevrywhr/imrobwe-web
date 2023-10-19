import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const {theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog } = data;

  useEffect(() => {
    setTheme("dark")
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>
              <div className="flex items-center"> 
               {mounted&&data.darkMode && (
                  <Button
                     onClick={() =>
                        window.open("https://instagram.com/imrobwe")
                    }
                  >
                    <img
                      className="h-6"
                      // src={`/images/${
                      //   theme === "dark" ? "igdark.svg" : "ig.svg"
                      // }`}
                      src = "/images/igdark.svg"
                    ></img>
                  </Button>
                  
                )} 
                {/* {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "sun.svg" : "moon.svg"
                      }`}
                    ></img>
                  </Button>
                )} */}
                 
                <Popover.Button>
                  <img
                    className="h-5"
                    // src={`/images/${
                    //   !open
                    //     ? theme === "dark"
                    //       ? "menu.svg"
                    //       : "menu-white.svg"
                          
                    //     : theme === "light"
                    //     ? "cancel.svg"
                    //     : "cancel-white.svg"
                    // }`}
                    src = {`/images/${
                      `${!open ? 'menu-white.svg' : 'cancel-white.svg'}`
                    }`}
                    
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  {/* <Button onClick={handleWorkScroll}>Work</Button> */}
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showAbout && (
                    <Button onClick={() => router.push("/about")}>About</Button>
                  )}
                  <Button onClick={() => router.push("/analog")}>Analog</Button>
                  <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">Home</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showAbout && (
                    <Button onClick={() => router.push("/about")}>About</Button>
                  )}
                  <Button onClick={() => router.push("/analog")}>Analog</Button>
                  
                  <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showAbout && (
              <Button onClick={() => router.push("/about")}>About</Button>
            )}
            <Button onClick={() => router.push("/analog")}>Analog</Button>
            {/* <Button onClick={() => router.push("/blog")}>Blog</Button> */}
            {mounted && theme && data.darkMode && (
              <Button
                 onClick={() =>
                        window.open("https://instagram.com/imrobwe")
                    }
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "igdark.svg" : "ig.svg"}`}
                ></img>
              </Button>
            )}

            {/* {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )} */}
          </div>
        ):(
          <div className="flex">
            {showBlog && (
                <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
            {showAbout && (
              <Button onClick={() => router.push("/about")}>About</Button>
              )}
              <Button onClick={() => router.push("/analog")}>Analog</Button>
              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() =>
                          window.open("https://instagram.com/imrobwe")
                      }
                >
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "igdark.svg" : "ig.svg"}`}
                  ></img>
                </Button>
              )}

              {/* {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
              )} */}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
