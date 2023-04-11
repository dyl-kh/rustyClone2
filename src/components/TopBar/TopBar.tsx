import { Component } from "solid-js";
import { BiLogosDiscordAlt } from "solid-icons/bi";
import { AiOutlineTwitter } from "solid-icons/ai";
import TopBarIcon from "./TopBarIcon";
import TopBarText from "./TopBarText";

const TopBar: Component = () => {
  return (
    <div class="relative bg-custom-darkPurple w-full border-b-custom-lightPurple border-b-[0.5px] overflow-hidden">
      <div class="flex ml-5 p-0.5 items-center gap-9 overflow-hidden ">
        <div class="flex gap-1 overflow-hidden">
          <TopBarIcon icon={<BiLogosDiscordAlt />} />
          <TopBarIcon icon={<AiOutlineTwitter />} />
        </div>
        <div class="flex gap-7 overflow-hidden">
          <TopBarText text={"LEADERBOARD"} />
          <TopBarText text={"FREE CASE"} active />
          <TopBarText text={"RAKEBACK"} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
