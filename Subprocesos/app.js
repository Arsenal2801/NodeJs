
const { fork } = require( 'child_process' );


const pP = ( nom ) => {
    console.clear();
    const p = `\nProceso Padre`;
    console.log( `${ p }\nMi nombre es: ${ nom }` );
};

pP( 'CAMPOS ZERON SALVADOR' );

const sp1 = fork( './sProceso1.js' );
sp1.send( 2020090838 );
sp1.disconnect();

const sp2 = fork( './sProceso2.js' );
sp2.send( '5IV7' );
sp2.disconnect();

const sp3 = fork( './sProceso3.js' );
sp3.send( 'ROJO' );
sp3.disconnect();

