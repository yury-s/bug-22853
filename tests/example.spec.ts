import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' });

test.describe('basic test', () => {
  test('first', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('second', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});