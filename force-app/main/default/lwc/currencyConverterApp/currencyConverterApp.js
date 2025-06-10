import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyConverterApp extends LightningElement {
    currencyImage = currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryList = countryCodeList;
    countryFrom = "USD";
    countryTo= "AUD";
    result
    error
    amount = ''


    handleChange(event) {
        const {name, value} = event.target;
        console.log("name :", name)
        console.log("value :", value)
        this[name] = value;
        this.result = ''
        this.error = ''
}
submitHandler(event) {
    event.preventDefault()
    this.convert()
}

//API
async convert() {
    const API_KEY = '49530e3c146f193a34a76ae5f41a9974';
    const API_URL = `https://api.exchangerate.host/convert?access_key=${API_KEY}&from=${this.countryFrom}&to=${this.countryTo}&amount=${this.amount}`;
    try {
        const data = await fetch(API_URL);
        const jsonData = await data.json();
        console.log('API Response:', jsonData);
        if (jsonData.result) {
            this.result = jsonData.result.toFixed(2);
            console.log('Conversion Result:', this.result);
        } else {
            this.error = jsonData.error?.info || 'Error fetching exchange rate.';
            console.error('API Error:', this.error);
        }
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}
}