import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

test.describe("Accessibility Testing", () => {
  const urls = ["/base", "/base/sample10"]
  for (const url of urls) {
    test(`testing on ${url}`, async ({ page }) => {
      await page.goto(url)
      const accessibilityScanResults = await new AxeBuilder({ page })
        .exclude(".chakra-portal")
        .disableRules(["link-in-text-block"])
        .analyze()
      expect(accessibilityScanResults.violations).toEqual([])
    })
  }
})
