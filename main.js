const { verify_argv, verify_argv_contains_only, search_index } = require("./app");

(async () => {
    // d'abord nous vérifions si il y'a un argument passé
    if(!verify_argv(process.argv)) {
        console.log('saisissez un agument svp...');
        return;
    }
    let myArgs = process.argv.slice(2);
    // nous recuperons l'argument sous forme de tableau de string
    let myTab = myArgs[0].split(',');
    // Nous vérifions si il y'a bien que O et 1 dans le tableau
    if(!verify_argv_contains_only(myTab)){
        console.log('ressaisissez les éléments de votre tableau svp...');
        return;
    }
    let result = search_index(myTab);
    console.log('result', result);
})();


