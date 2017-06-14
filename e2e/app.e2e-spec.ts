import { RiLogViewerPage } from './app.po';

describe('ri-log-viewer App', () => {
  let page: RiLogViewerPage;

  beforeEach(() => {
    page = new RiLogViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
