module.exports = {
  verbose: false,
  rootDir: './',
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  coverageReporters: ['html', 'clover', 'cobertura'],
  coverageDirectory: '<rootDir>/_TEST_RESULTS_/unit',
  coverageThreshold: {
    './components': {
      statements: 90,
      lines: 70,
      functions: 70,
      branches: 70,
    },
    './store': {
      statements: 100,
      lines: 100,
      functions: 100,
      branches: 100,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
  ],
}
