import { Component } from "solid-js";
import { AiFillQuestionCircle } from "solid-icons/ai";

interface ChatInputProps {
  setChatBoxLang: (lang: string) => void;
  chatBoxLang: () => string;
}

const ChatInput: Component<ChatInputProps> = ({
  setChatBoxLang,
  chatBoxLang,
}) => {
  const changeLanguage = (lang: string) => {
    setChatBoxLang(lang);
  };
  return (
    <div class="flex flex-col bg-[rgb(22,27,42)] w-full items-center p-4 gap-1">
      <div class="flex gap-1 w-full justify-center px-3">
        <button
          onClick={() => changeLanguage("en")}
          class={`flex-1 flex gap-1 bg-[rgb(37,41,64)] p-2 text-custom-text text-xs items-center justify-center rounded ${
            chatBoxLang() === "en" && "text-white bg-custom-icon"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/508663/flag-um.svg"
            alt="USA Flag"
            class="h-4"
          />
          {"EN room"}
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          class={`flex-1  flex gap-1 bg-[rgb(37,41,64)] p-2 px-1 text-custom-text text-xs items-center justify-center rounded ${
            chatBoxLang() === "ru" && "text-white bg-custom-icon"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/508628/flag-ru.svg"
            alt="russian flag"
            class="h-4"
          />
          {"RU room"}
        </button>
        <button
          onClick={() => changeLanguage("es")}
          class={`flex-1 flex  gap-1 bg-[rgb(37,41,64)] p-2 text-custom-text text-xs items-center justify-center rounded ${
            chatBoxLang() === "es" && "text-white bg-custom-icon"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/508499/flag-es.svg"
            alt="Spanish flag"
            class="h-4"
          />
          {"ES room"}
        </button>
      </div>
      <div class="w-full px-3">
        <input
          type="text"
          placeholder="Enter your message here..."
          class="bg-[rgb(37,41,64)] rounded w-full  p-3 px-4 text-white text-sm"
        />
        <img
          src="/assets/SmileyFace.svg"
          alt="smiley face"
          class="absolute right-10 bottom-14 cursor-pointer"
        />
      </div>
      <div class="flex items-center justify-start w-full text-white text-xs font-bold gap-1 px-3 mt-2 hover:text-custom-glowYellow transition-all duration-200">
        {"Chat rules"}
        <AiFillQuestionCircle class="text-lg" />
      </div>
    </div>
  );
};

export default ChatInput;
