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
const html = `
            <div class="arrays">
                <div class="arrayColumn">${businessesArray()}</div>
                <div class="arrayColumn">${newYorkArray()}<br><br>${manufacturingArray()}</div>
                <div class="arrayColumn">${agentsArray()}</div>
            </div>
            `

// render html
outEl.innerHTML = html