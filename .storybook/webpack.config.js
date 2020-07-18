module.exports = {
  module: {
    rules: [
      // sass loader 來源：https://github.com/vuejs/vue-cli/issues/4513#issuecomment-526921340
      // 要先安裝： npm install -D sass sass-loader node-sass
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  }
}