const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
let btc;
const currency = fetch(URL)
    .then(responce => {
        return responce.json();
    })
    .then(data => {
        return data;
    })
    .catch(err => {
        return err
    });

currency.then(currency => {
    console.log("===================?>", currency[3].buy);
    btc = currency;
    console.log(btc);
})
