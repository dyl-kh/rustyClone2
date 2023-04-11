import { Component } from "solid-js";

const ProfileIcon: Component = () => {
  return (
    <div class="lg:h-[88px] lg:w-[88px] lg:bg-custom-darkYellow flex items-center justify-center">
      <a href="#">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Picture"
          class="lg:h-12 h-10 rounded-full border-custom-glowYellow border-[0.5px] p-[1.5px]"
        />
      </a>
    </div>
  );
};

export default ProfileIcon;
