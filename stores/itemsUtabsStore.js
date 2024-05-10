import { defineStore } from "pinia";
import data from "../data/dataItemsUtabs.json";

export const useItemsUtabsStore = defineStore("ItemsUtabs", {
  state: () => ({
    data,
  }),
});
