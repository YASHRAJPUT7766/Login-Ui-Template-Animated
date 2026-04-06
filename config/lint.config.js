/**
 * Shared lint config used by validate-designs.js
 */

module.exports = {
  rules: {
    requireIndexHtml: true,
    requireStyleCss: true,
    requireDoctype: true,
    requireKebabCase: true,
    noAbsolutePaths: true,
    warnMissingTitle: true,
    warnMissingViewport: true,
    warnMissingPreview: true,
  },
  ignore: [
    'node_modules',
    '.git',
    'dist',
  ]
};
