// Import node modules
import { test } from "@playwright/test";

//Importing Custom modules
import { setupVRT, trackPagesInVRT } from "../util/vrt.util";
import { APP_CONFIG } from "../config";

const { vrt, trackOptions } = setupVRT("blogs", APP_CONFIG.vrtProjects.English);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe.skip("English - Blogs", () => {
  trackPagesInVRT(vrt, trackOptions, APP_CONFIG.jsonConfig.English.Blogs);
});
