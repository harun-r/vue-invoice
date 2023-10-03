import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBauryjGxiFG52gQxvD0pm2cqK_7Is16kY",
    authDomain: "vue-invoice-b974b.firebaseapp.com",
    projectId: "vue-invoice-b974b",
    storageBucket: "vue-invoice-b974b.appspot.com",
    messagingSenderId: "788094716418",
    appId: "1:788094716418:web:a6c387b34cc41498bcb51b"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()