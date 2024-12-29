// input dates
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
// labels
let dayLabel =document.getElementById("day-label");
let monthLabel =document.getElementById("month-label");
let yearLabel =document.getElementById("year-label");
// form
let isValid = false;
let form = document.getElementById("form");
form.addEventListener(
  "submit",
  (e)=>{e.preventDefault()})
;
// current dates
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
// errorrs
let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");
// outputs
let yearOutput = document.getElementById("year-result");
let monthOutput = document.getElementById("month-result");
let daysOutput = document.getElementById("day-result");
// check date input value
dayInput.addEventListener("input", (e) => {
  if (dayInput.value > 31 || dayInput.value <= 0) {
    dayError.textContent = "Must be a valid day";
    dayInput.style.border="1px solid hsl(0, 100%, 67%)";
   dayLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else if (dayInput.value === "") {
    dayError.textContent = "This field is required";
    dayInput.style.border="1px solid hsl(0, 100%, 67%)";
    dayLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    dayError.textContent = "";
    isValid = true;
    dayInput.style.border="1px solid hsl(0, 0%, 86%)";
    dayLabel.style.color="hsl(0, 0%, 86%)";
    return;
  }
});

// check month input value
monthInput.addEventListener("input", (e) => {
  if (monthInput.value > 12 || monthInput.value <= 0) {
    monthError.textContent = "Must be a valid month";
   monthInput.style.border="1px solid hsl(0, 100%, 67%)";
   monthLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else if (monthInput.value === "") {
    monthError.textContent = "This field is required";
  monthInput.style.border="1px solid hsl(0, 100%, 67%)";
   monthLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    monthError.textContent = "";
    monthInput.style.border="1px solid hsl(0, 0%, 86%)";
   monthLabel.style.color="hsl(0, 0%, 86%)";
    isValid = true;
    return;
  }
});
// check year input value
yearInput.addEventListener("input", (e) => {
  if (yearInput.value > currentYear) {
    yearError.textContent = "Must be in the past";
   yearInput.style.border="1px solid hsl(0, 100%, 67%)";
   yearLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else if (yearInput.value === "") {
    yearError.textContent = "This field is required";
    yearInput.style.border="1px solid hsl(0, 100%, 67%)";
    yearLabel.style.color="hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    yearError.textContent = "";
    yearInput.style.border="1px solid hsl(0, 0%, 86%)";
    yearLabel.style.color="hsl(0, 0%, 86%)";
    isValid = true;
    return;
  }
});
console.log(isValid)
// calculate age
function calcAge(){
if(isValid===true){
let birthDate= `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
let birthDateObject= new Date(birthDate);
let differenceMS= Date.now()- birthDateObject;
let age = new Date(differenceMS);
let year = age.getUTCFullYear()-1970;
let month = age.getUTCMonth();
let days = age.getUTCDate();
yearOutput.innerText=year;
monthOutput.innerText=month;
daysOutput.innerText=days;
}else{
  alert("insert a new correct date")
}
}
