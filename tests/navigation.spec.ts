import { test as it, expect } from '@playwright/test';

/** 
 * To get the homepage title `page.title()` method is used. It's provided by Playwright framework.
 * 
 * The test is build applying "Arrange, Act and Assert" pattern, because it's a standartized, clean and effective way to test units of code. 
 * 
 * In case it's hard to apply "AAA" pattern, functionality should be split in smaller pieces (testable units). Tests should stay simple and readable. 
 *
 */
it('should have the correct page title', async ({ page }) => {
    // Arrange: prepare the test (open the web page) 
    await page.goto('https://wearecws.com/');

    // Act: get the homepage title
    const pageTitle = await page.title();

    // Assert: compare the resulting and expected values
    expect(pageTitle).toBe('CWS - Cloud Solutions');
});