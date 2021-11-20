import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRtSPbVoGTofl0bDt_6_0UU_P0gJQCYV0",
  authDomain: "pomodoro-timer-74850.firebaseapp.com",
  projectId: "pomodoro-timer-74850",
  storageBucket: "pomodoro-timer-74850.appspot.com",
  messagingSenderId: "987646612302",
  appId: "1:987646612302:web:0136c19f293eda25cd041f",
  measurementId: "G-PJ3L91TSBS",
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
