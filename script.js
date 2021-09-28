const BASE_URL = "https://indonesia-covid-19.mathdro.id/api/provinsi";
const table = document.getElementById("table");
const allPositif=document.getElementById("positif");
const allSembuh=document.getElementById("sembuh");
const allMeninggal=document.getElementById("meninggal");

fetch(BASE_URL)
  .then((response) => response.json())
  .then((data)=> {
    console.log(data);
    const Kaye=data.data
    console.log(Kaye);

    for (let i = 0; i < Kaye.length; i++) {
        const row = table.insertRow(i + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
  
        cell1.innerHTML = Kaye[i].provinsi;
        cell2.innerHTML = Kaye[i].kodeProvi;
        cell3.innerHTML = Kaye[i].kasusPosi;
        cell4.innerHTML = Kaye[i].kasusMeni;
        cell5.innerHTML = Kaye[i].kasusSemb;
    }

const positif = (Kaye.reduce((n, {kasusPosi})=> n+kasusPosi,0))
const sembuh = (Kaye.reduce((n, {kasusSemb})=> n+kasusSemb,0))
const meninggal = (Kaye.reduce((n, {kasusMeni})=> n+kasusMeni,0))

allPositif.innerHTML=`Positif:${positif}`  
allSembuh.innerHTML=`Sembuh:${sembuh}` 
allMeninggal.innerHTML=`Meninggal:${meninggal}` 

});

