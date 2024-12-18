import { GrImage } from "react-icons/gr";
import { PiListBulletsBold, PiDotsThreeOutlineVertical } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoRefreshOutline, IoTimerOutline, IoFilter } from "react-icons/io5";
import { FcCollaboration } from "react-icons/fc";
import { RiDeleteBin6Line, RiLayoutColumnLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { LuPencilLine } from "react-icons/lu";
import { HeaderListProps } from "./SubHeader";

export const headerList: HeaderListProps[] = [
  {
    label: "Show cart",
    leftIcon: <GrImage />,
  },
  {
    label: "Focused view",
    leftIcon: <PiListBulletsBold />,
  },
  {
    label: "New",
    leftIcon: <GoPlus />,
  },
  {
    label: "Refresh",
    leftIcon: <IoRefreshOutline />,
  },
  {
    label: "Collaborate",
    leftIcon: <FcCollaboration />,
  },
  {
    label: "Delete",
    leftIcon: <RiDeleteBin6Line />,
    rightIcon: <IoIosArrowDown />,
    extraIcon: <PiDotsThreeOutlineVertical />,
  },
  {
    label: "Smart data",
    leftIcon: <IoTimerOutline />,
    hasBorder: true,
  },
  {
    label: "Edit filters",
    leftIcon: <IoFilter />,
    hasBorder: true,
  },
  {
    label: "Edit columns",
    leftIcon: <RiLayoutColumnLine />,
    hasBorder: true,
  },
  {
    label: "",
    rightIcon: (
      <div className="flex items-center gap-1 rounded-sm bg-blue-500 text-white p-[2px]">
        <LuPencilLine /> | <IoIosArrowDown />
      </div>
    ),
  },
];
