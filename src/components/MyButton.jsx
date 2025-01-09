import React from "react";

const MyButton = ({ children, buttonClass }) => {
  return <button className={`${buttonClass} px-5 py-2`}>{children}</button>;
};

export default MyButton;
