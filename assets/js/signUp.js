var signup=document.getElementById("signup");
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword=document.getElementById("userPassword");
var emailMessage=document.getElementById("emailMessage");
var emailExist=document.getElementById("emailExist");
var nameMessage=document.getElementById("nameMessage");
var passMessage=document.getElementById("passMessage");

var usersList=[];



if (localStorage.getItem("users")!=null){
    usersList=JSON.parse(localStorage.getItem("users"));
    }
    
 
    signup.addEventListener("click",function(){
        signUp()
    })

function signUp() {
    
    var user = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
  
    if (isEmpty() === true) {
      incorrect.classList.remove("d-none");
      correct.classList.add("d-none");
    } else if (emailValidation() === false) {
      emailMessage.classList.remove("d-none");
      correct.classList.add("d-none");
    } else if (nameValidation() === false) {
        nameMessage.classList.remove("d-none");
        correct.classList.add("d-none");
      
    }  else if (passwordValidation() === false) {
        passMessage.classList.remove("d-none");
        correct.classList.add("d-none");
      
    } else {
      if (emailExists(user.email.toLowerCase())) {
        emailExist.classList.remove("d-none");
        correct.classList.add("d-none");
      } else {
        usersList.push(user);
        console.log(usersList);
        localStorage.setItem("users", JSON.stringify(usersList));
        correct.classList.remove("d-none");
        emailExist.classList.add("d-none");
      }
    }
  }


function emailExists(email) {
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].email.toLowerCase() === email.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
function isEmpty(){
    if(userName.value==""||userPassword.value==""||userEmail.value==""){
        incorrect.classList.remove("d-none")
     
     return true; 
    }else{
        incorrect.classList.add("d-none")  
        return false;
    }
}

function emailValidation(){
    var text=userEmail.value;
    var regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com)$/
    if(regexEmail.test(text)){
     
        emailMessage.classList.add("d-none")
      return true;
    }else{
       
        emailMessage.classList.remove("d-none")
      return false;
  
    }
}
function nameValidation(){
    var text=userName.value;
    var regexName= /^[A-Z a-z]{3,}$/
    if(regexName.test(text)){
     
        nameMessage.classList.add("d-none")
      return true;
    }else{
       
        nameMessage.classList.remove("d-none")
      return false;
  
    }
}
function passwordValidation(){
    var text=userPassword.value;
    var regexPassword= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{4,}$/gm
    if(regexPassword.test(text)){
     
        passMessage.classList.add("d-none")
      return true;
    }else{
       
        passMessage.classList.remove("d-none")
      return false;
  
    }  
}
