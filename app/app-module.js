import {updateView} from "./model-module.js";
// import * as MODEL from "./model-module.js";


function initListeners(){
    $("nav a").click(function(e){
        let aID = e.currentTarget.id;
        let contentID = aID + "Page";

        // MODEL.updateView(contentID);
        updateView(contentID);
        // $("#app").html(eval(contentID));
    })
}

// Initialize Home Page
$(document).ready(function(){
    initListeners();
    // MODEL.updateView("homePage");    
    updateView("homePage");
    // $("#app").html(homePage);
})