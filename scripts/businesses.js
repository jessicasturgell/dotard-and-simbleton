import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

export const businessesArray = () => {
    let html = `
            <h1>Active Businesses</h1>
            `

businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue,
        0
)
    html += `
            <h2>${business.companyName} (${totalOrders.toLocaleString("en-US", { style: "currency", currency: "USD" })})</h2>
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