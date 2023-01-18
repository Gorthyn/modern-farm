import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'

const yearlyPlan = createPlan()

export const plantSeeds = (yearlyPlan) => {
    for (const plan of yearlyPlan) {
        for (const type of plan) {
            if (type === 'Asparagus') {
                addPlant(createAsparagus())
            } else if (type === 'Corn') {
                addPlant(createCorn())
            } else if (type === 'Potato') {
                addPlant(createPotato())
            } else if (type === 'Soybean') {
                addPlant(createSoybean())
            } else if (type === 'Sunflower') {
                addPlant(createSunflower())
            } else if (type === 'Wheat') {
                addPlant(createWheat())
            }
        }
    }
    return yearlyPlan
}