import { Component } from "solid-js";

interface ChatMessageProps {
  message: {
    userName: string;
    userImg: string;
    userColor: string;
    userBadge: string;
    message: string;
  };
}
const ChatMessage: Component<ChatMessageProps> = ({ message }) => {
  return (
    <div class="flex items-start gap-2">
      <div
        class={`bg-gradient-to-b from-${message.userColor}-400 to-${message.userColor}-900 rounded-full h-8 p-[2px]`}
      >
        <div class="hidden bg-gradient-to-b from-purple-400 to-purple-900"></div>
        <img
          src={message.userImg}
          alt={`${message.userName} user image`}
          class=" h-full rounded-full border-custom-bodyPurple border-[2px]"
        />
      </div>

      <div class="flex flex-col justify-center gap-1 flex-1">
        <div class="flex gap-1">
          <img
            src={message.userBadge}
            alt={`${message.userName} user badge`}
            class="h-5"
          />
          <div class="text-[rgb(107,117,130)] font-semibold text-sm">
            {message.userName}
          </div>
        </div>
        <div class="text-white ml-2 text-sm font-medium">{message.message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
