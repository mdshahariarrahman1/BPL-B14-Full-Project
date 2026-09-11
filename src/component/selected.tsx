import type { Dispatch, SetStateAction } from "react";
import type PlayerType from "../playerType";
import SelectedCard from "./selectedCard";

import { FaUsers } from "react-icons/fa";

interface SelectedType {
  selectedPlayer: PlayerType[];
  setSelectedPlayer: Dispatch<SetStateAction<PlayerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Selected = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}: SelectedType) => {
  if (selectedPlayer.length === 0) {
    return (
      <>
        <div className="mt-8 w-full rounded-3xl border border-purple-200 bg-linear-to-br from-white via-purple-50/30 to-indigo-50/40 p-8 shadow-sm md:p-12">
          {/* Empty State */}
          <div className="flex min-h-105 flex-col items-center justify-center text-center">
            {/* Icon / Player Illustration */}
            <div className="relative mb-7">
              {/* Background Circle */}
              <div className="absolute inset-0 z-0 rounded-full bg-purple-100 blur-2xl" />

              {/* Icon Box */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-purple-200 bg-white shadow-lg">
                <FaUsers />
              </div>

              {/* Small Stars */}
              <span className="absolute -left-7 top-2 text-2xl text-purple-400">
                ✦
              </span>

              <span className="absolute -right-7 top-8 text-xl text-purple-400">
                ✦
              </span>

              <span className="absolute -top-5 right-4 text-sm text-purple-400">
                •
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              No players <span className="text-purple-600">selected yet</span>
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-500 md:text-base">
              Go to Available tab to select players
            </p>


          </div>

          {/* Bottom Decorative Shapes */}
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-purple-100/60 blur-xl" />

            <div className="absolute -bottom-8 -right-8 grid grid-cols-4 gap-2 opacity-50">
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-purple-300"
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="container mx-auto space-y-4">
      {selectedPlayer.map((player, index) => (
        <SelectedCard
          key={index}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
          players={player}
        />
      ))}
    </div>
  );
};

export default Selected;
