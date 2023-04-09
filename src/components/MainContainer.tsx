import { Component, createSignal } from "solid-js";
import TopBar from "./TopBar/TopBar";
import MidBar from "./MidBar/MidBar";
import SideBar from "./SideBar/SideBar";
import BodyContainer from "./Body/BodyContainer";
import ChatBox from "./Body/ChatBox/ChatBox";

const MainContainer: Component = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = createSignal(false);
  const toggleChatBox = () => setIsChatBoxOpen(!isChatBoxOpen());
  return (
    <div class="absolute top-0 left-0 w-full h-full bg-custom-mainPurple lg:flex ">
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
      <div class="relative hidden lg:block w-80">
        <ChatBox isOpen={true} />
      </div>
    </div>
  );
};

export default MainContainer;
