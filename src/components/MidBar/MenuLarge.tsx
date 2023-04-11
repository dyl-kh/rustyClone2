import { Component } from "solid-js";
import { AiFillGift } from "solid-icons/ai";
import { BsVolumeUpFill } from "solid-icons/bs";

const balance = 50;

const MenuLarge: Component = () => {
  return (
    <div class="hidden md:flex absolute top-16 -right-4 flex-col bg-[rgb(22,27,42)] w-72 p-6 z-50 font-oswald font-semibold gap-3 text-[rgb(32,39,61)]">
      <div class="flex items-center gap-3">
        <button class="flex animated-button rounded items-center justify-center gap-1 flex-1 p-2 hover:outer-yellow-glow">
          <AiFillGift />
          <div class="text-sm">{" FREE COINS"}</div>
        </button>
        <button class="text-custom-text text-2xl bg-[rgb(32,39,61)] p-2 rounded">
          <BsVolumeUpFill />
        </button>
      </div>
      <div class="flex bg-[rgb(32,39,61)] text-white items-center p-2 px-3 gap-2 text-sm">
        <img src="assets/Chips.svg" alt="poker chips" class="h-4" />
        {balance}
      </div>
      <div class="flex gap-3 mt-4 text-md">
        <button class="animated-button flex-1 hover:outer-yellow-glow rounded p-3">
          DEPOSIT
        </button>
        <div class="animated-button p-[2px] rounded flex items-center justify-center hover:outer-yellow-glow">
          <button class="text-custom-glowYellow bg-[rgb(19,22,32)] h-full rounded px-2">
            WITHDRAW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuLarge;
