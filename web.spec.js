



//const { test, expect } = require('@playwright/test');
 /*test('filter', async ({page}) =>{

     await page.goto('https://www.demoblaze.com/');

     await page.getByRole("link")
     .filter({ hasText: 'Iphone 6 32gb' })
     .click();

     await page.goto('https://www.demoblaze.com/prod.html?idp_=5')

     await page.getByRole('link', {name: "Add to cart"})
     .click()

 })

     test('test', async ({ page }) => {
        await page.goto('https://www.amazon.in/');
        await page.goto('https://www.amazon.in/s/?_encoding=UTF8&i=electronics&rh=n%3A14647040031&s=review-rank&pd_rd_w=H5YYO&content-id=amzn1.sym.e320451d-211c-4953-ad11-13b320ea978c&pf_rd_p=e320451d-211c-4953-ad11-13b320ea978c&pf_rd_r=3GYH1AD8QV70CZQPJZAH&pd_rd_wg=JPH1h&pd_rd_r=f5c0b135-5073-4648-8e05-2634e3c99e52&ref_=pd_hp_d_btf_unk');
        await page.goto('https://www.amazon.in/s?i=electronics&rh=n%3A14647040031&s=review-rank&_encoding=UTF8&content-id=amzn1.sym.e320451d-211c-4953-ad11-13b320ea978c&pd_rd_r=f5c0b135-5073-4648-8e05-2634e3c99e52&pd_rd_w=H5YYO&pd_rd_wg=JPH1h&pf_rd_p=e320451d-211c-4953-ad11-13b320ea978c&pf_rd_r=3GYH1AD8QV70CZQPJZAH&ref=pd_hp_d_btf_unk');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('heading', { name: '(Refurbished) IQOO Neo 6 5G (' }).getByRole('link').click();
        const page1 = await page1Promise;
        await page1.getByTitle('Add to Shopping Cart').click();
        
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


  
   