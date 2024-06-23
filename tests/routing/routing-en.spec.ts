import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/en");
});

test.describe("Routing English", () => {
  test("should have title", async ({ page }) => {
    await expect(page).toHaveTitle(/Easy Pack/);
  });

  test("should have appropriate catchphrase", async ({ page }) => {
    const catchphraseText = page.locator(
      'text="Discover the seamless blend of functionality and elegance with our range of essentials, designed to enhance your everyday needs."'
    );

    await expect(catchphraseText).toBeVisible();
  });

  /*
  test("navigate to products page", async ({ page }) => {
    await page.click('text="Products"');
    await page.waitForTimeout(2);
    await expect(page).toHaveURL(/\/en\/products/);
  });
  test("navigate to about page", async ({ page }) => {
    await page.click('text="About"');
    await page.waitForTimeout(2);
    await expect(page).toHaveURL(/\/en\/about/);
  });
  test("navigate to contact page", async ({ page }) => {
    await page.click('text="Contact"');
    await page.waitForTimeout(2);
    await expect(page).toHaveURL(/\/en\/contact/);
  });
  */
});
