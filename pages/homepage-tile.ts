import { type Page, expect } from '@playwright/test';

/**
 * This HomePage class represents the main page. For now it only has `goto()` and `findTile()` methods which are basic mounting and tile presence check on the page.
 * 
 * POMs allow us to focus on testing scenarios by hiding the process of getting to the point. Tests become more high-level.
 * E.g. `goToContactUsForm` method would eliminate the "reaching-contact-us-form" stage to focus on testing form validation.   
 * 
 * Every tile element consists of header, body text and button. To ensure tile X is present, we can specify it by its header and body text values.   
 */
export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://wearecws.com/');
  }

  async findTile(headerText: string, bodyText: string) {
    await expect(this.page.getByRole('heading', { name: headerText, exact: true })).toBeVisible();
    await expect(this.page.getByText(bodyText)).toBeVisible();
  }
}