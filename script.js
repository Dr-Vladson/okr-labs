const clickHandler1 = ()=>{
    alert("This is батон!")
}
const clickHandler2 = ()=>{
    alert("This is батон too!")
}
document.getElementById("btn2").onclick = clickHandler1
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", clickHandler1)
btn3.addEventListener("click", clickHandler2)
const objHandler = {
    handleEvent: (e) => {
        alert(e.currentTarget)
        console.log(e.currentTarget)
    }
}
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", objHandler)
document.getElementById("btn5").addEventListener("click", () => {
    btn3.removeEventListener("click", clickHandler1)
    btn3.removeEventListener("click", clickHandler2)
    btn4.removeEventListener("click", objHandler)
})


const olist = document.getElementById("olist");
olist.addEventListener("click", (e)=> {
    if (e.target.closest("li")){
        e.target.style.backgroundColor = "gray"
    }
})

const actions = {
    signIn : () => {
        location.href = "./sign-in.html"
    },
    bookings: () => {
        location.href = "./bookings.html"
    },
}
const nav = document.getElementById("nav")
nav.addEventListener("click", (e) => {
    if (e.target.dataset.action){
        actions[e.target.dataset.action]()
    }
})

window.addEventListener("click", (e) => {
    if (e.target.dataset.menu !== undefined){
        if (e.target.style.backgroundColor === "red"){
            e.target.style.backgroundColor = ""
        }
        else e.target.style.backgroundColor = "red"
    } 
})















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
//dispDeveloperInfo("Владислав", "Любашенко")

//порівняння двох рядків
function getBiggerStr (str1, str2){
    if (str1.length >= str2.length) alert("Більший рядок - " + str1)
    else alert("Більший рядок - " + str2)
}
//getBiggerStr("ппппп", "a")
//getBiggerStr("A", "aррр")

//За допомогою об’єкта document змінити фон сторінки на 30 секунд
//document.body.style.backgroundColor = "red"
//setTimeout (() => {document.body.style.backgroundColor = "#FFFBD6"}, 30000)

document.write("Важлива інформація в кінці, яку ніхто ніколи не читає") // !document.write

// За допомогою об’єкта перенаправити браузер на іншу сторінку.

const textNode = document.createTextNode("Погана текстова нода") //!createTextNode
olist.append(textNode)
textNode.nodeValue = "Хороша текстова нода"//!!nodeValue

const city1 = document.createElement("p") //!document.createElement
olist.append(city1) //!append
city1.outerHTML = "<li>місто Київ</li>" //!outerHTML
const city2 = document.createElement("li")
city2.textContent = "Прага"
olist.prepend(city2) //!prepend

const cityMos = olist.querySelector("#ru")
cityMos.remove() //!node.remove

const citiesFrance = olist.querySelector("#fra")
const newCitiesFrance = document.createElement("ul")
newCitiesFrance.innerHTML = "<li>місто Париж</li><li>місто Ніцца</li>" //!innerHTML
citiesFrance.replaceWith(newCitiesFrance) //! node.replaceWith

const listElements = olist.querySelectorAll("li") // ! querySelectorAll
listElements.forEach((element)=> {
    element.textContent = "місто " + element.textContent //! textContent
})
