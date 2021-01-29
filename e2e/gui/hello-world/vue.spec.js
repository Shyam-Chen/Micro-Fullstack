
import { Mockiavelli } from 'mockiavelli';

describe('activation', () => {
  let [context, page] = [];

  beforeAll(async () => {
    context = await global.browser.newContext();
    page = await context.newPage();

    const mockiavelli = await Mockiavelli.setup(page);

    mockiavelli.mockPOST('http://localhost:8000/vue', {
      status: 200,
      body: {},
    });

    await page.goto(`${global.BASE_URL}/hello-world`);
    await page.waitForLoadState('networkidle');
  });

  it('basic-flow', async () => {
    const title = '#enter-activation-code > div.title';
    const text = await page.$eval(title, (el) => el.textContent);
    expect(text).toMatch('Enter Activation Code');

    const input = '#enter-activation-code > div.text-field > input';
    const key = 'XZMF-0019-5363-2214-2882';
    await page.fill(input, key);
    const value = await page.$eval(input, (el) => el.value);
    expect(value).toMatch(key);

    const checkbox = '#enter-activation-code > div:nth-child(3) > label > span';
    await page.click(checkbox);

    await Promise.all([page.click('#enter-activation-code > button'), page.waitForNavigation()]);

    const nextTitle = '#create-account > div.title';
    const nextText = await page.$eval(nextTitle, (el) => el.textContent);

    expect(nextText).toMatch('Create Account');
  });
});
