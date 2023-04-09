import { Component } from "solid-js";
import { openCase } from "./CaseOpener";

const handleClick = () => {
  openCase();
};

const OpenCaseButton: Component = () => {
  return (
    <div
      onClick={handleClick}
      class="w-52 flex items-center justify-center animated-button cursor-pointer hover:outer-yellow-glow oswald px-3 py-2 gap-2 rounded bg-cover"
    >
      <div class="text-semibold text-14">OPEN</div>
    </div>
  );
};

export default OpenCaseButton;
