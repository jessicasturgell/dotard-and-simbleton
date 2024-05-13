import { businessesArray } from "./businesses.js"
import { getBusinesses } from "./database.js"
import { manufacturingArray } from "./manufacturingBusinesses.js"
import { newYorkArray } from "./newYorkBusinesses.js"
import { agentsArray } from "./purchasingAgents.js"
import { searchBar } from "./searchBar.js"

const outEl = document.querySelector("#output")
const businesses = getBusinesses()

// initialize search bar functionality
searchBar(outEl)

// generate html
const html = businessesArray() + newYorkArray() + manufacturingArray() + agentsArray()

// render html
outEl.innerHTML = html