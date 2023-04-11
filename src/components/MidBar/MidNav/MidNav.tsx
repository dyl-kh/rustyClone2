import { Component } from "solid-js";
import MidNavIcon from "./MidNavIcon";
import { FiShield } from "solid-icons/fi";
import { TbHeadset } from "solid-icons/tb";
import { OcPeople3 } from "solid-icons/oc";
import { AiOutlineStar } from "solid-icons/ai";

const MidNav: Component = () => {
  return (
    <div class="sticky flex md:items-center items-start md:flex-row p-4 flex-col justify-center gap-5 flex-1 ">
      <MidNavIcon icon={<FiShield />} text={"PROVABLY FAIR"} />
      <MidNavIcon icon={<TbHeadset />} text={"SUPPORT"} />
      <MidNavIcon icon={<OcPeople3 />} text={"AFFILIATES"} />
      <MidNavIcon icon={<AiOutlineStar />} text={"REWARDS"} />
    </div>
  );
};

export default MidNav;
