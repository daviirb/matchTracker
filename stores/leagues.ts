import { LEAGUES } from "@/constants/Leagues";
import { create } from "zustand";

interface ILeague {
  league: string;
  setLeague: (league: string) => void;
}

export const useLeagueStore = create<ILeague>((set) => ({
  league: LEAGUES[0].code,
  setLeague: (league: string) => set({ league }),
}));
