import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG0zD29KW8vb0ob9CeUb0Z3RwExP258Hk",
  authDomain: "mo-toofan.firebaseapp.com",
  projectId: "mo-toofan",
  storageBucket: "mo-toofan.appspot.com",
  messagingSenderId: "2300299259",
  appId: "1:2300299259:web:b070f09c17eec0fa3a2d5e",
  measurementId: "G-NL6WJZ01WP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

document.getElementById('reg-btn').addEventListener('click',function(){
    document.getElementById("register-div").style.display = "inline";
    document.getElementById("login-div").style.display="none";

});
document.getElementById('log-btn').addEventListener('click',function(){
    document.getElementById("register-div").style.display = "none";
    document.getElementById("login-div").style.display="inline";

});

document.getElementById("login-btn").addEventListener('click',function(){
    const loginEmail=document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;


    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("login-div").style.display="none";
        document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"was login Successfully";

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("login-div").style.display="none";
        document.getElementById("result").innerHTML="Sorry!"+ errorMessage;

    });

})