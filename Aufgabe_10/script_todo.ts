//Setzen der IDs für neues Element beim Enter drücken
//Eingabefeld auslesen 
//Gesamtanzahl ändern
var pointID : number = 0; 
var pointText : string = "point"; 
var trashNumber : string = "trash"; 
var FieldText : string = "please write something"; 

var AddTask : HTMLElement = document.getElementById("addTask");
AddTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            pointID++; 
            FieldText = document.getElementById("addTask").value; 
            document.getElementById("total").innerHTML = pointID + " in total";  
        } 
        if (FieldText == "") {
            FieldText = "write someting..."; 
        }}); 

//neues Feld erstellen
AddTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let newDiv = document.createElement("div");
            let newInput = document.createElement("input");
            let newSpan  = document.createElement("span");
            let newI = document.createElement("i"); 
            newDiv.setAttribute("id", pointText + pointID); 
            newDiv.setAttribute("class", "point"); 
            newDiv.innerHTML = FieldText; 
            newInput.setAttribute("type", "radio"); 
            newInput.setAttribute("class", "invisible"); 
            newSpan.setAttribute("class", "dot");
            newSpan.setAttribute("id", pointText + pointID); 
            newI.setAttribute("id", trashNumber + pointID); 
            newI.setAttribute("class", "fa-solid fa-trash-can"); 
            document.getElementById("list").appendChild(newDiv);
            document.getElementById(pointText + pointID).appendChild(newInput);
            document.getElementById(pointText + pointID).appendChild(newSpan); 
            document.getElementById(pointText + pointID).appendChild(newI);
            newI.addEventListener("click", deletion); 
                }
            }); 
//löschen - Ansatz, funktioniert leider nicht richtig
function deletion() {
    let id = this.id;
    let remover1 = document.getElementById(id);
    let remover2 = 
    remover.remove(); 
}; 
