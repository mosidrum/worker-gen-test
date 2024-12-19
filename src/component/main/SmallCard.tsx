import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { Modal } from "../modal";

export interface SmallCardProps {
  name: string;
  title: string;
  about: string;
  image: StaticImageData;
  quality: string[];
  values: string[];
}

export const SmallCard = ({
  name,
  title,
  image,
  quality,
  about,
  values,
}: SmallCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTimeout, setModalTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowModal(!showModal);
    }, 2000);
    setModalTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (modalTimeout) {
      clearTimeout(modalTimeout);
    }
    setShowModal(!showModal);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card */}
      <div className="flex flex-col w-full sm:w-fit md:w-[350px] lg:w-[400px] p-4 sm:p-5 shadow-custom-layered rounded-2xl relative hover:cursor-pointer">
        <div className="flex items-center space-x-3">
          {image && (
            <Image
              src={image}
              alt={name || "User image"}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
          )}
          <div>
            <div className="text-sm font-bold truncate">{name}</div>
            <div className="text-xs text-gray-500 truncate">{title}</div>
          </div>
        </div>
        <div className="bg-indigo-50 p-2 rounded-lg mt-3 relative">
          <div>
            <div className="flex items-center space-x-2">
              <FaRegEnvelope size={20} className="text-blue-400" />
              <span className="text-sm font-bold truncate">
                Engage with {name}
              </span>
            </div>
            <div className="text-sm mt-1">{quality?.[0] || null}</div>
          </div>
          <BsStars
            size={28}
            className="absolute text-blue-600 bg-white rounded-bl-xl -top-1 right-0 p-1"
          />
        </div>
        <div className="flex items-center space-x-2 text-gray-400 text-xs mt-2">
          <p className="truncate">{values?.[0] || null}</p>
          <div className="w-1 h-1 rounded-full bg-gray-400" />
          <p className="truncate">{values?.[1] || null}</p>
        </div>
      </div>
      {showModal && (
        <div
          className=" inset-0 flex items-center justify-center z-50 bg-opacity-50"
          onClick={() => setShowModal(!showModal)}
        >
          <Modal
            title={title}
            quality={quality}
            values={values}
            image={image}
            name={name}
            about={about}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </div>
      )}
    </div>
  );
};
