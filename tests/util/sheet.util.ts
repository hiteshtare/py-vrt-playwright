//Importing Node modules
import * as _ from "lodash";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { config } from "dotenv";
import path from "path";
import fs from "fs";

//Importing Custom modules
import { APP_CONFIG } from "../config";
import { getLoggerLevel } from "./common.util";
import { writeJsonFile } from "write-json-file";

// Import configuration/variables from .env file in root folder
config();

// Logger initialise
const _logger = getLoggerLevel();

export async function getServiceAccountAuth() {
  // Initialize auth- use env
  return new JWT({
    email: APP_CONFIG.googleAuthEmail,
    key: APP_CONFIG.googleAuthKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function writeConfigJSONFile(sheetConfig: any) {
  _logger.warn("writeConfigJSONFile");

  try {
    let configArr = [];

    for (const singleConfig of sheetConfig) {
      configArr.push({
        centerName: `${singleConfig.centerName}`,
        fileName: `${singleConfig.fileName}`,
        filePath: `${singleConfig.filePath}`,
        center: `${singleConfig.center}`,
        sheetID: `${singleConfig.sheetID ? singleConfig.sheetID : ""}`,
      });
    }

    let file_name = `all-locations-events-config.json`;
    let file_path = `assets/jsons/`;
    file_path = `${file_path}/${file_name}`;

    _logger.info("Config - file_path");
    _logger.debug(file_path);
    await writeJsonFile(file_path, configArr);

    return [];
  } catch (err: any) {
    _logger.error(err);
    return [];
  }
}

export async function readConfigJSONFile() {
  _logger.warn("readConfigJSONFile");

  let file_name = `all-locations-events-config.json`;
  file_name = `assets/jsons/${file_name}`;

  try {
    const file_path = path.resolve(file_name);
    _logger.info("file_path");
    _logger.debug(file_path);

    var fileData;
    if (fs.existsSync(file_path)) {
      fileData = fs.readFileSync(file_path, "utf8");
      APP_CONFIG.sheet = JSON.parse(fileData.toString());
    } else {
      _logger.error("Config File - Not Found!");
    }
    return [];
  } catch (err: any) {
    _logger.error(err);
    return [];
  }
}

export async function writeJSONFileUsingSheetTab(currentConfig: any) {
  _logger.warn("writeJSONFileUsingSheetTab");

  try {
    const doc = new GoogleSpreadsheet(
      currentConfig.sheetID,
      await getServiceAccountAuth()
    );

    await doc.loadInfo();
    _logger.info("JSON - Spreadsheet name");
    _logger.debug(doc.title);

    const sheetCount = doc.sheetCount;
    _logger.info("JSON - Total sheets(tabs)");
    _logger.debug(sheetCount);

    for (var i = 0; i < sheetCount - 1; i++) {
      const sheet = doc.sheetsByIndex[i];
      _logger.info("JSON - Sheet(tab) Name");
      _logger.debug(sheet.title);

      if (sheet) {
        const rows = await sheet.getRows();
        _logger.info("JSON - Total rows");
        _logger.debug(rows.length);

        let jsonArr = "[";
        for (const row of rows) {
          jsonArr += row.get("[");
        }
        jsonArr += "]";
        const jsonsResult = JSON.parse(jsonArr.toString());
        // _logger.info("jsonsResult");
        // _logger.debug(jsonsResult);

        let file_name = `${currentConfig.center}-${currentConfig.fileName}-${sheet.title}-events.json`;
        file_name = file_name.toLowerCase();
        file_name = file_name.replace(/\s/g, "-");

        let file_path = `assets/jsons/${currentConfig.filePath}`;
        file_path = `${file_path}/${file_name}`;

        _logger.info("file_path");
        _logger.debug(file_path);
        await writeJsonFile(file_path, jsonsResult);
      }
    }

    return [];
  } catch (err: any) {
    axiosErrorHandling(err);
    return [];
  }
}

export async function loadSheetConfig() {
  _logger.warn("loadSheetConfig");

  try {
    const configDoc = new GoogleSpreadsheet(
      APP_CONFIG.configSheetID,
      await getServiceAccountAuth()
    );

    await configDoc.loadInfo(); // loads document properties and worksheets
    _logger.info("Config - Spreadsheet name");
    _logger.debug(configDoc.title);

    const configSheet = configDoc.sheetsByTitle[APP_CONFIG.configSheetTitle];
    _logger.info("Config - Sheet(tab) name");
    _logger.debug(configSheet.title);

    const configRows = await configSheet.getRows();

    APP_CONFIG.sheet = [];
    for (const row of configRows) {
      APP_CONFIG.sheet.push({
        center: row.get("Center ID"),
        centerName: row.get("Center Name"),
        fileName: row.get("File Name"),
        filePath: row.get("File Path"),
        sheetID: row.get("Sheet ID"),
      });
    }

    return APP_CONFIG.sheet;
  } catch (err: any) {
    axiosErrorHandling(err);
    throw err
    // return [];
  }
}

export async function getSheetConfigByCenter(
  centerId: string,
  languageId: string
) {
  _logger.warn("getSheetConfigByCenter");

  let centerConfig = APP_CONFIG.sheet.find((x: any) => x.center == centerId);

  /*
  If centerConfig is found then check for configured Language then after both check proceed
   Else false case
  */
  if (
    centerConfig &&
    APP_CONFIG.language.find((y) => y.language == languageId)
  ) {
    return centerConfig;
  }
}

export async function axiosErrorHandling(error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    _logger.error(error.response.data);
    _logger.error(error.response.status);
    _logger.error(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    _logger.error(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    _logger.error("Error", error.message);
  }
  _logger.error(error.config);
}
