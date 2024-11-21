import {defineStore} from "pinia";


export const demoStore = defineStore("dnl-demo", {
    state: () => ({
        count: 0,
    }),
    getters: {
        double: (state) => {
           return state.count * 2;
        },
    },
    actions: {
        increment() {
            this.count++;
        }
    }
})