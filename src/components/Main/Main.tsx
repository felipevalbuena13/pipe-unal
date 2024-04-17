import React from "react";

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return <main className="w-full px-24">{children}</main>;
};

export default Main;
