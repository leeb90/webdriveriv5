const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
const LotContent= require ('../../helpers/testdata').LotContent;
const LotContentValues= require ('../../helpers/testdata').LotContentValues;
describe('Parking Calculator Time Error Messages',()=>{
    let ErrorMessage='ERROR! ENTER A CORRECTLY FORMATTED TIME';
    it('should check error message when invalid time is filled',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        CalculatorPage.EntryTimeTextBox.setValue('fsfsdfsdf');
        CalculatorPage.ExitTimeTextBox.setValue('hjtytuty');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessage);
    });

    it('should check time format',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        CalculatorPage.EntryTimeTextBox.setValue('1231232');
        CalculatorPage.ExitTimeTextBox.setValue('567576');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessage);
    });

});