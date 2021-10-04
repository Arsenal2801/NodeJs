
process.on( 'message', ( matricula ) => {
    const p = `\nSubproceso 1`;
    console.log( `${ p }\nMi matricula es: ${ matricula }` )
});