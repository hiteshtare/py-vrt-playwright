// Import node modules
import { test } from "@playwright/test";

//Importing Custom modules
import { setupVRT, trackPagesInVRT } from "../../util/vrt.util";
import { APP_CONFIG } from "../../config";

const { vrt, trackOptions } = setupVRT(
  APP_CONFIG.projects.Telugu.Id,
  APP_CONFIG.projects.Telugu.Events.name
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe("Telugu - Events", () => {
  trackPagesInVRT(
    vrt,
    trackOptions,
    APP_CONFIG.projects.Telugu.Events.jsonPath
  );
});
