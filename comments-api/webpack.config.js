const path = require('path');

const Dotenv = require('dotenv-webpack');
module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    externals: [],

    entry: {
      lambda: `./src/lambda.ts`,
    },
    output: {
      ...options.output,
      filename: `[name].js`,
      path: path.join(__dirname, 'build'),
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new Dotenv(),
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
