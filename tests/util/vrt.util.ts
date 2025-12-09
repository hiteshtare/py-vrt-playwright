import {
  PlaywrightVisualRegressionTracker,
  Config,
  PageTrackOptions,
} from "@visual-regression-tracker/agent-playwright";
import { chromium } from "@playwright/test";

export function setupVRT(buildName: string, projectId: string) {
  const buildId = `${
    process.env.VRT_BUILDPREFIX
  }_${buildName}_${new Date().toLocaleDateString('en-IN')}`;

  const config: Config = {
    apiUrl: "" + process.env.VRT_APIURL, // URL where backend is running
    project: projectId,
    apiKey: "" + process.env.VRT_APIKEY, // User apiKey
    branchName: "" + process.env.VRT_BRANCHNAME, // Current git branch
    ciBuildId: buildId,
    enableSoftAssert: true, // Log errors instead of throwing exceptions
  };
  const browserName = chromium.name();

  const vrt = new PlaywrightVisualRegressionTracker(browserName, config);

  const trackOptions: PageTrackOptions = {
    diffTollerancePercent: 5,
    screenshotOptions: {
      fullPage: true,
    },
    // agent: {
    //   device: "Desktop",
    //   os:"Linux",
    //   viewport: "1366x768"
    // }
  };

  return { vrt, trackOptions };
}
