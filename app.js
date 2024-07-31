import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBswAy79OlMNrdSF3p9WA4a13AVTWou568",
    authDomain: "tutorial-project-6fdec.firebaseapp.com",
    projectId: "tutorial-project-6fdec",
    storageBucket: "tutorial-project-6fdec.appspot.com",
    messagingSenderId: "652162101666",
    appId: "1:652162101666:web:24c2df46d1b7e6e70682fb",
    measurementId: "G-4GJY263DNZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const signup_email = document.getElementById("singup_email");
  const signup_password = document.getElementById("singup_password");
  const signup_btn = document.getElementById("singup_btn");

  signup_btn.addEventListener("click", createUserAccount)


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in")
    const uid = user.uid;
    } else {
        console.log("No user is signed in");
    }
  });

  function createUserAccount(){
    console.log("email=>",signup_email.value);
    console.log("password=>",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("User=>", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }