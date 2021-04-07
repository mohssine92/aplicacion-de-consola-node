
/* usar desestructuracion ...   */    
 const { crearArchivo }= require('./helpers/multiplicar');     
 const argv = require('./config/yargs'); 

 require('colors');


 

  
 
   console.log( argv ); 
   /* llamada a asyn => promesa */
   crearArchivo ( argv.b , argv.l , argv.h )  
     .then ( nombreArchivo =>  console.log( nombreArchivo.brightMagenta , 'creado' ))
     .catch( err =>  console.log( err ) ); 


  
 

     