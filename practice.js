// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyA21y0CO0RtMGElW9NxIq6wZ5ak162Liaw",
  authDomain: "testekwitter.firebaseapp.com",
  databaseURL: "https://testekwitter-default-rtdb.firebaseio.com",
  projectId: "testekwitter",
  storageBucket: "testekwitter.appspot.com",
  messagingSenderId: "364995332721",
  appId: "1:364995332721:web:0de8c39165ffdfe29269d0",
  measurementId: "G-09MT67BKZQ"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var firebaseConfig = {
        apiKey: "AIzaSyCYXiTh85QfTzkY0hkYZYjhODf8lVbtKgU",
        authDomain: "kwitterprofthays.firebaseapp.com",
        databaseURL: "https://kwitterprofthays-default-rtdb.firebaseio.com",
        projectId: "kwitterprofthays",
        storageBucket: "kwitterprofthays.appspot.com",
        messagingSenderId: "182007721289",
        appId: "1:182007721289:web:f20b13c099fe4e9a507e98"
      };
      
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function addUser()
      {
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
        });
      }
      
