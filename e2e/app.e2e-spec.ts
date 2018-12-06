import { SzamtechTesztCPage } from './app.po';

describe('szamtech-teszt-c App', () => {
  let page: SzamtechTesztCPage;

  beforeEach(() => {
    page = new SzamtechTesztCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
