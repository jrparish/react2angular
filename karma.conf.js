module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['source-map-support', 'browserify', 'jasmine'],
    files: ['./src/**/*.test.js'],
    preprocessors: {
      './src/**/*.test.js': ['browserify']
    },
    browserify: {
      debug: true,
      external: ['angular', 'angular-mocks'],
      extensions: ['.js'],
      transform: ['rollupify']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
    browserConsoleLogOptions: {
      level: 'log',
      terminal: true
    },
    browserDisconnectTolerance: 30
  });
};
