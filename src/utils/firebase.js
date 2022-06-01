import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA4X2TbBYOmbyhBDQ5OlJgeOKGvfd8Nsvk",
  authDomain: "strapi-fcm.firebaseapp.com",
  projectId: "strapi-fcm",
  storageBucket: "strapi-fcm.appspot.com",
  messagingSenderId: "848687737421",
  appId: "1:848687737421:web:d7b6d57cd9718bc8250a04",
  measurementId: "G-ZYEN19YH5J",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let messaging;

try {
  if (typeof window !== "undefined") messaging = getMessaging(app);
} catch (error) {
  console.log(error);
}

export { messaging };
