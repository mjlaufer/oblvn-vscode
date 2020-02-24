const fs = require('fs');
const colors = require('./colors');
const tokenColors = require('./token-colors');

const theme = {
    name: 'OBLVN Theme',
    colors: {
        ...colors.baseColors,
        ...colors.textColors,
        ...colors.buttonControl,
        ...colors.dropdownControl,
        ...colors.inputControl,
        ...colors.scrollBarControl,
        ...colors.badge,
        ...colors.progressBar,
        ...colors.listsAndTrees,
        ...colors.activityBar,
        ...colors.sideBar,
        ...colors.editorGroupsAndTabs,
        ...colors.editorColors,
        ...colors.diffEditorColors,
        ...colors.editorWidgetColors,
        ...colors.peekViewColors,
        ...colors.mergeConflicts,
        ...colors.panelColors,
        ...colors.statusBarColors,
        ...colors.titleBarColors,
        ...colors.notificationDialogColors,
        ...colors.extensions,
        ...colors.quickPicker,
        ...colors.integratedTerminalColors,
        ...colors.welcomePage,
        ...colors.gitColors,
        ...colors.settingsEditor,
        ...colors.breadcrumbs,
        ...colors.snippets,
    },
    tokenColors,
};

fs.writeFile('dist/oblvn-theme.json', JSON.stringify(theme), error => {
    const log = error
        ? {
              method: 'error',
              message: error,
          }
        : {
              method: 'log',
              message: 'Successfuly created theme',
          };

    console[log.method](log.message);
});
