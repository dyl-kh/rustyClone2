import { Component } from "solid-js";
import Drops from "./Drops/Drops";
import CaseContainer from "./Case/CaseContainer";
import BodyFooter from "./BodyFooter";

const BodyContainer: Component = () => {
  return (
    <div class="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col justify-between relative bg-custom-backPurple">
      <div class="px-2">
        <img
          src="/assets/RustBackground.png"
          alt="rust background"
          class="absolute top-0 left-0 min-w-full"
        />
        <div class="w-full h-full flex flex-col relative pt-2">
          <Drops />
          <CaseContainer />
        </div>
      </div>
      <BodyFooter />
    </div>
  );
};

export default BodyContainer;
