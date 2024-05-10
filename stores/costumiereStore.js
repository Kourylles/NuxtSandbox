import { defineStore } from 'pinia'
import data from '../data/costumiereData.json'

export const useCostumiereStore = defineStore('costumiereStore', {
	state: () => ({
		data,
	}),
	getters: {
		getRealCostumesByType: (state) => {
			return (givenType) =>
				state.data.realisations.filter((s) => s.type === givenType)
		},
	},
})
