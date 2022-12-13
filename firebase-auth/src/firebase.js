import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxn-fd7w6ywt-J4zJQ16OY1bbcUwwtCWo",
  authDomain: "fir-d6a5c.firebaseapp.com",
  projectId: "fir-d6a5c",
  storageBucket: "fir-d6a5c.appspot.com",
  messagingSenderId: "301841699713",
  appId: "1:301841699713:web:02cbafed2c61833a7cce80",
  measurementId: "G-E3V9VM7D2M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

export const register = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

export const logut = () => {
   signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Başardınız tebrikler.")
}).catch((error) => {
  // An error happened.
});
}