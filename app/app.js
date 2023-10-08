function initListeners(){
    $("nav a li").click(function(e){
        let aID = e.currentTarget.id;
        let contentID = aID + "Page";

        MODEL.updateView(contentID);
        // $("#app").html(eval(contentID));
    })
}

$(document).ready(function(){
    initListeners();
    MODEL.updateView("homePage");
    // $("#app").html(homePage);
})