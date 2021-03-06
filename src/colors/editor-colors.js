const theme = require('../theme');

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = {
    'editor.background': theme.background,
    'editor.foreground': theme.foreground,
    'editorLineNumber.foreground': theme.gray,
    'editorLineNumber.activeForeground': theme.cyan,
    'editorCursor.foreground': theme.foreground,
    'editor.selectionBackground': theme.transparent54,
    // "editor.selectionHighlightBackground": theme.transparent54,
    'editor.inactiveSelectionBackground': theme.transparent31,
    'editor.wordHighlightBackground': theme.transparent00,
    'editor.wordHighlightStrongBackground': theme.transparent00,
    'editor.findMatchBackground': theme.transparent54,
    'editor.findMatchHighlightBackground': theme.transparent31,
    // "editor.findRangeHighlightBackground": theme.transparent31,
    'editor.hoverHighlightBackground': theme.transparent31,
    'editor.lineHighlightBackground': theme.transparent15,
    // "editor.lineHighlightBorder": theme.backgroundExtraLight,
    'editorLink.activeForeground': theme.blue,
    'editor.rangeHighlightBackground': theme.backgroundExtraLight,
    'editorWhitespace.foreground': theme.gray,
    'editorIndentGuide.background': theme.transparent31,
    'editorIndentGuide.activeBackground': theme.cyan,
    'editorRuler.foreground': theme.transparent31,
    'editorCodeLens.foreground': theme.gray,
    'editorBracketMatch.background': theme.transparent,
    'editorBracketMatch.border': theme.cyan,
    'editorOverviewRuler.border': theme.backgroundExtraLight,
    // "editor.stackFrameHighlightBackground": "red",
    // "editor.focusedStackFrameHighlightBackground": "red",

    'editorOverviewRuler.findMatchForeground': theme.transparent15,
    'editorOverviewRuler.rangeHighlightForeground': theme.transparent15,
    'editorOverviewRuler.selectionHighlightForeground': theme.transparent15,
    'editorOverviewRuler.wordHighlightForeground': theme.transparent15,
    'editorOverviewRuler.wordHighlightStrongForeground': theme.transparent15,
    'editorOverviewRuler.modifiedForeground': theme.blue,
    'editorOverviewRuler.addedForeground': theme.green,
    'editorOverviewRuler.deletedForeground': theme.red,
    'editorOverviewRuler.errorForeground': theme.red,
    'editorOverviewRuler.warningForeground': theme.yellow,
    'editorOverviewRuler.infoForeground': theme.blue,

    'editorError.foreground': theme.red,
    'editorError.border': theme.background,
    'editorWarning.foreground': theme.yellow,
    'editorWarning.border': theme.background,
    'editorGutter.background': theme.background,
    'editorGutter.modifiedBackground': theme.blue,
    'editorGutter.addedBackground': theme.green,
    'editorGutter.deletedBackground': theme.red,
};
