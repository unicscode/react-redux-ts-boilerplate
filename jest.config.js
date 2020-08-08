module.exports = {
  coverageDirectory: '<rootDir>/test-coverage',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
