import { Component } from "solid-js";
import SideBarIcon from "./SideBarIcon";
import ProfileIcon from "../MidBar/ProfileIcon";
import InfoIcon from "./InfoIcon";

const SideBar: Component = () => {
  return (
    <div
      class="lg:w-[5.5rem] lg:h-full justify-between items-center bg-custom-bodyPurple border-r-custom-lightPurple 
      border-r-[0.5px] flex flex-col lg:pb-10 relative  w-full
    "
    >
      <div class="hidden lg:block">
        <ProfileIcon />
      </div>

      <div
        id="shrinkandgrow"
        class="flex flex-col overflow-y-scroll scrollbar-hide items-center justify-start w-full flex-1"
      >
        <div class="flex lg:flex-col gap-[14px] lg:py-4 items-center justify-between w-full px-8 pb-14 pt-3 lg:p-0">
          <SideBarIcon icon="/assets/MainIcon.svg" text="MAIN" />
          <SideBarIcon icon="/assets/CoinFlipIcon.svg" text="COINFLIP" />
          <SideBarIcon icon="/assets/MINESIcon.svg" text="MINES" />
          <SideBarIcon icon="/assets/PlinkoIcon.svg" text="PLINKO" />
          <SideBarIcon icon="/assets/WheelIcon.svg" text="WHEEL" />
          <SideBarIcon icon="/assets/UpgraderIcon.svg" text="UPGRADER" isNew />
          <SideBarIcon icon="/assets/PVPMinesIcon.svg" text="PVP MINES" isNew />
        </div>
      </div>

      <div class="hidden mb-10 lg:flex justify-center items-center flex-col gap-8 ">
        <InfoIcon />
      </div>
    </div>
  );
};

export default SideBar;
