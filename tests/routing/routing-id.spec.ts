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
});
