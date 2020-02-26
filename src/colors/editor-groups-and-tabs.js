const theme = require('../theme');

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
    'editorGroup.border': theme.backgroundExtraLight,
    'editorGroup.dropBackground': theme.backgroundExtraLight,
    'editorGroupHeader.noTabsBackground': theme.backgroundExtraLight,
    'editorGroupHeader.tabsBackground': theme.backgroundLight,
    'editorGroupHeader.tabsBorder': theme.backgroundExtraLight,
    'editorGroup.emptyBackground': theme.background,
    'editorGroup.focusedEmptyBorder': theme.backgroundExtraLight,
    'tab.activeBackground': theme.background,
    'tab.activeForeground': theme.foreground,
    'tab.border': theme.backgroundExtraLight,
    'tab.inactiveBackground': theme.backgroundLight,
    'tab.inactiveForeground': theme.foregroundDark,
    'tab.unfocusedActiveForeground': theme.foreground,
    'tab.unfocusedInactiveForeground': theme.foregroundDark,
    'tab.hoverBackground': theme.background,
    'tab.unfocusedHoverBackground': theme.background,
    'tab.activeModifiedBorder': theme.blue,
    'tab.inactiveModifiedBorder': theme.foregroundDark,
    'tab.unfocusedActiveModifiedBorder': theme.blue,
    'tab.unfocusedInactiveModifiedBorder': theme.foregroundDark,
    // "tab.activeBorderTop": "#",
    // "tab.unfocusedActiveBorderTop": "#",
    // "tab.hoverBorder": theme.backgroundExtraLight,
    // "tab.unfocusedHoverBorder": theme.backgroundExtraLight,
    // "editor.selectionHighlightBorder": "#f00",
    // "editor.wordHighlightBorder": "#f00",
    // "editor.wordHighlightStrongBorder": "#f00",
    // "editor.findMatchBorder": theme.foregroundDark,
    // "editor.findMatchHighlightBorder": "#f09",
    // "editor.findRangeHighlightBorder": "#f00",
    // "editor.rangeHighlightBorder": "#f00",
};
