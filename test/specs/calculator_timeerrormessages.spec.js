const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
describe('Parking Calculator Time Error Messages',()=>{
    let ErrorMessageFormat='ERROR! ENTER A CORRECTLY FORMATTED TIME';
    let ErrorMessageTime='ERROR! YOUR EXIT DATE OR TIME IS BEFORE YOUR ENTRY DATE OR TIME';
    let RegexTimeFormat= /^([01]\d|2[0-3]):?([0-5]\d)$/g;
    let MatchBoolean= true;
    it('should check error message when invalid time is filled',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryTimeTextBox.setValue('fsfsdfsdf');
        CalculatorPage.ExitTimeTextBox.setValue('hjtytuty');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessageFormat);
    });

    it('should check time format HH:MM',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryTimeTextBox.setValue('765765');
        CalculatorPage.ExitTimeTextBox.setValue('3543');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        let EntryValue= CalculatorPage.EntryTimeTextBox.getValue();
        let ExitValue= CalculatorPage.ExitTimeTextBox.getValue();
        let MatchFoundEntry = EntryValue.match(RegexTimeFormat);
        let MatchFoundExit= ExitValue.match(RegexTimeFormat);
        if (MatchFoundEntry===null || MatchFoundExit===null){
             MatchBoolean=false;
        }
        expect(MatchBoolean, 'Time format for Entry time should consist of only 4 numbers and colon HH:MM').to.be.true;
    });

    it('should check Exit time to be before entry time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryTimeTextBox.setValue('03:00');
        CalculatorPage.ExitTimeTextBox.setValue('02:00');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        expect(CalculatorPage.CalculateCost.getText(),'No calculation should be done and error message should appear').to.equal(ErrorMessageTime);
    });

});