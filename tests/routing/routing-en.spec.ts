import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/en");
});

test.describe("Routing Englsh", () => {
  test("should have title", async ({ page }) => {
    await expect(page).toHaveTitle(/Easy Pack/);
  });

  test("should have appropriate catchphrase", async ({ page }) => {
    const catchphraseText = page.locator(
      'text="Discover the seamless blend of functionality and elegance with our range of essentials, designed to enhance your everyday needs."'
    );

    await expect(catchphraseText).toBeVisible();
  });
});
