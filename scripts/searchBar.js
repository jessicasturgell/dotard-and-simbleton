import { getBusinesses } from "./database.js";
const businesses = getBusinesses()

export const searchBar = (outEl) => {
    document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            let totalOrders

            if (foundBusiness) {
                    /* CALCULATE ORDER SUMMARY */
                    totalOrders = foundBusiness.orders.reduce(
                    (currentTotal, nextValue) => currentTotal += nextValue,
                     0
                     )
            }

            outEl.innerHTML = `<div class='foundBusiness'>
                <h2>
                ${foundBusiness.companyName} (${totalOrders.toLocaleString("en-US", { style: "currency", currency: "USD" })})
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section></div>
            `;
        }
    });
}