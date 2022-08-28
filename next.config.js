const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
});
