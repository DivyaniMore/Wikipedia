
const { test, expect } = require('@playwright/test');

test('Wikipedia homepage title', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await expect(page).toHaveTitle('Wikipedia');
});

test('Search Functionality', async ({ page }) => {
   await page.goto('https://www.wikipedia.org/');
   await page.fill('input[type="search"]', 'Playwright');
   await page.press('input[type="search"]', 'Enter');
   await page.waitForLoadState('networkidle');
   const searchResult = page.locator('h1');
    await expect(searchResult).toHaveText('Playwright');
  });



   test('Select Hindi Language from Dropdown', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.selectOption('#searchLanguage', 'hi');
  
    const selectedValue = await page.$eval('#searchLanguage', el => el.value);
    expect(selectedValue).toBe('hi');
    const selectedText = await page.$eval('#searchLanguage', el => el.options[el.selectedIndex].textContent.trim());
    expect(selectedText).toBe('हिन्दी');
  });

 test('Click Download Wikipedia Link', async ({ page }) => {
 await page.goto('https://www.wikipedia.org/');
 const downloadLink = page.locator('a:has-text("Download Wikipedia for Android or iOS")');
  await expect(downloadLink).toBeVisible(); // Ensure the link is visible before clicking
  await downloadLink.click();
  await page.waitForLoadState('networkidle');
 await expect(page).toHaveURL('https://en.wikipedia.org/wiki/List_of_Wikipedia_mobile_applications');
});



test('Select Marathi from language dropdown', async ({ page }) => {
 await page.goto('https://www.wikipedia.org/');
 await page.click('span.lang-list-button-text:has-text("Read Wikipedia in your language")');
 await page.waitForSelector('a[lang="mr"]', { timeout: 30000 });
  const marathiLink = page.locator('a[lang="mr"]');
  await expect(marathiLink).toBeVisible();
  await marathiLink.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/https:\/\/mr\.wikipedia\.org\/wiki\/%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A4%AA%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A0/);
  const pageTitle = page.locator('h1');
  await expect(pageTitle).toHaveText('मुखपृष्ठ');
});




test('Verify donation message and heading', async ({ page }) => {
await page.goto('https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=IN&uselang=en&wmf_medium=portal&wmf_source=portalFooter&wmf_campaign=portalFooter');
  await page.waitForLoadState('networkidle');

  const donationLink = page.locator('a.mw-wiki-logo');
  await expect(donationLink).toBeVisible();

  const heading = page.locator('h2#Wikipedia_still_can\\27t_be_sold\\.');
  await expect(heading).toBeVisible();
});



test('Click Search Icon and Open Random Article', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');
await page.click('i.sprite.svg-search-icon');
await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-main-menu-dropdown-checkbox'); 
await page.waitForSelector('span:has-text("Random article")', { timeout: 30000 });
await page.click('span:has-text("Random article")');
await expect(page).toHaveURL(/\/wiki\/.*?/);
});


test('Click Search Icon and Log in', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.click('i.sprite.svg-search-icon');
  await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
  await page.click('input#vector-main-menu-dropdown-checkbox');
  await page.waitForSelector('span:has-text("Log in")', { timeout: 30000 });
  await page.click('span:has-text("Log in")');
  await page.waitForLoadState('networkidle'); 
  await expect(page).toHaveURL('https://en.wikipedia.org/w/index.php?returnto=Special%3ASearch&returntoquery=go%3DGo%26search%3D&title=Special:UserLogin&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
  const usernameField = page.locator('input[name="wpName"]');
  const passwordField = page.locator('input[name="wpPassword"]');
  await expect(usernameField).toBeVisible(); 
  await expect(passwordField).toBeVisible(); 
});

test('Click Create Account and Verify Page', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');
await page.click('i.sprite.svg-search-icon');
await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-main-menu-dropdown-checkbox');
await page.waitForSelector('span:has-text("Create account")', { timeout: 30000 });
await page.click('span:has-text("Create account")');
await page.waitForLoadState('networkidle');
await expect(page).toHaveURL('https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=Special%3ASearch&returntoquery=go%3DGo%26search%3D');
const usernameField = page.locator('input[name="wpName"]');
const passwordField = page.locator('input[name="wpPassword"]');
const retypePasswordField = page.locator('input[name="retype"]');
const emailField = page.locator('input[name="email"]');
const createAccountButton = page.locator('button#wpCreateaccount');
await expect(usernameField).toBeVisible(); 
await expect(passwordField).toBeVisible(); 
await expect(retypePasswordField).toBeVisible(); 
await expect(emailField).toBeVisible(); 
await expect(createAccountButton).toBeVisible(); 
});




test('Click Learn to Edit and Verify Page', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');
await page.click('i.sprite.svg-search-icon');
await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-main-menu-dropdown-checkbox'); 
await page.waitForSelector('span:has-text("Learn to edit")', { timeout: 30000 });
await page.click('span:has-text("Learn to edit")');
await page.waitForLoadState('networkidle');
const pageTitle = page.locator('div.introtosingle__main-title');
await expect(pageTitle).toHaveText('Introduction to Wikipedia');
});

test('Click Learn to Edit, Get Started and Verify Page', async ({ page }) => {
 await page.goto('https://www.wikipedia.org/');
 await page.click('i.sprite.svg-search-icon');
 await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-main-menu-dropdown-checkbox'); // Click to open the menu
await page.waitForSelector('span:has-text("Learn to edit")', { timeout: 30000 });
await page.click('span:has-text("Learn to edit")');
await page.waitForLoadState('networkidle');
const pageTitleLearnToEdit = page.locator('div.introtosingle__main-title');
await expect(pageTitleLearnToEdit).toHaveText('Introduction to Wikipedia');
await page.click('span:has-text("Get started")');
await page.waitForLoadState('networkidle');
const pageTitleGetStarted = page.locator('div.introtosingle__main-title');
await expect(pageTitleGetStarted).toHaveText('Introduction to contributing to Wikipedia');
});




test('Click Upload File and Verify Button', async ({ page }) => {
 await page.goto('https://www.wikipedia.org/', { timeout: 60000 });
 await page.click('i.sprite.svg-search-icon');
 await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
 await page.click('input#vector-main-menu-dropdown-checkbox'); // Open the menu
 await page.waitForSelector('span:has-text("Upload file")', { timeout: 30000 });
 await page.click('span:has-text("Upload file")');
 await page.waitForSelector('span.mw-ui-button:has-text("Upload your own or a freely licensed file")', { timeout: 30000 });
 const uploadButton = page.locator('span.mw-ui-button:has-text("Upload your own or a freely licensed file")');
  await expect(uploadButton).toBeVisible();
});




test('Verify Download QR Code Option is Visible', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');
await page.click('i.sprite.svg-search-icon');
await page.waitForSelector('input#vector-page-tools-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-page-tools-dropdown-checkbox'); // Click to open the tools menu
const qrCodeOption = page.locator('span:has-text("Download QR code")');
await expect(qrCodeOption).toBeVisible();
console.log('Download QR Code option is visible.');
});

test('Navigate to Recent Changes and Verify Page Heading', async ({ page }) => {
 await page.goto('https://www.wikipedia.org/');
 await page.click('i.sprite.svg-search-icon');
 await page.waitForSelector('input#vector-main-menu-dropdown-checkbox', { timeout: 30000 });
 await page.click('input#vector-main-menu-dropdown-checkbox'); // Click to open the menu
 const recentChangesOption = page.locator('span:has-text("Recent changes")');
 await expect(recentChangesOption).toBeVisible();
 await recentChangesOption.click();
 await page.waitForLoadState('networkidle');
 const heading = page.locator('h1#firstHeading');
  await expect(heading).toHaveText('Recent changes');
});

test('Navigate to Talk Page and Verify Heading', async ({ page }) => {
await page.goto('https://www.wikipedia.org/');
await page.click('i.sprite.svg-search-icon');
await page.waitForSelector('input#vector-user-links-dropdown-checkbox', { timeout: 30000 });
await page.click('input#vector-user-links-dropdown-checkbox'); 
const talkOption = page.locator('a:has-text("Talk")');
await expect(talkOption).toBeVisible();
await talkOption.click();
await page.waitForLoadState('networkidle');
const heading = page.locator('h3');
await expect(heading).toHaveText('Welcome to this talk page');
});