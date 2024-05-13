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
    if (business.inNewYork) {
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