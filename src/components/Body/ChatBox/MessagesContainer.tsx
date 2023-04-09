import { Component, For } from "solid-js";
import ChatMessage from "./ChatMessage";

const messages = [
  {
    userName: "Not Terry",
    userImg: "src/assets/profile.webp",
    userColor: "purple",
    userBadge: "src/assets/badge.svg",
    message: "Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "src/assets/profile.webp",
    userColor: "purple",
    userBadge: "src/assets/badge.svg",
    message:
      "Quisque velit odio, tristique in elementum placerat, commodo quis nisi. Nulla facilisi. Vivamus imperdiet gravida tempus.",
  },
];

const MessagesContainer: Component = () => {
  return (
    <div class="flex flex-col gap-3">
      <For each={messages}>
        {(message) => <ChatMessage message={message} />}
      </For>
    </div>
  );
};

export default MessagesContainer;
