import React from "react";
import Image from "next/image";
import yes from "../../../public/correct.webp";
import champion from "../../../public/champion.webp";
import high from "../../../public/growth.png";

interface CardProps {
  qualities: string[];
}

const Card: React.FC<CardProps> = ({ qualities }) => {
  const items = [
    {
      label: qualities[0],
      image: yes,
      type: "Yes",
    },
    {
      label: qualities[1],
      image: champion,
      type: "$1M",
    },
    {
      label: qualities[2],
      image: high,
      type: "High",
    },
  ];

  return (
    <div className="flex gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-2 border rounded-lg shadow-custom-main"
        >
          <Image
            src={item.image}
            alt={item.label || "Item image"}
            width={30}
            height={30}
          />
          <div>
            <div className="font-bold text-sm">{item.label}</div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              {item.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
