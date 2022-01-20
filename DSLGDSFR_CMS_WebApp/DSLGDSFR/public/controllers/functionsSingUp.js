const email = document.getElementById('emailaddress');
const name = document.getElementById('fullname');
const password = document.getElementById('password');

const database = firebase.database();
const usersRef = database.ref('/Usuario');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = usersRef.push().key
    usersRef.child(autoId).set({
        nombre: name.value,
        correo: email.value,
        password: password.value
    });
    window.location = "https://dslgdsfr.web.app";
});
