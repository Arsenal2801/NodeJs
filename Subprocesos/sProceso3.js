
process.on( 'message', ( c ) => {
    const p = `\nSubproceso 3`;
    console.log( `${ p }\nMi color favorito es: ${ c }` )
});