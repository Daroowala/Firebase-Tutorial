
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

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
console.log("app=>", app);