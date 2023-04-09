import { Component, createSignal, For, createEffect } from "solid-js";
import { RiSystemArrowLeftSLine, RiSystemArrowUpSLine } from "solid-icons/ri";

const Languages = [
  {
    name: "EN",
    flag: "https://www.svgrepo.com/show/508663/flag-um.svg",
  },
  {
    name: "ES",
    flag: "https://www.svgrepo.com/show/508499/flag-es.svg",
  },
  {
    name: "RU",
    flag: "https://www.svgrepo.com/show/508628/flag-ru.svg",
  },
];
const [showMenu, setShowMenu] = createSignal(false);
const [currLang, setCurrLang] = createSignal(Languages[0]);

const toggleMenu = () => {
  setShowMenu(!showMenu());
};

createEffect(() => {
  const lang = localStorage.getItem("i18nextLng");
  if (lang) {
    const langObj = Languages.find((l) => l.name === lang.toUpperCase());
    if (langObj) {
      setCurrLang(langObj);
    }
  } else {
    localStorage.setItem("i18nextLng", Languages[0].name.toLowerCase());
  }
});

const LanguageToggle: Component = () => {
  return (
    <div class="relative z-50">
      <div>
        <button
          type="button"
          class="bg-custom-lightGray w-24 h-10 flex justify-between items-center p-2 rounded"
          onClick={toggleMenu}
        >
          <img src={currLang().flag} alt="USA Flag" class="h-7" />
          <div class="font-oswald text-white text-sm font-medium">
            {currLang().name}
          </div>
          <div class="text-custom-blueGray text-xl">
            {showMenu() ? <RiSystemArrowUpSLine /> : <RiSystemArrowLeftSLine />}
          </div>
        </button>
        {showMenu() ? (
          <div class="absolute right-0 mt-2 w-24 rounded bg-custom-lightGray overflow-hidden">
            <For each={Languages}>
              {(lang) => {
                if (lang.name === currLang().name) {
                  return null;
                } else {
                  return (
                    <button
                      type="button"
                      class="w-full flex justify-between items-center p-2"
                      onClick={() => {
                        setCurrLang(lang);
                        // save lang in local storage
                        localStorage.setItem(
                          "i18nextLng",
                          lang.name.toLowerCase()
                        );
                        toggleMenu();
                      }}
                    >
                      <img src={lang.flag} alt="USA Flag" class="h-7" />
                      <div class="font-oswald text-white text-sm font-medium">
                        {lang.name}
                      </div>
                    </button>
                  );
                }
              }}
            </For>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LanguageToggle;
