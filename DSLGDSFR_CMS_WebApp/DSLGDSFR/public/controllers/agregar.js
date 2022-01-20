const productosRef = firebase.database().ref('/Producto');
const textinput = document.getElementById('textinput');
const textareainput = document.getElementById('textareainput');
var selectfile;
var data;


document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem("access") != 1) {
        window.location = "https://dslgdsfr.web.app/index.html";
    }
    //data = sessionStorage.getItem('editdata').split('/');
    //textinput.setAttribute('value', data[2]);
    //textareainput.textContent = data[1]
}, false);

selectedFile.addEventListener('change', function (event) {
    selectfile = event.target.files[0];
});

agregarBtn.addEventListener('click', (e) => {
    var durl;
    e.preventDefault();
   if(selectedFile.value){
    var filename = selectfile.name;
    
    var storageRef = firebase.storage().ref(sessionStorage.getItem('uploadpath') + filename);
    
    var uploadTask = storageRef.put(selectfile);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('La carga está ' + progress + '% terminada');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('La carga está en pausa');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('La carga está en marcha');
                    break;
            }
        }, function (error) {
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                durl = downloadURL;
                var key;
                const autoId = productosRef.push().key
                productosRef.child(autoId).set({
                   Contenido_Generico: "True",
                   Genero: 'generico',
                   Tipo: 'tipo',
                   Titulo: textinput.value,
                   Descripcion: textareainput.value,
                   URL_Imagen: durl
                });
                window.location = "https://dslgdsfr.web.app/dashboard2.html"; 
            });
        });
    } else{
        alert("Complete todos los campos requeridos");
    }
});