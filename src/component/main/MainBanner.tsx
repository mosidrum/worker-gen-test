"use client";

import React, { useState } from "react";
import { Segments } from "./Segments";
import copilot from "../../../public/copilot-icon.png";
import Image from "next/image";
import { Stats } from "./Stats";
import { SmallCard } from "./SmallCard";
import { aiUsers } from "@/utils/aiUsers";
import { Features } from "./Features";
import { featureItems } from "@/utils/feautureItems";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const MainBanner = () => {
  const [isRoles, setIsRoles] = useState(true);

  return (
    <div className="bg-white m-3 py-5 px-10 rounded-md shadow-custom-heavy relative">
      {isRoles && (
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 header-text">
            <Image src={copilot} alt="copilot logo" className="w-6 h-6" />
            <div className="text-sm sm:text-base">
              Hi Mona, <span className="text-blue-300">68%</span> of your goal
              is achieved, and the rest can be achieved by focusing on 20 top
              leads.
            </div>
          </div>
          <div className="flex flex-col space-y-1 mt-3 sm:mt-0">
            <div className="flex justify-start gap-3 text-sm">
              <div>
                Target <span className="font-bold">$45 million</span>
              </div>
              <span>|</span>
              <div>68% of target achieved</div>
            </div>
            <Segments />
            <Stats />
          </div>
        </div>
      )}
      <div className="py-2">
        {isRoles ? (
          <IoIosArrowDown
            size={30}
            className="absolute right-6 top-1"
            onClick={() => setIsRoles(!isRoles)}
          />
        ) : (
          <IoIosArrowUp
            size={30}
            className="absolute right-6 top-1"
            onClick={() => setIsRoles(!isRoles)}
          />
        )}
      </div>
      {isRoles && (
        <div className="mt-6 flex flex-col justify-center md:flex-row">
          <div className="flex-1 mb-6 md:mb-0 md:pr-4">
            <div className="mb-3 font-medium">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </div>
            <div className="flex flex-wrap gap-6">
              {aiUsers.slice(0, 2).map((user, index) => (
                <SmallCard
                  key={index}
                  title={user.title}
                  name={user.name}
                  image={user.image}
                  quality={user.qualities}
                  values={user.values}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto md:pl-14 md:border-l-2 flex flex-col space-y-4">
            <div>Other key features</div>
            {featureItems.map((feature, index) => (
              <Features
                key={index}
                title={feature.title}
                type={feature.type}
                time={feature.time}
                icon={feature.icon}
                image={feature.image}
                callToAction={feature.callToAction}
                amount={feature.amount}
              />
            ))}
            <div className="text-xs font-bold text-blue-600">
              Show all key activities
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
