const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      ]
    }
  },
  chainWebpack: config => {
    config.entry('app').clear();
    config.entry('app').add('./src/main.ts');
  }
}