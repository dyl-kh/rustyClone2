import { Component, createSignal } from "solid-js";

const [menuOpen, setMenuOpen] = createSignal(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen());
};

const MenuButton: Component = () => {
  return (
    <div
      class="ml-3 flex justify-center items-center flex-col w-10 h-10 rounded animated-button cursor-pointer hover:hover-yellow"
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
  );
};

export default MenuButton;
