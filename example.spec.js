// @ts-check
/*const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {
  
  // Navigate to the page
  await page.goto('https://playwright.dev/');

  // Expect the title "to contain" a substring
  await expect(page).toHaveTitle(/Playwright/);

});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


//const { test, expect } = require('@playwright/test');
 
test("githubme", async ({page}) => {
  await page.goto("https://github.com/aryan1403");
 
  await expect(page).toHaveTitle(/aryan1403/)
})

 test("btnclick", async ({page}) => {
  await page.goto("https://www.google.co.in/");
 
  await expect(page.getByLabel("Search")).toBeTruthy()
}) 









test('my test', async ({page}) => {
  await page.goto("https://playwright.dev/")
  const h1 = await page.locator(".highlight_gXVj").first()
 
  await expect(h1).toHaveText(/Playwright/)
})
 

test('cloud that', async ({page}) => {
  await page.goto("https://testprep.cloudthat.com/login/index.php");
  await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
  await page.getByPlaceholder("Password").fill("123");
 
  await page.locator("#loginbtn").click()
 
  // T&C
  // checkbox
  // await page.getByLabel("I agree to the terms & conditions").check()
 
  // radio btn
  // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
});

test("mocks a fruit and doesn't call api", async ({ page }) => {
   //Mock the api call before navigating
  await page.route('api/v1/fruits', async route => {
   const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');
 
  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();
});*/







