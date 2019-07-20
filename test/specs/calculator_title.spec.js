const expect = require('chai').expect;
const CalculatorPage = require('../../calculator.pageobjects')
describe('Parking Calculator page', () => {
    it('should have the right title', () => {
        CalculatorPage.open('http://adam.goucher.ca/parkcalc/');
        const title = browser.getTitle();
        expect(title).to.equal('Parking Calculator');
    });
});
