import { CallAsap4Page } from './app.po';

describe('call-asap4 App', () => {
  let page: CallAsap4Page;

  beforeEach(() => {
    page = new CallAsap4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
