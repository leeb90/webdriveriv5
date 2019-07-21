const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
const LotContent= require ('../../helpers/testdata').LotContent;
const LotContentValues= require ('../../helpers/testdata').LotContentValues;
describe('Parking Calculator page Combobox validations',()=>{
    it('should check combobox Amount',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        let LotOptionsAmount= CalculatorPage.LotOptions.length;
        expect(LotOptionsAmount,'Expects Choose Lot Options to have 5 elements').to.equal(5);
    });

    it('should check combobox content',()=>{
        for(var x= 0; x < LotContent.length ; x++){
            expect(CalculatorPage.LotOptions[x].getText(),'Expect Lot Options to contain Short-Term,Economy,Long-Term Surface,Long-term Garage, and Valet parking').to.equal(LotContent[x]);
        }
    });

    it('should check combobox selection',()=>{
        for (var x=0; x< 5; x++){
            randomNumber=Math.floor(Math.random()*5);
            CalculatorPage.LotOptionSelector.selectByIndex(randomNumber);
            expect(CalculatorPage.LotOptionSelector.getValue()).to.equal(LotContentValues[randomNumber]);
        }
    });
});