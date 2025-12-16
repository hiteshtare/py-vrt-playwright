export const APP_CONFIG = {
  loggerLevel: "",
  //Google sheet
  googleAuthEmail: "",
  googleAuthKey: "",
  configSheetID: "",
  configSheetTitle: "Config", //Define config Spreadsheet Title to fetch all JSON Sheets configured
  //Dynamic config for Centers using Google Sheet
  sheet: [
    {
      id: "",
      name: "",
      filePath: "",
      sheetID: "",
    },
  ],
  //Define config for language
  language: [
    {
      language: "en", //English
    },
    {
      language: "hi", //Hindi
    },
    {
      language: "ta", //Tamil
    },
    {
      language: "te", //Telugu
    },
    {
      language: "bn", //Bengali
    },
    {
      language: "kn", //Kannada
    },
  ],
  //Global settings
  baseURL: "",
  authPopUpUser: "",
  authPopUpPassword: "",
  loginEmail: "",
  loginPassword: "",
  //VRT config
  retryCount: 0,
  projects: {
    English: {
      Id: "c162b87d-c1d0-4348-a428-17ffb9c1e38b",
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/en-priority-pages.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/en-events.json",
      },
      Blogs: {
        name: "blogs",
        jsonPath: "../../tests/testData/blogs/en-blogs.json",
      },
      Templates: {
        name: "templates",
        jsonPath: "../../tests/testData/templates/en-templates.json",
      },
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/en-locations.json",
      },
    },
    Hindi: {
      Id: "12438585-efc0-48bc-8bbd-8de4cc220a92",
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/hi-priority-pages.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/hi-events.json",
      },
      Blogs: {
        name: "blogs",
        jsonPath: "../../tests/testData/blogs/hi-blogs.json",
      },
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/hi-locations.json",
      },
    },
    Tamil: {
      Id: "f408d220-612b-41a5-a4eb-435633dbdb86",
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/ta-priority-pages.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/ta-events.json",
      },
      Blogs: {
        name: "blogs",
        jsonPath: "../../tests/testData/blogs/ta-blogs.json",
      },
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/ta-locations.json",
      },
    },
    Telugu: {
      Id: "1956ce30-5775-4cac-8182-8920028540b6",
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/te-locations.json",
      },
    },
    Bangla: {
      Id: "c5409728-2b37-4227-8a2a-14e999ccfb42",
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/bn-locations.json",
      },
    },
  },
};
