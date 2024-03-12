//«Діалог з користувачем»
function interactWithUser (){
    const age = prompt("Введіть свій вік (лише цифри)")
    for (let symbol of age){
        if (isNaN(+symbol)) return "Ваш вік не дійний"
    }
    return "Ваш вік дійсний"
} 
//console.log(interactWithUser())

// про розробника
function dispDeveloperInfo (name, surname, position = "студент"){
    console.log(`${name} ${surname}, посада якого ${position}`)
}
dispDeveloperInfo("Владислав", "Любашенко")

//порівняння двох рядків
function getBiggerStr (str1, str2){
    if (str1.length >= str2.length) alert("Більший рядок - " + str1)
    else alert("Більший рядок - " + str2)
}
//getBiggerStr("ппппп", "a")
//getBiggerStr("A", "aррр")

document.body.style.backgroundColor = "red"
setTimeout (() => {document.body.style.backgroundColor = "#FFFBD6"}, 30000)