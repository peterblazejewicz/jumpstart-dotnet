import { JumpStartDotnetClientPage } from './app.po';

describe('jump-start-dotnet-client App', function() {
  let page: JumpStartDotnetClientPage;

  beforeEach(() => {
    page = new JumpStartDotnetClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
