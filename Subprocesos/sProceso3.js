
process.on('message', (c) => {
    let p = `Subproceso 3`;
    console.log(`${p} Mi comida favorita ${c}`)
});