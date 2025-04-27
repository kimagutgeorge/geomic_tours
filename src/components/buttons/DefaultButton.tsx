import React from "react";
import { Link } from "react-router-dom";
import CurvedArrow from "../svg/CurvedArrorw";

interface ButtonProps {
  button_text: string;
  button_icon?: string;
  button_font_awesome?: string;
  button_link: string;
  button_classname: string;
  button_icon_color?: string;
  button_span_color: string;
}
//w-fit btn-default-dark text-white
// light-svg in-btn
const DefaultButton = ({
  button_text,
  button_icon,
  button_link,
  button_font_awesome,
  button_classname,
  button_icon_color,
  button_span_color,
}: ButtonProps) => {
  return (
    <>
      <button className={button_classname}>
        <Link to={button_link}>
          <span className={button_span_color}>
            {button_text}{" "}
            {button_icon && <CurvedArrow class_name={button_icon_color} />}
            {button_font_awesome && <i className={button_font_awesome}></i>}
          </span>
        </Link>
      </button>
    </>
  );
};
export default DefaultButton;
