import { Component } from "solid-js";

const messages = [
  {
    userName: "Not Terry",
    userImg: "src/assets/profile.webp",
    userColor: "purple",
    userBadge: "src/assets/badge.svg",
    message: "Message Text",
  },
  {
    userName: "Not Terry",
    userImg: "src/assets/profile.webp",
    userColor: "purple",
    userBadge: "src/assets/badge.svg",
    message: "Message Text",
  },
];

const MessagesContainer: Component = () => {
  return (
    <div>
      <h2>MessagesContainer</h2>
    </div>
  );
};

export default MessagesContainer;
