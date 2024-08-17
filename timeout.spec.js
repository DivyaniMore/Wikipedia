//const { test, expect } = require('@playwright/test');

/*test('has title', async ({ page }) => {

  // Navigate to the page
  await page.goto('https://playwright.dev/');

  // Expect the title "to contain" a substring
  await expect(page).toHaveTitle(/Playwright/);

}, { timeout: 15000 }); // 15 seconds timeout for the entire test

const { test, expect } = require('@playwright/test');

test('timeout error on page.goto', async ({ page }) => {
  // Set a very short timeout for the page navigation
  await page.goto('https://playwright.dev/', { timeout: 1 }); // 1 ms timeout will cause a timeout error
}, { timeout: 15000 }); // 15 seconds timeout for the entire test

test('search functionality works', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://playwright.dev/');
  
    // Wait for the search bar to be visible before interacting
    const searchBar = page.locator('[placeholder="Search"]');
    await searchBar.waitFor({ state: 'visible', timeout: 15000 }); // Increase wait timeout if needed
  
    // Interact with the search bar
    await searchBar.click();
    await searchBar.fill('test');
    await page.keyboard.press('Enter');
  
    // Wait for search results
    const searchResults = page.locator('.search-results');
    await expect(searchResults).toBeVisible();
  }); 

  
 // import { test, expect } from '@playwright/test';

// Hook that runs once before all teststest.beforeAll(async () => {
  console.log('Running before all tests');
  // Example: Initialize a server or database
});

// Hook that runs before each test
test.beforeEach(async ({ page }) => {
  console.log('Running before each test');
  // Example: Navigate to a specific URL
  await page.goto('https://playwright.dev/');
});

// Hook that runs after each test
test.afterEach(async ({ page }) => {
  console.log('Running after each test');
  // Example: Clear cookies or perform cleanup
  await page.context().clearCookies();
});

// Hook that runs once after all tests
test.afterAll(async () => {
  console.log('Running after all tests');
  // Example: Close a server or database
});

test('has title', async ({ page }) => {npx playwright test --shard=2/4
  // Test logic
  await expect(page).toHaveTitle(/Playwright/);
});

test('contains get started button', async ({ page }) => {
  // Test logic
  const getStartedButton = page.locator('text=Get Started');
  await expect(getStartedButton).toBeVisible();
});



test('example test with overridden timeout on Playwright website', async ({ page }) => {
  // Set a timeout of 120 seconds (2 minutes) for this specific test
  test.setTimeout(120000);

  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Verify the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});


import { test, expect } from '@playwright/test';

test('example with customized expect timeout', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Wait for the title to contain 'Playwright', with a custom timeout of 10 seconds
  await expect(page).toHaveTitle(/Playwright/, { timeout: 10000 });

  // Locate a button with text 'Get Started' and ensure it is visible, with a custom timeout of 5 seconds
  const getStartedButton = page.locator('text=Get Started');
  await expect(getStartedButton).toBeVisible({ timeout: 5000 });
});

import { test, expect } from '@playwright/test';

test('example with global timeout', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Wait for the title to contain 'Playwright'
  // This will use the global timeout of 60 seconds
  await expect(page).toHaveTitle(/Playwright/);

  // Locate a button with text 'Get Started' and ensure it is visible
  // This will also use the global timeout of 60 seconds
  const getStartedButton = page.locator('text=Get Started');
  await expect(getStartedButton).toBeVisible();
});
test('filtering', async ({page}) => {
  await page.goto("");
  await page.getByRole("listitem")
    .filter({ hasText: 'Product 2' })
    .getByRole('button', {name: "Add to cart"})
    .click()
});
 
test('stock items 5', async ({page}) => {
  await page.goto("");
  await expect(page.getByRole("listitem")
    .filter({ hasNotText: 'Out of stock' }))
    .toHaveCount(5)
});*/


  



