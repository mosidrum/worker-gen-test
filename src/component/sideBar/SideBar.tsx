import React from "react";
import { SideBarList } from "./SideBarList";
import {
  colleteral,
  customers,
  home,
  marketing,
  myWork,
  sales,
} from "./sideBarData";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

type SidebarProps = {
  onClickAgentSkill?: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  onClickAgentSkill,
}: SidebarProps) => {
  return (
    <>
      <div className="flex flex-col px-2 py-2 gap-5 w-[200px] h-screen overflow-y-auto border-r-2 border-gray-200">
        <div>
          <div className=" flex items-center justify-between px-2">
            {isSidebarOpen ? (
              <LiaTimesSolid
                className="md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            ) : (
              <RxHamburgerMenu />
            )}
          </div>
          {home.map((item, i) => (
            <SideBarList
              key={i}
              title={item.title}
              leftIcon={item.icon}
              rightIcon={i !== 0 ? <IoIosArrowDown /> : null}
            />
          ))}
        </div>
        <SideBarList
          title="Agent skills"
          onClickList={onClickAgentSkill}
          leftIcon={<MdOutlineSupportAgent size={24} />}
        />
        <div>
          <div className="px-2 sidebar-header-text">My work</div>
          {myWork.map((item, index) => (
            <SideBarList
              leftIcon={item?.icon}
              title={item?.title}
              key={index}
            />
          ))}
        </div>
        <div>
          <div className="px-2 sidebar-header-text">Customers</div>
          {customers.map((item, index) => (
            <SideBarList leftIcon={item.icon} title={item.title} key={index} />
          ))}
        </div>
        <div>
          <div className="px-2 sidebar-header-text">Sales</div>
          {sales.map((item, index) => (
            <SideBarList leftIcon={item.icon} title={item.title} key={index} />
          ))}
        </div>
        <div>
          <div className="px-2 sidebar-header-text">Colleteral</div>
          {colleteral.map((item, index) => (
            <SideBarList leftIcon={item.icon} title={item.title} key={index} />
          ))}
        </div>
        <div>
          <div className="px-2 sidebar-header-text">Marketing</div>
          {marketing.map((item, index) => (
            <SideBarList leftIcon={item.icon} title={item.title} key={index} />
          ))}
        </div>
        <div>
          <div className="px-2 sidebar-header-text pb-1">Perfomance</div>
          <hr />
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <span className="px-2 text-white bg-purple-600 rounded-sm">
                S
              </span>
              <div className="sidebar-header-text">Sales</div>
            </div>
            <div className="flex flex-col gap-10">
              <LuChevronsUpDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
