---
title: "ABENWHERE_LOGEXP_LIKE"
description: |
  ABENWHERE_LOGEXP_LIKE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENWHERE_LOGEXP_LIKE.htm"
abapFile: "ABENWHERE_LOGEXP_LIKE.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "class", "data", "types", "ABENWHERE", "LOGEXP", "LIKE"]
---

`... operand1 [NOT] LIKE operand2 [ESCAPE esc] ...`

[`... ESCAPE esc`](#ABAP_ONE_ADD@1@)

This relational expression is true if the value of the operand `operand1` matches (does not match) the pattern in the operand `operand2`.

A pattern in `operand2` is defined using the following wildcard characters:

The pattern is case-sensitive. If the pattern in `operand2` consists of exactly one *%* character, the evaluation of the condition in the database interface is optimized so that the condition is not passed to the database and `operand1 LIKE '%'` is always true regardless of the content of `operand1` and `operand1 NOT LIKE '%'` is always false instead.

Full text search in a table with text columns.

Pattern comparison for a numeric column of the table `DEMO_EXPRESSIONS`. A [`CAST` expression](ABENSQL_CAST.html) is used here to create the required character-like data type.

The addition `ESCAPE` can be used to define a single-character [escape character](ABENESCAPE_CHARACTER_GLOSRY.html). `esc` expects a [flat](ABENFLAT_GLOSRY.html)\\ [character-like](ABENCHARLIKE_DATA_OBJECT_GLOSRY.html) data object with the length 1 containing the escape character. A [literal](ABENABAP_SQL_LITERALS.html) or a [host variable](ABENABAP_SQL_HOST_VARIABLES.html) can be specified. In the pattern in `operand2`, the escape character in `esc` may only be placed in front of a wildcard character or in front of the escape character itself. In this case, they lose their special meaning.

If an escape character in `operand2` is not placed in front of a valid character, an exception of the class `CX_SY_OPEN_SQL_DB` is raised.

To search for the pattern '100%', the following expression can be used with `#` as the escape character.

-   The following applies to `operand1`:

-   [SQL expressions](ABAPSQL_EXPR.html) except for [aggregate expressions](ABAPSELECT_AGGREGATE.html) and [window expressions](ABAPSELECT_OVER.html) can be specified.
-   The data type can be one of the character-like [dictionary types](ABENDDIC_BUILTIN_TYPES.html)\\ `CHAR`, `NUMC`, `CLNT`, `LANG`, `DATS`, `TIMS`, `ACCP`, `CUKY`, `UNIT`, or `SSTRING`.
-   In a [`HAVING`](ABAPHAVING_CLAUSE.html) clause, [aggregate expressions](ABENAGGREGATE_EXPRESSION_GLOSRY.html) can also be used.

-   The following applies to `operand2`:

-   [Literals](ABENABAP_SQL_LITERALS.html) and [host variables](ABENABAP_SQL_HOST_VARIABLES.html) can be specified.
-   The data type must be [`c`](ABENBUILTIN_TYPES_CHARACTER.html) or [`string`](ABENBUILTIN_TYPES_CHARACTER.html).
-   Any trailing blanks are ignored by the pattern, even in the data type `string`.
-   The content can have a maximum of three times as many characters as the length of `operand1` but no more than 1333 characters. [Character literals](ABENCHARACTER_LITERAL_GLOSRY.html) and [constants](ABENCONSTANT_GLOSRY.html) respect any trailing blanks and a syntax error occurs if this rule is broken. All other data objects ignore trailing blanks and a runtime error occurs if this rule is broken.
-   The content of untyped literals and host variables must match the data type of `operand1` in accordance with the rules for [lossless assignments](ABENLOSSLESS_ASSIGNMENT_GLOSRY.html).

-   *%* is any character string, including an empty string.
-   *\_* stands for any character.

-   The wildcard characters *\_* and *%* are used as in standard SQL. Elsewhere in ABAP, the wildcard characters *+* and *\** are used in similar relational expressions, in particular when [ranges table](ABENRANGES_TABLE_GLOSRY.html) are used.
-   It is not usually beneficial to define patterns in `operand2` without wildcard characters. Instead, it is best to perform a comparison using [`=`](ABENWHERE_LOGEXP_COMPARE.html).
-   Patterns that are closed by wildcard characters should not be used to search for trailing blanks. The semantics of searches of this type depend on the database system that is used and in general do not produce the required result.
-   Due to ABAP SQL-specific optimization, `operand1 LIKE '%'` is also true if the operand `operand1` contains [null values](ABENNULL_VALUE_GLOSRY.html).
-   No columns [`col`](ABENABAP_SQL_COLUMNS.html) and no [host expressions](ABENABAP_SQL_HOST_EXPRESSIONS.html) can be specified here on the right side.
-   The fact that trailing blanks in `operand2` are also ignored for the data type `string` is different to all other operand positions in ABAP.
-   The special character-like types [`n`](ABENBUILTIN_TYPES_CHARACTER.html), [`d`](ABENBUILTIN_TYPES_CHARACTER.html), and [`t`](ABENBUILTIN_TYPES_CHARACTER.html) cannot be used on the right side, since the wildcard characters *\_* and *%* required for patterns are invalid content for these types.
-   The maximum number of characters on the right side is twice the maximum in `operand1` because, in theory, each character can be prefixed with an escape character defined using `ESCAPE`.

-   The character *#* is recommended for the escape character `esc`.
-   One of the wildcard characters *\_* and *%* can be specified as an escape character `esc`, but it is not recommended for reasons of readability.
-   If the pattern in `operand2` is created dynamically or comes from outside of the program, it must be ensured that no escape character contained in the pattern is placed in front of any character other than *\_*, *%*, or the escape character itself. To prevent the corresponding exception, escape characters that are part of the pattern must be escaped by themselves before being used.

DATA srch\_str TYPE string. \\ncl\_demo\_input=>request( CHANGING field = srch\_str ). \\n\\ \\nIF srch\_str IS INITIAL. \\n RETURN. \\nENDIF. \\n\\ \\nsrch\_str = '%' && srch\_str && '%'. \\n\\ \\nSELECT \* \\n FROM doktl \\n WHERE id = 'SD' AND \\n object LIKE 'AB%' AND \\n langu = @sy-langu AND \\n typ = 'E' AND \\n doktext LIKE @srch\_str \\n INTO TABLE @FINAL(text\_tab) \\n UP TO 100 ROWS. \\n\\ \\nIF sy-subrc = 0. \\n cl\_demo\_output=>display( text\_tab ). \\nENDIF. DELETE FROM demo\_expressions. \\nINSERT demo\_expressions FROM TABLE @( \\n VALUE #( ( id = 'X' num1 = 111 ) \\n ( id = 'Y' num1 = 222 ) \\n ( id = 'Z' num1 = 333 ) ) ). \\n\\ \\nSELECT FROM demo\_expressions \\n FIELDS id, num1 \\n WHERE CAST( num1 AS CHAR ) LIKE '2%' \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). ... LIKE '100#%' ESCAPE '#' ... abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenasql\_cond.html abenabap\_sql\_stmt\_logexp.html