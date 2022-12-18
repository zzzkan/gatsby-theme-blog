import { PlaywrightTestConfig, devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "http://localhost:9000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "iPhone 13",
      use: { ...devices["iPhone 13"] },
    },
  ],
  testDir: "./e2e",
  retries: process.env.CI != null ? 2 : 0,
  workers: process.env.CI != null ? 1 : undefined,
  reporter: process.env.CI != null ? "github" : "list",
  webServer: {
    command: "yarn workspace site serve",
    port: 9000,
    reuseExistingServer: process.env.CI == null,
  },
}

export default config
