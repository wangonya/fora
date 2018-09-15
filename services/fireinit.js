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
const settings = {/* your settings... */ timestampsInSnapshots: true}
StoreDB.settings(settings)
// StoreDB.enablePersistence()
//   .catch(function(err) {
//     if (err.code == 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   })
export default firebase
