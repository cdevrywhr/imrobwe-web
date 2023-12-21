import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
const AccordionCustomIcon = () => {
  const [open, setOpen] = useState();
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <div className="">
        <div className="mt-0 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
          <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
            {/* <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)} className="text-white font-serif text-lg">
                  Instalation
              </AccordionHeader>
              <AccordionBody>
              <li>Extract the ZIP file (to your desktop computer, not to your phone).</li>
              <br/>
              <li>Open Lightroom and go to the Presets section. Click on File - Import Profiles & Presets.</li>
              <br/>
              <li>Select the presets ZIP file(s) and click Import. → Selecting the ZIP file.</li>
              <br/>
              <li>Restart LR and your presets will now be listed in the Presets section.</li>
              </AccordionBody>
          </Accordion> */}
          </div>
           <div className="mt-3 laptop:mt-3 grid grid-cols-1 gap-4 justify-center">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)} className="text-white font-serif text-lg">
                  Instalation
              </AccordionHeader>
              <AccordionBody>
              <li>Extract the ZIP file (to your desktop computer, or your phone).</li>
              <br/>
              <li>Open Lightroom and go to the Presets section. Click on File - Import Profiles & Presets.</li>
              <br/>
              <li>Select the presets ZIP file(s) and click Import. → Selecting the ZIP file.</li>
              <br/>
              <li>Restart LR and your presets will now be listed in the Presets section.</li>
              </AccordionBody>
          </Accordion>
              
           </div>
           <div className="mt-3 laptop:mt-3 grid grid-cols-1 tablet:grid-cols-1 gap-4">
           {/* <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                  We&apos;re not always in the position that we want to be at. We&apos;re constantly
                  growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                  ourselves and actualize our dreams.
                  </AccordionBody>
            </Accordion> */}
           </div>
            
        </div>
      </div>
        
    </>
  );
};

export default AccordionCustomIcon;