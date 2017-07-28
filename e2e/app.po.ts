import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getPageHeader() {
    return element.all(by.css('h1')).first().getText();
  }
}
