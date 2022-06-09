//neues Feld beim Enter drücken
var AddTask : HTMLElement = document.getElementById("addTask");
AddTask.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        let newSpan  = document.createElement("span");
        newDiv.setAttribute("id", "point3"); 
        newDiv.setAttribute("class", "point"); 
        newDiv.innerHTML = "Den scheiß hier beenden"; 
        newInput.setAttribute("type", "radio"); 
        newInput.setAttribute("class", "invisible"); 
        newSpan.setAttribute("class", "dot");
        newSpan.setAttribute("id", "point3"); 
        document.getElementById("list").appendChild(newDiv);
        document.getElementById("point3").appendChild(newInput);
        document.getElementById("point3").appendChild(newSpan); 
          
        }
    })



