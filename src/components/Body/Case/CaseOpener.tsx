import { createSignal, createEffect, onCleanup } from "solid-js";
import { render } from "solid-js/web";
import ItemCaseCard from "./ItemCaseCard";
import { Skin } from "./CaseContainer";

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
    img: "assets/alienredak.png",
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

const SPIN_LIST_SIZE = 50;

const [scrollPosition, setScrollPosition] = createSignal(0);
const [openedSkin, setOpenedSkin] = createSignal<Skin>(skins[0]);
const [isSpinning, setIsSpinning] = createSignal(false);
const [spinList, setSpinList] = createSignal<Skin[]>([]);

let spinInterval: number;

export const openCase = () => {
  if (isSpinning()) return;
  setSpinList([]);
  setOpenedSkin(skins[0]);
  setIsSpinning(true);

  createSpinList();
  setScrollPosition(0);
  const targetIndex = SPIN_LIST_SIZE / 2;
  const adjustedWidth =
    window.innerWidth > 1100 ? window.innerWidth - 365 : window.innerWidth;
  const halfScreenWidth = adjustedWidth / 2;
  const targetScrollPosition = targetIndex * 123.75 - halfScreenWidth;
  let currentPosition = scrollPosition();
  let duration = 5000;
  let startTime: number | undefined;

  const customEase = (t: number) => {
    const easeInSpeed = 2;
    const easeOutSpeed = 4;
    if (t < 0.5) {
      return Math.pow(t * 2, easeInSpeed) / 2;
    } else {
      return 1 - Math.pow(1 - (t - 0.5) * 2, easeOutSpeed) / 2;
    }
  };

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    if (progress > duration) progress = duration;

    const changeInPosition = targetScrollPosition - currentPosition;
    const newPosition =
      currentPosition + changeInPosition * customEase(progress / duration);
    setScrollPosition(newPosition);

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      setOpenedSkin(spinList()[targetIndex]);
      setIsSpinning(false);
    }
  };

  requestAnimationFrame(animate);
  updateScrollPosition();
};

const updateScrollPosition = () => {
  const targetIndex = SPIN_LIST_SIZE / 2;
  const adjustedWidth =
    window.innerWidth > 1100 ? window.innerWidth - 365 : window.innerWidth;
  const halfScreenWidth = adjustedWidth / 2;
  const targetScrollPosition = targetIndex * 123.75 - halfScreenWidth;
  setScrollPosition(targetScrollPosition);
};

const createSpinList = () => {
  const newSpinList = [];
  for (let i = 0; i < SPIN_LIST_SIZE; i++) {
    newSpinList.push(getRandomSkin(i));
  }
  newSpinList[SPIN_LIST_SIZE / 2].target = true;
  setSpinList(newSpinList);
};

const getRandomSkin = (i: number) => {
  return {
    ...skins[Math.floor(Math.random() * skins.length)],
    target: false,
    order: i,
  };
};

createEffect(() => {
  const handleResize = () => {
    updateScrollPosition();
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

const App = () => {
  return (
    <div class="border-custom-lightPurple bg-custom-darkPurple border-2 h-80 rounded flex flex-col gap-2 ">
      <div class="overflow-hidden max-w-full h-full relative">
        <div
          class="absolute left-0 top-0 flex gap-10 h-full justify-center"
          style={`transform: translateX(-${scrollPosition()}px);`}
        >
          {spinList().map((skin) => (
            <ItemCaseCard item={skin} />
          ))}
        </div>
        <div class="relative flex justify-between flex-col items-center h-full">
          <img src="assets/CaseArrow.svg" alt="case arrow" />
          <img src="assets/caseline.svg" alt="case line" />
          <img src="assets/CaseArrow.svg" alt="case arrow" class="rotate-180" />
        </div>
        {/* <div
          id="vertical-line"
          class="relative border-2 border-custom-glowYellow w-1 h-96 left-1/2"
        ></div> */}
      </div>
    </div>
  );
};

export default App;
