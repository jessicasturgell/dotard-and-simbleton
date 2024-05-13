import { getBusinesses } from "./database.js";
const businesses = getBusinesses()

export const newYorkArray = () => {
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
    
    business.inNewYork = inNewYork
    return inNewYork
});

let html = `
        <h1>New York Businesses</h2>
        `
newYorkBusinesses.forEach(business => {
        /* CALCULATE ORDER SUMMARY */
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue,
            0
        )
    if (business.inNewYork) {
        html += `
            <h2>${business.companyName} (${totalOrders.toLocaleString("en-US", { style: "currency", currency: "USD" })})</h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity}, ${business['addressStateCode']}, ${business['addressZipCode']}
            </section>
            `
        html += "<hr/>";
    }

  });
  return html
}