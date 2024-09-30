document.body.innerHTML = "<p>Délka filmu:</p>";

const delkaFilmu = 223
const hodin = Math.floor(delkaFilmu/60);
const minut = 223%60;

document.body.innerHTML += hodin + " hodiny " + minut + " minut ";