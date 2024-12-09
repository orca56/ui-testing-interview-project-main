import { test } from '@playwright/test';
import { HomePage } from '../pages/homepage-tile';

const it = test.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});

it('should have partner Tiles present on homepage', async ({ page, homePage }) => {
  await homePage.findTile('Snyk', 'Get the most out of your Snyk implementation');
  await homePage.findTile('Snyk', 'Get the most out of your Snyk implementation');
  await homePage.findTile('Gitlab', 'Optimize your developer');
});

it('should have solution tiles present on homepage', async ({ homePage }) => {
  await homePage.findTile('Secure', 'No more sleepless nights');
  await homePage.findTile('Save', 'Remove inefficiencies in your');
  await homePage.findTile('Automate', 'Free your developers so they');
  await homePage.findTile('Get Started', 'Lay the proper cloud');
  await homePage.findTile('Migrate', 'Seamlessly move your');
});

it('should have resources cards present on homepage', async ({ homePage }) => {
  await homePage.findTile('Global telecommunications', 'Securing a seamless move to');
  await homePage.findTile('Optimizing web-based ERP', 'Decreasing developer overhead');
  await homePage.findTile('Securing fintech startups', 'Facilitating Recimply’s');
});
