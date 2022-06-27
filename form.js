const firebaseConfig = {
    apiKey: "AIzaSyBBW_OUpmNn9omlcYudEGmCQp_2Qpj3dxM",
    authDomain: "portfolio-form-387ef.firebaseapp.com",
    projectId: "portfolio-form-387ef",
    storageBucket: "portfolio-form-387ef.appspot.com",
    messagingSenderId: "764269230768",
    appId: "1:764269230768:web:eb794eaa37651a5dd09975"
  };
  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore();
  const db=firestore.collection("formData");
  let submitButton=document.getElementById('submit');
  submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let Name=document.getElementById('name').value;
    let Email=document.getElementById('email').value;
    let Subject=document.getElementById('subject').value;
    let Textarea=document.getElementById('textarea').value;

    db.doc().set({
        name:Name,
        email:Email,
        subject:Subject,
        textarea:Textarea
    }).then(()=>{
        console.log("Data Saved");
    }).catch((error)=>{
          console.log(error);
    })
    document.getElementById("Riya-Website").reset();
    alert("Your form has been submit successfully!");
   
  })