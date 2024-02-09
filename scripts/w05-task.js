/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((currentItem) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = `${currentItem.templeName}`;
        const img = document.createElement("img");
        img.src = `${currentItem.imageUrl}`;
        img.alt = `${currentItem.location}`;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });   
    console.log(templesElement);
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples() {
    reset();
    
    let filter = document.getElementById("filtered").value
    switch(filter){
        case 'utah':
            let utahTemples = templeList.filter((temple) => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            let notUtahTemples = templeList.filter((temple) => !temple.location.includes('Utah'));
            displayTemples(notUtahTemples);
            break;
        case 'older':
            let dedLimit = new Date(1950, 0, 1);
            let olderTemples = templeList.filter((temple) => Date.parse(temple.dedicated) < dedLimit);
            displayTemples(olderTemples);
            break;
        case 'all':
            displayTemples(templeList);
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples() });
