import { Component } from "solid-js";
import DropCard from "./DropCard";

interface BestDropProps {
  drop: {
    name: string;
    price: number;
    img: string;
    type: string;
  };
}

const BestDrops: Component<BestDropProps> = ({ drop }) => {
  return (
    <div>
      <div class="text-white text-xl font-medium z-40">Best Drops</div>
      <DropCard drop={drop} />
    </div>
  );
};

export default BestDrops;
