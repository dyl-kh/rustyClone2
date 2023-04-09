import { Component, JSX, createSignal } from "solid-js";

interface SideBarIconProps {
  icon: string;
  text: string;
}

const SideBarIcon: Component<SideBarIconProps> = ({ icon, text }) => {
  const [isHover, setIsHover] = createSignal(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <a href="#">
        <div class="flex flex-col justify-center items-center gap-2 ">
          <img src={icon} alt={`${text} icon`} class="" />
          <div
            class={`text-sm  font-oswald font-semibold ${
              isHover() ? "text-custom-glowYellow" : "text-custom-text"
            }`}
          >
            {text}
          </div>
        </div>
      </a>
    </div>
  );
};

export default SideBarIcon;
