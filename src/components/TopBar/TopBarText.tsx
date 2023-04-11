import { Component, createSignal } from "solid-js";

interface TopBarTextProps {
  text: string;
  active?: true;
}

const TopBarText: Component<TopBarTextProps> = ({ text, active }) => {
  const [isHover, setIsHover] = createSignal(false);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <a
      href="#"
      class={`text-xs ${
        isHover() || active ? "hover-yellow" : "text-custom-text"
      } font-semibold overflow-hidden whitespace-nowrap`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  );
};

export default TopBarText;
