import { FlexboxPage } from './app.po';

describe('flexbox App', () => {
  let page: FlexboxPage;

  beforeEach(() => {
    page = new FlexboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
