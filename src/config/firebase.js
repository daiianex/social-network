import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXcbLlHyRDqr9QuDdzl2DTYo-73-w0M-w",
    authDomain: "alem-8d9fe.firebaseapp.com",
    projectId: "alem-8d9fe",
    storageBucket: "alem-8d9fe.appspot.com",
    messagingSenderId: "981261280296",
    appId: "1:981261280296:web:0032569bc272434c0f811d",
    measurementId: "G-DH6FSSV30D"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
//const analytics = getAnalytics(app);
