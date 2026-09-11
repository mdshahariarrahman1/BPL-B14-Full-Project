import { FaTrash } from "react-icons/fa";

import type { Dispatch, SetStateAction } from "react";

import type PlayerType from "../playerType";

interface SelectedCardType {
  players: PlayerType;
  selectedPlayer: PlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<PlayerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedCard = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
  players,
}: SelectedCardType) => {

  const handleDelete = (player: PlayerType) => {
    const restPlayer = selectedPlayer.filter(
      (selectedPlayer) =>
        selectedPlayer.playerName !== player.playerName
    );

    setSelectedPlayer(restPlayer);

    const coinPrice = coin + player.price;

    setCoin(coinPrice);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">

      {/* Left Side */}
      <div className="flex items-center gap-5">

        {/* Player Image */}
        <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-200">
          <img
            src={players.playerImage}
            alt={players.playerName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Player Info */}
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {players.playerName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {players.battingStyle}
          </p>
        </div>

      </div>

      {/* Delete Button */}
      <button
        onClick={() => handleDelete(players)}
        className="mr-1 cursor-pointer text-red-500 transition hover:text-red-700"
      >
        <FaTrash />
      </button>

    </div>
  );
};

export default SelectedCard;