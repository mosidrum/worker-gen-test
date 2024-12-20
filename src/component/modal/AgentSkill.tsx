import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineFileCopy } from "react-icons/md";
import { BsSignTurnRight } from "react-icons/bs";
import outlook from "../../../public/outlook.webp";
import copilot from "../../../public/copilot-icon.png";
import Image from "next/image";

type AgenSkillProps = {
  onClose: () => void;
};

type SpanProps = {
  icon: React.ElementType;
  item: string;
};

const Span = ({ icon: Icon, item }: SpanProps) => (
  <div className="flex items-center h-4 px-2 py-[10px] w-fit bg-blue-200 text-blue-500 rounded-lg mx-1">
    <Icon /> <span className="pl-1">{item}</span>
  </div>
);

export const AgenSkill = ({ onClose }: AgenSkillProps) => {
  const [shouldOpen, setShouldOpen] = useState<boolean>(true);
  console.log(shouldOpen);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg w-3/4 shadow-custom-light max-w-4xl">
        <div className="flex flex-col space-y-6">
          <LiaTimesSolid
            size={24}
            className="cursor-pointer ml-auto"
            onClick={onClose}
          />
          <div className="flex items-center space-x-1">
            <Image src={copilot} alt="copilot" className="h-4 w-4" />
            <span className="text-base font-semibold">Agent Skill</span>
          </div>
          <div className="shadow-custom-light p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="font-semibold">
                Check if on-hand inventry will all sales orders to ship without
                delay
              </div>

              {shouldOpen ? (
                <IoIosArrowDown
                  size={20}
                  className="hover:cursor-pointer"
                  onClick={() => setShouldOpen(!shouldOpen)}
                />
              ) : (
                <IoIosArrowUp
                  size={20}
                  className="hover:cursor-pointer"
                  onClick={() => setShouldOpen(!shouldOpen)}
                />
              )}
            </div>
            {shouldOpen && (
              <div className="flex flex-wrap items-center leading-8 text-base font-medium mt-4">
                <span>When</span> <Span icon={FaRegUser} item="any vendor" />
                <span>sends an email with changes to</span>
                <Span icon={FiFileText} item="confirm purchase orders" />
                <span> , check if the resulting</span>
                <Span icon={HiOutlineMenuAlt2} item="on-hand inventory" />
                <span>will allow</span>
                <Span icon={MdOutlineFileCopy} item="all sales orders" />
                <span> to</span>
                <Span icon={BsSignTurnRight} item="ship without delay" />
                <span>. If so,</span>
                <Span icon={BsSignTurnRight} item="update the purchase order" />
                <span>to reflect the change.</span>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-1">
              <Image src={outlook} alt="outlook" className="h-4 w-4" />
              <div className="text-base font-semibold">Enable Email access</div>
            </div>
            <div>
              Allow the agent to access email inboxes to read mail from know
              vendors
            </div>
            <div className="flex justify-between">
              <div className="flex justify-start items-center border rounded-lg w-3/6 md:w-5/6">
                <div className="flex w-auto items-center space-x-1 text-gray-500 bg-gray-200 rounded-xl">
                  <span className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center">
                    P
                  </span>
                  <span>purchasing@contoso.com</span>
                  <span>|</span>
                  <span className="px-1">X</span>
                </div>
              </div>
              <div className=" rounded-md py-2 px-6 bg-blue-500 text-white">
                Allow acess
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 items-center ml-auto">
            <div className="border rounded-md px-4 py-2 cursor-not-allowed bg-gray-300 text-gray-400">
              Activate
            </div>
            <div className="border rounded-md px-4 py-2 cursor-pointer">
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
