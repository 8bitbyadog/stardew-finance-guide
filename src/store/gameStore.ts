import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

interface GameState {
  year: number;
  season: Season;
  day: number;
  setGameTime: (year: number, season: Season, day: number) => void;
  money: number;
  setMoney: (amount: number) => void;
  addMoney: (amount: number) => void;
  subtractMoney: (amount: number) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      year: 1,
      season: 'Spring',
      day: 1,
      money: 500, // Starting money in Stardew Valley
      
      setGameTime: (year, season, day) => set({ year, season, day }),
      
      setMoney: (amount) => set({ money: amount }),
      
      addMoney: (amount) => set((state) => ({ 
        money: state.money + amount 
      })),
      
      subtractMoney: (amount) => set((state) => ({ 
        money: Math.max(0, state.money - amount) 
      })),
    }),
    {
      name: 'game-storage',
    }
  )
); 