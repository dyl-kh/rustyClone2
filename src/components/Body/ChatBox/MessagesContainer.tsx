import { Component, For, createEffect } from "solid-js";
import ChatMessage from "./ChatMessage";

const enMessages = [
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "English messages. Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message: "Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "Quisque velit odio, tristique in elementum placerat, commodo quis nisi. Nulla facilisi. Vivamus imperdiet gravida tempus.",
  },
];

const esMessages = [
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "Spanish messages. Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message: "Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "Quisque velit odio, tristique in elementum placerat, commodo quis nisi. Nulla facilisi. Vivamus imperdiet gravida tempus.",
  },
];

const ruMessages = [
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "Russian messages. Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message: "Lorem ipsum dolor sit amet, conet adipiscing elit. ",
  },
  {
    userName: "Not Terry",
    userImg: "/assets/profile.webp",
    userColor: "purple",
    userBadge: "/assets/badge.svg",
    message:
      "Quisque velit odio, tristique in elementum placerat, commodo quis nisi. Nulla facilisi. Vivamus imperdiet gravida tempus.",
  },
];

interface MessagesContainerProps {
  chatBoxLang: () => string;
}

const MessagesContainer: Component<MessagesContainerProps> = ({
  chatBoxLang,
}) => {
  return (
    <div class=" px-6 flex flex-col gap-3 flex-1 h-full">
      <For
        each={
          chatBoxLang() === "en"
            ? enMessages
            : chatBoxLang() === "es"
            ? esMessages
            : ruMessages
        }
      >
        {(message) => <ChatMessage message={message} />}
      </For>
    </div>
  );
};

export default MessagesContainer;
