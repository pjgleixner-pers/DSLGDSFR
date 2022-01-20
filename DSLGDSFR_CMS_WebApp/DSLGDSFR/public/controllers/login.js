const name = document.getElementById('fullname');
const password = document.getElementById('password');
const errormessage = document.getElementById('errormessage');

const database = firebase.database();
const usersRef = database.ref('/Usuario');


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
   usersRef.orderByChild("nombre").equalTo(name.value).on("value", function(snapshot){
       snapshot.forEach(function(childsnapshot){ 
            if(childsnapshot.child('password').val() === password.value){
                sessionStorage.setItem("access", 1);
                window.location = "https://dslgdsfr.web.app/dashboardofertas.html";   
            } else {
                errormessage.textContent = "Usuario y/o contraseña incorrectos";
            } 
       });
       //errormessage.textContent = "Usuario y/o contraseña incorrectos";
   });
});


