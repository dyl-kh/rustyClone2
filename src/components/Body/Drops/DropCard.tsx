import { Component } from "solid-js";
import { TbSpiral } from "solid-icons/tb";

interface DropCardProps {
  drop: {
    name: string;
    price: number;
    img: string;
    type: string;
  };
}

const formatNumberToString = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const DropCard: Component<DropCardProps> = ({ drop }) => {
  return (
    <div
      class={`flex h-[4.5rem] w-60 min-w-60 card-gradient-vertical ${drop.type} mt-2 ontop z-40 relative`}
    >
      <div class="bg-[url(src/assets/BloodCardDecal.svg)] bg-cover">
        <div id="img" class="flex items-center ml-2 gap-3">
          <div class="max-h-[4.5rem] translate-y-[7px]">
            <div
              class={`text-[55px] ${
                drop.type === "gold"
                  ? "text-custom-glowYellow"
                  : "text-custom-cardText"
              } blur-[1.5px] relative inline-block spin-continous `}
            >
              <TbSpiral />
            </div>
            <img
              src={drop.img}
              alt={`${drop.name} image`}
              class="h-10 -translate-y-[49px] translate-x-2"
            />
          </div>
          <div class="flex items-center justify-center flex-col">
            <div class="text-custom-cardText font-bold">{drop.name}</div>
            <div class="flex gap-1">
              <img src="src/assets/Chips.svg" alt="Poker Chips" class="h-5" />
              <div class="text-white font-semibold text-sm">
                {formatNumberToString(drop.price)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropCard;
