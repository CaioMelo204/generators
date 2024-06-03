async function* productStream() {
    let nextPageUrl = "api/products?page=1"
    while (nextPageUrl) {
        const response = await fetch(nextPageUrl)
        const data = await response.json()
        nextPageUrl = data.nextPageUrl;
        for(const product of data) {
            yield product
        }
    }
}

(async () => {
    for await (const product of productStream()) {
        console.log(product)
    }
})