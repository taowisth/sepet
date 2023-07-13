var queryPull = require("./queryPull.js");

const queries = [
    "",
    "categories/CFWV1obLaLyOUEcdwCMa/type/oNh9PELtjzP2wLPPBYZC/realistic",
    "categories/CFWV1obLaLyOUEcdwCMa/size/FVb0kcik0hbvM9AHNVE9/small",
    "categories/CFWV1obLaLyOUEcdwCMa/size/FVb0kcik0hbvM9AHNVE9/large"
]

function querySticker(){
    queryPull.a(queries);

}

//function querySticker() 

export { queries };