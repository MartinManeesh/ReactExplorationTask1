module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/tests/**',
      '!**/coverage/**',
      '!jest.config.js',
    ],
    coverageThreshold: {
      global: {
        branches: 25,
        functions: 25,
        lines: 25,
        statements: 25,
      },
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFiles: [
      '<rootDir>/tests/setup.js',
    ],
    setupFilesAfterEnv: [
      '<rootDir>/tests/setupAfterEnv.js',
    ],
    testMatch: [
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
      '/.next/',
      '/node_modules/',
      '/tests/',
      '/coverage/'
    ],
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
  };