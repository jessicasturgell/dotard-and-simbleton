import { getBusinesses } from "./database.js"
const businesses = getBusinesses()

const outEl = document.querySelector("#output")

let html = `
            <div class ="header">
                <h1>Dotard & Simbleton</h1>
            </div>
            <h1>Active Businesses</h1>
            `

businesses.forEach(business => {
    html += `
            <h2>${business.companyName}</h2>
                <section>
                    ${business.addressFullStreet}
                </section>
                <section>
                    ${business.addressCity}, ${business['addressStateCode']}, ${business['addressZipCode']}
                </section>
                `
    html += "<hr/>"
});

outEl.innerHTML = html