import { WorksheetPage } from './app.po';

describe('worksheet App', function() {
  let page: WorksheetPage;

  beforeEach(() => {
    page = new WorksheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
