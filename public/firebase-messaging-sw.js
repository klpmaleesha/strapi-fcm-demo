importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
);

//C-Spell:disable
const firebaseConfig = {
  apiKey: "AIzaSyA4X2TbBYOmbyhBDQ5OlJgeOKGvfd8Nsvk",
  authDomain: "strapi-fcm.firebaseapp.com",
  projectId: "strapi-fcm",
  storageBucket: "strapi-fcm.appspot.com",
  messagingSenderId: "848687737421",
  appId: "1:848687737421:web:d7b6d57cd9718bc8250a04",
  measurementId: "G-ZYEN19YH5J",
};
//C-Spell:enable

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
