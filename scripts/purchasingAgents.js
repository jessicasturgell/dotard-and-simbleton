import { getBusinesses } from "./database.js";
const businesses = getBusinesses()

export const agentsArray = () => {
    let html = "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return {
        agent: business.purchasingAgent,
        companyName: business.companyName,
        companyPhone: business.phoneWork
    }
})

console.table(agents)

agents.forEach(agent => {
  html += `<h2>${agent.agent.nameFirst} ${agent.agent.nameLast}</h2>
                <section>${agent.companyName}</section>
                <section>${agent.companyPhone}</section>`;
  html += "<hr/>";
});
return html
}