
// import React from "react";
// import Icon from "../Icon";
import IconPinDual from "../Icons/IconPinDual";
import { useResponsiveSideBar } from "../../context/ResponsiveSidebar";
import IconPinDualActive from "../Icons/IconPinDualActive";

export default function PinSideBar() {

  const { sideBarClass, handleFixBar, fixedSideBar } = useResponsiveSideBar();

  return (
    <button className={`${sideBarClass} px-[8px]`} onClick={handleFixBar} >
      {fixedSideBar ? <IconPinDualActive className="w-4" /> : <IconPinDual className="w-4" />}
    </button>
  );
}