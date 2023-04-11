import { Component, createSignal } from "solid-js";
import MenuLarge from "./MenuLarge";
import { menuOpen, setMenuOpen } from "../MainContainer";

const toggleMenu = () => {
  setMenuOpen(!menuOpen());
};

const MenuButton: Component = () => {
  return (
    <div>
      <div
        class="ml-3 z-40 flex relative justify-center items-center flex-col w-10 h-10 rounded animated-button cursor-pointer hover:hover-yellow"
        onClick={toggleMenu}
      >
        <div
          class={`hamburger-line-1 -translate-y-[6px] absolute ${
            menuOpen() ? "menu-button-open" : ""
          }`}
        ></div>
        <div
          class={`hamburger-line-2 ${menuOpen() ? "menu-button-open" : ""}`}
        ></div>
        <div
          class={`hamburger-line-3 translate-y-[6px] absolute ${
            menuOpen() ? "menu-button-open" : ""
          }`}
        ></div>
      </div>
      {menuOpen() ? <MenuLarge /> : null}
    </div>
  );
};

export default MenuButton;
