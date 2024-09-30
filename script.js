// V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu :i[Pán prstenů: Dvě věže] trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách.

// Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film :i[Pán prstenů: Dvě věže].
// Obě hodnoty vypište do stránky.


document.body.innerHTML = "<p>Délka filmu:</p>";

const delkaFilmu = 223
const hodin = Math.floor(delkaFilmu/60);
const minut = 223%60;

document.body.innerHTML += hodin + " hodiny " + minut + " minut ";