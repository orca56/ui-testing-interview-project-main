import { test as it, expect } from '@playwright/test';

/** 
 * Here I'm testing appearing of the 'get in touch' form after clicking 'Contact' button.
 * 
 * For this test case, I'm using Playwright's `codegen` feature. It generates code by recording actions like clicking on elements, filling out forms, and so on. It's a powerful tool for automation tests.
 * 
 * To keep tests easy to maintain and understand, we should follow well-known principles like KISS/YAGNI/DRY and others. These principles help engineers focus on doing what's necessary and doing it well.
 * 
 * Continious extension of code always requires maintenance. To make sure all edge cases are covered, Test-Driven Development (TDD) can be used. With it tests are created first (yet it tests non-existing functionality), and then we create the code to pass these test cases.
 * 
 * Such approach ensures functionality does exactly what's required and the unit is fully covered. Basically tests are  dictating the business logic for the functionality.  
 * 
 */

it('should show a form when clicking contact button', async ({ page }) => {
    await page.goto('https://wearecws.com/');

    await page.getByRole('button', { name: 'Contact', exact: true }).click();

    await expect(page.getByPlaceholder('First Name *')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name *')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address *')).toBeVisible();
    await expect(page.getByPlaceholder('Phone Number')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
});
