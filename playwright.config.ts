// @ts-check
import { devices, PlaywrightTestConfig } from '@playwright/test'
import { testconfig } from './testconfig';
const ENV = process.env.ENV

if (!ENV || ![`functional`,`api`].includes(ENV)) {
  console.log(`Please provide a correct environment value like "npx cross-env ENV=functional|api"`);
  process.exit();
}

const config: PlaywrightTestConfig = {

  // testDir: './tests',
  // testMatch:['*.test.ts','*.api.ts'],
  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20000
  },
  //Global Setup to run before all tests
  //globalSetup: `./global-setup`,

  //Global Teardown to run after all tests
  //globalTeardown: `./global-teardown`,

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  // reporter: [[`./CustomReporterConfig.ts`], ['list'], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],
  reporter: [ [`html`, { outputFolder: 'html-report', open: 'never' }]],

  /* Configure projects for major browsers */
  projects: [
   
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testconfig[process.env.ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
  ],
};
export default config;