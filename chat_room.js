var firebaseConfig = {
    apiKey: "AIzaSyDANWAj9CrZebi5C37UmJ2nuZ4VFgPuw-Q",
    authDomain: "kwitter-app-2a375.firebaseapp.com",
    databaseURL: "https://kwitter-app-2a375-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-2a375",
    storageBucket: "kwitter-app-2a375.appspot.com",
    messagingSenderId: "456680054923",
    appId: "1:456680054923:web:c5c01a27fec783b522f48e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name +"!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }

  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
 });});}
getData();

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
