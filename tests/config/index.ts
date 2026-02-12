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
      Id: "f4927ba0-bc10-4548-95e7-bb757617a2b9",
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
      Id: "a6a2d128-5390-412a-a37d-1a33ad9a99e3",
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
      Id: "875f2d2f-8fd1-4653-b3f7-21961b5aefa7",
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
      Id: "f593c451-1e6a-487e-855b-98224940720d",
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
