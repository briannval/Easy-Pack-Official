import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/id");
});

test.describe("Routing Indonesian", () => {
  test("should have title", async ({ page }) => {
    await expect(page).toHaveTitle(/Easy Pack/);
  });

  test("should have appropriate catchphrase", async ({ page }) => {
    const catchphraseText = page.locator(
      'text="Temukan perpaduan sempurna antara fungsionalitas dan keanggunan dengan rangkaian produk penting kami, yang dirancang untuk meningkatkan kebutuhan sehari-hari Anda."'
    );

    await expect(catchphraseText).toBeVisible();
  });

  test("navigate to products page", async ({ page }) => {
    await page.click('text="Produk"');
    await expect(page).toHaveURL(/\/id\/products/);
  });
  test("navigate to about page", async ({ page }) => {
    await page.click('text="Tentang Kami"');
    await expect(page).toHaveURL(/\/id\/about/);
  });
  test("navigate to contact page", async ({ page }) => {
    await page.click('text="Kontak"');
    await expect(page).toHaveURL(/\/id\/contact/);
  });
});
