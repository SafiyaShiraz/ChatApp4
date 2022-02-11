var firebaseConfig = {
    apiKey: "AIzaSyALSoqH-IUQBBqvcEWcuyJR4U1hEdOLaAk",
    authDomain: "chat-app-c9a8a.firebaseapp.com",
    databaseURL: "https://chat-app-c9a8a-default-rtdb.firebaseio.com",
    projectId: "chat-app-c9a8a",
    storageBucket: "chat-app-c9a8a.appspot.com",
    messagingSenderId: "674168013262",
    appId: "1:674168013262:web:ef37839f33e795218f6b9f"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);




name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbsup' > like:"+like+" </span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
    } });  }); }
getData();


function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function updatelike(message_id)
{
console.log("Clicked On the Like Button!"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}
