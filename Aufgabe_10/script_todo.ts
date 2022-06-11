//Setzen der IDs für neues Element beim Enter drücken
//Eingabefeld auslesen 
//Gesamtanzahl ändern

var pointID : number = 2; 
var pointText : string = "point"; 
var FieldText : string = "please write something"; 
var AddTask : HTMLElement = document.getElementById("addTask");
AddTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            pointID++; 
            FieldText = document.getElementById("addTask").value; 
            console.log(FieldText);
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
            newDiv.setAttribute("id", pointText + pointID); 
            newDiv.setAttribute("class", "point"); 
            newDiv.innerHTML = FieldText; 
            newInput.setAttribute("type", "radio"); 
            newInput.setAttribute("class", "invisible"); 
            newSpan.setAttribute("class", "dot");
            newSpan.setAttribute("id", pointText + pointID); 
            document.getElementById("list").appendChild(newDiv);
            document.getElementById(pointText + pointID).appendChild(newInput);
            document.getElementById(pointText + pointID).appendChild(newSpan);   
            console.log(pointText + pointID); 
                }
            })
