window.onclick = e => {
    var count = 0;
    var value;
    
    if((e.target.tagName==="BUTTON")){
    value=e.target.getAttribute("id").slice(4,5);
    var x = "card" + value + "-img";
    console.log(document.getElementById(x));
    if(value==="1")
    {
        count++;
        
    }
    else if(value==="2"){
        count++
    }
    else if(value==="3"){
        count++
    }
    else if(value==="4"){
        count++
    }
    else if(value==="5"){
        count++
    }
    else if(value==="6"){
        count++
    } 
}
  
}




// firebase 
/*const firebaseConfig = {
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

// reference your database
var userEventDB = firebase.database().ref("userEvent");

const sendUserData = (id, title, count) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    id: id,
    title: title,
    count: count,
  });
};*/
