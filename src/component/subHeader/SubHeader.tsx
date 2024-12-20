"use client";

import React, { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { headerList } from "./headerList";

type SubHeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderListProps = {
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  extraIcon?: ReactNode;
  hasBorder?: boolean;
};

const HeaderList = ({
  label,
  leftIcon,
  rightIcon,
  extraIcon,
  hasBorder = false,
}: HeaderListProps) => (
  <div
    className={`flex items-center gap-1 hover:cursor-pointer ${
      hasBorder ? "border rounded-md px-1" : ""
    }`}
  >
    {leftIcon}
    <div className="text-xs">{label}</div>
    {rightIcon && rightIcon}
    {extraIcon && extraIcon}
  </div>
);

export const SubHeader = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: SubHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white m-2 p-2 rounded-md shadow-custom-light">
      <div className="flex items-center gap-3">
        <RxHamburgerMenu
          className="cursor-pointer text-xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="text-sm">My Open Leads</div>
        <IoIosArrowDown />
      </div>

      <div className="xl:hidden flex items-center">
        <RxHamburgerMenu
          className="cursor-pointer text-xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>

      <div className="hidden xl:flex gap-2">
        {headerList.map((list, index) => (
          <HeaderList
            key={index}
            leftIcon={list.leftIcon}
            label={list.label}
            rightIcon={list.rightIcon}
            extraIcon={list.extraIcon}
            hasBorder={list.hasBorder}
          />
        ))}
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-2 bg-white shadow-lg rounded-md w-40 sm:w-40 flex flex-col gap-2 p-3 xl:hidden">
          <div className="flex justify-end">
            <IoClose
              className="cursor-pointer text-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {headerList.slice(0, -1).map((list, index) => (
            <HeaderList
              key={index}
              leftIcon={list.leftIcon}
              label={list.label}
              rightIcon={list.rightIcon}
              extraIcon={list.extraIcon}
            />
          ))}
        </div>
      )}
    </div>
  );
};
