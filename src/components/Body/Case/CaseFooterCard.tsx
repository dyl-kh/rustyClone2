import { Component } from "solid-js";
import { Skin } from "./CaseContainer";
import { TbSpiral } from "solid-icons/tb";

interface CaseFooterCardProps {
  skin: Skin;
}

const formatNumberToString = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CaseFooterCard: Component<CaseFooterCardProps> = ({ skin }) => {
  return (
    <div
      class={`bg-gradient-to-t from-${
        skin.rarity === "gold" ? "yellow" : skin.rarity
      }-500 via-custom-backPurple via-70% to-custom-backPurple rounded-md w-full  `}
    >
      <div
        class={`flex card-gradient-horizontal ${skin.rarity} ontop z-40 h-full relative items-center justify-center 
        mx-[2px] translate-y-[-2px] rounded-md px-4 pb-3`}
      >
        <div class="bg-[url(/assets/WhiteBloodDecal.svg)] bg-cover">
          <div id="img" class="flex flex-col items-center">
            <div class="translate-y-[4px] h-32 ">
              <div
                class={`text-[110px] text-${
                  skin.rarity === "gold" ? "yellow" : skin.rarity
                }-500 blur-[1.5px] relative inline-block spin-continous `}
              >
                <TbSpiral />
              </div>
              <div class="hidden text-yellow-500 from-yellow-500"></div>
              <div class="hidden text-red-500 from-red-500"></div>
              <div class="hidden text-purple-500 from-purple-500"></div>
              <div class="hidden text-gray-500 from-gray-500"></div>
              <img
                src={skin.img}
                alt={`${skin.name} image`}
                class="h-20 -translate-y-[98px] translate-x-4"
              />
            </div>
            <div class="flex items-center justify-center flex-col gap-1">
              <div class="text-custom-cardText font-bold text-sm">
                {skin.name}
              </div>
              <div class="flex gap-1">
                <img src="/assets/Chips.svg" alt="Poker Chips" class="h-4" />
                <div class="text-white font-semibold text-sm oswald">
                  {formatNumberToString(skin.price)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFooterCard;
