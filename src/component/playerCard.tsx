import { useState, type Dispatch, type SetStateAction } from "react";
import type PlayerType from "../playerType";
import { Bounce, toast } from "react-toastify";

interface PlayerCardType {
  player: PlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: PlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<PlayerType[]>>;
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayer , setSelectedPlayer }: PlayerCardType) => {
  const [isSelected, setIsSelected] = useState(false);

  const handalerSetSelection = () => {
    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      setIsSelected(true);
      toast("🦄 player buying successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setIsSelected(false);
      toast.error("Coin is not enought to purchase");
    }

    // Selected Player

    setSelectedPlayer([...selectedPlayer,player])

  };

  return (
    <>
      {/* Optional */}

      <section className="container mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          {/* Player Image */}
          <div className="h-54.5 w-full overflow-hidden rounded-2xl">
            <img
              src={player.playerImage}
              alt={player.playerName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Player Name */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl">👤</span>

            <h2 className="text-xl font-bold text-[#131313]">
              {player.playerName}
            </h2>
          </div>

          {/* Origin + Player Type */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-gray-500">⚑</span>

              <p className="text-base text-gray-500">{player.origin}</p>
            </div>

            <span className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700">
              {player.playerType}
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200"></div>

          {/* Rating */}
          <div className="mb-4">
            <p className="font-semibold text-[#131313]">Rating</p>
          </div>

          {/* Batting Style */}
          <div className="mb-4 flex items-center justify-between">
            <p className="font-semibold text-[#131313]">
              {player.battingStyle}
            </p>

            <p className="text-gray-500">{player.battingStyle}</p>
          </div>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#131313]">
              Price: ${player.price}
            </p>

            <button
              onClick={() => handalerSetSelection()}
              className={`rounded-lg border border-gray-200 px-4 py-2 text-sm transition ${isSelected === true ? "bg-blue-500" : ""}`}
              disabled={isSelected}
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayerCard;
