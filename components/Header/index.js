import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";
import Socials from "../Socials";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const {theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { logo ,name, showBlog, showResume, showAbout, showAnalog } = data;

  useEffect(() => {
    setTheme("dark")
    setMounted(true);
  }, []);

  return (
    <>
      <div className="gradient-circle"></div>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium font-sans p-2 laptop:p-0 link"
              >
                {logo}.
              </h1>
              
              <div className="flex items-center"> 
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
                    className="h-6"
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
                theme === "dark" ? "bg-blue-gray-900" : "bg-gray-900"
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
                  <Button onClick={() => router.push("/preset")}>Preset</Button>
                  {/* <Button onClick={() => router.push("/analog")}>Analog</Button> */}
                  <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
                  </Button>
                  <Socials className="mt-3"/>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showAbout && (
                    <Button onClick={() => router.push("/about")}>About</Button>
                  )}
                  <Button onClick={() => router.push("/preset")}>Preset</Button>
                  {/* <Button onClick={() => router.push("/analog")}>Analog</Button> */}
                  <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
                  </Button>
                  <Socials className="mt-3"/>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}>
        <div>
          <h1
            onClick={() => router.push("/")}
            className="ml-5 font-medium text-center text-xl cursor-pointer mob:p-2 laptop:p-0">
          {logo}.
          </h1>
        {/* <p className="text-center">ROBWE.</p> */}
        </div>
       
        
        {!isBlog ? (
          <div className="flex grid grid-rows-2 grid-flow-col">
            <div className="flex col-start-1 col-end-7">
               {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
              {showAbout && (
                <Button onClick={() => router.push("/about")}>About</Button>
              )}
              <Button onClick={() => router.push("/preset")}>Preset</Button>
              {/* <Button onClick={() => router.push("/analog")}>Analog</Button> */}
              <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
              </Button>
            </div>
            <div className="col-end-7 col-span-2 ">
              <Socials/>
            </div>

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
          <div className="flex grid grid-rows-2 grid-flow-col">
            
            <div className="flex col-start-1 col-end-7">
               {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
              {showAbout && (
                <Button onClick={() => router.push("/about")}>About</Button>
              )}
              <Button onClick={() => router.push("/preset")}>Preset</Button>
              {/* <Button onClick={() => router.push("/analog")}>Analog</Button> */}
              <Button
                    onClick={() => window.open("mailto:robyjulian212@gmail.com")}
                  >
                    Contact
              </Button>
            </div>
            <div className="col-end-7 col-span-2 ">
              <Socials/>
            </div>

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
