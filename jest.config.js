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
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
  ],
}
