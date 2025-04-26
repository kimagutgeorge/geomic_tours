import React from "react";
import { Link } from "react-router-dom";
import CurvedArrow from "../svg/CurvedArrorw";

interface ButtonProps {
  button_text: string;
  button_icon?: string;
  button_font_awesome?: string;
  button_link: string;
}
const LightButton = ({
  button_text,
  button_icon,
  button_link,
  button_font_awesome,
}: ButtonProps) => {
  return (
    <>
      <button className="w-fit btn-default-light text-white">
        <Link to={button_link}>
          <span className="text-white">
            {button_text}{" "}
            {button_icon && <CurvedArrow class_name="light-svg in-btn" />}
            {button_font_awesome && <i className={button_font_awesome}></i>}
          </span>{" "}
        </Link>
      </button>
    </>
  );
};
export default LightButton;
