var BIPDE:number = 3.570; 
var BIPFR:number = 2.483; 
var BIPIT:number = 1.775;
var BIPBL:number = 0.560; 
var GesBIPEU:number = 14.447; 

var BIPDE2010:number = 2.564;
var BIPFR2010:number = 1.995; 
var BIPIT2010:number = 1.611; 
var BIPBL2010:number = 0.363; 


console.log("Das Bruttoinlandsprodukt Deutschlands lag 2021 bei " + BIPDE + " MRD. Euro.")
console.log("Dies ist ein Wachstum um " + Math.round(((BIPDE / BIPDE2010 * 100) - 100)) + "% zum Jahr 2010")
console.log("und " + Math.round(BIPDE / GesBIPEU * 100) + "% Anteil am BIP der gesamten EU.")
console.log("Das deutsche BIP stieg in den letzten elf Jahren um " + (BIPDE - BIPDE2010) + " MRD. Euro.")
console.log("Das Bruttoinlandsprodukt Frankreichs lag 2021 bei " + BIPFR + " MRD. Euro.")
console.log("Dies ist ein Wachstum um " + Math.round(((BIPFR / BIPFR2010 * 100) - 100)) + "% zum Jahr 2010")
console.log("und " + Math.round(BIPFR / GesBIPEU * 100) + "% Anteil am BIP der gesamten EU.")
console.log("Das französische BIP stieg in den letzten elf Jahren um " + (BIPFR - BIPFR2010) + " MRD. Euro.")
console.log("Das Bruttoinlandsprodukt Italiens lag 2021 bei " + BIPIT + " MRD. Euro.")
console.log("Dies ist ein Wachstum um " + Math.round(((BIPIT / BIPIT2010 * 100) - 100)) + "% zum Jahr 2010")
console.log("und " + Math.round(BIPIT / GesBIPEU * 100) + "% Anteil am BIP der gesamten EU.")
console.log("Das itlienische BIP stieg in den letzten elf Jahren um " + (BIPIT - BIPIT2010) + " MRD. Euro.")
console.log("Das Bruttoinlandsprodukt Belgiens lag 2021 bei " + BIPBL + " MRD. Euro.")
console.log("Dies ist ein Wachstum um " + Math.round(((BIPBL / BIPBL2010 * 100) - 100)) + "% zum Jahr 2010")
console.log("und " + Math.round(BIPBL / GesBIPEU) * 100 + "% Anteil am BIP der gesamten EU.")
console.log("Das belgische BIP stieg in den letzten elf Jahren um " + (BIPBL - BIPBL2010) + " MRD. Euro.")
console.log("Das Bruttoinlandsprodukt aller EU-Staaten lag 2021 bei " + GesBIPEU + " MRD. Euro.")