import { HomePage } from './app.po';

describe('call-asap4 App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('What is your emergency?');
  });
});
