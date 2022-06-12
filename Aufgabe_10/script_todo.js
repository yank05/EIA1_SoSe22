//Setzen der IDs für neues Element beim Enter drücken
//Eingabefeld auslesen 
//Gesamtanzahl ändern
var pointID = 2;
var pointText = "point";
var trashNumber = "trash";
var FieldText = "please write something";
var AddTask = document.getElementById("addTask");
AddTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        pointID++;
        FieldText = document.getElementById("addTask").value;
        document.getElementById("total").innerHTML = pointID + " in total";
    }
    if (FieldText == "") {
        FieldText = "write someting...";
    }
});
//neues Feld erstellen
AddTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        let newSpan = document.createElement("span");
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
    }
});
//löschen - Ansatz, funktioniert leider nicht 
i.addEventListener("click", function (e) {
    let IDtrash = this.id;
    console.log(IDtrash);
});
//# sourceMappingURL=script_todo.js.map