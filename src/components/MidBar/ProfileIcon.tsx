import { Component } from "solid-js";

const ProfileIcon: Component = () => {
  return (
    <div class="md:h-[88px] md:w-[88px] md:bg-custom-darkYellow flex items-center justify-center">
      <a href="#">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Picture"
          class="md:h-12 h-10 rounded-full border-custom-glowYellow border-[0.5px] p-[1.5px]"
        />
      </a>
    </div>
  );
};

export default ProfileIcon;
