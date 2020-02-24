const theme = require('../theme');

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
    'editorWidget.background': theme.backgroundLight,
    'editorWidget.border': theme.backgroundExtraLight,
    'editorSuggestWidget.background': theme.backgroundLight,
    'editorSuggestWidget.border': theme.backgroundExtraLight,
    'editorSuggestWidget.foreground': theme.foreground,
    // "editorSuggestWidget.highlightForeground": "#FF0000",
    'editorSuggestWidget.selectedBackground': theme.backgroundExtraLight,
    'editorHoverWidget.background': theme.backgroundLight,
    'editorHoverWidget.border': theme.backgroundExtraLight,
    'debugExceptionWidget.background': theme.backgroundLight,
    'debugExceptionWidget.border': theme.backgroundExtraLight,
    'editorMarkerNavigation.background': theme.backgroundLight,
    'editorMarkerNavigationError.background': theme.red,
    'editorMarkerNavigationWarning.background': theme.yellow,
};
