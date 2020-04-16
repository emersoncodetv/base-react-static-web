import _https from "https";
import _url from "url";

global.fetch = jest.fn((url, options) => {
  url = _url.parse(url);
  options = {
    host: url.host,
    port: "443",
    mode: options.mode || "no-cors",
    path: url.path,
    method: options.method,
    headers: options.headers,
    body: options.body
  };
  return new Promise((resolve, reject) => {
    let data = "";
    // Set up the request
    var request = _https.request(options, function(response) {
      response.setEncoding("utf-8");
      response.json = () =>
        new Promise((resolve, reject) => {
          resolve(JSON.parse(data));
        });
      response.status = response.statusCode;

      response.on("data", function(chunk) {
        data += chunk.toString();
      });

      response.on("end", () => {
        // console.log(response);
        resolve(response);
      });
    });

    // post the data
    request.write(options.body);

    request.on("error", error => {
      console.log(error);
    });
    request.end();
  });
});
