import { Component } from "solid-js";

const ProfileIcon: Component = () => {
  return (
    <div class="h-[88px] w-[88px] bg-custom-darkYellow flex items-center justify-center">
      <a href="#">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Picture"
          class="h-12 rounded-full border-custom-glowYellow border-[0.5px] p-[1.5px]"
        />
      </a>
    </div>
  );
};

export default ProfileIcon;
