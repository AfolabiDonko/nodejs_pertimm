const verify_argv = (argv) => {
    /*
        cette fonction verifie si un argument
        a été passé ou non.
    */
    let isArgv = true;
    if (argv && argv.length == 2)
        isArgv = false;
        
    return isArgv;
}
const verify_argv_contains_only = (entry_tab) => {
    /*
        cette fonction verifie si parmis les 
        arguments du tableau il n'y a que zéro 
        et un.
    */
    let isAllZeroOrOne = true;
    entry_tab.filter(function(val) {
        if(val !== '0' && val !== '1') {
            isAllZeroOrOne = false;
        }
    });
    return isAllZeroOrOne; 
}
const search_index = (entry_tab) => {
    /*
        cette fonction recupère un tableau,
        decoupe le tableau en fonction des 0 et des 1 ,
        et parcours le tableau des 1 de telle manière a avoir 
        le resultat voulu.
    */
    let result_index = 0;
    let max = 0;
    let data = entry_tab.join('').split('0');
    for(let i=1 ; i< data.length; i++){
        if(parseInt(data[i-1]+'1'+data[i]) >= max){
            max = parseInt(data[i-1]+'1'+data[i]);
            result_index = i;
        }
    }
    return data.slice(0, result_index).join("0").length;
}
module.exports = {
    search_index,
    verify_argv,
    verify_argv_contains_only
};