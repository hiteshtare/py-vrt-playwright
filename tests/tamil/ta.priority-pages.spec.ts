// Import node modules
import { test } from "@playwright/test";

//Importing Custom modules
import { setupVRT, trackPagesInVRT } from "../util/vrt.util";
import { APP_CONFIG } from "../config";

const { vrt, trackOptions } = setupVRT(
  "priority-pages",
  APP_CONFIG.vrtProjects.Tamil
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe.skip("Tamil - Priority Pages", () => {
  trackPagesInVRT(vrt, trackOptions, APP_CONFIG.jsonConfig.Tamil.PriorityPages);
});
