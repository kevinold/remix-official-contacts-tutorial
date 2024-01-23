/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  appDirectory: "app",
  assetsBuildDirectory: "static",
  serverBuildPath: "build/index.js",
  publicPath: "/",
};
