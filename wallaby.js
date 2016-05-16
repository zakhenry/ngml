module.exports = function (wallaby) {

  wallaby.defaults.files.instrument = false;

  return {
    files: [
      {pattern: 'src/**/*.ts', instrument: true, load: false},
      {pattern: 'src/**/*.spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*.spec.ts', load: false}
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        // CommonJs
        module: 1,
        emitDecoratorMetadata: true,
        experimentalDecorators: true
      })
    },

    testFramework: 'mocha',

    debug: true,

    bootstrap: function (w) {
      // outputs test file names, with .ts extensions changed to .js
      console.log(w.tests);
      console.log('wallaby', w);
    }
  };
};
