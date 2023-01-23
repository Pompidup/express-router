/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  maxWorkers: 1,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  setupFiles: [
    'dotenv/config',
    '<rootDir>/test/jest.env.ts',
    '<rootDir>/test/jest.setup.ts',
  ],
  testPathIgnorePatterns: ['dist'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/**/index.ts',
  ],
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage/',
}
