const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.min.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
