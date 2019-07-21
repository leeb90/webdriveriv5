const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
const LotContent= require ('../../helpers/testdata').LotContent;
const LotContentValues= require ('../../helpers/testdata').LotContentValues;
describe('Parking Calculator Date Error Messages',()=>{
    let ErrorMessage='ERROR! ENTER A CORRECTLY FORMATTED DATE';
    it('should check error message when no Date is filled',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText()).to.equal(ErrorMessage);
    });

    it('should check error message when invalid data is filled on Entry Date',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryDate.setValue('asfasfsdgssdfsd');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText()).to.equal(ErrorMessage);
    });

    it('should check error message when invalid data is filled on Exit Date',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.ExitDate.setValue('2132kdsfkjsdhf');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText()).to.equal(ErrorMessage);
    });

});