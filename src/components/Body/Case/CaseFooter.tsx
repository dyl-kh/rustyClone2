import { Component, For } from "solid-js";
import { Skin } from "./CaseContainer";
import CaseFooterCard from "./CaseFooterCard";
const skins = [
  {
    name: "Punishment Mask",
    rarity: "gold",
    price: 2000000,
    img: "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GbBfDY0jhyo8DEiv5ddOKk2r7E2RPC3qDILCpA/360fx360f",
  },
  {
    name: "Fire Jacket",
    rarity: "gold",
    price: 400000,
    img: "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe42LEfDY0jhyo8DEiv5dYP6k7rb02RfHnClUWBA/360fx360f",
  },
  {
    name: "Tempered Mask",
    rarity: "gold",
    price: 200000,
    img: "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GrHfDY0jhyo8DEiv5dePqE9pbM-6tN-C0c/360fx360f",
  },
  {
    name: "Alien Red",
    rarity: "gold",
    price: 135000,
    img: "src/assets/alienredak.png",
  },
  {
    name: "AK-47 Victoria",
    rarity: "red",
    price: 40000,
    img: "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835FZ4GLCfDY0jhyo8DEiv5dYOaw5qL00QP68qXrYZGE/360fx360f",
  },
  {
    name: "Tempered AK",
    rarity: "purple",
    price: 15000,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WHNfDY0jhyo8DEiv5dYO607rLc2Rv2_pCV1NYc/360fx360f",
  },
  {
    name: "Cloth",
    rarity: "gray",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
  },
] as Skin[];

const CaseFooter: Component = () => {
  return (
    <div class="flex flex-col h-full w-full gap-4">
      <div class="text-white oswald font-semibold text-xl">Potential Drops</div>
      {/* <div class="flex flex-wrap gap-4 w-full justify-between "> */}
      <div class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-3">
        <For each={skins}>{(skin) => <CaseFooterCard skin={skin} />}</For>
      </div>
    </div>
  );
};

export default CaseFooter;
