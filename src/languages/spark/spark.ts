/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../../fillers/monaco-editor-core';
import { TokenClassConsts } from '../../common/constants';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	],
	surroundingPairs: [
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.sql',
	ignoreCase: true,
	brackets: [
		{ open: '[', close: ']', token: TokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: TokenClassConsts.DELIMITER_PAREN }
	],
	keywords: [
		// https://spark.apache.org/docs/latest/sql-ref-ansi-compliance.html
		// reserved keywords in either mode
		'ALL',
		'ALTER',
		'AND',
		'ANTI',
		'ANY',
		'ARRAY',
		'AS',
		'AT',
		'AUTHORIZATION',
		'BETWEEN',
		'BIGINT',
		'BINARY',
		'BOOLEAN',
		'BOTH',
		'BY',
		'CASE',
		'CAST',
		'CHAR',
		'CHARACTER',
		'CHECK',
		'COLLATE',
		'COLUMN',
		'COMMIT',
		'CONSTRAINT',
		'CREATE',
		'CROSS',
		'CUBE',
		'CURRENT',
		'CURRENT_DATE',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'CURRENT_USER',
		'DATE',
		'DEC',
		'DECIMAL',
		'DECLARE',
		'DELETE',
		'DESCRIBE',
		'DISTINCT',
		'DIV',
		'DOUBLE',
		'DROP',
		'ELSE',
		'END',
		'ESCAPE',
		'EXCEPT',
		'EXISTS',
		'EXTERNAL',
		'EXTRACT',
		'FALSE',
		'FETCH',
		'FILTER',
		'FLOAT',
		'FOR',
		'FOREIGN',
		'FROM',
		'FULL',
		'FUNCTION',
		'GLOBAL',
		'GRANT',
		'GROUP',
		'GROUPING',
		'HAVING',
		'IF',
		'IN',
		'INNER',
		'INSERT',
		'INTERSECT',
		'INTERVAL',
		'INT',
		'INTEGER',
		'INTO',
		'IS',
		'JOIN',
		'LATERAL',
		'LEADING',
		'LEFT',
		'LIKE',
		'LOCAL',
		'NATURAL',
		'NO',
		'NOT',
		'NULL',
		'OF',
		'OFFSET',
		'ON',
		'ONLY',
		'OR',
		'ORDER',
		'OUT',
		'OUTER',
		'OVERLAPS',
		'PARTITION',
		'PERCENTILE_CONT',
		'PERCENTILE_DISC',
		'POSITION',
		'PRIMARY',
		'RANGE',
		'REAL',
		'REFERENCES',
		'REVOKE',
		'RIGHT',
		'REGEXP',
		'ROLLBACK',
		'ROLLUP',
		'ROW',
		'ROWS',
		'SELECT',
		'SEMI',
		'SESSION_USER',
		'SET',
		'MINUS',
		'SINGLE',
		'SMALLINT',
		'SOME',
		'START',
		'SYSTEM',
		'TABLE',
		'TABLESAMPLE',
		'THEN',
		'TIME',
		'TIMEDIFF',
		'TO',
		'TRAILING',
		'TRUE',
		'TRUNCATE',
		'UNION',
		'UNIQUE',
		'UNKNOWN',
		'UPDATE',
		'USER',
		'USING',
		'VALUES',
		'VARCHAR',
		'VAR',
		'VARIABLE',
		'WHEN',
		'WHERE',
		'WINDOW',
		'WITH',
		'WITHIN',
		// part of non-reserved keywords which is common
		'ADD',
		'ANALYZE',
		'ASC',
		'CATALOG',
		'CLUSTER',
		'CLUSTERED',
		'COMMENT',
		'DATABASE',
		'DESC',
		'INDEX',
		'LIMIT',
		'LOAD',
		'MATCHED',
		'KW_OVER',
		'OVERWRITE',
		'PARTITIONED',
		'RENAME',
		'SCHEMA',
		'SHOW',
		'SKEWED',
		'SORTED',
		'STORED',
		'USE',
		'VIEW'
	],
	operators: [
		// Logical
		'OR',
		'AND',
		'NOT',
		// Mathematical
		'MOD',
		'DIV',
		// SET
		'INTERSECT',
		'UNION',
		'EXCEPT',
		'MINUS',
		// null
		'INCLUDE',
		'EXCLUDE',
		// Join
		'INNER',
		'OUTER',
		'CROSS',
		'LEFT',
		'RIGHT',
		'FULL',
		'SEMI',
		'ANTI',
		// Predicate
		'IS',
		'BETWEEN',
		'LIKE',
		'ILIKE',
		'RLIKE',
		'REGEXP',
		'IN',
		'DISTINCT',
		'FROM',
		// Pivoting
		'PIVOT',
		'UNPIVOT'
	],
	builtinFunctions: [
		// https://spark.apache.org/docs/latest/sql-ref-functions-builtin.html
		// Aggregate
		'ANY',
		'ANY_VALUE',
		'APPROX_COUNT_DISTINCT',
		'APPROX_PERCENTILE',
		'ARRAY_AGG',
		'AVG',
		'BIT_AND',
		'BIT_OR',
		'BIT_XOR',
		'BITMAP_CONSTRUCT_AGG',
		'BITMAP_OR_AGG',
		'BOOL_AND',
		'BOOL_OR',
		'COLLECT_LIST',
		'COLLECT_SET',
		'CORR',
		'COUNT',
		'COUNT',
		'COUNT',
		'COUNT_IF',
		'COUNT_MIN_SKETCH',
		'COVAR_POP',
		'COVAR_SAMP',
		'EVERY',
		'FIRST',
		'FIRST_VALUE',
		'GROUPING',
		'GROUPING_ID',
		'HISTOGRAM_NUMERIC',
		'HLL_SKETCH_AGG',
		'HLL_UNION_AGG',
		'KURTOSIS',
		'LAST',
		'LAST_VALUE',
		'MAX',
		'MAX_BY',
		'MEAN',
		'MEDIAN',
		'MIN',
		'MIN_BY',
		'MODE',
		'PERCENTILE',
		'PERCENTILE',
		'PERCENTILE_APPROX',
		'REGR_AVGX',
		'REGR_AVGY',
		'REGR_COUNT',
		'REGR_INTERCEPT',
		'REGR_R2',
		'REGR_SLOPE',
		'REGR_SXX',
		'REGR_SXY',
		'REGR_SYY',
		'SKEWNESS',
		'SOME',
		'STD',
		'STDDEV',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'SUM',
		'TRY_AVG',
		'TRY_SUM',
		'VAR_POP',
		'VAR_SAMP',
		'VARIANCE',
		// Window Functions
		'CUME_DIST',
		'DENSE_RANK',
		'LAG',
		'LEAD',
		'NTH_VALUE',
		'NTILE',
		'PERCENT_RANK',
		'RANK',
		'ROW_NUMBER',
		// Array Functions
		'ARRAY',
		'ARRAY_APPEND',
		'ARRAY_COMPACT',
		'ARRAY_CONTAINS',
		'ARRAY_DISTINCT',
		'ARRAY_EXCEPT',
		'ARRAY_INSERT',
		'ARRAY_INTERSECT',
		'ARRAY_JOIN',
		'ARRAY_MAX',
		'ARRAY_MIN',
		'ARRAY_POSITION',
		'ARRAY_PREPEND',
		'ARRAY_REMOVE',
		'ARRAY_REPEAT',
		'ARRAY_UNION',
		'ARRAYS_OVERLAP',
		'ARRAYS_ZIP',
		'FLATTEN',
		'GET',
		'SEQUENCE',
		'SHUFFLE',
		'SLICE',
		'SORT_ARRAY',
		// Map Functions
		'ELEMENT_AT',
		'ELEMENT_AT',
		'MAP',
		'MAP_CONCAT',
		'MAP_CONTAINS_KEY',
		'MAP_ENTRIES',
		'MAP_FROM_ARRAYS',
		'MAP_FROM_ENTRIES',
		'MAP_KEYS',
		'MAP_VALUES',
		'STR_TO_MAP',
		'TRY_ELEMENT_AT',
		'TRY_ELEMENT_AT',
		// Date and Timestamp Functions
		'ADD_MONTHS',
		'CONVERT_TIMEZONE',
		'CURDATE',
		'CURRENT_DATE',
		'CURRENT_DAT',
		'CURRENT_TIMESTAMP',
		'CURRENT_TIMESTAM',
		'CURRENT_TIMEZONE',
		'DATE_ADD',
		'DATE_DIFF',
		'DATE_FORMAT',
		'DATE_FROM_UNIX_DATE',
		'DATE_PART',
		'DATE_SUB',
		'DATE_TRUNC',
		'DATEADD',
		'DATEDIFF',
		'DATEPART',
		'DAY',
		'DAYOFMONTH',
		'DAYOFWEEK',
		'DAYOFYEAR',
		'EXTRACT',
		'FROM_UNIXTIME',
		'FROM_UTC_TIMESTAMP',
		'HOUR',
		'LAST_DAY',
		'LOCALTIMESTAMP',
		'LOCALTIMESTAM',
		'MAKE_DATE',
		'MAKE_DT_INTERVAL',
		'MAKE_INTERVAL',
		'MAKE_TIMESTAMP',
		'MAKE_TIMESTAMP_LTZ',
		'MAKE_TIMESTAMP_NTZ',
		'MAKE_YM_INTERVAL',
		'MINUTE',
		'MONTH',
		'MONTHS_BETWEEN',
		'NEXT_DAY',
		'NOW',
		'QUARTER',
		'SECOND',
		'SESSION_WINDOW',
		'TIMESTAMP_MICROS',
		'TIMESTAMP_MILLIS',
		'TIMESTAMP_SECONDS',
		'TO_DATE',
		'TO_TIMESTAMP',
		'TO_TIMESTAMP_LTZ',
		'TO_TIMESTAMP_NTZ',
		'TO_UNIX_TIMESTAMP',
		'TO_UTC_TIMESTAMP',
		'TRUNC',
		'TRY_TO_TIMESTAMP',
		'UNIX_DATE',
		'UNIX_MICROS',
		'UNIX_MILLIS',
		'UNIX_SECONDS',
		'UNIX_TIMESTAMP',
		'WEEKDAY',
		'WEEKOFYEAR',
		'WINDOW',
		'WINDOW_TIME',
		'YEAR',
		// JSON Functions
		'FROM_JSON',
		'GET_JSON_OBJECT',
		'JSON_ARRAY_LENGTH',
		'JSON_OBJECT_KEYS',
		'JSON_TUPLE',
		'SCHEMA_OF_JSON',
		'TO_JSON',
		// Mathematical Functions
		'ABS',
		'ACOS',
		'ACOSH',
		'ASIN',
		'ASINH',
		'ATAN',
		'ATAN2',
		'ATANH',
		'BIN',
		'BROUND',
		'CBRT',
		'CEIL',
		'CEILING',
		'CONV',
		'COS',
		'COSH',
		'COT',
		'CSC',
		'DEGREES',
		'E',
		'EXP',
		'EXPM1',
		'FACTORIAL',
		'FLOOR',
		'GREATEST',
		'HEX',
		'HYPOT',
		'LEAST',
		'LN',
		'LOG',
		'LOG10',
		'LOG1P',
		'LOG2',
		'NEGATIVE',
		'PI',
		'PMOD',
		'POSITIVE',
		'POW',
		'POWER',
		'RADIANS',
		'RAND',
		'RANDN',
		'RANDOM',
		'RINT',
		'ROUND',
		'SEC',
		'SHIFTLEFT',
		'SIGN',
		'SIGNUM',
		'SIN',
		'SINH',
		'SQRT',
		'TAN',
		'TANH',
		'TRY_ADD',
		'TRY_DIVIDE',
		'TRY_MULTIPLY',
		'TRY_SUBTRACT',
		'UNHEX',
		'WIDTH_BUCKET',
		// String Functions
		'ASCII',
		'BASE64',
		'BIT_LENGTH',
		'BTRIM',
		'BTRIM',
		'CHAR',
		'CHAR_LENGTH',
		'CHARACTER_LENGTH',
		'CHR',
		'CONCAT_WS',
		'CONTAINS',
		'DECODE',
		'DECODE',
		'ELT',
		'ENCODE',
		'ENDSWITH',
		'FIND_IN_SET',
		'FORMAT_NUMBER',
		'FORMAT_STRING',
		'INITCAP',
		'INSTR',
		'LCASE',
		'LEFT',
		'LEN',
		'LENGTH',
		'LEVENSHTEIN',
		'LOCATE',
		'LOWER',
		'LPAD',
		'LTRIM',
		'LUHN_CHECK',
		'MASK',
		'OCTET_LENGTH',
		'OVERLAY',
		'POSITION',
		'PRINTF',
		'REGEXP_COUNT',
		'REGEXP_EXTRACT',
		'REGEXP_EXTRACT_ALL',
		'REGEXP_INSTR',
		'REGEXP_REPLACE',
		'REGEXP_SUBSTR',
		'REPEAT',
		'REPLACE',
		'RIGHT',
		'RPAD',
		'RTRIM',
		'SENTENCES',
		'SOUNDEX',
		'SPACE',
		'SPLIT',
		'SPLIT_PART',
		'STARTSWITH',
		'SUBSTR',
		'SUBSTR',
		'SUBSTRING',
		'SUBSTRING',
		'SUBSTRING_INDEX',
		'TO_BINARY',
		'TO_CHAR',
		'TO_NUMBER',
		'TO_VARCHAR',
		'TRANSLATE',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRIM',
		'TRY_TO_BINARY',
		'TRY_TO_NUMBER',
		'UCASE',
		'UNBASE64',
		'UPPER',
		// Conditional Functions
		'COALESCE',
		'IFNULL',
		'NANVL',
		'NULLIF',
		'NVL',
		'NVL2',
		// Bitwise Functions
		'BIT_COUNT',
		'BIT_GET',
		'GETBIT',
		'SHIFTRIGHT',
		'SHIFTRIGHTUNSIGNED',
		// Predicate Functions
		'ISNAN',
		'ISNOTNULL',
		'ISNULL',
		'REGEXP',
		'REGEXP_LIKE',
		'RLIKE',
		// Csv Functions
		'FROM_CSV',
		'SCHEMA_OF_CSV',
		'TO_CSV',
		// Misc Functions
		'AES_DECRYPT',
		'AES_ENCRYPT',
		'ASSERT_TRUE',
		'BITMAP_BIT_POSITION',
		'BITMAP_BUCKET_NUMBER',
		'BITMAP_COUNT',
		'CURRENT_CATALOG',
		'CURRENT_DATABASE',
		'CURRENT_SCHEMA',
		'CURRENT_USER',
		'EQUAL_NULL',
		'HLL_SKETCH_ESTIMATE',
		'HLL_UNION',
		'INPUT_FILE_BLOCK_LENGTH',
		'INPUT_FILE_BLOCK_START',
		'INPUT_FILE_NAME',
		'JAVA_METHOD',
		'MONOTONICALLY_INCREASING_ID',
		'REFLECT',
		'SPARK_PARTITION_ID',
		'TRY_AES_DECRYPT',
		'TYPEOF',
		'USER',
		'UUID',
		'VERSION',
		// Generator Functions
		'EXPLODE',
		'EXPLODE_OUTER',
		'INLINE',
		'INLINE_OUTER',
		'POSEXPLODE',
		'POSEXPLODE_OUTER',
		'STACK'
	],
	builtinVariables: [
		// Not support
	],
	typeKeywords: [
		// https://spark.apache.org/docs/latest/sql-ref-datatypes.html
		'BOOLEAN',
		'TINYINT',
		'BYTE',
		'SMALLINT',
		'SHORT',
		'INT',
		'INTEGER',
		'BIGINT',
		'LONG',
		'FLOAT',
		'REAL',
		'DOUBLE',
		'DATE',
		'TIMESTAMP',
		'TIMESTAMP_NTZ',
		'TIMESTAMP_LTZ',
		'STRING',
		'CHARACTER',
		'CHAR',
		'VARCHAR',
		'BINARY',
		'DECIMAL',
		'DEC',
		'NUMERIC',
		'VOID',
		'INTERVAL',
		'ARRAY',
		'STRUCT',
		'MAP'
	],
	scopeKeywords: ['CASE', 'END', 'WHEN', 'THEN', 'ELSE'],
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@numbers' },
			{ include: '@binaries' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			{ include: '@scopes' },
			{ include: '@complexDataTypes' },
			[/[;,.]/, TokenClassConsts.DELIMITER],
			[/[\(\)\[\]\{\}]/, '@brackets'],
			[
				/[\w@#$]+/,
				{
					cases: {
						'@scopeKeywords': TokenClassConsts.KEYWORD_SCOPE,
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@typeKeywords': TokenClassConsts.TYPE,
						'@builtinVariables': TokenClassConsts.VARIABLE,
						'@builtinFunctions': TokenClassConsts.PREDEFINED,
						'@keywords': TokenClassConsts.KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL]
		],
		whitespace: [[/[\s\t\r\n]+/, TokenClassConsts.WHITE]],
		comments: [
			[/--+.*/, TokenClassConsts.COMMENT],
			[/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		comment: [
			[/[^*/]+/, TokenClassConsts.COMMENT],
			// [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
			[/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/./, TokenClassConsts.COMMENT]
		],
		pseudoColumns: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@pseudoColumns': TokenClassConsts.PREDEFINED,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			]
		],
		numbers: [
			// https://spark.apache.org/docs/latest/sql-ref-literals.html#numeric-literal
			// TODO: Fractional Literals Syntax
			[/0[xX][0-9a-fA-F]*/, TokenClassConsts.NUMBER_HEX],
			[/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER_FLOAT]
		],
		binaries: [
			// https://spark.apache.org/docs/latest/sql-ref-literals.html#binary-literal
			[/X'/i, { token: TokenClassConsts.BINARY, next: '@binarySingle' }],
			[/X"/i, { token: TokenClassConsts.BINARY, next: '@binaryDouble' }]
		],
		binarySingle: [
			[/\d+/, TokenClassConsts.BINARY_ESCAPE],
			[/''/, TokenClassConsts.BINARY],
			[/'/, { token: TokenClassConsts.BINARY, next: '@pop' }]
		],
		binaryDouble: [
			[/\d+/, TokenClassConsts.BINARY_ESCAPE],
			[/""/, TokenClassConsts.BINARY],
			[/"/, { token: TokenClassConsts.BINARY, next: '@pop' }]
		],
		strings: [
			// https://spark.apache.org/docs/latest/sql-ref-literals.html#string-literal
			[/'/, { token: TokenClassConsts.STRING, next: '@stringSingle' }],
			[/R'/i, { token: TokenClassConsts.STRING, next: '@stringSingle' }],
			[/"/, { token: TokenClassConsts.STRING, next: '@stringDouble' }],
			[/R"/i, { token: TokenClassConsts.STRING, next: '@stringDouble' }]
		],
		stringSingle: [
			[/[^']+/, TokenClassConsts.STRING_ESCAPE],
			[/''/, TokenClassConsts.STRING],
			[/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		stringDouble: [
			[/[^"]+/, TokenClassConsts.STRING_ESCAPE],
			[/""/, TokenClassConsts.STRING],
			[/"/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		complexIdentifiers: [
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/``/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		scopes: [],
		complexDataTypes: []
	}
};