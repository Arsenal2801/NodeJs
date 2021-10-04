
process.on('message', (gp) => {
    let p = `Subproceso 2`;
    console.log(`${p} Mi grupo ${gp}`)
});