const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
describe('Parking Calculator Time Error Messages',()=>{
    let ErrorMessageFormat='ERROR! ENTER A CORRECTLY FORMATTED TIME';
    let ErrorMessageTime='ERROR! YOUR EXIT DATE OR TIME IS BEFORE YOUR ENTRY DATE OR TIME';
    let TimeFormatRegex= /([01]?[0-9]|2[0-3]):[0-5][0-9]/g;
    it('should check error message when invalid time is filled',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        CalculatorPage.EntryTimeTextBox.setValue('fsfsdfsdf');
        CalculatorPage.ExitTimeTextBox.setValue('hjtytuty');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessageFormat);
    });

    it('should check time format HH:MM',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        CalculatorPage.EntryTimeTextBox.setValue('1231232');
        CalculatorPage.ExitTimeTextBox.setValue('567576');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        let EntryValue= CalculatorPage.EntryTimeTextBox.getValue();
        let ExitValue= CalculatorPage.ExitTimeTextBox.getValue();
        expect(EntryValue.length, 'Time format for Entry time should consist of only 4 numbers').to.equal(5);
        expect(ExitValue.length, 'Time format for Exit time should consist of only 4 numbers').to.equal(5)
    });

    it('should check Exit time to be before entry time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        browser.pause(2000);
        CalculatorPage.EntryTimeTextBox.setValue('03:00');
        CalculatorPage.ExitTimeTextBox.setValue('02:00');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessageTime);
    });

});