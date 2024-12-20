import { statsAndSegments } from "@/utils";
import React from "react";

export const Stats = () => {
  return (
    <div className="flex space-x-2">
      {statsAndSegments.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
          <span className="text-xs">{item.stat}</span>
        </div>
      ))}
    </div>
  );
};
