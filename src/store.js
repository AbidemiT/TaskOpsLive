import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    status: "",
    user: {},
    token: localStorage.getItem("token") || ""
  },
  mutations: {
    auth_user(state, user) {
      state.user = user;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.token = token;
      state.status = "success";
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.token = "";
      state.user = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://taskops.herokuapp.com/users/login",
          data: user,
          method: "POST"
        })
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_user", user);
            commit("auth_success", token);

            resolve(res);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");

            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://taskops.herokuapp.com/users",
          data: user,
          method: "POST"
        })
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;

            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;

            commit("auth_user", user);
            commit("auth_success", token);

            resolve(res);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");

            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    profile: state => state.user.name,
    user: state=> state.user
  }
});

export default store;
