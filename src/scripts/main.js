import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'


const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const seed = {
    type: 'Potato',
    height: 32,
    output: 2
}
addPlant(seed)
plantSeeds(yearlyPlan)
const plants = usePlants()
const useThePlants = usePlants()
const plantHarvester = harvestPlants(useThePlants)

console.log("Welcome to the main module")
console.log(yearlyPlan)
console.log(asparagusSeed)
console.log(cornSeed)
console.log(potatoSeed)
console.log(soybeanSeed)
console.log(sunflowerSeed)
console.log(wheatSeed)
console.log(plants)