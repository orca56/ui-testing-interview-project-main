import { type Page, expect } from '@playwright/test';

/**
 * This HomePage class represents the main page. Just yet it has `goto()` and `findTile()` methods which are used for basic page mounting and page tile presence check.
 * 
 * `findTile()`: used it to get Tile elements by header and body text values. 
 * 
 * POMs allow us to focus on testing scenarios by hiding non-related things (e.g. reaching some page/element, filling forms, moving through wizard steps, etc). Tests become more high-level, which help with the maintainability and readability the big time.
 * 
 * E.g. `goToContactUsForm` method would eliminate the "reaching-contact-us-form" stage from test case and allow us to focus on testing form validation specifically.
 * 
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