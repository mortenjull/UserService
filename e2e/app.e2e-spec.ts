import { UserServicePage } from './app.po';

describe('user-service App', () => {
  let page: UserServicePage;

  beforeEach(() => {
    page = new UserServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
