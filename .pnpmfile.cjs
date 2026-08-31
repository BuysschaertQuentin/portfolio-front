module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies.nanoid) {
        pkg.dependencies.nanoid = "^3.3.17";
      }
      if (pkg.dependencies && pkg.dependencies.postcss) {
        pkg.dependencies.postcss = "^8.5.23";
      }
      if (pkg.dependencies && pkg.dependencies["js-yaml"]) {
        pkg.dependencies["js-yaml"] = "^4.3.1";
      }
      if (pkg.dependencies && pkg.dependencies["brace-expansion"]) {
        pkg.dependencies["brace-expansion"] = "^1.1.18";
      }
      return pkg;
    },
  },
};
