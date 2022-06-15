//Setzen der IDs für neues Element beim Enter drücken
//Eingabefeld auslesen 
//Gesamtanzahl ändern
var pointID : number = 0; 
var pointText : string = "point"; 
var trashNumber : string = "trash"; 
var FieldText : string = "please write something"; 
var ticker : number = 0; 

var AddTask : HTMLElement = document.getElementById("addTask");
AddTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            pointID++; 
            FieldText = document.getElementById("addTask").value; 
            document.getElementById("total").innerHTML = pointID + " in total"; 
            document.getElementById("addTask").value = ""; 
        } 
        if (FieldText == "") {
            FieldText = "write someting..."; 
            document.getElementById("addTask").value = ""; 
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
            newSpan.addEventListener("click", done); 
                }
            }); 
//löschen - Ansatz, funktioniert leider nicht richtig
function deletion() {
    let id = this.id;
    let remover1 = document.getElementById(id); 
    remover1.parentNode.removeChild(remover1); 
}; 
//erledigt markieren - funktioniert auch nicht richtig
function done {
    ticker++; 
    let id = this.id;
    let dot = document.getElementById(id);
    console.log(id);  
    dot.setAttribute("style", "background-color:green");
    let tick = document.createElement("i"); 
    tick.setAttribute("class", "fa-solid fa-check");
    tick.setAttribute("id", "tick" + ticker);
    }