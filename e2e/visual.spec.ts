import { test, expect } from "@playwright/test"

test.describe("Visual Regression Testing", () => {
  const urls = [
    "/base",
    "/base/4",
    "/base/tags/sample/2",
    "/base/tags/gubergren",
    "/base/sample4",
    "/base/sample5",
  ]
  for (const url of urls) {
    test(`testing on ${url}`, async ({ page }) => {
      await page.goto(url)
      const getToggleColorModeButton = page.getByRole("button", {
        name: "カラーモードを変更",
      })
      await getToggleColorModeButton.click()
      await expect(page).toHaveScreenshot({
        fullPage: true,
      })
      await getToggleColorModeButton.click()
      await expect(page).toHaveScreenshot({
        fullPage: true,
      })
    })
  }
})
