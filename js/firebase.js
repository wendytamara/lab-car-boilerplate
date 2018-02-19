    
var config = {
    apiKey: "AIzaSyCFO3p2OYW-Wgme2QrcfUdHmOMsJSLAC38",
    authDomain: "chat-43a94.firebaseapp.com",
    databaseURL: "https://chat-43a94.firebaseio.com",
    projectId: "chat-43a94",
    storageBucket: "chat-43a94.appspot.com",
    messagingSenderId: "826771645772"
  };
  firebase.initializeApp(config);


//creando variables reutilizables
var  email = document.getElementById('email');
var  password = document.getElementById('password');
var  correo2 = document.getElementById('correo2');
var  pasword2 = document.getElementById('pasword2');
var  inicarSesionBtn = document.getElementById('inicarSesionBtn');
var  firstName = document.getElementById('firstName');
var  createNewBtn = document.getElementById('createNewBtn');


// createNewBtn.addEventListener('click', function() {
 
//     event.preventDefault();
//     alert('hola');
//     console.log('tonto');
//   });


// variables de formulario crear nuevo usuario


 var celphoneNumber = document.getElementById('celphoneNumber');
 var district = document.getElementById('district');
 
 firstName.addEventListener("keyup", validateName);
 email.addEventListener('keyup', validEmail);
 celphoneNumber.addEventListener('keyup', validCelphone);
 district.addEventListener('keyup',validDistric);

//  firstName.addEventListener("keyup", validForm);
//  email.addEventListener('keyup', validForm);
//  celphoneNumber.addEventListener('keyup', validForm);
//  district.addEventListener('keyup',validForm);

 
//  validando nombre
 function validateName() { 
   debugger  
   let centinel = false;
   if (firstName.validity.patternMismatch) {
    firstName.setCustomValidity("¡Los nombres contienen solo letras!");
   } else {
    firstName.setCustomValidity("");
    centinel = true;
   }
   return centinel;
  }

  // validando email
  function validEmail() {
    let centinel = false;
    if (email.validity.patternMismatch) {
      email.setCustomValidity("¡Ingrese una dirección de correo valida!");
    } else {
      email.setCustomValidity("");
     centinel = true;
    }
    return centinel;
  }


//  email.validity.typeMismatch -- si el input no tiene patern typeMismatch evalua segun el type del input
//   ejemplo input de type = 'email' -- no funciona con jquery

// name.validity.patternMismatch -- patternMismatch evalua segun el pattern puesto en el input-- retorna true si 
// si lo ingresado es incorrecto

  function validCelphone() {
    let centinel = false;
    if (celphoneNumber.validity.patternMismatch) {
      celphoneNumber.setCustomValidity("¡Solo numeros!");
    } else {
      celphoneNumber.setCustomValidity("");
     centinel = true;
    }
    return centinel;
  }

  function validDistric() {
    let centinel = false;
    if (district.validity.patternMismatch) {
      district.setCustomValidity("¡Ingrese solo letras!");
    } else {
      district.setCustomValidity("");
     centinel = true;
    }
    return centinel;
  }



//   function createNewUsers(event) { 
//     event.preventDefault();
//     debugger
//     alert('hola');
//     if (validateName() && validEmail() && validCelphone() && validDistric()) {
      
//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//     .then(function(){
//         console.log('usuario creado con exito')
     
//         email.value = '';
//         password.value= '';
       
//     })
    
//     .catch(function(error) {
//         // Handle Errors here.
        
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//         // ...
//       });
//   }
// }

  function loginNewUsers(event){
      event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(correo2.value, pasword2.value)
    .then(function(){
        console.log('te haz logeado');
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }

