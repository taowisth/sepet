var a = function a(query) {
    const value = "";
    // ACTION LISTENER START
    const observer = new MutationObserver(function(mutationsList, observer) {
        //console.log("changed!");
        // COUNT chooser-option TOTAL
        const totalOfOptions = document.getElementsByClassName("chooser-option");    
        
        function querySelector() {

            for (let i = 1; totalOfOptions.length; i++){
                var chooserOptionId = parseInt(document.getElementsByClassName("chooser-option")[i].id);
                if (isNaN(chooserOptionId)){
                } else if(chooserOptionId = 1){
                    console.log(i);
                    document.getElementById("right-side-inner").innerHTML = "<div class=\"chooser chooser-id\"><div onclick=\"firstQuery()\" class=\"chooser-title\">Size</div><div onclick=\"queryCaller()\" id=\"firstQuery\" class=\"chooser-option\">Select an Option</div></div>";
                    query= i;
                }
            }
        }

        querySelector();
    });
    observer.observe(document.body, { 
        childList: true,
        subtree: true
    });
}

module.exports.a = a;
