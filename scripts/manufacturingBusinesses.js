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
    if (business.manufacturingBoolean) {
        html += `
            <h2>${business.companyName}</h2>
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