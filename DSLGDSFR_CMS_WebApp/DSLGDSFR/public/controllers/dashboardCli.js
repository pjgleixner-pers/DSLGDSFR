const database = firebase.database();
const interaccionesRef = database.ref('/Interacciones');
const personasRef = database.ref('/Personas');
const preferenciasRef = database.ref('/Preferencias');
const itemsRef = database.ref('/Items');
const genericRef = database.ref('/Genericos');
const table = document.getElementById('dashboardtable');
//const agregarBtn = document.getElementById('agregarBtn');
document.addEventListener('DOMContentLoaded', function(){

    if(sessionStorage.getItem("access") != 1){
        window.location = "https://dslgdsfr.web.app/index.html";
    }

    interaccionesRef.on("value", function(snapshot){
        console.log("Interacciones ref init")
        table.innerHTML = "";
        snapshot.forEach(function(childsnapshot){ 

            personasRef.on("value", function(snapsho)
           
            {

                preferenciasRef.on("value", function(snap){
                    //console.log(hijo1, hijo2,hijo3);
                    itemsRef.on("value", function(snapy){
                        
                        idPers = childsnapshot.child('IdPersona').val() // llama IdPersona de Interaciones
                        
                        var tr = document.createElement('tr');
                        var tdidpersona = document.createElement('td');
                        tdidpersona.textContent = snapsho.child(idPers).child('IdPersona').val();
                        tr.appendChild(tdidpersona);

                        var tdnombre = document.createElement('td');
                        tdnombre.textContent = snapsho.child(idPers).child('Nombre').val();
                        tr.appendChild(tdnombre);
                        
                        var tdgenero = document.createElement('td');
                        tdgenero.textContent = snapsho.child(idPers).child('Genero').val();
                        tr.appendChild(tdgenero);

                        var tdedad = document.createElement('td');
                        tdedad.textContent = snapsho.child(idPers).child('Edad').val();
                        tr.appendChild(tdedad);

                        idpersona = snapsho.child(idPers).child('IdPersona').val(); //llama IdPersona de Personas

                        if (idpersona == "Hn"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(10).on("value", function(snapshot){ //referencia a genericos (Niño Hombre)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        } 

                        else 
                        if (idpersona == "Had"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(11).on("value", function(snapshot){ //referencia a genericos (Adolecente Hombre)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Ha"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(12).on("value", function(snapshot){ //referencia a genericos (Adulto Hombre)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Ham"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(13).on("value", function(snapshot){ //referencia a genericos (Adulto Mayor Hombre)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Mn"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(20).on("value", function(snapshot){ //referencia a genericos (Niña Mujer)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Mad"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(21).on("value", function(snapshot){ //referencia a genericos (Adolecente Mujer)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Ma"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(22).on("value", function(snapshot){ //referencia a genericos (Adulto Mujer)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }

                        else 
                        if (idpersona == "Mam"){ //Identifica tipo de persona
                            console.log(idpersona);
                            genericRef.orderByChild('Grupo').equalTo(23).on("value", function(snapshot){ //referencia a genericos (Adulto Mayor Mujer)
                                var c = 0;
                                snapshot.forEach(function(childsnapshot){ 
                                    id = Object.keys(snapshot.val())[c];
                                    console.log(id);
                                    c = c+1;

                                    var tdtitulo = document.createElement('li');
                                    tdtitulo.textContent = childsnapshot.child('Titulo').val();
                                    tr.appendChild(tdtitulo);

                                    console.log(tdtitulo);
                                    
                                });
                            });
                        }
                        
                        else {
                            hijo1 = snap.child(idpersona).child('Preferencia1').val(); //llama Preferencia1 de Preferencias
                            hijo2 = snap.child(idpersona).child('Preferencia2').val(); //llama Preferencia2 de Preferencias
                            hijo3 = snap.child(idpersona).child('Preferencia3').val(); //llama Preferencia3 de Preferencias
                            

                            var nhijo1 = document.createElement('li');
                            nhijo1.textContent = snapy.child(hijo1).child('Nombre').val(); //llama nombre item  de Preferencia1 de Items
                            tr.appendChild(nhijo1);

                            var nhijo2 = document.createElement('li');
                            nhijo2.textContent = snapy.child(hijo2).child('Nombre').val(); //llama nombre item  de Preferencia2 de Items
                            tr.appendChild(nhijo2);

                            var nhijo3 = document.createElement('li');
                            nhijo3.textContent = snapy.child(hijo3).child('Nombre').val(); //llama nombre item  de Preferencia3 de Items
                            tr.appendChild(nhijo3);

                            console.log(idPers);
                            console.log(idpersona);
                            console.log(hijo1, hijo2,hijo3);
                            console.log(nhijo1, nhijo2,nhijo3);
                        }
                        
                        table.appendChild(tr); 
                    });

                });
            });
            
        });
    });
    
}, 
false);