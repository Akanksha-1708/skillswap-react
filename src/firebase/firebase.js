// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAtc5Ej1SLsKhAVebOfQ_-zvvUz9gvBGPQ",
//   authDomain: "skillswap-97bdf.firebaseapp.com",
//   projectId: "skillswap-97bdf",
//   storageBucket: "skillswap-97bdf.firebasestorage.app",
//   messagingSenderId: "1040865014463",
//   appId: "1:1040865014463:web:1fe4000213e6443965cc0a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// This imports Firebase's function that starts app : Hey Firebase, I'm connecting my React application to my Firebase project."
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtc5Ej1SLsKhAVebOfQ_-zvvUz9gvBGPQ",
  authDomain: "skillswap-97bdf.firebaseapp.com",
  projectId: "skillswap-97bdf",
  storageBucket: "skillswap-97bdf.firebasestorage.app",
  messagingSenderId: "1040865014463",
  appId: "1:1040865014463:web:1fe4000213e6443965cc0a"
};

const app = initializeApp(firebaseConfig);
// This actually establishes the connection, without ths react does not know my firebase project exists
export const auth = getAuth(app);
// This creates the Authentication object.