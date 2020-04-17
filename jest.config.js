process.env.FB_MESSENGER = "000000000000000";
process.env.TOKEN_URL = "https://dev.api.auth.serendipia.co/sandbox/token";
process.env.SCO_APPID = "937e4e6d-50f9-4311-d8da-bd901dcf3b57";
process.env.PROVIDER_APP_ID = "146216979586718";
process.env.SCO_AUTH_URL = "https://dev.api.auth.serendipia.co/sandbox";

module.exports = {
  moduleNameMapper: {
    "^@dummydata(.*)$": "<rootDir>/__dummydata__$1",
    "^@mocks(.*)$": "<rootDir>/__mocks__$1",

    "^@Entry(.*)$": "<rootDir>/src/Entry$1",
    "^@Helpers(.*)$": "<rootDir>/src/Helpers$1",

    "^@Cross(.*)$": "<rootDir>/src/Cross$1",
    // "^@GlobalPages(.*)$": "<rootDir>/src/Pages/Global$1",
    "^styled-components(.*)$": "<rootDir>/node_modules/styled-components$1",
    "^react(.*)$": "<rootDir>/node_modules/react$1",
  },
};
