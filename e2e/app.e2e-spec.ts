import { MeanProjectPage } from './app.po';

describe('mean-project App', () => {
  let page: MeanProjectPage;

  beforeEach(() => {
    page = new MeanProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
