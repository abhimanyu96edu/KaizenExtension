// firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8v7HnmF2pttQcp5B1AvJ4N1Dd5mAoQew",
  authDomain: "kaizen-f0bb3.firebaseapp.com",
  databaseURL: "https://kaizen-f0bb3-default-rtdb.firebaseio.com",
  projectId: "kaizen-f0bb3",
  storageBucket: "kaizen-f0bb3.appspot.com",
  messagingSenderId: "730539601182",
  appId: "1:730539601182:web:78acbf561524a798cb2d0f",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//console.log(firebase);
var max = 0;
var saveObj = [];
var items;
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
db.collection("userEvents")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      items = doc.data();
      if (items.count > max) {
        max = items.count;
        saveObj = [items.buttonText, items.imageSrc];
      }
    });
    const imageElement = document.getElementById('image');
    imageElement.setAttribute("src", saveObj[1]);
    imageElement.style.setProperty('visibility', 'visible');
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = saveObj[0];
  });
