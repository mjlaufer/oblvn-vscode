const theme = require('../theme');

// Input Control
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control

module.exports = {
    'input.background': theme.background,
    'input.border': theme.backgroundExtraLight,
    'input.foreground': theme.foreground,
    'input.placeholderForeground': theme.cyan,
    'inputOption.activeBorder': theme.cyan,
    'inputValidation.errorBackground': theme.red,
    'inputValidation.errorForeground': theme.foreground,
    'inputValidation.errorBorder': theme.red,
    'inputValidation.infoBackground': theme.blue,
    'inputValidation.infoForeground': theme.foreground,
    'inputValidation.infoBorder': theme.blue,
    'inputValidation.warningBackground': theme.yellow,
    'inputValidation.warningForeground': theme.background,
    'inputValidation.warningBorder': theme.yellow,
};
