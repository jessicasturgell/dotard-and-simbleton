 import { getBusinesses } from "./database.js";
 const businesses = getBusinesses()

 
 export const manufacturingArray = () => {
 // Array to contain all the manufacturing businesses
  const manufactingBusinesses = businesses.filter(business => {
    let manufacturingBoolean = false
  
    if (business.companyIndustry === "Manufacturing") {
        manufacturingBoolean = true
    }
    
    business.manufacturingBoolean = manufacturingBoolean
    return manufacturingBoolean
});

let html = `
        <h1>Manufacturing Businesses</h2>
        `
manufactingBusinesses.forEach(business => {
        /* CALCULATE ORDER SUMMARY */
        let totalOrders = business.orders.reduce(
            (currentTotal, nextValue) => currentTotal += nextValue,
            0
        )
    if (business.manufacturingBoolean) {
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