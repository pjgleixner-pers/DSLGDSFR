/* eslint-disable eqeqeq */
const functions = require('firebase-functions');

const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://dslgdsfr.firebaseio.com/'
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.databyUser = functions.https.onRequest( async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true'); // vital

    const {id} = req.query;
    if ( !id ) {
        return res.json({
          ok: false,
          message: "id is required!",
      })
    }
    const database = admin.database();
    //const interaccionesRef = database.ref('/Interacciones');
    const personasRef = database.ref('/Personas');
    const preferenciasRef = database.ref('/Preferencias');
    //const itemsRef = database.ref('/Items');
    const ofertasRef = database.ref('/Ofertas');
    //const genericRef = database.ref('/Genericos');


    let PersonaObject = {
        nombre: "",
    }
    let ofertasArray = []

    await personasRef.once("value").then((snap) => {
        //PersonaObject.persona.id = snap.child('1').child('IdPersona').val()
        PersonaObject.nombre = snap.child(id).child('Nombre').val()
        //PersonaObject.persona.genero = snap.child('1').child('Genero').val()
        //PersonaObject.persona.edad = snap.child('1').child('Edad').val()
        return;
      })
      .catch( error => {
        return res.json({
            ok: false,
            error
        })
      })
      await preferenciasRef.once("value")
      .then( snap => {
        
        PersonaObject.hijo1 = snap.child(id).child('Preferencia1').val(); //llama Preferencia1 de Preferencias
        PersonaObject.hijo2 = snap.child(id).child('Preferencia2').val(); //llama Preferencia2 de Preferencias
        PersonaObject.hijo3 = snap.child(id).child('Preferencia3').val(); //llama Preferencia3 de Preferencias
        return;
      } )
      .catch( error => {
        return res.json({
            ok: false,
            error
        })
      })
      await ofertasRef.once("value")
      .then( snap => {
          snap.forEach( s => {
             
              if ( s.child('IdItem').val() == PersonaObject.hijo1 ||
              s.child('IdItem').val() == PersonaObject.hijo2||
              s.child('IdItem').val() == PersonaObject.hijo3 ) {
                ofertasArray.push( s.child('URL_Imagen').val() )
              }
          })
        return;
      } )
      .catch( error => {
        return res.json({
            ok: false,
            error
        })
      })

      return res.json({
        ok: true,
        PersonaObject,
        ofertasArray,
        id
    })
    
});
exports.databyLastUser = functions.https.onRequest( async (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true'); // vital

  const database = admin.database();
  const interaccionesRef = database.ref('/Interacciones');
  const personasRef = database.ref('/Personas');
  const preferenciasRef = database.ref('/Preferencias');
  //const itemsRef = database.ref('/Items');
  const ofertasRef = database.ref('/Ofertas');
  const genericRef = database.ref('/Genericos');


  let PersonaObject = {
      nombre: "",
  }
  let ofertasArray = []

  let id = 1

  await interaccionesRef.limitToLast(1).once("value").then( (snap) => {

    snap.forEach(snap => {
      id=snap.child("IdPersona").val()
    })
    return;
  })
  .catch( error => {
    return res.json({
      ok: false,
      error
  })
  })

const genericosArray = [
  {
    id: "Hn",
    name: "Niño",
    code: 10,
  },
  {
    id: "Had",
    name: "Adolescente",
    code: 11,
  },
  {
    id: "Ha",
    name: "Adulto",
    code: 12,
  },
  {
    id: "Ham",
    name: "Adulto Mayor",
    code: 13,
  },

  {
    id: "Mn",
    name: "Niña",
    code: 20,
  },
  {
    id: "Mad",
    name: "Adolescente",
    code: 21,
  },
  {
    id: "Ma",
    name: "Adulto",
    code: 22,
  },
  {
    id: "Mam",
    name: "Adulto Mayor",
    code: 23,
  },
  {
    id: "Ninguno",
    name: "Ninguno",
    code: "Ninguno",
  },
]
let esGenerico = false
genericosArray.forEach( x => {
  if ( x.id == id ) {
    esGenerico = x;
  }
})
  if ( esGenerico ){


    await genericRef.once("value").then( snap => {

      snap.forEach( s => {
           
        if ( s.child('Grupo').val() == esGenerico.code ) {
          ofertasArray.push( s.child('URL_Imagen').val() )
        }
    })
      return;
    })
    
    PersonaObject.nombre = esGenerico.name
    return res.json({
      ok: true,
      PersonaObject,
      ofertasArray,
      id,
   })
  }


  await personasRef.once("value").then((snap) => {
      //PersonaObject.persona.id = snap.child('1').child('IdPersona').val()
      PersonaObject.nombre = snap.child(id).child('Nombre').val()
      //PersonaObject.persona.genero = snap.child('1').child('Genero').val()
      //PersonaObject.persona.edad = snap.child('1').child('Edad').val()
      return;
    })
    .catch( error => {
      return res.json({
          ok: false,
          error
      })
    })
    await preferenciasRef.once("value")
    .then( snap => {
      
      PersonaObject.hijo1 = snap.child(id).child('Preferencia1').val(); //llama Preferencia1 de Preferencias
      PersonaObject.hijo2 = snap.child(id).child('Preferencia2').val(); //llama Preferencia2 de Preferencias
      PersonaObject.hijo3 = snap.child(id).child('Preferencia3').val(); //llama Preferencia3 de Preferencias
      return;
    } )
    .catch( error => {
      return res.json({
          ok: false,
          error
      })
    })
    await ofertasRef.once("value")
    .then( snap => {
        snap.forEach( s => {
           
            if ( s.child('IdItem').val() == PersonaObject.hijo1 ||
            s.child('IdItem').val() == PersonaObject.hijo2||
            s.child('IdItem').val() == PersonaObject.hijo3 ) {
              ofertasArray.push( s.child('URL_Imagen').val() )
            }
        })
      return;
    } )
    .catch( error => {
      return res.json({
          ok: false,
          error
      })
    })

    return res.json({
      ok: true,
      PersonaObject,
      ofertasArray,
      id
  })
  
});