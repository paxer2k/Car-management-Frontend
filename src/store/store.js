import { createStore } from 'vuex';
import axios from '../axios-auth'

const store = createStore({
    state() {
        return {
            id: null,
            token: null,
            username: null,
            role: null,
        }
    },

    getters: {
        isAuthenticated(state) {
            return state.token != null;
        },
        isAdmin(state) {
            return state.role == "Admin";
        }
    },

    mutations: {
        saveToken(state, parameters) {
            state.id = parameters.id;
            state.token = parameters.token;
            state.username = parameters.username;
            state.role = parameters.role;
        },

        // logout(state) {
        //     state.id = null;
        //     state.token = null;
        //     state.username = null;
        //     state.role = null;
        // }
    },

    // action has to call the mutation method to change the state
    actions: {

        autoLogin({ commit }) {
            let token = localStorage.getItem('token');
            let username = localStorage.getItem('username');
            let role = localStorage.getItem('role');

            if (!token)
                return;

            // if the token is STILL valid, auto login for the user
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit('saveToken', {
                token: token,
                username: username,
                role: role
            });
        },

        logout() {
            return new Promise((resolve) => {
                localStorage.clear();
                axios.defaults.headers.common["Authorization"] = "";
                this.state.token = null;
                this.state.username = null;
                this.state.role = null;
                resolve();
            })
        },

        login({ commit }, parameters) {
            return new Promise((resolve, reject) => {
                axios.post("/users/login", {
                    username: parameters.username,
                    password: parameters.password,
                })
                    .then((result) => {
                        axios.defaults.headers.common["Authorization"] = "Bearer " +
                            result.data.token;

                        // if f5 is pressed or the page is shut off, store the bearer token in the browser so that the user can stay logged in if the open the page again
                        localStorage.setItem('id', result.data.id);
                        localStorage.setItem('token', result.data.token);
                        localStorage.setItem('username', result.data.username);
                        localStorage.setItem('role', result.data.role);

                        commit('saveToken', {
                            id: result.data.id,
                            token: result.data.token,
                            username: result.data.username,
                            role: result.data.role

                        });
                        resolve();
                    })
                    .catch((error) => {
                        reject(error)
                    });
            })
        }
    }
});

export default store;