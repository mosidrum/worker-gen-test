import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { SmallCardProps } from "../main/SmallCard";

interface ModalProps extends SmallCardProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  name,
  title,
  quality,
  values,
  setShowModal,
  showModal,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold mb-4">Details</h2>
          <LiaTimesSolid onClick={() => setShowModal(!showModal)} />
        </div>
        <p className="text-gray-700">Name: {name}</p>
        <p className="text-gray-700">Title: {title}</p>
        <p className="text-gray-700 mt-2">{quality.join(", ")}</p>
        <p className="text-gray-700 mt-2">{values.join(", ")}</p>
      </div>
    </div>
  );
};
