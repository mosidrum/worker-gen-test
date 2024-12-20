import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { BsStars } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

type FeaturesProps = {
  title: string;
  image: StaticImageData;
  type: string;
  amount: string;
  time: string;
  icon: ReactNode;
  callToAction: string;
};

export const Features = ({
  title,
  image,
  type,
  amount,
  time,
  icon,
  callToAction,
}: FeaturesProps) => (
  <Tooltip title={title} followCursor>
    <div className="flex flex-col w-full space-y-2 shadow-custom-layered rounded-xl py-2 px-4 hover:cursor-pointer">
      <div className="flex items-center space-x-2">
        <Image src={image} alt="logo" className="h-6 w-6 rounded-full" />
        <div>
          <div className="text-sm font-bold">{title}</div>
          <div className="flex flex-wrap items-center space-x-2">
            <div className="text-xs text-gray-500 font-medium">{type}</div>
            <div className="h-1 w-1 rounded-full bg-gray-500" />
            <div className="text-xs text-gray-500 font-medium">{amount}</div>
            <div className="h-1 w-1 rounded-full bg-gray-500" />
            <div className="text-xs text-gray-500 font-medium">{time}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3">
        <div className="flex w-full bg-indigo-50 p-2 space-x-2 items-center rounded-md">
          {icon}
          <span className="text-[10px] font-bold">{callToAction}</span>
        </div>
        <BsStars className="text-blue-600" />
      </div>
    </div>
  </Tooltip>
);
