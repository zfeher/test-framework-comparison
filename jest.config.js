module.exports = {
  roots: ["<rootDir>/tests/jest"],
  cacheDirectory: "node_modules/.cache/jest",
  // modulePathIgnorePatterns: [
  // "<rootDir>/.tmp",
  // "<rootDir>/dist",
  // "<rootDir>/.vscode",
  // ],
  // testEnvironment: 'jsdom',
  testEnvironment: "node",
  // testPathIgnorePatterns: [
  //   "/node_modules/",
  //   "<rootDir>/.tmp",
  //   "<rootDir>/dist",
  //   "<rootDir>/.vscode",
  // ],
  // transformIgnorePatterns: ['/node_modules/'],
  reporters: ["jest-silent-reporter"],
};
