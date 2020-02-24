const theme = require('../theme');

// Merge Conflicts
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts

module.exports = {
    'merge.currentHeaderBackground': theme.backgroundLight,
    'merge.currentContentBackground': theme.backgroundLight,
    'merge.incomingHeaderBackground': theme.backgroundLight,
    'merge.incomingContentBackground': theme.backgroundLight,
    'merge.border': theme.backgroundExtraLight,
    'editorOverviewRuler.currentContentForeground': theme.red,
    'editorOverviewRuler.incomingContentForeground': theme.red,
};
