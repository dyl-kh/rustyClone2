import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import TopBar from "./TopBar/TopBar";
import MidBar from "./MidBar/MidBar";
import SideBar from "./SideBar/SideBar";
import BodyContainer from "./Body/BodyContainer";
import ChatBox from "./Body/ChatBox/ChatBox";
import {
  RiSystemArrowLeftSLine,
  RiSystemArrowRightSLine,
} from "solid-icons/ri";
import MenuSmall from "./MidBar/MenuSmall";

createEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
  });
});

const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
const [menuOpen, setMenuOpen] = createSignal(false);
const MainContainer: Component = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = createSignal(false);
  const toggleChatBox = () => setIsChatBoxOpen(!isChatBoxOpen());
  return (
    <div class="absolute top-0 left-0 w-full h-full bg-custom-mainPurple lg:flex overflow-hidden">
      <div class="relative z-10 h-full flex-1 lg:w-[calc(100%-20rem)]">
        <TopBar />
        <div class="flex md:flex-row flex-col h-full overflow-hidden relative">
          <div class="order-2 md:order-1 ">
            <SideBar />
          </div>
          <div class="flex flex-col w-full relative flex-1 h-full overflow-y-auto order-1 md:order-2 ">
            <MidBar />
            {menuOpen() && windowWidth() < 900 ? (
              <MenuSmall />
            ) : (
              <>
                <BodyContainer />
              </>
            )}
          </div>
        </div>
      </div>

      <div
        class={`absolute lg:block h-full right-0 top-0 lg:relative lg:w-[320px] lg:max-w-[320px] lg:min-w-[320px] sm:w-[320px] w-full z-20 items-end gap-2 lg:translate-x-0 
        ${
          isChatBoxOpen()
            ? "sm:translate-x-0"
            : "sm:translate-x-[320px] translate-x-[100%]"
        } transform transition-transform duration-300`}
      >
        <div
          onClick={toggleChatBox}
          class="absolute lg:hidden text-4xl text-custom-glowYellow 
        bg-[rgb(40,46,73)] p-2 rounded-md  cursor-pointer mb-4 lg:bottom-0 left-[-60px] bottom-24 z-40
        "
        >
          {isChatBoxOpen() ? (
            <RiSystemArrowRightSLine />
          ) : (
            <RiSystemArrowLeftSLine />
          )}
        </div>
        <ChatBox setIsChatBoxOpen={setIsChatBoxOpen} />
      </div>
    </div>
  );
};

export { menuOpen, setMenuOpen };

export default MainContainer;
