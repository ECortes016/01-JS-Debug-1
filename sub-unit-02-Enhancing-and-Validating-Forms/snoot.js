"use strict";

// Author: Emmanuel Cortes Castaneda
// Date: 8.20.19

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists:"+ emptyBoxes.length);

    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

function createEventListener() {
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", removeSelectDefaults, false);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", removeSelectDefaults);
    }
}