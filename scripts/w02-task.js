/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Edward Schack';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/selfiemsc2016.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = `${profilePicture}`;
imageElement.alt = `Profile image of ${fullName} `;





/* Step 5 - Array */
const favoriteFoods = ['Risotto', 'Nashville Hot Chicken', 'Macarons', 'Pot Roast'];
foodElement.textContent = favoriteFoods;
const extraFavoriteFood = 'Bratwurst';
favoriteFoods.push(extraFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

