import { Component, For } from "solid-js";
import DropCard from "./DropCard";

interface RecentDropProps {
  drops: {
    name: string;
    price: number;
    img: string;
    type: string;
  }[];
}

const RecentDrops: Component<RecentDropProps> = ({ drops }) => {
  return (
    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="text-white text-xl font-medium ">Recent Drops</div>
      <div class="">
        <div class="flex gap-4 overflow-x-scroll overflow-y-hidden w-full h-full">
          <For each={drops}>{(drop) => <DropCard drop={drop} />}</For>
        </div>
      </div>
    </div>
  );
};

export default RecentDrops;
