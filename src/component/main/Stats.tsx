import React from "react";

const stats = [
  {
    stat: "Won $18m",
    color: "bg-green-500",
  },
  {
    stat: "Committed $8m",
    color: "bg-blue-500",
  },
  {
    stat: "Best case $7m",
    color: "bg-purple-500",
  },
  {
    stat: "Qualified $3m",
    color: "bg-orange-500",
  },
  {
    stat: "Leads $75m",
    color: "bg-gray-500",
  },
];

export const Stats = () => {
  return (
    <div className="flex space-x-2">
      {stats.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
          <span className="text-xs">{item.stat}</span>
        </div>
      ))}
    </div>
  );
};
