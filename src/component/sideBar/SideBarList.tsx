import React, { ReactNode } from "react";

type SideBarListProps = {
  title?: string;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
};

export const SideBarList = ({
  leftIcon,
  title,
  rightIcon,
}: SideBarListProps) => {
  return (
    <div>
      <div className="hover:bg-white py-1">
        <div className="flex items-center justify-between px-2 py-1 hover:border-l-4 hover:border-blue-500 hover:cursor-pointer">
          <div className="flex items-center gap-3">
            <div>{leftIcon}</div>
            <div className="text-sm">{title}</div>
          </div>
          {rightIcon && <div>{rightIcon}</div>}
        </div>
      </div>
    </div>
  );
};
