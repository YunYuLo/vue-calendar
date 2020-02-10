import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vue-calendar-a9b76.firebaseapp.com",
  databaseURL: "https://vue-calendar-a9b76.firebaseio.com",
  projectId: "vue-calendar-a9b76",
  storageBucket: "vue-calendar-a9b76.appspot.com",
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
