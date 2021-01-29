import { chromium } from 'playwright';

jest.setTimeout(100 * 1000);

global.SITE_URL = 'http://localhost:8000';

global.mobileViewport = { width: 375, height: 667 };
global.desktopViewport = { width: 1366, height: 768 };

beforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
    args: ['--no-sandbox'],
    slowMo: 0.5 * 1000,
  });
});

afterAll(async () => {
  await global.browser.close();
});
