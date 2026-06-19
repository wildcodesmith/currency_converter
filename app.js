let from_currency = document.getElementById("from-currency");

let to_currency = document.getElementById("to-currency");
let sec_hide = document.querySelector("#sec_hide");

let url = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
let amount_input = document.querySelector("#amount-input");
let button = document.querySelector("button");
let currencyValueSec = document.querySelector(".currency-value-sec");
let blog_card_converter_To_image = document.querySelector("#blog-card-converter-To-image");
let blog_card_converter_From_image = document.querySelector("#blog-card-converter-From-image");



amount_input.addEventListener("input", () => {
    if (amount_input.value <= 0) {
        amount_input.value = "";
    }
});

for (key in countryList) {
    let new_option = document.createElement("option");
    new_option.setAttribute("value", key);
    new_option.innerText = key;
    let img = document.createElement("img");
    img.setAttribute("src", "https://flagsapi.com/BE/shiny/64.png");
    from_currency.append(img);
    from_currency.append(new_option);
}
from_currency.value = "USD";

for (key in countryList) {
    let new_option = document.createElement("option");
    new_option.setAttribute("value", key);
    new_option.innerText = key;
    to_currency.append(new_option);
}
to_currency.value = "INR";
let k;
let apiFunc = async () => {
    let response = await fetch(url);
    let data = await response.json();

    function roundAmount(a) {
        return Math.round(a * 1000) / 1000;
    }
    button.addEventListener("click", () => {
        let valueOfAmount = amount_input.value;
        if (valueOfAmount == 0) valueOfAmount = 1;

        let valueFromCurrency = from_currency.value;
        let valueToCurrency = to_currency.value;


        let exchangedAmount =
            (data.eur[`${valueToCurrency.toLowerCase()}`] /
                data.eur[`${valueFromCurrency.toLowerCase()}`]) *
            valueOfAmount;

        currencyValueSec.innerText = `${valueOfAmount} ${valueFromCurrency} = ${roundAmount(exchangedAmount)} ${valueToCurrency}`;
    });
 let previousFromCurrencyCode = "USD";
let currentFromCurrencyCode = "USD";
 let previousToCurrencyCode = "INR";
let currentToCurrencyCode = "INR";






    from_currency.addEventListener("input", () => {
 
        let country = countryList[from_currency.value];
        blog_card_converter_To_image.setAttribute("src", `https://flagsapi.com/${country}/shiny/64.png`);
 
  
   
        

    });

    to_currency.addEventListener("input", () => {
        let country = countryList[to_currency.value];
        blog_card_converter_From_image.setAttribute("src", `https://flagsapi.com/${country}/shiny/64.png`);

 

    })

    
};



apiFunc();



//  
//   blog_card_converter_To_image.setAttribute(
//     "src",
//     ,
//   );