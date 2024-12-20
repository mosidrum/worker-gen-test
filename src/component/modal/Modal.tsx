import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { SmallCardProps } from "../main/SmallCard";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa6";
import { Card } from "./card";
import { IoIosArrowDown } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { aiUsers } from "@/utils/aiUsers";

interface ModalProps extends SmallCardProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ id, setShowModal }: ModalProps) => {
  const [currentId, setCurrentId] = useState<number>(id);
  const currentUser = aiUsers.find((user) => user.id === currentId);


  const handleBackdropClick = () => {
    setShowModal(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white flex flex-col space-y-3 p-6 rounded-lg w-3/5 shadow-custom-light2 relative"
        onClick={handleContentClick}
      >
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center space-x-2">
            <FaRegEnvelope size={20} className="text-blue-400" />
            <span className="text-md font-bold truncate">
              Engage with {currentUser?.name}
            </span>
          </div>
          <LiaTimesSolid
            size={24}
            className="cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        <div className="flex w-full border items-center space-x-3 shadow-custom-light rounded-lg p-3">
          {currentUser?.image && (
            <Image
              src={currentUser?.image}
              alt={currentUser?.name || "User image"}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
          )}
          <div>
            <div className="text-sm font-bold truncate">
              {currentUser?.name}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {currentUser?.title}
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-custom-light rounded-lg p-3">
          <div className="flex items-center justify-between bg-indigo-50 rounded-lg p-3">
            <div className="flex space-x-1">
              <div className="bg-gradient-blue-purple bg-clip-text text-transparent text-sm">
                {currentUser?.qualities?.[0]}
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-1 py-2 px-3 rounded-lg items-center hover:cursor-pointer borde bg-white">
                <GoPencil size={16} color="black" />
                <span className="text-xs ">Edit</span>
              </div>
              <div className="flex space-x-1 py-2 px-3 rounded-lg items-center hover:cursor-pointer border bg-gradient-blue-purple text-white">
                <VscSend size={16} />
                <span className="text-xs">Approve and send</span>
              </div>
            </div>
          </div>
          <div className="flex px-3 space-x-2 items-center mt-12">
            <div className="hover:border-b-4 hover:border-blue-600 hover:cursor-pointer pb-2">
              Engage
            </div>
            <div className="hover:border-b-4 hover:border-blue-600 hover:cursor-pointer pb-2">
              Research
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-custom-light2 rounded-lg">
          <div className="p-2 rounded-lg bg-indigo-50">
            <div className="p-2 flex flex-col space-y-2">
              <div className="text-sm font-bold bg-gradient-blue-purple bg-clip-text text-transparent">
                Why I chose this lead
              </div>
              {currentUser?.qualities.map((item, index) => (
                <li className="font-xs" key={index}>
                  {item}
                </li>
              ))}
              <div>
                <Card qualities={currentUser?.values} />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-custom-light p-2 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm sm:text-base">
              About {currentUser?.name}
            </div>
            <IoIosArrowDown size={20} />
          </div>
          <div className="text-xs sm:text-sm">{currentUser?.about}</div>
        </div>

        {currentUser?.id !== aiUsers.length && (
          <div className="absolute border rounded-full bg-gradient-blue-purple text-white top-1/2 -right-6 transform -translate-y-1/2 p-2 sm:p-3 cursor-pointer">
            <BsArrowRight
              size={20}
              onClick={() => setCurrentId(currentId + 1)}
            />
          </div>
        )}

        {currentUser?.id !== 1 && (
          <div className="absolute border rounded-full bg-gradient-blue-purple text-white top-1/2 -left-6 transform -translate-y-1/2 p-2 sm:p-3 cursor-pointer">
            <BsArrowLeft
              size={20}
              onClick={() => setCurrentId(currentId - 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
