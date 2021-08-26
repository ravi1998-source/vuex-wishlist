import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    completed: true,
    wwishes: [],
    wishes: [

    ],
  },
  getters: {
    allWWishes: (state) => state.wwishes,
    allWishes: (state) => state.wishes,
    completed: (state) => state.completed,
  },
  actions: {
    changeCompleted({ commit }) {
      commit("change_complete");
    },
    addWish({ commit }, wish) {
      commit("add_wish", wish);
    },
    deleteWish({ commit }, id) {
      commit("delete_wish", id);
    },
    updateWish({ commit }, wish) {
      commit("update_wish", wish);
    },
  },
  mutations: {
    add_wishlist (state, wish) {
      // all the http request should be done here
      // eg: 
      // axios.get('getWaitlist').then((resp)=> console.log(resp)).catch((err)=> console.log(err))
      axios.get().then().catch()
    },
    {    add_wish(state, wish) {
      state.wishes.push(wish);
      state.wwishes = state.wishes;
    },
    delete_wish(state, id) {
      state.wishes = state.wishes.filter((wish) => wish.id != id);
      state.wwishes = state.wishes;
    },
    update_wish(state, wish) {
      let index = state.wishes.findIndex((w) => w.id == wish.id);
      if (index != -1) {
        state.wishes[index] = wish;
      }
    },
    change_complete(state) {
      state.wwishes = state.wishes;
      state.completed = state.completed == true ? false : true;
      state.wwishes = state.wwishess.filter((w) => w.complete == state.completed);
    },
  },
  modules: {},
});
