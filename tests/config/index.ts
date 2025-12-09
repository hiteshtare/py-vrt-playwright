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
      centerName: "",
      fileName: "",
      filePath: "",
      center: "",
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
  vrtProjects: {
    English: "c162b87d-c1d0-4348-a428-17ffb9c1e38b",
    Hindi: "12438585-efc0-48bc-8bbd-8de4cc220a92",
    Tamil: "f408d220-612b-41a5-a4eb-435633dbdb86",
  },
};
