import { Component, JSX } from "solid-js";

interface TopBarIconProps {
  icon: Element;
}

const TopBarIcon: Component<TopBarIconProps> = ({ icon }) => {
  return (
    <a href="#" class="text-custom-icon text-xl hover:hover-yellow spin360 ">
      {icon}
    </a>
  );
};

export default TopBarIcon;
