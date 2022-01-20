const database = firebase.database();
const ofertasRef = database.ref('/Ofertas');
const itemsRef = firebase.database().ref('/Items');
const table = document.getElementById('dashboardtable');
var key;
//var actualImage;
document.addEventListener('DOMContentLoaded', function(){

    if(sessionStorage.getItem("access") != 1){
        window.location = "https://dslgdsfr.web.app/index.html";
    }
    ofertasRef.on("value", function(snapshot){
        var c = 0;
        table.innerHTML = "";
        snapshot.forEach(function(childsnapshot){ 
            id = Object.keys(snapshot.val())[c];
            
            c = c+1;


            
            var tr = document.createElement('tr');

            var tdtitulo = document.createElement('td');
             tdtitulo.textContent = childsnapshot.child('Titulo').val();
             tr.appendChild(tdtitulo);

             var tdItem = document.createElement('td');
             tdItem.textContent = childsnapshot.child('IdItem').val();
             tr.appendChild(tdItem);

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
             
            var pathid = childsnapshot.child('Titulo').val().concat('/ofertas/',childsnapshot.child('IdItem').val(),'/*',id,'/space','d','/space',childsnapshot.child('Titulo').val(),'/space',childsnapshot.child('URL_Imagen').val(),'/space',childsnapshot.child('IdItem').val(), '/space', childsnapshot.child('IdItem').val());

            
            var btnEditar = document.createElement('button');
            btnEditar.setAttribute("class","btn btn-icon waves-effect waves-light btn-primary");
            var iEditar = document.createElement("i");
            iEditar.setAttribute("class","fa fa-edit");
            btnEditar.setAttribute('onclick','toedit("/' + pathid + '","'+ childsnapshot.child('Descripcion').val().split(/\r|\n/).join(" ") +'")');
            btnEditar.appendChild(iEditar);
            tdeditar.appendChild(btnEditar);
            tr.appendChild(tdeditar);


            var tddelete = document.createElement('td');
            var btnDelete = document.createElement('button');
            btnDelete.setAttribute("class","btn btn-icon waves-effect waves-light btn-primary");
            var iDelete = document.createElement("i");
            iDelete.setAttribute("class","fa fa-trash");
            btnDelete.setAttribute('onclick','todelete("' + id  + '","'+ childsnapshot.child('IdItem').val() +'")');
            btnDelete.appendChild(iDelete);
            tddelete.appendChild(btnDelete);
            tr.appendChild(tddelete);


            table.appendChild(tr); 
        });
    });
}, false);

function toedit(pathid,description){
    var pathArray = pathid.split('*'); 
    sessionStorage.setItem("uploadpath", pathArray[0]);
    sessionStorage.setItem("editdata", pathArray[1]);
    sessionStorage.setItem("Description", description)
    window.location = "https://dslgdsfr.web.app/editarofertas.html";
}
function todelete(ofertaId, itemId){
    console.log("Eliminar oferta ID", ofertaId, itemId )
    
    if ( window.confirm("Estás seguro de eliminar la oferta?")) {
        ofertasRef.child(ofertaId).remove();
        itemsRef.once("value", function(snap) {

            const newItem = snap.child(itemId).val()
            newItem.TieneOferta = "False"
            itemsRef.child(itemId).update(newItem);
        });
    
    }
}