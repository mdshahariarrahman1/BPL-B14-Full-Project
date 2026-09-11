import type { Dispatch, SetStateAction } from "react";
import type PlayerType from "../playerType";
import PlayerCard from "./playerCard";

interface AvailableType {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: PlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<PlayerType[]>>
}

const Available = ({ players, coin, setCoin, selectedPlayer, setSelectedPlayer }: AvailableType) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 container mx-auto">
        {players.map((player, ind: number) => {
          return <PlayerCard key={ind} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} player={player} coin={coin} setCoin={setCoin} />;
        })}
      </div>
    </>
  );
};

export default Available;
