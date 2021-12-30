const firebaseConfig = {
    apiKey: "AIzaSyAgRjnDiPPd0dG5nAbXRdaL5scdBDKqHrU",
    authDomain: "pager-chatapp-3db85.firebaseapp.com",
    databaseURL: "https://pager-chatapp-3db85.firebaseio.com",
    projectId: "pager-chatapp-3db85",
    storageBucket: "pager-chatapp-3db85.appspot.com",
    messagingSenderId: "838838217336",
    appId: "1:838838217336:web:e854ef94059b6f385fdb8d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser()

  function addUser() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

    console.log("User Name - " + user_names);
      row = "<div class= ' user_name' id="+User_names+" onclick='redirectToUserName(this.id)' >#"+ User_names +"</div><hr>";
  {
      user_name = document.getElementById("user_name").value;
      firebase.databaseURL(),ref("/").child(user_name).update({
          purpose : "adding user"
      });
    
      localStorage.setItem("user_name", user_name);

      window.location = "Letschat.HTML";
  }

  function redirectToUserName (name)
{
      console.log(name);
      localStorage.setItem("userm_name", name);
      window.location = "Letschat.HTML";
}
