const expect= require('chai').expect;
const CalculatorPage = require('../../obe.pageobjects');
describe('Parking Calculator page',()=>{
    it('should check combobox content',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(10000);
        console.log(CalculatorPage.LotOptions.getValue());
;    });
});