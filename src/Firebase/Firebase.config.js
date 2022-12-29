// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl0g9Z2lvzS0LGPmpGjgiZManqaP9-DwA",
    authDomain: "broadcast-socials.firebaseapp.com",
    projectId: "broadcast-socials",
    storageBucket: "broadcast-socials.appspot.com",
    messagingSenderId: "749347157780",
    appId: "1:749347157780:web:25a74edc60bc1c92ad3401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;