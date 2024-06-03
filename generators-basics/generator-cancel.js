// Generator
function* inventoryGenerator(){
    yield 'Smartphone'
    yield 'Tablet'
    yield 'Laptop'
}

// cancel with return
const generator = inventoryGenerator()
const endWithResult = generator.return(12)
console.log(endWithResult)
console.log(generator.next())

// cancel with throw
const generator2 = inventoryGenerator()
try {
    generator2.throw("Oops")
} catch (err) {
    console.log('Message: ', err)
    console.log(generator.next())
}