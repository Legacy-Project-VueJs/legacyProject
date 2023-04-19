import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5LnWXXBZnefQPbaES0U5J_h4408d0vkw",
    authDomain: "vue-app-js.firebaseapp.com",
    projectId: "vue-app-js",
    storageBucket: "vue-app-js.appspot.com",
    messagingSenderId: "660551308332",
    appId: "1:660551308332:web:c73331d3f386b9cc1d2d89"
  };

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()