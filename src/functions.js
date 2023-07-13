function queryCaller() {
    document.getElementsByClassName("chooser")[0].innerHTML = "<div class=\"chooser-title\">Size</div><div id=\"firstQuery\" class=\"chooser-option\">Select an Option</div>";
    document.getElementById("right-side-inner").innerHTML += "<div class=\"chooser chooser-option-small\"><div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('small')\" value=\"1\">Small Dildos (10 to 13 cm)</div></div><div class=\"chooser chooser-option-mid\"><div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('mid')\" value=\"1\">Mid Dildos (10 to 13 cm)</div></div><div class=\"chooser chooser-option-large\"><div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('large')\" value=\"1\">large Dildos (10 to 13 cm)</div></div><div class=\"chooser chooser-option-extra\"><div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('extra')\" value=\"1\">extra Dildos (10 to 13 cm)</div></div>";
}
function queryCallerSizeQuery() {
}
function chooserOptionValueChanger(value){
    document.getElementsByClassName("chooser-option-"+value)[0].innerHTML = "<div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('+value+')\" value=\"1\">"+value+"Dildos (10 to 13 cm)</div> "
    document.getElementsByClassName("chooser-option-"+value)[0].getElementsByClassName("chooser-option")[0].id = '1';
    querySelector();
}
function querySelector(){

    // ACTION LISTENER START
    const observer = new MutationObserver(function(mutationsList, observer) {

        // COUNT "chooser-option" TOTAL
        const totalOfOptions = document.getElementsByClassName("chooser-option");    
        
        function querySelectorInner() {

            for (let i = 1; totalOfOptions.length; i++){
                if (isNaN(parseInt(document.getElementsByClassName("chooser-option")[i].id))){console.log("başarısız!");} 
                else {
                    var chooserOptionId = parseInt(document.getElementsByClassName("chooser-option")[i].id);
                    if (isNaN(chooserOptionId)){
                    } else if(chooserOptionId = 1){
                        console.log(i);
                        document.getElementById("right-side-inner").innerHTML = "<div class=\"chooser chooser-id\"><div class=\"chooser-title\">Size</div><div onclick=\"queryCallerSizeQuery()\" id=\""+i+"\" class=\"chooser-option\">Select an Option</div></div>";
                    }
                }
            }
        }

        querySelectorInner();
    });
    observer.observe(document.body, { 
        childList: true,
        subtree: true
    });

}