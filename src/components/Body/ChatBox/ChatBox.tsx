import { createSignal, onCleanup, Component } from "solid-js";
import PingCircle from "./PingCircle";
import MessagesContainer from "./MessagesContainer";
import ChatInput from "./ChatInput";

interface ChatBoxProps {
  isOpen: boolean;
}

const ChatBox: Component<ChatBoxProps> = (props) => {
  const [chatBoxLang, setChatBoxLang] = createSignal("en");
  return (
    <div
      class={`right-0 h-screen w-full bg-custom-bodyPurple border-l-custom-lightPurple border-l-[0.5px]`}
    >
      <div class="flex flex-col gap-6 h-full">
        <div class="p-6 pb-0 flex items-center justify-between">
          <h1 class="text-xl font-bold oswald text-white">LIVE CHAT</h1>
          <div class="flex text-custom-glowYellow oswald font-semibold text-sm items-center gap-2">
            <PingCircle />
            {"50 ONLINE"}
          </div>
        </div>
        <MessagesContainer chatBoxLang={chatBoxLang} />
        <ChatInput setChatBoxLang={setChatBoxLang} chatBoxLang={chatBoxLang} />
      </div>
    </div>
  );
};

export default ChatBox;
