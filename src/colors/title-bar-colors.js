const theme = require('../theme');

// Title Bar Colors (macOS)
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors-macos

module.exports = {
    'titleBar.activeBackground': theme.background,
    'titleBar.activeForeground': theme.cyan,
    'titleBar.inactiveBackground': theme.background,
    'titleBar.inactiveForeground': theme.cyan,
    'titleBar.border': theme.backgroundExtraLight,
};
