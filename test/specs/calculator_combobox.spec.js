const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
const LotContent= require ('../../helpers/testdata').LotContent;
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
        for(var x= 0; x < LotContent.length ; x++){
            expect(CalculatorPage.LotOptions[x].getText(),'Expect Lot Options to contain Short-Term,Economy,Long-Term Surface,Long-term Garage, and Valet parking').to.equal(LotContent[x]);
        }
    });
});