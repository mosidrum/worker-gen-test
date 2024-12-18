import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoComment } from "react-icons/go";
import { TfiComments } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

const icons = [MdOutlineMailOutline, TfiComments, FiPhone, GoComment];
const SIZE = 20;

export const RightSideBar = () => {
  return (
    <div className="flex flex-col items-center pt-2 gap-5">
      {icons.map((IconElement, index) => (
        <IconElement key={index} size={SIZE} />
      ))}
    </div>
  );
};
