import React from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import { PiUserList } from "react-icons/pi";
import profile from "../../../public/profile.webp";
import Image from "next/image";

const rightIcons = [
  FaRegLightbulb,
  FiPlus,
  IoSettingsOutline,
  AiOutlineQuestion,
  PiUserList,
];

export const Header = () => (
  <div className="w-full bg-header text-white flex justify-between items-center p-4">
    <div className="flex gap-5 items-center justify-center">
      <div>
        <PiDotsNineBold size={30} />
      </div>
      <div className="flex items-center gap-3">
        <span>Dynamics 365</span>
        <span>|</span>
        <span className="text-sm">Sales hub</span>
      </div>
    </div>
    <div className="flex items-center gap-5">
      {rightIcons.map((IconComponent, index) => (
        <IconComponent key={index} size={18} />
      ))}
      <Image src={profile} alt="Profile" className="w-7 h-7" />
    </div>
  </div>
);
