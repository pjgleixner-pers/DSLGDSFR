const textinput = document.getElementById('textinput');
const imageDisplay = document.getElementById('img-uploaded');
const textareainput = document.getElementById('textareainput');
const select = document.getElementById('seleccionaritem');

const itemsRef = firebase.database().ref('/Items');
const ofertasRef = firebase.database().ref('/Ofertas');


var selectfile;
var data;
var idItemSelected=0;
var urlLastImage = "";
var arrayItems = []

document.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem("access") != 1) {
        window.location = "https://dslgdsfr.web.app/index.html";
    }
    data = sessionStorage.getItem('editdata').split('/space');
    console.log(data[0]);
    textinput.setAttribute('value', data[2]);
    textareainput.textContent = sessionStorage.getItem('Description');
    imageDisplay.setAttribute('src', data[3]);
    urlLastImage = data[3];

    itemsRef.on("value", function(snapshot){
        snapshot.forEach(function(childsnapshot){ 
            arrayItems.push(childsnapshot.val())
            if ( childsnapshot.child("TieneOferta").val() === "False" || childsnapshot.child("IdItem").val() == data[4]) {
                var option = document.createElement('option');
                option.textContent = childsnapshot.child('Nombre').val();
                option.setAttribute("value",childsnapshot.child('IdItem').val());
                console.log(childsnapshot.child('IdItem').val())
                select.appendChild(option);
                if ( childsnapshot.child("IdItem").val() == data[4]){
                    idItemSelected = childsnapshot.child('IdItem').val();
                    option.setAttribute('selected','selected');
                }
            } 
        })
    })

}, false);

selectedFile.addEventListener('change', function (event) {
    selectfile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      imageDisplay.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(event.target.files[0]); // convert to base64 string
});


select.addEventListener('change', function (event) {
    idItemSelected = Number(event.target.value)
});

actualizarBtn.addEventListener('click', (e) => {
    var durl;
    e.preventDefault();
    if (!window.confirm("Esta seguro de guardar los nuevos cambios?")){
        return;
    }

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
                    var newData = {
                        Titulo: textinput.value,
                        Descripcion: textareainput.value,
                        IdItem: idItemSelected,
                        URL_Imagen: durl,
                    };
                    ofertasRef.child(data[0]).update(newData);
                    if ( data[4] !== idItemSelected){
                        let itemLastObject = arrayItems.find(x=>x.IdItem == data[4])
                        if (itemLastObject ) {
                            itemLastObject.TieneOferta = "False"
                            itemsRef.child(data[4]).update(itemLastObject);
                        }
                        let itemObject = arrayItems.find(x=>x.IdItem == idItemSelected)
                        if (itemObject ) {
                            itemObject.TieneOferta = "True"
                            itemsRef.child(idItemSelected).update(itemObject);
                        }
                    }
                    window.location = "https://dslgdsfr.web.app/dashboardofertas.html";   
            
            });
        });
    } else{

            var newData = {
                Titulo: textinput.value,
                Descripcion: textareainput.value,
                IdItem: idItemSelected,
                URL_Imagen: urlLastImage,
            };
            console.log("NEW DATA", newData, idItemSelected)
            ofertasRef.child(data[0]).update(newData);

           
            if ( data[4] !== idItemSelected){
                
                let itemLastObject = arrayItems.find(x=>x.IdItem == data[4])
                if (itemLastObject ) {
                    itemLastObject.TieneOferta = "False"
                    itemsRef.child(data[4]).update(itemLastObject);
                }
                let itemObject = arrayItems.find(x=>x.IdItem == idItemSelected)
                if (itemObject ) {
                    itemObject.TieneOferta = "True"
                    itemsRef.child(idItemSelected).update(itemObject);
                }
            }
            window.location = "https://dslgdsfr.web.app/dashboardofertas.html";
    }
    
});