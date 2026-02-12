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
    //Generate Cache config
  isGenerateCache: false,
  //VRT config
  layout: "Desktop",
  retryCount: 0,
  projects: {
    English: {
      Id: "788fee97-fc69-4a15-ab24-f36b3101ff4f",
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
      ImageGallery: {
        name: "image-gallery",
        jsonPath: "../../tests/testData/image-gallery/en-image-gallery.json",
      },
      Bookstore: {
        name: "bookstore",
        jsonPath: "../../tests/testData/bookstore/en-bookstore.json",
      },
      TeachingsLibrary: {
        name: "teachings-library",
        jsonPath: "../../tests/testData/teachings-library/en-teachings-library.json",
      },
    },
    Hindi: {
      Id: "ea11eb73-df25-40a8-9bf0-2c5379e90721",
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
      ImageGallery: {
        name: "image-gallery",
        jsonPath: "../../tests/testData/image-gallery/hi-image-gallery.json",
      },
    },
    Tamil: {
      Id: "055d4a20-4a05-47e0-89c9-e27ea2aaacbf",
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
      ImageGallery: {
        name: "image-gallery",
        jsonPath: "../../tests/testData/image-gallery/ta-image-gallery.json",
      },
    },
    Telugu: {
      Id: "c34ed4c5-6749-4dd0-bcb3-075ebea7a68f",
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/te-priority-pages.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/te-events.json",
      },
      Blogs: {
        name: "blogs",
        jsonPath: "../../tests/testData/blogs/te-blogs.json",
      },
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/te-locations.json",
      },
      ImageGallery: {
        name: "image-gallery",
        jsonPath: "../../tests/testData/image-gallery/te-image-gallery.json",
      },
    },
    Bangla: {
      Id: "5307a424-04a1-4ab4-a075-1a0876590219",
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/bn-locations.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/bn-events.json",
      },
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/bn-priority-pages.json",
      },
    },
    Kannada: {
      Id: "510b59ed-32f5-4d53-b7be-6bda4f6f0e2c",
      Locations: {
        name: "locations",
        jsonPath: "../../tests/testData/locations/kn-locations.json",
      },
      Events: {
        name: "events",
        jsonPath: "../../tests/testData/events/kn-events.json",
      },
      PriorityPages: {
        name: "priority-pages",
        jsonPath: "../../tests/testData/priority-pages/kn-priority-pages.json",
      },
    },
  },
};
