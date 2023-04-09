import { Component } from "solid-js";
import MidNav from "./MidNav/MidNav";
import RustyLogo from "./RustyLogo";
import LanguageToggle from "./LanguageToggle";
import MenuButton from "./MenuButton";
const MidBar: Component = () => {
  return (
    <div class="flex bg-custom-bodyPurple w-full h-[88px] items-center justify-center px-4 relative z-40">
      <div
        class="flex justify-between items-center w-full h-full
      "
      >
        <RustyLogo />
        <MidNav />
        <div class="flex">
          <LanguageToggle />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default MidBar;
