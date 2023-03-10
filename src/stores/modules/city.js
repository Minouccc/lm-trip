import { getCitiesAll } from "@/services/modules/city";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: { cityName: "广州" },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCitiesAll();
      this.allCities = res.data;
    },
  },
});

export default useCityStore;
