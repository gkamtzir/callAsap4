import {  browser, by, element } from 'protractor';

export class SearchPage {
    navigateTo() {
        return browser.get('/search');
    }

    getPageHeader() {
        return element.all(by.css('h1')).first().getText();
    }

    selectCountry(country: string) {
        let select = element(by.id('selectElement'));
        select.click();
        select.sendKeys(country);
        select.click();
    }

    getHeaderOfSelectedCountry(country: string) {
        this.selectCountry(country);
        return element.all(by.css('h3')).first().getText();
    }

    getInformationOfSelectedCountry(country: string) {
        this.selectCountry(country);
        let table = element.all(by.css('table tbody tr td'));
        let information = [table.get(0).getText(), table.get(1).getText(), table.get(2).getText()];
        return information;
    }

    getHeaderOfEmergencyPhoneNumbersOfSelectedCountry(country: string) {
        this.selectCountry(country);
        return element.all(by.css('h3')).last().getText();
    }

    getEmergencyPhoneNumbersOfSelectedCountry(country: string) {
        this.selectCountry(country);
        let table = element.all(by.css('table tbody tr td'));
        let information = [table.get(3).getText(), table.get(4).getText()];
        return information;

    }

}
