import React from "react";

const Main = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return <main className={`w-full px-24 ${className}`}>{children}</main>;
};

export default Main;
