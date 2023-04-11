import { Component, JSX, createSignal } from "solid-js";

interface MidNavIcon {
  icon: Element;
  text: string;
  active: boolean;
}

const MidNavIcon: Component<MidNavIcon> = ({ icon, text }) => {
  const [isHover, setIsHover] = createSignal(false);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div class="">
      <a
        href="#"
        class={`flex items-center justify-center gap-3 hover:hover-yellow `}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          class={` text-2xl ${
            isHover() ? "text-custom-glowYellow" : "text-custom-icon"
          }`}
        >
          {icon}
        </div>
        <div
          class={`font-semibold ${
            isHover() ? "text-custom-glowYellow" : "text-custom-text"
          } block md:hidden xl:block font-oswald  `}
        >
          {text}
        </div>
      </a>
    </div>
  );
};

export default MidNavIcon;
