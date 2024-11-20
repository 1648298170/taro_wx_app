import { defineStore } from "pinia";
import { computed, ref } from "vue";


const useCounterStore = defineStore("counter", {
    //state
    state: () => ({
        count: 0
    }),

    //getter
    getters: {
        doubleCount: (state) => state.count * 2
    },

    //action
    actions: {
        increment() {
            console.log("increment")
            this.count++;
        }
    }

})

export default useCounterStore;