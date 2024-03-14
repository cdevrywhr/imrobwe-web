import React, {useState} from "react";
import Image from 'next/image';
import CustomModal from '../Modal';

const WorkCard = ({ img, name, description, onClick,initialIndexValue }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      {/* <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{width:"auto" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div> */}
      {/* <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1> */}
      {/* <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2> */}
      <button onClick={handleOpen}>
        <Image src={img} alt={name} width={500} height={500} className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300" />
      </button>
      <CustomModal open={open} handleClose={handleClose} img={img} name={name} />
      {/* <CustomModal open={true} handleClose={handleClose} img={img} initialIndex={initialIndexValue} /> */}

    </div>
  );
};

export default WorkCard;
