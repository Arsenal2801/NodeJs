
process.on( 'message', ( gp ) => {
    const p = `\nSubproceso 2`;
    console.log( `${ p }\nMi grupo es: ${ gp }` )
});