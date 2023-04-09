import { createSignal, onCleanup, Component } from "solid-js";
import PingCircle from "./PingCircle";
import MessagesContainer from "./MessagesContainer";

interface ChatBoxProps {
  isOpen: boolean;
}

const ChatBox: Component<ChatBoxProps> = (props) => {
  return (
    <div
      class={`relative top-0 right-0 h-screen w-full bg-custom-bodyPurple  border-l-custom-lightPurple border-l-[0.5px] transform transition-transform duration-300 ${
        props.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div class="p-6 flex flex-col">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold oswald text-white">LIVE CHAT</h1>
          <div class="flex text-custom-glowYellow oswald font-semibold text-sm items-center gap-2">
            <PingCircle />
            {"50 ONLINE"}
          </div>
        </div>
        <MessagesContainer />
      </div>
    </div>
  );
};

export default ChatBox;
