// import { createPlan } from './plan.js'
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from './seeds/corn.js'
// import { createPotato } from './seeds/potato.js'
// import { createSoybean } from './seeds/soybean.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createWheat } from './seeds/wheat.js'
// import { addPlant, usePlants } from './field.js'
// import { plantSeeds } from './tractor.js'

// const plantArray = plantSeeds()

export const harvestPlants = (plantArray) => {
    let harvestedSeeds = []
    for (const plant of plantArray) {
        if (plant.type === 'Corn') {
            let output = plant.output / 2
            for (let i = 0; i < output; i++) {
                harvestedSeeds.push(plant)
        } 
        } else {
            for (let i = 0; i < output; i++) {
                harvestedSeeds.push(plant)
        }
    }
}
    return harvestedSeeds
}

//     plantArray.forEach(plant => {
//         if (plant.type === 'Corn') {
//             for (let i = 0; i < Math.ceil(plant.output / 2); i++) {
//                 harvestedSeeds.push(plant)
//             }
//         } else {
//             for (let i = 0; i < plant.output; i++) {
//                 harvestedSeeds.push(plant)
//             }
//         }
//     })
//     return harvestedSeeds
// }


