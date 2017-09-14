let SpecReporter = require('jasmine-spec-reporter').SpecReporter;



exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },

  params: {
      url: 'http://stage.ew.com/movies/2017/09/13/devil-wears-prada-script/'
  },
  
  specs: ['./Article/article.spec.js'],

  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },

  onPrepare: function() {
      browser.driver.manage().timeouts().implicitlyWait(10000);
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  }
};