import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8W4-CDGvYaANB4m9HVzz4djsMxewLZEY",
    authDomain: "mockmate-ae560.firebaseapp.com",
    projectId: "mockmate-ae560",
    storageBucket: "mockmate-ae560.firebasestorage.app",
    messagingSenderId: "4921423403",
    appId: "1:4921423403:web:74c4c3dbfaa5d12bd95c6e",
    measurementId: "G-P0827PXS1B"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);