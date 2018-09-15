import Vuex from 'vuex'
import firebase, {auth, StoreDB} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      async writeToFirestore() {
        const ref = StoreDB.collection("test").doc("test")
        const document = {
          text: "This is a test message."
        }

        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
