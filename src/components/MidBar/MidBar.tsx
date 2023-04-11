import { Component } from "solid-js";
import MidNav from "./MidNav/MidNav";
import RustyLogo from "./RustyLogo";
import LanguageToggle from "./LanguageToggle";
import MenuButton from "./MenuButton";
import ProfileIcon from "./ProfileIcon";
import { AiFillGift } from "solid-icons/ai";
import { BsVolumeUpFill } from "solid-icons/bs";

const balance = 50;
const MidBar: Component = () => {
  return (
    <div class="flex bg-custom-bodyPurple w-full h-[88px] items-center justify-center sm:px-4 pr-2 relative z-50 font-oswald font-semibold ">
      <div
        class="relative flex justify-between items-center w-full h-full z-50
      "
      >
        <div class="flex-1 md:flex-grow-0 md:shrink-[1] md:basis-auto mr-2 ">
          <RustyLogo />
        </div>
        <div class="xxl:flex-1 hidden md:block">
          <MidNav />
        </div>
        <div id="menu" class="relative flex z-50 items-center  ">
          <div class="md:hidden">
            <ProfileIcon />
          </div>
          <div class="xxl:hidden flex">
            <LanguageToggle />
            <MenuButton />
          </div>
          <div class="xxl:flex gap-3 hidden mr-5">
            <button class="flex w-28 h-10 animated-button outer-yellow-glow-big rounded items-center justify-center gap-1 p-0 hover:outer-yellow-glow text-custom-darkPurple">
              <AiFillGift />
              <div class="text-sm">{" FREE COINS"}</div>
            </button>
            <button class="text-custom-text text-2xl bg-[rgb(32,39,61)] p-2 rounded">
              <BsVolumeUpFill />
            </button>
            <LanguageToggle />
            <div class="flex bg-[rgb(32,39,61)] h-10 w-32 text-white items-center p-2 px-3 gap-2 text-sm">
              <img src="assets/Chips.svg" alt="poker chips" class="h-4" />
              {balance}
            </div>
            <button class="animated-button h-10 flex items-center justify-center hover:outer-yellow-glow rounded p-3 text-custom-darkPurple text-sm">
              DEPOSIT
            </button>
            <div class="animated-button p-[2px] rounded flex h-10 items-center justify-center hover:outer-yellow-glow text-sm">
              <button class="text-custom-glowYellow bg-[rgb(19,22,32)] h-full rounded px-2">
                WITHDRAW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBar;
