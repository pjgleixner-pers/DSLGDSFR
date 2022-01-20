const database = firebase.database();
const productosRef = database.ref('/Producto');
const table = document.getElementById('dashboardtable');
var key;
//var actualImage;
document.addEventListener('DOMContentLoaded', function(){

    if(sessionStorage.getItem("access") != 1){
        window.location = "https://dslgdsfr.web.app/index.html";
    }
    productosRef.on("value", function(snapshot){
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
             var tdgenero = document.createElement('td');
             tdgenero.textContent = childsnapshot.child('Genero').val();
             tr.appendChild(tdgenero);

             var tdgrupo = document.createElement('td');
             tdgrupo.textContent = childsnapshot.child('Grupo').val();
             tr.appendChild(tdgrupo);

             var tdidproducto = document.createElement('td');
             tdidproducto.textContent = childsnapshot.child('IdProducto').val();
             tr.appendChild(tdidproducto);

             var tdtipo = document.createElement('td');
             tdtipo.textContent = childsnapshot.child('Tipo').val();
             tr.appendChild(tdtipo);
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
             
            var pathid = childsnapshot.child('Genero').val().concat('s/',childsnapshot.child('Tipo').val(),'/*',id,'/',childsnapshot.child('Descripcion').val(),'/',childsnapshot.child('Titulo').val());
            
            var btnEditar = document.createElement('button');
            btnEditar.setAttribute("class","btn btn-icon waves-effect waves-light btn-primary");
            var iEditar = document.createElement("i");
            iEditar.setAttribute("class","fa fa-edit");
            btnEditar.setAttribute('onclick','toedit("/' + pathid + '")');
            btnEditar.appendChild(iEditar);
            tdeditar.appendChild(btnEditar);
            tr.appendChild(tdeditar);

            table.appendChild(tr); 
        });
    });
}, false);

function toedit(pathid){
    var pathArray = pathid.split('*'); 
    sessionStorage.setItem("uploadpath", pathArray[0]);
    sessionStorage.setItem("editdata", pathArray[1]);
    window.location = "https://dslgdsfr.web.app/editar.html";
}