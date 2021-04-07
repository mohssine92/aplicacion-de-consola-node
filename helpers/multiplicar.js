const fs = require('fs');  /* requerir Modul propio de node video : 30  */ /* es algo que viene en node no se considera como dependency  */
const colors = require('colors');




 /* transf funccion en async por defect regresa una promesa */
const  crearArchivo = async ( base = 5 , listar = false , hasta = 10 ) => {


  try{
 
        
      let salida ='';
  
      for (let index = 1; index <= hasta ; index++ ) {   /* for es estructura codigo  Bloqueante  */
        salida += (`${ base } X ${ index } = ${ base * index }\n`);  
      }
      
      
      fs.writeFileSync( `./salida/Tablas-${base}.txt ` , salida  );  


      if ( listar ) {

        console.log('Tabla de :', colors.red(base) );
        console.log( colors.bgMagenta( '=================') );
        console.log(  colors.bgYellow( '==================') );
        console.log( colors.rainbow(salida) ); 

      }
         
     
      return `tabla-${ base }.txt`;


  }catch( err ){
     
    throw err;
  
  } 

}




/* todo que esta en  este archivo es privado , asi exportamos a nivel global */

/* en este caso quiero exportar un  objeto  */
module.exports = {
    crearArchivo  
}