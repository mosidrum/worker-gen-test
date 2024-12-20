import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { statsAndSegments } from "@/utils";

export const Segments = () => {
  return (
    <div className="w-full h-2 flex">
      {statsAndSegments.map((segment, index) => (
        <Tooltip title={segment.stat} arrow key={index}>
          <div
            className={`${segment.width} ${segment.color} ${
              segment.style ? segment.style : ""
            } hover:cursor-pointer`}
          />
        </Tooltip>
      ))}
    </div>
  );
};
