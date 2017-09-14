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
      url: 'http://stage.people.com/crime/new-hampshire-mom-son-charged-murder-for-hire/'
  },
  
  specs: ['./Article/testing.js'],

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