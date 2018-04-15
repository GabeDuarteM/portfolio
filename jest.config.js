module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/src/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/out/",
  ],
}
