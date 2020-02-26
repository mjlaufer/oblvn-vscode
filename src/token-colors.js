const theme = require('./theme');

module.exports = [
    {
        name: 'Variable, Support',
        scope:
            'variable, support.type, support.orther.namespace.use.php, meta.use.php, support.other.namespace.php, ',
        settings: {
            foreground: theme.foreground,
        },
    },
    {
        name: 'entity.name.method.js, meta.method.js',
        scope:
            'entity.name.method.js, meta.class-method.js entity.name.function.js, variable.function.constructor',
        settings: {
            foreground: theme.foreground,
        },
    },
    {
        name: 'Keyword, Storage',
        scope: 'keyword, storage.type, storage.modifier',
        settings: {
            foreground: theme.foregroundDark,
        },
    },
    {
        name: 'Regular Expressions, Escape Characters',
        scope: 'string.regexp, constant.character.escape',
        settings: {
            foreground: theme.foregroundDark,
        },
    },
    {
        name: 'Punctuation, Misc',
        scope:
            'constant.other.color, punctuation, punctuation.definition.tag, punctuation.separator.inheritance.php, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded, keyword.other.template, keyword.other.substitution',
        settings: {
            foreground: theme.foregroundDark,
        },
    },
    {
        name: 'Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
            foreground: theme.foregroundDark,
        },
    },
    {
        name: 'Operator, Function Arrow, String, Class, Inherited Class, Support',
        scope:
            'keyword.operator, storage.type.function.arrow, string, entity.name.class, entity.other.inherited-class, support.class, entity.name.type.class',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Function, Special Method, Block Level',
        scope:
            'entity.name.function, meta.function-call, variable.function, support.function, keyword.other.special-method, meta.block-level',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Number, Constant, Function Parameter, Tag, Embedded',
        scope:
            'constant.numeric, constant.language, support.constant, constant.character, variable.parameter, entity.name.tag, meta.tag.sgml, keyword.other.unit',
        settings: {
            foreground: theme.orangered,
        },
    },
    {
        name: 'Other Variable, String Link',
        scope: 'support.other.variable, string.other.link',
        settings: {
            foreground: theme.orangered,
        },
    },
    {
        name: 'Language methods, Sub-methods',
        scope:
            'variable.language, entity.name.module.js, variable.import.parameter.js, variable.other.class.js',
        settings: {
            foreground: theme.orangered,
        },
    },
    {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Symbols',
        scope:
            'constant.other.symbol, constant.other.key, markup.heading, meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Markup Heading',
        scope: 'markup.heading',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        name: 'Inserted',
        scope: 'markup.inserted, markup.inserted.git_gutter',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Changed',
        scope: 'markup.changed, markup.changed.git_gutter',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'Deleted',
        scope: 'markup.deleted, markup.deleted.git_gutter',
        settings: {
            foreground: theme.red,
        },
    },
    {
        name: 'URL',
        scope: '*url*, *link*, *uri*',
        settings: {
            fontStyle: 'underline',
        },
    },
    {
        name: 'Search Results Nums',
        scope: 'constant.numeric.line-number.find-in-files - match',
        settings: {
            foreground: theme.orangered,
        },
    },
    {
        name: 'Search Results Lines',
        scope: 'entity.name.filename.find-in-files',
        settings: {
            foreground: theme.green,
        },
    },
    {
        name: 'Decorators',
        scope:
            'tag.decorator.js entity.name.tag.js, tag.decorator.js punctuation.definition.tag.js',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        name: 'ES7 Bind Operator',
        scope: 'source.js constant.other.object.key.js string.unquoted.label.js',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        scope: 'token.info-token',
        settings: {
            foreground: theme.blue,
        },
    },
    {
        scope: 'token.warn-token',
        settings: {
            foreground: theme.yellow,
        },
    },
    {
        scope: 'token.error-token',
        settings: {
            foreground: theme.orangered,
        },
    },
    {
        scope: 'token.debug-token',
        settings: {
            foreground: theme.magenta,
        },
    },
];
