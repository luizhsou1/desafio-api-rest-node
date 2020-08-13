// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/configs/**',
    '!<rootDir>/src/shared/**',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/infra/**',
    '!<rootDir>/src/users/controllers/**',
    '!<rootDir>/src/users/repositories/**',
    '!<rootDir>/src/server.ts',
    '!**/index*',
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
