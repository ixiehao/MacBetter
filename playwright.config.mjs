import { defineConfig } from "@playwright/test";

const port = Number(process.env.MACBETTER_TEST_PORT || 4173);
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: 2,
  timeout: 30_000,
  globalTimeout: 15 * 60_000,
  expect: { timeout: 5_000 },
  reporter: [["list"], ["html", { open: "never" }], ["json", { outputFile: "test-results/report.json" }]],
  use: {
    baseURL: `http://127.0.0.1:${port}/MacBetter/`,
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    reducedMotion: "reduce",
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "webkit", use: { browserName: "webkit" } }
  ],
  webServer: {
    command: "node scripts/serve-test-site.mjs",
    url: `http://127.0.0.1:${port}/MacBetter/`,
    reuseExistingServer: false,
    timeout: 15_000
  }
});
