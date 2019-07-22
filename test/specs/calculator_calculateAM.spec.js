const expect= require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects');
let regex=/[!@#$%^&*' ']/g;
describe('Parking Calculator page Calculate cost with AM time',()=>{
    let TotalCost;
    let result;
    it('should select Short-Term Parking AM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.EntryTimeTextBox.setValue('01:00');
        CalculatorPage.ExitTimeTextBox.setValue('02:00');
        CalculatorPage.EntryDate.setValue('01/01/2020');
        CalculatorPage.ExitDate.setValue('01/01/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(regex, "");
        expect(result).to.equal('2.00');
    });

    it('should select Economy Parking AM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(1);
        CalculatorPage.EntryTimeTextBox.setValue('02:00');
        CalculatorPage.ExitTimeTextBox.setValue('03:00');
        CalculatorPage.EntryDate.setValue('01/02/2020');
        CalculatorPage.ExitDate.setValue('01/02/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(regex, "");
        expect(result).to.equal('4.00');
    });
    it('should select Long-Term Surface Parking AM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(2);
        CalculatorPage.EntryTimeTextBox.setValue('04:00');
        CalculatorPage.ExitTimeTextBox.setValue('05:00');
        CalculatorPage.EntryDate.setValue('01/03/2020');
        CalculatorPage.ExitDate.setValue('01/03/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(regex, "");
        expect(result).to.equal('2.00');
    });
    it('should select Long-Term Surface Parking AM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(3);
        CalculatorPage.EntryTimeTextBox.setValue('06:00');
        CalculatorPage.ExitTimeTextBox.setValue('07:00');
        CalculatorPage.EntryDate.setValue('01/04/2020');
        CalculatorPage.ExitDate.setValue('01/04/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(regex, "");
        expect(result).to.equal('2.00');
    });
    it('should select Valet Parking AM time',()=>{
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        CalculatorPage.LotOptionSelector.selectByIndex(4);
        CalculatorPage.EntryTimeTextBox.setValue('08:00');
        CalculatorPage.ExitTimeTextBox.setValue('09:00');
        CalculatorPage.EntryDate.setValue('01/05/2020');
        CalculatorPage.ExitDate.setValue('01/05/2020');
        CalculatorPage.CalculateButton.click();
        TotalCost=CalculatorPage.CalculateCost.getText();
        result= TotalCost.replace(regex, "");
        expect(result).to.equal('12.00');
    });
});