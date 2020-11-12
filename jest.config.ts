module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/tests/*.test.ts', '<rootDir>/api/tasks/tests/*.test.ts'],
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTittle: 'Test Report'
      }
    ]
  ]
}
