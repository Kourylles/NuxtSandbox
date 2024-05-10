import { defineStore } from "pinia";
import data from "../data/data.json";

export const useDataStore = defineStore("Data", {
  state: () => ({
    data,
  }),
});
