import React from "react";

const segments = [
  {
    color: "bg-green-500",
    width: "w-[30%]",
    style: "rounded-l-lg",
  },
  {
    color: "bg-blue-500",
    width: "w-[20%]",
  },
  {
    color: "bg-purple-500",
    width: "w-[15%]",
  },
  {
    color: "bg-orange-500",
    width: "w-[10%]",
  },
  {
    color: "bg-gray-500",
    width: "w-[25%]",
    style: "rounded-r-lg",
  },
];

export const Segments = () => {
  return (
    <div className="w-full h-2 flex">
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`${segment.width} ${segment.color} ${
            segment.style ? segment.style : ""
          }`}
        />
      ))}
    </div>
  );
};
