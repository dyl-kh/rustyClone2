import { Component } from "solid-js";
import { BiRegularCopy } from "solid-icons/bi";

interface RandomOrgProps {
  serverSeed: string;
  clientSeed: string;
  ticket: string;
}

const trimText = (text: string, length: number) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};

const RandomOrg: Component<RandomOrgProps> = ({
  serverSeed,
  clientSeed,
  ticket,
}) => {
  const copyServerSeed = async () => {
    await navigator.clipboard.writeText(serverSeed);
  };

  return (
    <div class="text-custom-randomText text-sm">
      <div class="flex items-center gap-5">
        <div>Server Seed Hash: {trimText(serverSeed, 8)}</div>
        <div class="text-gray-500 text-lg cursor-pointer">
          <BiRegularCopy onClick={copyServerSeed} />
        </div>
      </div>
      <div>Client Seed: {clientSeed}</div>
      <div>Ticket: {ticket}</div>
    </div>
  );
};

export default RandomOrg;
