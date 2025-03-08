const BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies
//json = fetchJSON(`/currencies/{fromCurrency}`)
//rate = json[fromCurrency][toCurrency]

const dropdowns = document.querySelectorAll(".dropdown select");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");

 const updateFlag = (target) =>{
    let currCode = target.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${ countryCode}/flat/64.png`;
    let flagImg = target.parentElement.querySelector("img");
    flagImg.src = newsrc;
 };

 for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" ,(evt) => {
        updateFlag(evt.target);
    });
 }

 const updateExchanerate = async () => {
    let amount = document.querySelector(".amount input");
    let amt = amount.value;
    const url = `${BaseURL}/${from.value.toLowerCase()}.json`;
    let responce = await fetch(url);
    let data = await responce.json();
    let rate = data[from.value.toLowerCase()][to.value.toLowerCase()];

    let finalValue = amt * rate;
    msg.innerText = `${amt} ${from.value} = ${finalValue} ${to.value}`;
 };

 btn.addEventListener("click" , (evt) => {
    evt.preventDefault();
    updateExchanerate();
 });

 window.addEventListener("load" ,(evt) => {
    updateExchanerate();
 });