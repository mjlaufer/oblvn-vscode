const theme = require('../theme');

// Peek View Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors

module.exports = {
    'peekView.border': theme.backgroundExtraLight,
    'peekViewEditor.background': theme.backgroundLight,
    'peekViewEditorGutter.background': theme.backgroundLight,
    'peekViewEditor.matchHighlightBackground': '#FFFFFF1F',
    'peekViewResult.background': theme.backgroundLight,
    'peekViewResult.fileForeground': theme.foreground,
    'peekViewResult.lineForeground': theme.foreground,
    'peekViewResult.matchHighlightBackground': '#FFFFFF1F',
    'peekViewResult.selectionBackground': theme.backgroundExtraLight,
    'peekViewResult.selectionForeground': theme.foreground,
    'peekViewTitle.background': theme.backgroundLight,
    'peekViewTitleDescription.foreground': theme.foregroundDark,
    'peekViewTitleLabel.foreground': theme.foreground,
};
