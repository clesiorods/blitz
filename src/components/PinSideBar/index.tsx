
// import React from "react";
// import Icon from "../Icon";
import IconPinDual from "../Icons/IconPinDual";
import { useResponsiveClass } from "../../context/responsive.sidebar";

export default function PinSideBar() {

  const { sideBarClass } = useResponsiveClass();

  return (
    <button className={`${sideBarClass}`} >
      <IconPinDual className="w-4" />
    </button>
  );
}