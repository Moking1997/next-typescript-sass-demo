const withSass = require("@zeit/next-sass");

module.exports = withSass({
  // 开启css模块化
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    // scoped class 格式
    localIdentName: "[local]__[hash:base64:5]",
  },
  webpack: (config) => {
    // 全局变量和mixin
    config.module.rules.push({
      enforce: "pre",
      test: /.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: ["./public/static/css/variables.scss"],
      },
    });

    return config;
  },
});
