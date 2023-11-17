import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { auth } from "./firebase.js";

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function registerNewUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}