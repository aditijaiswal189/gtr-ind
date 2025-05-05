import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={clsx(
        " m-4  rounded-lg border-2",
        className // supports "border-blue", etc.
      )}
    >
      {children}
    </div>
  );
};


