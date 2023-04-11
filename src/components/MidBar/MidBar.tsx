import { Component } from "solid-js";
import MidNav from "./MidNav/MidNav";
import RustyLogo from "./RustyLogo";
import LanguageToggle from "./LanguageToggle";
import MenuButton from "./MenuButton";
import ProfileIcon from "./ProfileIcon";
const MidBar: Component = () => {
  return (
    <div class="flex bg-custom-bodyPurple w-full h-[88px] items-center justify-center sm:px-4 pr-2 relative z-50">
      <div
        class="relative flex justify-between items-center w-full h-full z-50
      "
      >
        <div class="flex-1 mr-2">
          <RustyLogo />
        </div>
        <div class="hidden md:block">
          <MidNav />
        </div>
        <div class="relative flex z-50 items-center">
          <div class="md:hidden">
            <ProfileIcon />
          </div>
          <LanguageToggle />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default MidBar;
