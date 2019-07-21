const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
describe('Parking Calculator Time Error Messages',()=>{
    let ErrorMessageFormat='ERROR! ENTER A CORRECTLY FORMATTED TIME';
    let ErrorMessageTime='ERROR! YOUR EXIT DATE OR TIME IS BEFORE YOUR ENTRY DATE OR TIME';
    let RegexTimeFormat= /^([01]\d|2[0-3]):?([0-5]\d)$/g;
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
        CalculatorPage.EntryTimeTextBox.setValue('32:00');
        CalculatorPage.ExitTimeTextBox.setValue('13:00');
        CalculatorPage.EntryDate.setValue('07/21/2020');
        CalculatorPage.ExitDate.setValue('07/21/2020');
        CalculatorPage.CalculateButton.click();
        let EntryValue= CalculatorPage.EntryTimeTextBox.getValue();
        let ExitValue= CalculatorPage.ExitTimeTextBox.getValue();
        let MatchFoundEntry= EntryValue.match(RegexTimeFormat);
        console.log('Data is ' + MatchFoundEntry);
       // let MatchFoundExit= ExitValue.match(RegexTimeFormat);
        //expect(MatchFoundEntry[0], 'Time format for Entry time should consist of only 4 numbers and colon HH:MM').to.equal(5);
        //expect(MatchFoundExit[0], 'Time format for Exit time should consist of only 4 numbers and colon HH:MM').to.equal(5);
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