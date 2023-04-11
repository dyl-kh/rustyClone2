import { createSignal, onCleanup, Component } from "solid-js";
import PingCircle from "./PingCircle";
import MessagesContainer from "./MessagesContainer";
import ChatInput from "./ChatInput";
import { AiOutlineClose } from "solid-icons/ai";

interface ChatBoxProps {
  setIsChatBoxOpen: (isOpen: boolean) => void;
}

const ChatBox: Component<ChatBoxProps> = ({ setIsChatBoxOpen }) => {
  const [chatBoxLang, setChatBoxLang] = createSignal("en");
  return (
    <div
      class={`right-0 h-full w-full bg-custom-bodyPurple border-l-custom-lightPurple border-l-[0.5px] z-30 `}
    >
      <div class="flex flex-col gap-6 h-full">
        <div class="p-6 pb-0 flex items-center justify-between">
          <div
            class="sm:hidden text-2xl flex items-center justify-center text-custom-text cursor-pointer"
            onClick={() => {
              setIsChatBoxOpen(false);
            }}
          >
            <AiOutlineClose />
          </div>
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
