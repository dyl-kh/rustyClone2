import { Component } from "solid-js";
import { AiOutlineInfoCircle } from "solid-icons/ai";

const InfoIcon: Component = () => {
  return (
    <div class=" bg-custom-bodyPurple flex justify-center">
      <a href="#" class="text-3xl text-custom-icon ">
        <AiOutlineInfoCircle />
      </a>
    </div>
  );
};

export default InfoIcon;
