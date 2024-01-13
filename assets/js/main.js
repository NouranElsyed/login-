
 var loginButton=document.getElementById("loginButton")
 var loginEmail=document.getElementById("loginEmail");
 var loginPassword=document.getElementById("loginPassword");
 var incorrect=document.getElementById("incorrect");
 var correct=document.getElementById("correct");
 var wrong=document.getElementById("wrong");



loginButton.addEventListener("click",function(){
    login()
})


function login(){
  var email = loginEmail.value;
  var password = loginPassword.value;

  var usersList = JSON.parse(localStorage.getItem("users")) || [];
    if (isEmpty()==true){
      incorrect.classList.remove("d-none") ;
        document.getElementById('incorrect').innerHTML ="All inputs is required"    
        wrong.classList.add("d-none") ;
        
    }else if (usersList.length==0){
      incorrect.classList.add("d-none") ;
        wrong.classList.remove("d-none") ;
       wrong.innerText = "Incorrect Email or Password";
       
     }
    
 
    else{
  console.log(usersList)
    for(var i=0;i<usersList.length;i++){
       
        if (
            usersList[i].email.toLowerCase() == email.toLowerCase() &&
            usersList[i].password.toLowerCase() == password.toLowerCase()
          ) {
            localStorage.setItem("logInUser", usersList[i].name);
            console.log("success");
            correct.innerText = "Success";
            incorrect.classList.add("d-none") ;
            window.location="welcome.html";

          } else {
            
            incorrect.classList.add("d-none") ;
            wrong.classList.remove("d-none") ;
            wrong.innerText = "Incorrect Email or Password";
          }
    }
}}
    
 
function isEmpty(){
    if(loginEmail.value==""||loginPassword.value==""){
     return true;
    }
}
