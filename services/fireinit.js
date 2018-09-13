import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAkVK82GQrQCNa_E-umaFwkoozo30mSEsQ",
  authDomain: "fora-project.firebaseapp.com",
  databaseURL: "https://fora-project.firebaseio.com",
  projectId: "fora-project",
  storageBucket: "fora-project.appspot.com",
  messagingSenderId: "556535566384"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
