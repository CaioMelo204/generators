// Generator
function* inventoryGenerator(){
    yield 'Smartphone'
    yield 'Tablet'
    yield 'Laptop'
}

const inventory = inventoryGenerator();
console.log(inventory.next().value) // smartphone
console.log(inventory.next().value) // Tablet
console.log(inventory.next().value) // Laptop


for (const item of inventoryGenerator()) {
    console.log(item)
} 

const allItems = [...inventoryGenerator()]
console.log(allItems)