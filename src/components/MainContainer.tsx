import { Component, createSignal } from "solid-js";
import TopBar from "./TopBar/TopBar";
import MidBar from "./MidBar/MidBar";
import SideBar from "./SideBar/SideBar";
import BodyContainer from "./Body/BodyContainer";
import ChatBox from "./Body/ChatBox/ChatBox";
import {
  RiSystemArrowLeftSLine,
  RiSystemArrowRightSLine,
} from "solid-icons/ri";

const MainContainer: Component = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = createSignal(false);
  const toggleChatBox = () => setIsChatBoxOpen(!isChatBoxOpen());
  return (
    <div class="absolute top-0 left-0 w-full h-full bg-custom-mainPurple lg:flex overflow-hidden">
      <div class="relative z-10 h-full flex-1 lg:w-[calc(100%-20rem)]">
        <TopBar />
        <div class="flex h-full overflow-hidden">
          <SideBar />
          <div class="flex flex-col w-full relative flex-1 h-full overflow-y-auto">
            <MidBar />
            <BodyContainer />
          </div>
        </div>
      </div>

      <div
        class={`absolute flex lg:block h-full right-0 bottom-0 lg:relative w-[380px] z-40 items-end gap-2 lg:translate-x-0
        ${
          isChatBoxOpen() ? "translate-x-0" : "translate-x-[320px]"
        } transform transition-transform duration-300`}
      >
        <div
          onClick={toggleChatBox}
          class="lg:hidden text-4xl text-custom-glowYellow 
        bg-[rgb(40,46,73)] p-2 rounded-md  cursor-pointer mb-4 "
        >
          {isChatBoxOpen() ? (
            <RiSystemArrowRightSLine />
          ) : (
            <RiSystemArrowLeftSLine />
          )}
        </div>
        <ChatBox isOpen={true} />
      </div>
    </div>
  );
};

export default MainContainer;
