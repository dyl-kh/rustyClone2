import { Component, JSX } from "solid-js";

interface HeaderButtonProps {
  text: string;
  icon: JSX.Element;
  href: string;
}

const HeaderButton: Component<HeaderButtonProps> = ({ text, icon, href }) => {
  return (
    <a
      href={href}
      class="flex items-center justify-center animated-button cursor-pointer hover:outer-yellow-glow oswald px-3 py-2 gap-2 rounded bg-cover"
    >
      <div class="text-xl text-black">{icon}</div>
      <div class="text-semibold text-14">{text}</div>
    </a>
  );
};

export default HeaderButton;
