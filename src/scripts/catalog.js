import { harvestPlants } from "./harvester.js";

export const catalog = (plantHarvesterArray) => {
    // const harvest = harvestPlants()
    let HTMLString = ""
    for (const plant of plantHarvesterArray) {
        HTMLString += `<section class='plant'> ${plant.type}</section>`
    }
    return HTMLString
}