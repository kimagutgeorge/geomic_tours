import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  button_text: string;
  button_icon?: string;
  button_link: string;
}
const lightButton = ({
  button_text,
  button_icon,
  button_link,
}: ButtonProps) => {
  return (
    <>
      <button className="w-fit btn-default-light text-white">
        <Link to={button_link}>
          <span className="text-white">
            {button_text}{" "}
            {button_icon && <img src={button_icon} style={{ width: "30px" }} />}
          </span>{" "}
        </Link>
      </button>
    </>
  );
};
export default lightButton;
