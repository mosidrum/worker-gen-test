import meta from "../../public/meta.png";
import walmart from "../../public/walmart.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export const featureItems = [
  {
    title: "Cafe A100 for WoodlandBank",
    image: meta,
    type: "Woodland Bank",
    amount: "$280,000",
    time: "8 days to close",
    icon: <MdOutlineMarkEmailUnread />,
    callToAction: "Review Draft and reply to Chris Naido",
  },
  {
    title: "Partinership oppurtunity for Fabrikam",
    image: walmart,
    type: "Fabrikam",
    amount: "$5,000,000",
    time: "12 days to close",
    icon: <SlCalender />,
    callToAction: "Prepare me for Fabrikam's key stakeholder meeting",
  },
];
