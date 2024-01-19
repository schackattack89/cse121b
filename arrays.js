const steps = ['one','two','three'];
const stepsHTML = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHTML.join();