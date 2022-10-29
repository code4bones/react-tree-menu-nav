const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async config => {
    /*
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    */
    config.module.rules.push({
      test: /\.(less)$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });

    /*
    config.module.rules.push({
    test: /\.(less)$/,
    use: [{
    	loader: "style-loader" // creates style nodes from JS strings
    }, {
    	loader: "css-loader" // translates CSS into CommonJS
    }, {
    	loader: "less-loader" // compiles Less to CSS
    }]
    });
    */
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", {
          flow: false,
          typescript: true
        }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx", ".less");
    return config;
  },
  core: {
    builder: "@storybook/builder-webpack5"
  }
};