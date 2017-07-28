import { SearchPage } from './search.po';

describe('SeachPage', () => {
  let page: SearchPage;

  beforeEach(() => {
    page = new SearchPage();
  });

  it('should navigate to Search page', () => {
    page.navigateTo();
    expect(page.getPageHeader()).toEqual('SEARCH');
  });

  it('should display the header of Ireland\'s information section', () => {
    page.navigateTo();
    expect(page.getHeaderOfSelectedCountry('Ireland')).toEqual('General information about IRELAND');
  });

  it('should display information about Ireland', () => {
      page.navigateTo();
      let information = page.getInformationOfSelectedCountry('Ireland');
      expect(information[0]).toEqual('English');
      expect(information[1]).toEqual('1');
      expect(information[2]).toEqual('---');
  });

  it('should display the header of the emergency phone numbers of Ireland', () => {
      page.navigateTo();
      expect(page.getHeaderOfEmergencyPhoneNumbersOfSelectedCountry('Ireland')).toEqual('Emergency Phone Numbers');
  });

  it('should display the emergency phone numbers of Ireland', () => {
      page.navigateTo();
      let information = page.getEmergencyPhoneNumbersOfSelectedCountry('Ireland');
      expect(information[0]).toEqual('Emergency');
      expect(information[1]).toEqual('999');
  });

});
