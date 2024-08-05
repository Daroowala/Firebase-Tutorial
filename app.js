// Authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut } 
    from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Fire Store
    import { getFirestore, 
      collection, 
      addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
  const db = getFirestore(app);
  let todosCollection = collection(db, "todos");

  const todo_input = document.getElementById("todo_input");
  const add_todo = document.getElementById("add_todo");

  add_todo.addEventListener('click', addTodoToDb)


  console.log("app", db);

  const auth = getAuth(app);
  const signup_email = document.getElementById("signup_email");
  const signup_password = document.getElementById("signup_password");
  const signup_btn = document.getElementById("signup_btn");

  const signin_email = document.getElementById("signin_email");
  const signin_password = document.getElementById("signin_password");
  const signin_btn = document.getElementById("signin_btn");

  const user_email =document.getElementById("user_email");
  const logout_btn =document.getElementById("logout_btn");
  
  const auth_container =document.getElementById("auth_container");
  const user_container =document.getElementById("user_container");


  signup_btn.addEventListener("click", createUserAccount);
  signin_btn.addEventListener("click", singIn);
  logout_btn.addEventListener("click", logout);


onAuthStateChanged(auth, (user) => {
    if (user) {
        // console.log("User is logged in")
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email .innerText = user.email; 
    } else {
        // console.log("No user is signed in");
        auth_container.style.display = "block";
        user_container.style.display = "none";    
    }
  });

  function createUserAccount(){
    // console.log("email=>",signup_email.value);
    // console.log("password=>",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    // console.log("User=>", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }
  function singIn(){
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
  //  console.log("User")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

    // console.log("email=>", signin_email.value);
    // console.log("password=>", signin_password.value);
  }

  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  async function addNumberToDb() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }