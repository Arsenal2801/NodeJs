
process.on('message', (matricula) => {
    let p = `Subproceso 1`;
    console.log(`${p} Mi matricula ${matricula}`)
});