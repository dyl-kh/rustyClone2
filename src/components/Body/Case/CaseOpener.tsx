import { createSignal, createEffect, onMount } from "solid-js";
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

const SPIN_LIST_SIZE = 100;

const [scrollPosition, setScrollPosition] = createSignal(0);
const [openedSkin, setOpenedSkin] = createSignal<Skin>(skins[0]);
const [isSpinning, setIsSpinning] = createSignal(false);
const [spinList, setSpinList] = createSignal<Skin[]>([]);
const [firstSpin, setFirstSpin] = createSignal(true);
const [finishedSpin, setFinishedSpin] = createSignal(false);

let spinInterval: number;

export const openCase = () => {
  if (isSpinning()) return;
  if (!firstSpin()) {
    setSpinList([]);
    createSpinList();
  }
  setFirstSpin(false);
  setOpenedSkin(skins[0]);
  setIsSpinning(true);

  setScrollPosition(0);
  const targetIndex = SPIN_LIST_SIZE / 2;
  const adjustedWidth = getAdjustedWidth();
  const halfScreenWidth = adjustedWidth / 2;
  const targetScrollPosition = targetIndex * 123.75 - halfScreenWidth;
  let currentPosition = scrollPosition();
  let duration = 8000;
  let startTime: number | undefined;

  const ease = (t: number) => {
    const adjustedT = 1 - t;
    return 1 - Math.pow(adjustedT, 3);
  };

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    if (progress > duration) progress = duration;

    const changeInPosition = targetScrollPosition - currentPosition;
    const newPosition =
      currentPosition + changeInPosition * ease(progress / duration);
    setScrollPosition(newPosition);

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      setFinishedSpin(true);
      setTimeout(() => {
        setFinishedSpin(false);
      }, 1000);
      setOpenedSkin(spinList()[targetIndex]);
      setIsSpinning(false);
    }
  };

  requestAnimationFrame(animate);
  updateScrollPosition();
};

const updateScrollPosition = () => {
  const targetIndex = SPIN_LIST_SIZE / 2;
  const adjustedWidth = getAdjustedWidth();
  const halfScreenWidth = adjustedWidth / 2;
  const targetScrollPosition = targetIndex * 123.75 - halfScreenWidth;
  setScrollPosition(targetScrollPosition);
};

const getAdjustedWidth = () => {
  return window.innerWidth > 1536
    ? window.innerWidth - 250
    : window.innerWidth > 1100
    ? window.innerWidth - 150
    : window.innerWidth > 900
    ? window.innerWidth + 180
    : window.innerWidth + 275;
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
  onMount(() => {
    createSpinList();
  });
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
      </div>
    </div>
  );
};

export { finishedSpin };

export default App;
