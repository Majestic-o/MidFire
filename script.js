// const firebaseConfig = {
//     apiKey: "AIzaSyCwZVebHlzS2b5zuSkrEPSIWh6ZAXLL2XM",
//     authDomain: "midfire-aa19b.firebaseapp.com",
//     databaseURL: "https://midfire-aa19b-default-rtdb.firebaseio.com",
//     projectId: "midfire-aa19b",
//     storageBucket: "midfire-aa19b.appspot.com",
//     messagingSenderId: "353066596354",
//     appId: "1:353066596354:web:670f5ad65eacd5e6700f1b"
//   };


//   //Initialize firebase
//   firebase.initializeApp(firebaseConfig);

//   //reference your database
//   var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();

      
    //   // SPREADSHEET CONNECTION
    //   const scriptURL = 'https://script.google.com/macros/s/AKfycbybMO9NHJ3z4DPtEpSi8GT6jzmYAZ7_OyaFl-7DgtM6Oi_LTTG98yqw1cDhRm9TKNDp/exec'
    //   const form = document.forms['formName']
    
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //   .then(response => alert("Thank you! your form is submitted successfully." ))
    //   .then(() => {  window.location.reload(); })
    //   .catch(error => console.error('Error!', error.message))





    //   var name = getElementVal("name");
    //   var gamertag = getElementVal("gamertag");
    //   var email = getElementVal("email");
    //   var discordID = getElementVal("discordID");
    //   var phoneno = getElementVal("phoneno");
    //   var age = getElementVal("age")
      

    //   saveMessages(name, gamertag, email, discordID, phoneno, age);

    //   //Enalble the alert

    //   document.querySelector(".alert").style.display = "block";

    //   // remove the alert
    //   setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    //   }, 3000);

    //   // reset the form
    //   document.getElementById("contactForm").reset();

      // Redirect to different page
        let count = 1;
        setInterval(()=>{
            count++
            if(count > 3) location.replace("payment.html");
        },1000)
      

      
  }
  
//   const saveMessages = (name, gamertag, email, discordID, phoneno, age) =>{
//       var newContactForm = contactFormDB.push();

//       newContactForm.set({
//           name : name,
//           gamertag : gamertag,
//           email : email,
//           discordID : discordID,
//           phoneno : phoneno,
//           age : age,
//       })

//   };


//   const getElementVal = (id) =>{
//       return document.getElementById(id).value;
//   }

