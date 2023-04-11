import { Component } from "solid-js";
import { RiSystemArrowLeftSLine } from "solid-icons/ri";
import { BiLogosDiscordAlt } from "solid-icons/bi";
import HeaderButton from "./HeaderButton";
import OpenCaseButton from "./OpenCaseButton";
import { discordAuthorized } from "./CaseContainer";

import RandomOrg from "./RandomOrg";

const RandomOrgArgs = {
  serverSeed:
    "c64c0a50acf36ad1872c8f457d8cb7ba:a5c86002ca1ecaede6f0fa1bcb36424f262ae7f41db34c6067daef0b5e33453727b879584cbf21e3f4c55763b46c673da2da",
  clientSeed: "changethis",
  ticket: "No ticket...",
};

const CaseHeader: Component = () => {
  return (
    <div class="flex flex-col mt-2 border-custom-lightPurple border-2 rounded ">
      <div class="flex bg-[url(src/assets/ModalHeaderBg.png)] bg-cover py-4 pl-6 border-b-2 rounded border-custom-lightPurple">
        <div class="text-white text-4xl">
          <a href="#">
            <RiSystemArrowLeftSLine />
          </a>
        </div>
        <div class="text-white text-2xl oswald font-semibold">
          FREE DAILY CASE
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center justify-center sm:justify-start h-full sm:pl-10 py-6 gap-2 sm:gap-8 flex-col sm:flex-row">
          <img
            src="src/assets/FreeDailyCase.png"
            alt="free daily case"
            class="h-32"
          />
          <div class="flex flex-col gap-2">
            <RandomOrg
              serverSeed={RandomOrgArgs.serverSeed}
              clientSeed={RandomOrgArgs.clientSeed}
              ticket={RandomOrgArgs.ticket}
            />
            <div class="flex gap-2 justify-center sm:justify-start ">
              {!discordAuthorized() ? (
                <>
                  <HeaderButton
                    text="JOIN DISCORD"
                    icon={<BiLogosDiscordAlt />}
                    href="#"
                  />
                  <HeaderButton
                    text="AUTHORIZE ACCOUNT"
                    icon={<BiLogosDiscordAlt />}
                    href="#"
                  />{" "}
                </>
              ) : (
                <OpenCaseButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseHeader;
