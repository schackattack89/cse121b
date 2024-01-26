/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Edward Schack",
    photo: 'images/selfiemsc2016.jpg',
    favoriteFoods: [
        'Risotto',
        'Nashville Hot Chicken',
        'Macarons',
        'Pot Roast',
        'Bratwurst'
    ],
    hobbies: [
        'Reading',
        'Watching TV',
        'Board Games',
        'Boating',
        'Puzzles'
    ],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Scottsburg, IN',
        length: '6 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Clarksville, IN',
        length: '4 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Seymour, IN',
        length: '2 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Louisville, KY',
        length: '5 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Fort Thomas, KY',
        length: '18 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("img").src = myProfile.photo;
document.querySelector("img").alt = myProfile.name;



/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(livedIn =>{
    let dt = document.createElement('dt');
    dt.textContent = livedIn.place;
    let dd = document.createElement('dd');
    dd.textContent = livedIn.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

});

