// firebase 
const firebaseConfig = {
    apiKey: "AIzaSyB8v7HnmF2pttQcp5B1AvJ4N1Dd5mAoQew",
    authDomain: "kaizen-f0bb3.firebaseapp.com",
    databaseURL: "https://kaizen-f0bb3-default-rtdb.firebaseio.com",
    projectId: "kaizen-f0bb3",
    storageBucket: "kaizen-f0bb3.appspot.com",
    messagingSenderId: "730539601182",
    appId: "1:730539601182:web:78acbf561524a798cb2d0f"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//console.log(firebase);

var db = firebase.firestore();

chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.command == "post"){
        var title = msg.data.title;
        var count = msg.data.count;
        var imageSrc = msg.data.imageSrc;
        var buttonText = msg.data.popupButtonText;

        //console.log(title, count, imageSrc, buttonText);
        const docRefer = db.collection("userEvents").doc(title);
        docRefer.get().then((snapshot) => {
          if(snapshot.exists){
            docRefer.update({
              count: firebase.firestore.FieldValue.increment(1)
            }).then(()=>{
              console.log('successful')
            })
            .catch((error)=>{
              console.log("error: ", error);
            });
          } else{
            docRefer.set({
              count: count,
              imageSrc: imageSrc,
              buttonText: buttonText
            }, {merge: true})
            .then(()=>{
              console.log('successful')
            })
            .catch((error)=>{
              console.log("error: ", error);
            });
          }
        });
    }

    response({ data: "Hey!" });
    return true;
});