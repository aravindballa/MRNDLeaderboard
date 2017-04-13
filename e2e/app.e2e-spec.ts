import { MRNDLeaderboardPage } from './app.po';

describe('mrndleaderboard App', () => {
  let page: MRNDLeaderboardPage;

  beforeEach(() => {
    page = new MRNDLeaderboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
