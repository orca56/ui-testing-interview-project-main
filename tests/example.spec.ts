import { test as it, expect } from '@playwright/test';

it('should have the copyright text in the footer', async ({ page }) => {
    // Navigate to the product website
    await page.goto('https://wearecws.com/');

    // Locate the footer element
    const footer = page.locator('footer');

    // Assert that the footer contains the expected copyright text
    const copyrightText = await footer.innerText();
    const expectedText = 'CWS, All rights reserved.';

    expect(copyrightText).toContain(expectedText);
});