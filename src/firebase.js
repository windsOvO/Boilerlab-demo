import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyC0eyZGoV7oxCvuBLc8zHVG3XLJp-6AVpg',
  authDomain: 'boilerlab-ece362.firebaseapp.com',
  databaseURL: 'https://boilerlab-ece362.firebaseio.com',
  projectId: 'boilerlab-ece362',
  storageBucket: 'boilerlab-ece362.appspot.com',
  messagingSenderId: '945078615668',
  appId: '1:945078615668:web:f022015826c2ae0a189b21'
})

export default firebase
