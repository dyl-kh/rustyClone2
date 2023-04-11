import { Component } from "solid-js";

interface ItemCaseCardProps {
  item: {
    name: string;
    rarity: string;
    target: boolean;
    price: number;
    img: string;
    order: number;
  };
}

const ItemCaseCard: Component<ItemCaseCardProps> = ({ item }) => {
  return (
    <div class={`flex items-center justify-center w-20 `}>
      <img
        src={item.img}
        alt={`${item.name}`}
        class={`w-24 ${item.rarity}-shadow`}
      />
      <div class="hidden gold-shadow"></div>
      <div class="hidden red-shadow"></div>
      <div class="hidden purple-shadow"></div>
      <div class="hidden gray-shadow"></div>
    </div>
  );
};

export default ItemCaseCard;
