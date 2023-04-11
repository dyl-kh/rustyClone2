import { Component } from "solid-js";
import BestDrops from "./BestDrops";
import RecentDrops from "./RecentDrops";

const BestDrop = {
  name: "Punishment Mask",
  price: 2000000,
  img: "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GbBfDY0jhyo8DEiv5ddOKk2r7E2RPC3qDILCpA/360fx360f",
  type: "gold",
};

const RecentDropsList = [
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
  {
    name: "Cloth",
    price: 10,
    img: "https://community.akamai.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfDY0jhyo8DEiv5dYMKA5pLYzRv66k4J0KhI/360fx360f",
    type: "grey",
  },
];

const Drops: Component = () => {
  return (
    <div class="flex gap-6 w-full">
      <BestDrops drop={BestDrop} />
      <RecentDrops drops={RecentDropsList} />
    </div>
  );
};

export default Drops;
