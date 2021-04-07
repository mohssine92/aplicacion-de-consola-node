/* ques yagrs ? Ver videos : 32 , 34 , 35  */

const argv = require('yargs')        /*  argv paquete npm i yargs */ /* video 34 , 35  */
       .option('b', {
          alias: 'base',
          type: 'number',
          describe: 'recibe numero al que quieres generar su archivo.txt  con tabla de  multiplicacion ',
          demandOption : true

       
       })
       .option('l', {
          alias: 'listar',
          type: 'boolean',
          describe: ' listar en consola el resultado de tabla multiplicaion del archivo que se va generar en este caso  ',
          default: false
       
       })
       .option('h', {
          alias: 'hasta',
          type: 'numero',
          describe: ' multiplicar Hasta ... recibe numero , si no se declara su valor se va por defecto es 10  ',
          default: 10
     
       })
       .check((argv, options) => {
            if( isNaN(argv.base) ){
                throw "El valor de la bandera -b o --base debe ser un numero ";
            } else{ 
                return true  ;
            }
              
       })
       .argv; /* salida despues de terminar procesos ... Encadeanmiento de metodos  */   


       /* Exporta por defecto , por que en genera es mi objeto que va tener todas la configuraciones */
       module.exports = argv;