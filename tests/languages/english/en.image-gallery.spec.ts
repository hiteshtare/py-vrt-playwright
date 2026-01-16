// Import node modules
import { test } from "@playwright/test";

//Importing Custom modules
import { setupVRT, trackPagesInVRT } from "../../util/vrt.util";
import { APP_CONFIG } from "../../config";

const { vrt, trackOptions } = setupVRT(
  APP_CONFIG.projects.English.Id,
  APP_CONFIG.projects.English.ImageGallery.name
);

test.beforeAll(async () => {
  await vrt.start();
});

test.afterAll(async () => {
  await vrt.stop();
});

test.describe.only("English - ImageGallery", () => {
  trackPagesInVRT(
    vrt,
    trackOptions,
    APP_CONFIG.projects.English.ImageGallery.jsonPath
  );
});
