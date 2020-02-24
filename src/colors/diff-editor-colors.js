const theme = require('../theme');

// Diff Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors

module.exports = {
    'diffEditor.insertedTextBackground': theme.backgroundExtraLight,
    'diffEditor.insertedTextBorder': '#FFFFFF4D',
    'diffEditor.removedTextBackground': theme.darkRed,
    'diffEditor.removedTextBorder': '#FFFFFF4D',
};
