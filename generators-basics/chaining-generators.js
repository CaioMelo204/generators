function* regularOrderGenerator() {
    yield 'Order #1001'
    yield 'Order #2002'
}

function* expressOrderGenerator() {
    yield 'Order #1002'
    yield 'Order #2003'
}

function* orderProcessGenerator() {
    yield* regularOrderGenerator();
    yield* expressOrderGenerator();
}

const orderProcessing = orderProcessGenerator()

console.log(orderProcessing.next().value)
console.log(orderProcessing.next().value)
console.log(orderProcessing.next().value)
console.log(orderProcessing.next().value)