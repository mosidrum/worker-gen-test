import {
  MdOutlineDashboard,
  MdContacts,
  MdOutlineAddIcCall,
  MdOutlineManageAccounts,
  MdOutlineCropPortrait,
  MdOutlineEventNote,
} from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { TfiWrite, TfiNotepad } from "react-icons/tfi";
import { LuUserRound } from "react-icons/lu";
import { BiNotepad } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { PiBuildingOffice } from "react-icons/pi";
import { SiMarketo, SiQuicktime } from "react-icons/si";
import {} from "react-icons/si";

export const myWork = [
  {
    title: "Sales Accelerators",
    icon: <IoIosRocket />,
  },
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  ,
  {
    title: "Activities",
    icon: <TfiWrite />,
  },
];
export const customers = [
  {
    title: "Accounts",
    icon: <MdOutlineManageAccounts />,
  },
  {
    title: "Contacts",
    icon: <MdContacts />,
  },
];
export const sales = [
  {
    title: "Leads",
    icon: <MdOutlineAddIcCall />,
  },
  {
    title: "Oppurtunities",
    icon: <MdOutlineCropPortrait />,
  },
  {
    title: "Competitors",
    icon: <LuUserRound />,
  },
];
export const colleteral = [
  {
    title: "Quotes",
    icon: <MdOutlineEventNote />,
  },
  {
    title: "Orders",
    icon: <BiNotepad />,
  },
  {
    title: "Invoice",
    icon: <TfiNotepad />,
  },
  {
    title: "Products",
    icon: <RiProductHuntLine />,
  },
  {
    title: "Sales Literature",
    icon: <PiBuildingOffice />,
  },
];
export const marketing = [
  {
    title: "Marketing lists",
    icon: <SiMarketo />,
  },
  {
    title: "Quick campaings",
    icon: <SiQuicktime />,
  },
];
