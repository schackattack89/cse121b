const url = 'https://jsonplaceholder.org/users';
let results = null;
let data = null;
const userList = document.querySelector("ul");

async function getUsers(URL) {
  const response = await fetch(URL);
  if(response.ok) {
    data = await response.json();
    //console.log(data);
displayUsers(data);
  }
}

function displayUsers(users) {
  reset();
  users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.firstname} ${user.lastname} | ${user.birthDate}`;
    userList.appendChild(listItem);
  })
}

function reset(){
  userList.innerHTML = "";
}


function filterData(){
  let eighties = data.filter(user => user.birthDate.includes("198"));
  displayUsers(eighties);
}

document.querySelector("button").addEventListener("click", filterData);

getUsers(url);