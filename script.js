//to togggle light mode and dark mode
const body = document.getElementById("body");
const dot = document.querySelector(".dot");
const heading = document.querySelector(".heading")
const cont = document.querySelector(".cont");
const field = document.querySelectorAll(".field");
const dot2 = document.querySelector(".dot2");

dot.addEventListener("click", () => {
    dot.classList.add("hidden");
    dot2.classList.remove("hidden");
    body.style.backgroundColor = "#334155";
    heading.style.border = "#334155";
    heading.style.color = "#334155";
    cont.style.backgroundColor = "#334155"
    cont.style.color = "lightgray"
    field.forEach((item) => {
        item.style.backgroundColor = "lightgray"
        item.style.color = "black"
    })
})

dot2.addEventListener("click", () => {
    dot.classList.remove("hidden");
    dot2.classList.add("hidden");
    body.style.backgroundColor = "#f8fafc";
    heading.style.border = "#334155";
    heading.style.color = "white";
    cont.style.backgroundColor = "#f1f5f9"
    cont.style.color = "black"
    field.forEach((item) => {
        item.style.backgroundColor = "#f9fafb"
        item.style.color = "gray"
    })
})

//to calculate percentage
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let total = document.getElementById("total").value;
    let val = document.getElementById("value").value;
    let ans = document.getElementById("answer");
    let result = (parseInt(val) / parseInt(total)) * 100;
    console.log(result)
    ans.textContent = result + "%";
});