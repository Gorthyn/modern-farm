let field = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const object of seed) {
            field.push(object)
        }
    } else {
        field.push(seed)
    }
}

export const usePlants = () => {
    return [...field]
}