import axios from "axios";

/**
 * Read environment variables from file.
 */
import dotenv from "dotenv";
import path from "path";
import { APP_CONFIG } from "../config";
import { getLoggerLevel } from "./common.util";
dotenv.config({
  path: path.resolve(__dirname, `../../.env.staging`),
});

// Logger initialise
const _logger = getLoggerLevel();

// To assign global variables in APP_CONFIG using ENV
loadConfigForGeneration();

//Run this function
generateCache();

//Define this function
export function loadConfigForGeneration(): void {
  _logger.warn("loadConfigForGeneration");

  APP_CONFIG.loggerLevel = "" + process.env.LOGGER_LEVEL;
  _logger.info(`loggerLevel : ${APP_CONFIG.loggerLevel}`);
}

async function generateCache() {
  const filePath = APP_CONFIG.projects.English.Blogs.jsonPath;
  const testDataForItems = require(filePath);

  let allResults: any[] = [];
  const requests = [];

  for (const item of testDataForItems) {
    const url = item.referenceUrl;
    _logger.debug(`Queueing request: ${url}`);
    // Create an async function to handle one call
    const requestPromise = (async () => {
      try {
        const response = await axios.get(url, {
          auth: {
            username: "yssdev",
            password: "Jaiguru@123!",
          },
        });
        return {
          url,
          headers: response.headers,
          data: response.data,
          status: response.status,
        };
      } catch (error: any) {
        return { url, error: error.message };
      }
    })();
    requests.push(requestPromise);
  }

  // Execute all requests in parallel
  _logger.warn("Executing all requests...");
  const responses = await Promise.all(requests);

  // Process results
  responses.forEach(async (res: any) => {
    if (res.error) {
      _logger.error(`Error fetching ${res.url}: ${res.error}`);
    } else {
      _logger.info(`WPO Cache Status for ${res.url}: ${res.headers['wpo-cache-status']}`);
      allResults.push(res.data);
    }
  });

  return allResults;
}

generateCache()
  .then((results) => {
    _logger.warn(
      `\n--- Cache generated successfully for All Language pages ---`,
    );
    // Flatten and display (adjust as needed for your API response)
    // const flattened = results.flat();
    // _logger.debug(`Total items found: ${flattened.length}`);
    // _logger.debug(JSON.stringify(flattened, null, 2)); // Uncomment to see data
  })
  .catch((err) => {
    _logger.error("An error occurred during execution:", err);
  });
