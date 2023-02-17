import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";
export const queryState = atom({
  key: "query-state",
  default: "top/anime",
});

export const animeFetch = selector({
  key: "anime-fetch",
  get: async ({ get }) => {
    try {
      const res = await axios.get(
        `https://api.jikan.moe/v4/${get(queryState)}`
      );
      return res.data || [];
    } catch (error) {
      console.log(error);
    }
  },
});
