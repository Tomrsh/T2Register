 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
 const firebaseConfig = {
    apiKey: "AIzaSyCgswS8AZObwKQjxZooWWJHf4b1m1rvorA",

    authDomain: "t2upload.firebaseapp.com",

    databaseURL: "https://t2upload-default-rtdb.firebaseio.com",

    projectId: "t2upload",

    storageBucket: "t2upload.appspot.com",

    messagingSenderId: "1000887477924",

    appId: "1:1000887477924:web:89ae08b7529893dc2ea831",

    measurementId: "G-JPP8RZP1L4"

 //YOUR COPIED FIREBASE PART SHOULD BE HERE
 //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

 const signIn=document.getElementById('Login');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='home.html';
    })
    .catch((error)=>{
      const errorCode=error.code;
      if(errorCode==='auth/invalid-credential'){
          showMessage('Incorrect Email or Password', 'signInMessage');
      }
      else{
          showMessage('Account does not Exist', 'signInMessage');
      }
   })
 })


 //Sinup codes



