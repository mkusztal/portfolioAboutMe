module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      1,
      "always",
      ["chore", "feat", "fix", "docs", "style", "test", "ci"],
    ],
    "scope-case": [2, "always", ["camel-case", "pascal-case", "lowercase"]],
  },
};
