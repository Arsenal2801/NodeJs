const interface = require('readline-sync')


do {
    console.log('1.-Suma')
    console.log('2.-Resta')
    console.log('3.-Division')
    console.log('4.-Multiplicacion')
    console.log('5.-Salir')
    response = interface.question('Que operacion desea realizar, escribe el numero:')


    if (response != "5") {
        const n1 = interface.question('Declara el numero 1: ')
        const n2 = interface.question('Declara el numero 2: ')
        switch (response) {
            case "1":
                var result = parseInt(n1) + parseInt(n2)
                console.log(`El resultado es: ${result}`)
                break;
            case "2":
                var result = parseInt(n1) - parseInt(n2)
                console.log(`El resultado es: ${result}`)
                break;
            case "3":
                var result = parseInt(n1) / parseInt(n2)
                console.log(`El resultado es: ${result}`)
                break;
            case "4":
                var result = parseInt(n1) * parseInt(n2)
                console.log(`El resultado es: ${result}`)
                break;
            default:
                break;
        }
    }
} while (response != "5");