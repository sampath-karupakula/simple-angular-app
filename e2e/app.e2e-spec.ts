import { SimpleAngularPage } from './app.po';

describe('simple-angular App', function() {
  let page: SimpleAngularPage;

  beforeEach(() => {
    page = new SimpleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
