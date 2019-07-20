const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
describe('Parking Calculator page',()=>{
    it('should check combobox Amount',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        let LotOptionsAmount= CalculatorPage.LotOptions.length;
        expect(LotOptionsAmount,'Expects Lot Options to have 5 elements').to.equal(5);
    });

    it('should check combobox content',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        //console.log("This is the data " + CalculatorPage.LotOptions[1].getText());
    });
});