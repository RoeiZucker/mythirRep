import { QuickstartMasterPage } from './app.po';

describe('quickstart-master App', function() {
  let page: QuickstartMasterPage;

  beforeEach(() => {
    page = new QuickstartMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
