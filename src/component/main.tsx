import { use, useState, type Dispatch, type SetStateAction } from "react";
import type PlayerType from "../playerType";
import Available from "./available";
import Selected from "./selected";

interface PlayerDataTypeProps {
  PlayerDataPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>
  
}


const MainPlayerFile = ({ PlayerDataPromise, coin, setCoin }: PlayerDataTypeProps) => {
  const players = use(PlayerDataPromise);
  
  const [buttonType, setButtonType] = useState<"available" | "Selected">("available");

  const [selectedPlayer, setSelectedPlayer] = useState<PlayerType[]>([])

  return (
    <>
      <div className=" flex justify-between container mx-auto mb-8">
        <h1 className="text-[28px] text-[#131313] font-bold">{buttonType === "available" ? "Available Players" : "Selected Player"}</h1>
        <div className="flex">
          <button
            onClick={()=> setButtonType("available")}
            className={`inset-shadow-2xs ${buttonType === "available" ? "bg-[#E7FE29]" : ""} shadow-xl py-3 px-5 rounded-l-2xl cursor-pointer transition duration-500`}
          >
            Available
          </button>

          <button
          onClick={() => setButtonType("Selected")}
            className={`inset-shadow-2xs ${buttonType === "Selected" ? "bg-[#E7FE29]" : ""} shadow-xl py-3 px-5 rounded-r-2xl cursor-pointer transition duration-500`}
          >
            Selected({selectedPlayer.length})
          </button>
        </div>
      </div>

      {buttonType === "available" ? (<Available selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} players={players} coin={coin} setCoin={setCoin} />):(<Selected coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />)};
    </>
  );
};

export default MainPlayerFile;
