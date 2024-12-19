import { AIUser } from "@/utils/aiUsers";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { SmallCard } from "./SmallCard";

type CardContainerProps = {
  aiUsers: AIUser[];
};

export const CardContainer = ({ aiUsers }: CardContainerProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    if (currentPage < Math.ceil(aiUsers.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = aiUsers.slice(startIndex, endIndex);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-6">
        {currentItems.map((user, index) => (
          <SmallCard
            key={index}
            title={user.title}
            name={user.name}
            image={user.image}
            about={user.about}
            quality={user.qualities}
            values={user.values}
          />
        ))}
      </div>
      {currentPage > 0 && (
        <div
          className="absolute shadow-custom-light rounded-full bg-white -left-7 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
          onClick={handlePrev}
        >
          <BsArrowLeft size={24} />
        </div>
      )}
      {currentPage < Math.ceil(aiUsers.length / itemsPerPage) - 1 && (
        <div
          className="absolute shadow-custom-light rounded-full bg-white -right-7 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer"
          onClick={handleNext}
        >
          <BsArrowRight size={24} />
        </div>
      )}
    </div>
  );
};
