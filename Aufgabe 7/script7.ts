var BIPDE:number = 3.570; 
var BIPFR:number = 2.483; 
var BIPIT:number = 1.775;
var BIPBL:number = 0.560; 
var GesBIPEU:number = 14.447; 
var GesBIPEU2010:number = 10.980; 

var BIPDE2010:number = 2.564;
var BIPFR2010:number = 1.995; 
var BIPIT2010:number = 1.611; 
var BIPBL2010:number = 0.363; 


//Änderung der Werte für Deutschland
function clickGermany() {
    document.querySelector("#Wert1").innerHTML = BIPDE.toFixed(2) + " Billionen Euro"; 
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Deutschlands im Jahr 2021"; 
    document.querySelector("#Wert2").innerHTML =  Math.round(BIPDE / GesBIPEU * 100) + "%"; 
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Deutschlands am BIP der EU"; 
    document.querySelector("#Wert3").innerHTML =  Math.round(((BIPDE / BIPDE2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des deutschen BIPs seit 2010"; 
    document.querySelector("#Wert4").innerHTML =   (BIPDE - BIPDE2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des deutschen BIPs seit 2010"; 
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:25%'); 
}

//Änderung der Werte für Frankreich 
function clickFrance() {
    document.querySelector("#Wert1").innerHTML = BIPFR.toFixed(2) + " Billionen Euro"; 
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Frankreichs im Jahr 2021"; 
    document.querySelector("#Wert2").innerHTML = Math.round(BIPFR / GesBIPEU * 100) + "%"; 
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Frankreichs am BIP der EU"; 
    document.querySelector("#Wert3").innerHTML =  Math.round(((BIPFR / BIPFR2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des französischen BIPs seit 2010"; 
    document.querySelector("#Wert4").innerHTML =  (BIPFR - BIPFR2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des französischen BIPs seit 2010"; 
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:17%'); 
}

//Änderung der Werte für Italien
function clickItaly() {
    document.querySelector("#Wert1").innerHTML = BIPIT.toFixed(2) + " Billionen Euro"; 
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Italiens im Jahr 2021"; 
    document.querySelector("#Wert2").innerHTML = Math.round(BIPIT / GesBIPEU * 100) + "%"; 
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Italiens am BIP der EU"; 
    document.querySelector("#Wert3").innerHTML =  Math.round(((BIPIT / BIPIT2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des italienischen BIPs seit 2010"; 
    document.querySelector("#Wert4").innerHTML =  (BIPIT - BIPIT2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des italienischen BIPs seit 2010"; 
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:10%'); 
}

//Änderung der Werte für Belgien
function clickBelgium() {
    document.querySelector("#Wert1").innerHTML = BIPBL.toFixed(2) + " Billionen Euro"; 
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Belgiens im Jahr 2021"; 
    document.querySelector("#Wert2").innerHTML = Math.round(BIPBL / GesBIPEU * 100) + "%"; 
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Belgiens am BIP der EU"; 
    document.querySelector("#Wert3").innerHTML =  Math.round(((BIPBL / BIPBL2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des belgischen BIPs seit 2010"; 
    document.querySelector("#Wert4").innerHTML =  (BIPBL - BIPBL2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des belgischen BIPs seit 2010"; 
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:4%'); 

}

//Klick auf EU-Flagge
function clickEU() {
    document.querySelector("#Wert1").innerHTML = GesBIPEU.toFixed(2) + " Billionen Euro"; 
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt aller EU-Staaten im Jahr 2021"; 
    document.querySelector("#Wert2").innerHTML = "27"; 
    document.querySelector("#Text2").innerHTML = "Staaten bilden das BIP der EU"; 
    document.querySelector("#Wert3").innerHTML =  Math.round(((GesBIPEU / GesBIPEU2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des europäischen BIPs seit 2010"; 
    document.querySelector("#Wert4").innerHTML =  (GesBIPEU - GesBIPEU2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des europäischen BIPs seit 2010"; 
    document.querySelector(".chartWrapper .chart").setAttribute('style', 'height:100%'); 

}
}

window.addEventListener('load', function() {

    document.querySelector(".germany").addEventListener('click', clickGermany); 
    document.querySelector(".france").addEventListener('click', clickFrance); 
    document.querySelector(".italy").addEventListener('click', clickItaly); 
    document.querySelector(".belgium").addEventListener('click', clickBelgium); 
    document.querySelector(".stars").addEventListener('click', clickEU); 
} 
