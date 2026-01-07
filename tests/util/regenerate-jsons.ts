// Import custom config
import { getLoggerLevel, loadConfigFromENV } from "./common.util";
import {
  getSheetConfigByName,
  loadSheetConfig,
  writeConfigJSONFile,
  writeJSONFileUsingSheetTab,
} from "./sheet.util";

/**
 * Read environment variables from file.
 */
import dotenv from "dotenv";
import path from "path";
import { APP_CONFIG } from "../config";
dotenv.config({
  path: path.resolve(__dirname, `../../.env.staging`),
});

// Logger initialise
const _logger = getLoggerLevel();

// To assign global variables in APP_CONFIG using ENV
loadConfigForRegeneration();

//Run this function
regenerateJSONS();

//Define this function
export function loadConfigForRegeneration(): void {
  _logger.warn("loadConfigForRegeneration");

 APP_CONFIG.loggerLevel = "" + process.env.LOGGER_LEVEL;
  _logger.info(`loggerLevel : ${APP_CONFIG.loggerLevel}`);

  APP_CONFIG.baseURL = "" + process.env.BASE_URL;
  _logger.info(`baseURL : ${APP_CONFIG.baseURL}`);

  APP_CONFIG.googleAuthEmail = "" + process.env.GOOGLE_AUTH_EMAIL;
  _logger.info(`googleAuthEmail : ${APP_CONFIG.googleAuthEmail}`);
  APP_CONFIG.googleAuthKey = "" + process.env.GOOGLE_AUTH_KEY;
  APP_CONFIG.googleAuthKey = APP_CONFIG.googleAuthKey
    .split(String.raw`\n`)
    .join("\n");
  // _logger.info(`googleAuthKey : ${APP_CONFIG.googleAuthKey}`);
  APP_CONFIG.configSheetID = "" + process.env.CONFIG_SHEET_ID;
  _logger.info(`configSheetID : ${APP_CONFIG.configSheetID}`);
}

export async function regenerateJSONS() {
  _logger.warn("regenerateJSONS");

  // let name = APP_CONFIG.projects.English.PriorityPages.name;
  // let name = APP_CONFIG.projects.English.Events.name;
  // let name = APP_CONFIG.projects.English.Blogs.name;
  // let name = APP_CONFIG.projects.English.Locations.name;
  // let name = APP_CONFIG.projects.English.ImageGallery.name;
  let name = APP_CONFIG.projects.English.Bookstore.name;

  try {
    let message = "";

    // Set config by default to empty
    let currentConfig;

    const sheetConfig = await loadSheetConfig();

    //To create a single JSON config file only once
    await writeConfigJSONFile(sheetConfig);

    if (name) {
      currentConfig = await getSheetConfigByName(name, "en");

      if (currentConfig && currentConfig.sheetID) {
        await writeJSONFileUsingSheetTab(currentConfig);
        message = `JSONs for name:${name} are regenerated successfully!`;
      } else {
        _logger.error("RegenerateJSON Error - Invalid id!");
        message = "RegenerateJSON Error - Invalid id!";
      }
    } else {
      _logger.error("RegenerateJSON Error - Wrongs id passed!");
      message = "RegenerateJSON Error - Wrongs id passed!";
    }

    _logger.warn(message);
  } catch (err) {
    _logger.error(err);
  }
}

