import { Component } from "solid-js";
import { BiLogosDiscordAlt } from "solid-icons/bi";
import { AiOutlineTwitter } from "solid-icons/ai";

const BodyFooter: Component = () => {
  return (
    <div class="flex h-full bg-custom-footerPurple p-14 z-40 gap-10 flex-col md:flex-row">
      <div class="flex flex-col h-full items-start text-[rgb(129,141,157)] gap-4 text-xs w-1/2">
        <img
          src="assets/RustyLogoWhite.svg"
          alt="rusty loot logo"
          class="h-9"
        />
        <div class="flex flex-col gap-4 max-w-sm ">
          <div>
            Rustyloot is the finest Rust gambling site bringing you the best
            desgined gamemodes alongside the best rewards!
          </div>
          <div>
            Support | Discord.gg/Rustyloot Sponsorships | Marketing@rustyloot.gg
          </div>
          <div>Copyright &copy; 2022 Rustyloot.gg. All rights reserved.</div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap gap-10">
        <div class="flex flex-col text-custom-text font-semibold text-xs gap-3 ">
          <div class="text-white oswald font-semibold text-base">INFO</div>
          <a href="#">FAQ</a>
          <a href="#">TOS</a>
          <a href="#">Provably Fair</a>
        </div>
        <div class="flex flex-col text-custom-text font-semibold text-xs gap-3 ">
          <div class="text-white oswald font-semibold text-base">GAMES</div>
          <a href="#">Coin Flip</a>
          <a href="#">Mines</a>
          <a href="#">PvP Mines</a>
          <a href="#">Plinko</a>
          <a href="#">Wheel</a>
          <a href="#">Upgrader</a>
        </div>
        <div class="flex flex-col text-custom-text font-semibold text-xs gap-3 ">
          <div class="text-white oswald font-semibold text-base">OTHER</div>
          <a href="#">Leaderboard</a>
          <a href="#">Rewards</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="flex flex-col text-custom-text font-semibold text-xs  gap-2">
          <div class="text-white oswald font-semibold text-base">
            SOCIAL MEDIA
          </div>
          <div>
            <a href="#" class="flex">
              <div class="text-3xl text-custom-glowYellow items-center">
                <AiOutlineTwitter />
              </div>
              {"Twitter"}
            </a>
            <a href="#" class="flex items-center">
              <div class="text-3xl text-custom-glowYellow">
                <BiLogosDiscordAlt />
              </div>
              {"Discord"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFooter;
