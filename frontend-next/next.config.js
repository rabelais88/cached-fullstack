module.exports = {
  webpack: (config, { defaultLoaders }) => {

    // setup for sass in styled-jsx
    config.module.rules.push({
      test: /\.scss$|\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            // type: "scoped"
            type: "global"
          }
        },
        "sass-loader"
      ]
    });

    return config;
  }
};