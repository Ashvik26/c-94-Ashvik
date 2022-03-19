var firebaseConfig = {
    apiKey: "AIzaSyDNUnCBnd-hpjJYPFjYGJ4mu_9eP-U-Ja0",
    authDomain: "kwitter-5d475.firebaseapp.com",
    databaseURL: "https://kwitter-5d475-default-rtdb.firebaseio.com",
    projectId: "kwitter-5d475",
    storageBucket: "kwitter-5d475.appspot.com",
    messagingSenderId: "1081192968565",
    appId: "1:1081192968565:web:72842ccdce9be81403a33c"
  };
  firebase.initializeApp(firebaseConfig);
function addUser(){
    var user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });

}