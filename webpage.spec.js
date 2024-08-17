//const { test, expect } = require('@playwright/test');


/*test('W3Schools homepage loads successfully', async ({ page }) => {
  // Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com');

  // Verify that the page title contains "W3Schools"
  await expect(page).toHaveTitle(/W3Schools/);

  // Verify that the logo is visible
  const logo = await page.locator('#w3-logo'); // Using ID selector
  await expect(logo).toBeVisible();

  // Optionally, verify the icon within the link
  const icon = await page.locator('#w3-logo i'); // Using child element selector
  await expect(icon).toBeVisible();
});


test('Search for Python tutorial and verify', async ({ page }) => {
  // Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com');

  // Perform a search for "Python"
  await page.fill('#search2', 'Python'); // Fill the search input field
  await page.keyboard.press('Enter'); // Submit the search

  // Wait for the navigation or results to load
  await page.waitForSelector('h1'); // Adjust selector based on the page structure

  // Verify that the Python tutorial page is loaded
  await expect(page).toHaveURL(/python/); // Check if URL contains "python"
});


test('Search for HTML tutorial and verify', async ({ page }) => {
  // Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com');

  // Perform a search for "HTML"
  await page.fill('#search2', 'HTML'); // Fill the search input field
  await page.keyboard.press('Enter'); // Submit the search

  // Wait for the results or page to load
  await page.waitForSelector('h1'); // Adjust if needed

  // Verify that the HTML tutorial page is loaded
  await expect(page).toHaveURL(/html/); // Check if URL contains "html"
});



test('Search for CSS tutorial and verify', async ({ page }) => {
  // Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com');

  // Perform a search for "CSS"
  await page.fill('#search2', 'CSS'); // Fill the search input field
  await page.keyboard.press('Enter'); // Submit the search

  // Wait for the results or page to load
  await page.waitForSelector('h1'); // Adjust if needed

  // Verify that the CSS tutorial page is loaded
  await expect(page).toHaveURL(/css/); // Check if URL contains "css"
});


test('Search for JavaScript tutorial and verify', async ({ page }) => {
  // Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com');

  // Perform a search for "JavaScript"
  await page.fill('#search2', 'JavaScript'); // Fill the search input field
  await page.keyboard.press('Enter'); // Submit the search

  // Wait for the results or page to load
  await page.waitForSelector('h1'); // Adjust if needed

  // Verify that the JavaScript tutorial page is loaded
  await expect(page).toHaveURL(/javascript/); // Check if URL contains "javascript"
});*/
/*test('navigate to W3Schools, click Try it Yourself, and then interact with the code editor on the new page', async ({ page }) => {
  // Step 1: Navigate to the W3Schools main page
  await page.goto('https://www.w3schools.com');

  // Step 2: Click the "Try it Yourself" button related to HTML
  const tryItButton = page.locator('//a[contains(text(), "Try it Yourself") and contains(@href, "/html/tryit.asp?filename=tryhtml_default_default")]');
  await tryItButton.waitFor({ state: 'visible' });
  await expect(tryItButton).toBeEnabled();
  
  // Click the "Try it Yourself" button and wait for the new page to open
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // Wait for the new page to open
    tryItButton.click(),        // Click the "Try it Yourself" button
  ]);

  // Step 3: Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded'); // Ensure the new page has loaded

  // Verify the URL of the new page
  await expect(newPage).toHaveURL('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default');

  // Step 4: Wait for the "Run" button in the code editor to be visible and clickable
  const runButton = newPage.locator('#runbtn');
  await runButton.waitFor({ state: 'visible' });
  await expect(runButton).toBeEnabled();
  
  // Click the "Run" button
  await runButton.click();

  // Optionally, add further assertions to verify the result of clicking the Run button
});
test('navigate to W3Schools, click Get Certified button, and verify the correct page opens', async ({ page }) => {
  // Step 1: Navigate to the W3Schools main page
  await page.goto('https://www.w3schools.com');

  // Step 2: Use indexing to select the desired "Get Certified" button
  const getCertifiedButtons = page.locator('a[title="W3Schools Certificates"]');
  await getCertifiedButtons.nth(0).waitFor({ state: 'visible' });

  // Verify that the button is visible and enabled
  await expect(getCertifiedButtons.nth(0)).toBeVisible();
  await expect(getCertifiedButtons.nth(0)).toBeEnabled();

  // Step 3: Click the "Get Certified" button
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'), // Wait for the new page to open
    getCertifiedButtons.nth(0).click(), // Click the "Get Certified" button
  ]);

  // Step 4: Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');
  
  // Step 5: Verify the URL of the new page, accounting for localization
  const expectedUrlPattern = /https:\/\/campus\.w3schools\.com\/en-in\/collections\/course-catalog/;
  await expect(newPage).toHaveURL(expectedUrlPattern);
});
*/
/*test('navigate to W3Schools, click Tutorials button, and verify the content on the same page', async ({ page }) => {
  // Step 1: Navigate to the W3Schools main page
  await page.goto('https://www.w3schools.com');

  // Step 2: Wait for the page to fully load
  await page.waitForLoadState('networkidle');

  // Step 3: Locate the "Tutorials" button and click it
  const tutorialsButton = page.locator('a#navbtn_tutorials');
  try {
    // Wait for the Tutorials button to be visible and clickable
    await tutorialsButton.waitFor({ state: 'visible', timeout: 15000 });
    await expect(tutorialsButton).toBeVisible();
    await expect(tutorialsButton).toBeEnabled();
    
    // Click the Tutorials button
    await tutorialsButton.click();

    // Step 4: Wait for changes in the page content
    // Using a broader or different selector to check for content change
    const newContentLocator = page.locator('body'); // Adjust this to a more specific selector if needed

    // Wait for some content that should appear or change after clicking
    await newContentLocator.waitFor({ state: 'visible', timeout: 15000 });

    // Optionally, you can also look for specific text or elements that indicate the tutorials page is active
    const tutorialsHeader = page.locator('h1');
    await tutorialsHeader.waitFor({ state: 'visible', timeout: 10000 });
    await expect(tutorialsHeader).toHaveText('Tutorials'); // Adjust the text to match what you expect

  } catch (error) {
    console.error('Error during the test:', error);
    // Take a screenshot for debugging
    await page.screenshot({ path: 'error_screenshot.png' });
    throw error; // Re-throw the error after logging and screenshot
  }
});*/













