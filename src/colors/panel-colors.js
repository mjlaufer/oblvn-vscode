const theme = require('../theme');

// Panel Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors

module.exports = {
    'panel.background': theme.background,
    'panel.border': theme.backgroundExtraLight,
    'panelTitle.activeBorder': theme.backgroundExtraLight,
    'panelTitle.activeForeground': theme.foreground,
    'panelTitle.inactiveForeground': theme.cyan,
};
