import { HomePage } from './app.po';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageHeader()).toEqual('What is your emergency?');
  });
});
