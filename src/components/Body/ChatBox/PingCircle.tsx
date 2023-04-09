import { Component } from "solid-js";

const PingCircle: Component = () => {
  return (
    <div class="relative w-2 h-2">
      <div class="absolute top-0 left-0 w-full h-full bg-custom-glowYellow rounded-full ping"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-custom-glowYellow rounded-full"></div>
    </div>
  );
};

export default PingCircle;
