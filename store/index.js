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

      async asyncData({app, params, error}) {
        const ref = StoreDB.collection("test").doc("test")

        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        return {
          text: snap.data().text
        }
      },

      async readFromFirestore() {
        const ref = StoreDB.collection("test").doc("test")

        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.text = snap.data().text
        this.readSuccessful = true
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
