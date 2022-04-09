function introduction(name) {
    return `Hi, my name is ${name}.`;
}
//function passes name through parameter and returns intro

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//function passes name and language parameters and returns intro

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//function passes name and language parameters and returns intro, if no language default is used

