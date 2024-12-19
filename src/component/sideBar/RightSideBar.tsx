import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { TfiComments } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

const icons = [MdOutlineMailOutline, TfiComments, FiPhone, GoComment];
const SIZE = 20;

export const RightSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center pt-2 gap-5 w-[50px] min-h-screen bg-muted">
      {icons.map((IconElement, index) => (
        <IconElement key={index} size={SIZE} />
      ))}
    </div>
  );
};
