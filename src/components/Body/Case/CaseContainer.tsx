import { Component, createSignal } from "solid-js";
import CaseHeader from "./CaseHeader";
import CaseOpener from "./CaseOpener";
import CaseFooter from "./CaseFooter";

// skins type
export type Skin = {
  name: string;
  rarity: string;
  target: boolean;
  price: number;
  img: string;
  order: number;
};

export const [discordAuthorized, setDiscordAuthorized] = createSignal(true);
const CaseContainer: Component = () => {
  return (
    <div class="z-40 relative flex flex-col gap-2 h-full">
      <CaseHeader />
      <CaseOpener />
      <CaseFooter />
    </div>
  );
};

export default CaseContainer;
