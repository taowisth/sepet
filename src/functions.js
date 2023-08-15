const items = [
    [
        ["<div class=\"chooser-title\">Size</div><div id=\"firstQuery\" class=\"chooser-option\">Select an Option</div>"],
        ["small", "Small Dildos (10 to 13 cm)"], 
        ["average", "Mid Dildos (10 to 13 cm)"], 
        ["large", "large Dildos (10 to 13 cm)"], 
        ["extra", "extra Dildos (10 to 13 cm)"]
    ],
    [
        ["<div class=\"chooser-title\">Type</div><div id=\"firstQuery\" class=\"chooser-option\">Select an Option</div>"],
        ["realistic", "Realistic Dildos"], 
        ["vibrating", "Vibrating Dildos"], 
        ["g-spot", "G-Spot Dildos"], 
        ["anal", "Anal Dildos"]
    ]
]
function queryCaller(queryNumber) {
    if (queryNumber == queryNumber){
        document.getElementsByClassName("chooser")[queryNumber].innerHTML = items[queryNumber][0];
        for (let i = 1; i < items[queryNumber].length; i++){
            document.getElementById("chooser-list-"+queryNumber).innerHTML += 
            "<div class=\"chooser chooser-option-"+items[queryNumber][i][0]+"\"><div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('"+items[queryNumber][i][0]+"')\" value=\"1\">"+items[queryNumber][i][1]+"</div></div>";
        }
    } else {}
}

function chooserOptionValueChanger(value){
    document.getElementsByClassName("chooser-option-"+value)[0].innerHTML = "<div class=\"chooser-title-invisible\">Size</div><div class=\"chooser-option\" onclick=\"chooserOptionValueChanger('"+value+"')\" value=\"1\">"+value+"Dildos (10 to 13 cm)</div> "
    document.getElementsByClassName("chooser-option-"+value)[0].getElementsByClassName("chooser-option")[0].id = '1';
}

// ACTION LISTENER START
const observer = new MutationObserver(function(mutationsList, observer) {
    // COUNT "chooser-option" TOTAL
    const totalOfOptions = document.getElementsByClassName("chooser-option");    
    
    function querySelectorInner() {
        for (let i = 1; totalOfOptions.length; i++){
            var chooserOptionId = parseInt(document.getElementsByClassName("chooser-option")[i].id);
            if (isNaN(chooserOptionId)){} 
            else {
                if (isNaN(chooserOptionId)){} 
                else if(chooserOptionId = 1){
                    document.getElementById("chooser-list-"+0).innerHTML = "<div class=\"chooser chooser-option-done\"><div class=\"chooser-title\">Size</div><div onclick=\"queryCaller(0)\" id=\""+i+"\" class=\"chooser-option\">Select an Option</div></div>";
                    const doneQueryTotal = document.getElementsByClassName("chooser-option-done");
                    for (let j = 1; doneQueryTotal.length; j++){
                        if (parseInt(document.getElementsByClassName("chooser-option-done")[j-1].getElementsByClassName("chooser-option")[j-1].id) == i){
                            document.getElementById("query"+j).id = i;
                            const j2 = j;
                            document.getElementById("right-side-inner").innerHTML += "<div id=\"chooser-list-"+j2+"\"><div class=\"chooser\"><div onclick=\"queryCaller("+j+")\" class=\"chooser-title\">Size</div><div onclick=\"queryCaller("+j+")\" id=\"firstQuery\" class=\"chooser-option\">Select an Option</div></div></div>";
                        } else{};
                    }
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