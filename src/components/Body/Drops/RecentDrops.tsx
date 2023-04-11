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
        <div class="w-full h-full flex gap-3 overflow-x-scroll overflow-y-hidden scrollbar-hide">
          <For each={drops}>{(drop) => <DropCard drop={drop} />}</For>
        </div>
      </div>
    </div>
  );
};

export default RecentDrops;
