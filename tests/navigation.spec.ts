import { test as it, expect } from '@playwright/test';

/**
 * *Architecture Explanation:* 
 * For this test I've applied "Arrange, Act and Assert" pattern which is the clean and effective way to test units of code. In case it's hard to apply "AAA" pattern, functionality should be broken in smaller pieces (testable units). Keep your tests readable and simple. 
 *
 * To get the homepage title, I'm using page.title(). It's provided by Playwright framework, which generally covers all possible scenarios and completely fulfills the request for testing tools.
 * 
 * In case I need to test functionality with multiple incoming and/or outcoming values (e.g. homepage title varies depending on user roles; goes "404" for unknown url), I would use some it.each([]) which allows to test scenarios in a clean and iterative way, decreasing redundant code. 
 */
it('should have the correct page title', async ({ page }) => {
    // Arrange: prepare the test (open the web page) 
    await page.goto('https://wearecws.com/');

    // Act: get the homepage title
    const pageTitle = await page.title();

    // Assert: compare the resulting and expected values
    expect(pageTitle).toBe('CWS - Cloud Solutions');
});