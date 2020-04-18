// import path from 'path'

const path = require("path");

const GetConfig = (env) => {
  if (env === "prod") {
    return {
      T_ENV: "prod",
      MESSENGER: "146216979586718",
      TOKEN_URL: "https://api.ybot.chat/auth/token",
      ADMIN_SECRET: {},
      NODE_ENV: "production",
      WEB_TITLE: "Curriculum Pedidos",
      YBOT_URL_GRAPHQL: "https://hasura.ybot.chat/v1alpha1/graphql",
      _Dirname: path.resolve("../webviews.ybot.chat/www"),
    };
  }

  if (env === "test") {
    return {
      T_ENV: "test",
      MESSENGER: "463382010714268",
      TOKEN_URL: "https://test.api.ybot.chat/auth/token",
      ADMIN_SECRET: {},
      NODE_ENV: "production",
      WEB_TITLE: "Curriculum Pedidos Test",
      YBOT_URL_GRAPHQL: "https://test.hasura.ybot.chat/v1alpha1/graphql",
      _Dirname: path.resolve("../test.webviews.ybot.chat/www"),
    };
  }

  if (env === "dev") {
    return {
      T_ENV: "dev",
      MESSENGER: "1746213695687290",
      TOKEN_URL: "https://dev.api.ybot.chat/auth/token",
      ADMIN_SECRET: {},
      WEB_TITLE: "Curriculum Pedidos Dev",
      YBOT_URL_GRAPHQL: "https://dev.hasura.ybot.chat/v1alpha1/graphql",
      _Dirname: path.resolve("../dev.webviews.ybot.chat/www"),
    };
  }

  if (env === "debug") {
    return {
      T_ENV: "dev",
      MESSENGER: "1746213695687290",
      "facebooksandbox-user": "1746213695687290",
      "facebooksandbox-store": "177671746119456",
      TOKEN_URL: "https://dev.api.ybot.chat/auth/token",
      ADMIN_SECRET: {
        "x-hasura-admin-secret":
          "PiPdKgVyZB6yD3Hfk}Ku#;sgMFKY9ug[+m66g9&ky34H[9+nBZC2?NVL*mQUZnvT",
      },
      WEB_TITLE: "Curriculum Pedidos Debug",
      YBOT_URL_GRAPHQL: "http://localhost:7777/v1alpha1/graphql",
      X_HASURA_ADMIN_SECRET:
        "PiPdKgVyZB6yD3Hfk}Ku#;sgMFKY9ug[+m66g9&ky34H[9+nBZC2?NVL*mQUZnvT",
      _Dirname: path.resolve("../dev.webviews.ybot.chat/www"),
    };
  }

  if (env === "debug-dev") {
    return {
      T_ENV: "dev",
      MESSENGER: "1746213695687290",
      "facebooksandbox-user": "1746213695687290",
      "facebooksandbox-store": "177671746119456",
      ADMIN_SECRET: {
        "x-hasura-admin-secret":
          "PiPdKgVyZB6yD3Hfk}Ku#;sgMFKY9ug[+m66g9&ky34H[9+nBZC2?NVL*mQUZnvT",
      },
      TOKEN_URL: "https://dev.api.ybot.chat/auth/token",
      WEB_TITLE: "Curriculum Pedidos Dev",
      YBOT_URL_GRAPHQL: "https://dev.hasura.ybot.chat/v1alpha1/graphql",
      _Dirname: path.resolve("../dev.webviews.ybot.chat/www"),
    };
  }
};

module.exports = GetConfig;

// Pro Fulfillment https://api.ybot.chat/api-ai-wk/client
