import { createStore } from "vuex"

const store = createStore({
    state(){
        return {
            contacts: []
        }
    },

    mutations: {
        setContacts(state, newContacts) {
            state.contacts = [...newContacts]
        },

        setContact(state, newContact) {
            state.contacts.push(newContact)
        },

        setRemoveContact(state, index) {
            state.contacts.splice(index, 1)
        }
    },

    actions: {
        updateContacts({ commit }, newContacts) {
            commit('setContacts', newContacts)
        },

        updateNewContact({ commit }, newContact) {
            commit("setContact", newContact)
        },

        removeContact({ commit, state }, idContact) {
            const index = state.contacts.findIndex(contact => contact.id == idContact)
            commit("setRemoveContact", index);
        }
    },

    getters: {
        getContacts(state) {
            return state.contacts
        },

        findContact: (state) => (id) => {
            const contacts = state.contacts;

            return contacts.find(contact => contact.id == id)
        },

        getLastId(state) {
            return state.contacts[state.contacts.length-1].id
        }
    }

})

export default store