import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('info', () => {
  const info = ref ({
    fname: "Alicia",
    lname: "Keo",
    street: "123 Sweet Ln",
    city: "Bridgewater",
    state: "VA",
    zip: "22812"
  })
  return { info }
})
