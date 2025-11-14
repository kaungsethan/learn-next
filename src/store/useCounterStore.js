import { create } from "zustand";
import { useState } from "react";

const useCounterStore = create((set) => ({
  count: 0,
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  reset: () => set({ count: 0 }),
}));


// const [state,setState] = useState({count:0})
// setState({ ...state, count: state.count + 1 })


export default useCounterStore;
