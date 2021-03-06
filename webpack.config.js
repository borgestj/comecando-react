module.exports = {
  mode: 'production',
  entry: './app/App.js',
  output: {
    filename: "bundle.js"
    //path: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
}
