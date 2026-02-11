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
      Id: "a936af98-8eaa-4771-88d1-251956052fb6",
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
      Id: "4de58beb-2f78-4ecc-b5e5-7ceed483ccfa",
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
      Id: "7f436359-3089-40ad-ae27-8fd92aeeb3c7",
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
      Id: "868c1c09-fcb0-4f60-959b-be6d6b11b6f8",
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
      Id: "cf19404b-6f8c-4659-99c0-b858a7f21b87",
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
