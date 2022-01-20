const database = firebase.database();
const genericRef = database.ref('/Genericos');
const table = document.getElementById('dashboardtable');
const agregarBtn = document.getElementById('agregarBtn');
document.addEventListener('DOMContentLoaded', function(){

    if(sessionStorage.getItem("access") != 1){
        window.location = "https://dslgdsfr.web.app/index.html";
    }


    genericRef.orderByChild('Grupo').equalTo(22).on("value", function(snapshot){
        var c = 0;
        snapshot.forEach(function(childsnapshot){ 
            id = Object.keys(snapshot.val())[c];
            
            c = c+1;
            var tr = document.createElement('tr');


            var tdtitulo = document.createElement('td');
            tdtitulo.textContent = childsnapshot.child('Titulo').val();
            tr.appendChild(tdtitulo);

             var tddescripcion = document.createElement('td');
             tddescripcion.textContent = childsnapshot.child('Descripcion').val();
             tr.appendChild(tddescripcion);
/*             

             var tdgrupo = document.createElement('td');
             tdgrupo.textContent = childsnapshot.child('Grupo').val();
             tr.appendChild(tdgrupo);

*/
             
            
             var tdimagen = document.createElement('td');
             var imagen = document.createElement('img');
             imagen.setAttribute('src', childsnapshot.child('URL_Imagen').val());
             imagen.setAttribute('width','150');
             imagen.setAttribute('height','100');
             tdimagen.appendChild(imagen);
             tr.appendChild(tdimagen);
             //---------------------------------------------------------------------------------
             
             var tdeditar = document.createElement('td');
             
             var pathid =  childsnapshot.child('Titulo').val().concat('/*',id,'/', childsnapshot.child('Descripcion').val(),'/',childsnapshot.child('Titulo').val());

             var btnEditar = document.createElement('button');
             btnEditar.setAttribute("class","btn btn-icon waves-effect waves-light btn-primary");
             var iEditar = document.createElement("i");
             iEditar.setAttribute("class","fa fa-edit");
             btnEditar.setAttribute('onclick','toedit("/' + pathid + '")');
             btnEditar.appendChild(iEditar);
             tdeditar.appendChild(btnEditar);
             tr.appendChild(tdeditar);

             var tdeeliminar = document.createElement('td');
             
             var pathid2 =  childsnapshot.child('Titulo').val().concat('/*',id,'/', childsnapshot.child('Descripcion').val(),'/',childsnapshot.child('Titulo').val());

             var btnEliminar = document.createElement('button');
             btnEliminar.setAttribute("class","btn btn-icon waves-effect waves-light btn-primary");
             var iEliminar = document.createElement("i");
             iEliminar.setAttribute("class","fa fa-trash");
             btnEliminar.setAttribute('onclick','todelete("/' + pathid2 + '")');
             btnEliminar.appendChild(iEliminar);
             tdeeliminar.appendChild(btnEliminar);
             tr.appendChild(tdeeliminar);

             table.appendChild(tr); 
        });
    });
}, false);

function toedit(pathid){
    var pathArray = pathid.split('*'); 
    sessionStorage.setItem("uploadpath", pathArray[0]);
    sessionStorage.setItem("editdata", pathArray[1]);
    window.location = "https://dslgdsfr.web.app/GM2_editar.html";
}

function todelete(pathid2){
    var Array = pathid2.split('*');
    //console.log(Array);
    //console.log(Array[1]);
    data = Array[1].split('/');
    //console.log(data[0]);
    dataid = data[0];
    item = genericRef.child(dataid);
    //console.log(item);

    var result = confirm("Seguro que quieres eliminar?");
    if (result) {
        genericRef.child(dataid).remove();
        window.location = "https://dslgdsfr.web.app/GM2_dashboard.html";
    }


    
}

agregarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = "https://dslgdsfr.web.app/GM2_agregar.html";
});