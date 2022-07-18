exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.avon.com/',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: true,
      windowSize: 'maximize',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    headerMenu: './pages/headerMenu.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    }
  }
}