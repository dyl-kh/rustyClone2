import { Component } from "solid-js";
import SideBarIcon from "./SideBarIcon";
import ProfileIcon from "../MidBar/ProfileIcon";
import InfoIcon from "./InfoIcon";

const SideBar: Component = () => {
  return (
    <div
      class="md:w-[5.5rem] md:h-full justify-between items-center bg-custom-bodyPurple border-r-custom-lightPurple 
      border-r-[0.5px] flex flex-col md:pb-10 relative  w-full
    "
    >
      <div class="hidden md:block">
        <ProfileIcon />
      </div>

      <div class="flex flex-col md:overflow-y-scroll md:scrollbar-hide overflow-x-scroll items-center justify-start w-full flex-1 ">
        <div
          class="flex md:flex-col md:gap-[14px] gap-10 md:py-4 items-center justify-between w-full md:px-8 pb-10 md:pb-0
        pt-4 md:p-0 px-3 overflow-x-scroll md:overflow-x-hidden sm:scrollbar-hide"
        >
          <SideBarIcon icon="assets/MainIcon.svg" text="MAIN" />
          <SideBarIcon icon="assets/CoinFlipIcon.svg" text="COINFLIP" />
          <SideBarIcon icon="assets/MinesIcon.svg" text="MINES" />
          <SideBarIcon icon="assets/PlinkoIcon.svg" text="PLINKO" />
          <SideBarIcon icon="assets/WheelIcon.svg" text="WHEEL" />
          <SideBarIcon icon="assets/UpgraderIcon.svg" text="UPGRADER" isNew />
          <SideBarIcon icon="assets/PVPMinesIcon.svg" text="PVP MINES" isNew />
        </div>
      </div>

      <div class="hidden mb-10 md:flex justify-center items-center flex-col gap-8 ">
        <InfoIcon />
      </div>
    </div>
  );
};

export default SideBar;
