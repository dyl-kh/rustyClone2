import { Component, JSX, createSignal } from "solid-js";

interface SideBarIconProps {
  icon: string;
  text: string;
  isNew?: boolean;
}

const SideBarIcon: Component<SideBarIconProps> = ({ icon, text, isNew }) => {
  const [isHover, setIsHover] = createSignal(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      class="relative cursor-pointer md:self-auto self-end"
    >
      <a href="# ">
        <div class="relative flex flex-col justify-around md:justify-center items-center gap-2 h-auto w-max">
          <div class="">
            <img src={icon} alt={`${text} icon`} class="" />
          </div>
          <div
            class={`text-md  font-oswald font-semibold ${
              isHover() ? "text-custom-glowYellow" : "text-custom-text"
            }`}
          >
            {text}
          </div>
        </div>
      </a>
      {isNew ? (
        <div class="absolute -top-3 -right-1 bg-[rgb(255,74,89)] text-white text-[8px] font-oswald font-semibold w-min px-[4px] p-[2px]">
          NEW!
        </div>
      ) : null}
    </div>
  );
};

export default SideBarIcon;
