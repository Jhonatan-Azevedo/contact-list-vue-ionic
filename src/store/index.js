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
            console.log(newContact)
            state.contacts.push(newContact)
        }
    },

    actions: {
        updateContacts({ commit }, newContacts) {
            commit('setContacts', newContacts)
        },

        updateNewContact({ commit }, newContact) {
            commit("setContact", newContact)
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