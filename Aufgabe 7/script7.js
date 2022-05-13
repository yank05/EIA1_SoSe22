var BIPDE = 3.570;
var BIPFR = 2.483;
var BIPIT = 1.775;
var BIPBL = 0.560;
var GesBIPEU = 14.447;
var BIPDE2010 = 2.564;
var BIPFR2010 = 1.995;
var BIPIT2010 = 1.611;
var BIPBL2010 = 0.363;
//Änderung der Werte für Deutschland
function clickGermany() {
    document.querySelector("#Wert1").innerHTML = BIPDE.toFixed(2) + " Billionen Euro";
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Deutschlands im Jahr 2021";
    document.querySelector("#Wert2").innerHTML = Math.round(BIPDE / GesBIPEU * 100) + "%";
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Deutschlands am BIP der EU";
    document.querySelector("#Wert3").innerHTML = Math.round(((BIPDE / BIPDE2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des deutschen BIPs seit 2010";
    document.querySelector("#Wert4").innerHTML = (BIPFR - BIPFR2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des deutschen BIPs seit 2010";
}
//Änderung der Werte für Frankreich 
function clickFrance() {
    document.querySelector("#Wert1").innerHTML = BIPFR.toFixed(2) + " Billionen Euro";
    document.querySelector("#Text1").innerHTML = "Bruttoinlandsprodukt Frankreichs im Jahr 2021";
    document.querySelector("#Wert2").innerHTML = Math.round(BIPFR / GesBIPEU * 100) + "%";
    document.querySelector("#Text2").innerHTML = "Anteil des BIP Frankreichs am BIP der EU";
    document.querySelector("#Wert3").innerHTML = Math.round(((BIPFR / BIPFR2010 * 100) - 100)) + "%";
    document.querySelector("#Text3").innerHTML = "Wachstum des französischen BIPs seit 2010";
    document.querySelector("#Wert4").innerHTML = (BIPDE - BIPDE2010).toFixed(2) + " Billionen Euro";
    document.querySelector("#Text4").innerHTML = "Zunahme des deutschen BIPs seit 2010";
}
window.addEventListener('load', function () {
    document.querySelector(".germany").addEventListener('click', clickGermany);
    document.querySelector(".france").addEventListener('click', clickFrance);
}, console.log("Das Bruttoinlandsprodukt Frankreichs lag 2021 bei " + BIPFR + " MRD. Euro."));
console.log("Dies ist ein Wachstum um " + Math.round(((BIPFR / BIPFR2010 * 100) - 100)) + "% zum Jahr 2010");
console.log("und " + Math.round(BIPFR / GesBIPEU * 100) + "% Anteil am BIP der gesamten EU.");
console.log("Das französische BIP stieg in den letzten elf Jahren um " + (BIPFR - BIPFR2010) + " MRD. Euro.");
console.log("Das Bruttoinlandsprodukt Italiens lag 2021 bei " + BIPIT + " MRD. Euro.");
console.log("Dies ist ein Wachstum um " + Math.round(((BIPIT / BIPIT2010 * 100) - 100)) + "% zum Jahr 2010");
console.log("und " + Math.round(BIPIT / GesBIPEU * 100) + "% Anteil am BIP der gesamten EU.");
console.log("Das itlienische BIP stieg in den letzten elf Jahren um " + (BIPIT - BIPIT2010) + " MRD. Euro.");
console.log("Das Bruttoinlandsprodukt Belgiens lag 2021 bei " + BIPBL + " MRD. Euro.");
console.log("Dies ist ein Wachstum um " + Math.round(((BIPBL / BIPBL2010 * 100) - 100)) + "% zum Jahr 2010");
console.log("und " + Math.round(BIPBL / GesBIPEU) * 100 + "% Anteil am BIP der gesamten EU.");
console.log("Das belgische BIP stieg in den letzten elf Jahren um " + (BIPBL - BIPBL2010) + " MRD. Euro.");
console.log("Das Bruttoinlandsprodukt aller EU-Staaten lag 2021 bei " + GesBIPEU + " MRD. Euro.");
//# sourceMappingURL=script7.js.map