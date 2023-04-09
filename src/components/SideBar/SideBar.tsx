import { Component } from "solid-js";
import SideBarIcon from "./SideBarIcon";
import ProfileIcon from "../MidBar/ProfileIcon";
import InfoIcon from "./InfoIcon";

const SideBar: Component = () => {
  return (
    <div
      class="w-[5.5rem] h-full justify-between items-center bg-custom-bodyPurple border-r-custom-lightPurple 
      border-r-[0.5px] flex flex-col pb-10 relative 
    "
    >
      <ProfileIcon />

      <div
        id="shrinkandgrow"
        class="flex flex-col overflow-y-scroll scrollbar-hide items-center justify-start w-full flex-1"
      >
        <div class="flex flex-col gap-[14px] py-4 items-center">
          <SideBarIcon icon="src/assets/MainIcon.svg" text="MAIN" />
          <SideBarIcon icon="src/assets/CoinFlipIcon.svg" text="COINFLIP" />
          <SideBarIcon icon="src/assets/MINESIcon.svg" text="MINES" />
          <SideBarIcon icon="src/assets/PlinkoIcon.svg" text="PLINKO" />
          <SideBarIcon icon="src/assets/WheelIcon.svg" text="WHEEL" />
          <SideBarIcon icon="src/assets/UpgraderIcon.svg" text="UPGRADER" />
          <SideBarIcon icon="src/assets/PVPMinesIcon.svg" text="PVP MINES" />
        </div>
      </div>

      <div class="mb-10 flex justify-center items-center flex-col gap-8 ">
        <InfoIcon />
      </div>
    </div>
  );
};

export default SideBar;
