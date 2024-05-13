import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

export const businessesArray = () => {
    let html = `
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

    return html
}