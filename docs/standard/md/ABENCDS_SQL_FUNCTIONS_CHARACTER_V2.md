---
title: "ABENCDS_SQL_FUNCTIONS_CHARACTER_V2"
description: |
  ABENCDS_SQL_FUNCTIONS_CHARACTER_V2 - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.htm"
abapFile: "ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "types", "ABENCDS", "SQL", "FUNCTIONS", "CHARACTER"]
---

The following table shows the possible [SQL functions](ABENCDS_SQL_FUNCTIONS_V2.html) for character strings in a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html), plus the requirements made on the arguments.

The following can be specified as the arguments `arg`:

The valid argument types for `arg`, `arg1`, `arg2`, and `arg3` are [`CHAR`](ABENDDIC_BUILTIN_TYPES.html), [`CLNT`](ABENDDIC_BUILTIN_TYPES.html), [`LANG`](ABENDDIC_BUILTIN_TYPES.html), [`NUMC`](ABENDDIC_BUILTIN_TYPES.html), [`CUKY`](ABENDDIC_BUILTIN_TYPES.html), [`UNIT`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), [`TIMS`](ABENDDIC_BUILTIN_TYPES.html), and [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html).

In functions where an explicit length `len` is specified, the actual length of the result is defined when the CDS view entity is activated and is at least as long as `len`.

In all functions with the exception of `LPAD` and `RPAD`, the trailing blanks of all arguments are removed before the actual processing and the trailing blanks of the result are removed before the return operation. In `LPAD` and `RPAD`, the trailing blanks of the argument `src` are preserved. In the case of `UPPER` and `LOWER`, the handling of trailing blanks makes no difference, as the length of the argument stays the same.

The following CDS view entity applies built-in SQL functions for strings in the `SELECT` list to columns of the DDIC database table `DEMO_EXPRESSIONS`. The class `CL_DEMO_CDS_SQL_FUNC_STRING_VE` uses `SELECT` to access the view.

-   [Literals](ABENCDS_LITERAL_V2.html) of a suitable type.
-   [Session variables](ABENCDS_SESSION_VARIABLE_V2.html) of a suitable type.
-   Suitable [fields](ABENCDS_FIELD_V2.html) of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html) of the current CDS view entity.
-   [Path expressions](ABENCDS_PATH_EXPRESSION_V2.html) that identify a suitable field of a data source [`data_source`](ABENCDS_DATA_SOURCE_V2.html).
-   [Input parameters](ABENCDS_PARAMETER_V2.html) from the parameter list [`parameter_list`](ABENCDS_PARAMETER_LIST_V2.html).
-   [Reuse expressions](ABENCDS_REUSABLE_EXPRESSION_V2.html) using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html)
-   [SQL-based scalar functions](ABENCDS_SQL_SCALAR_FUNCTION.html) (if they return a matching type)
-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](ABENCDS_SQL_FUNCTIONS_V2.html)
-   [Arithmetic expressions](ABENCDS_ARITHMETIC_EXPRESSION_V2.html)
-   [Aggregate expressions](ABENCDS_AGGREGATE_FUNCTIONS_V2.html)
-   Type modifications using [`CAST`](ABENCDS_CAST_EXPRESSION_V2.html)
-   [Case distinctions](ABENCDS_CASE_EXPRESSION_V2.html) using `CASE`

-   The characters in the [surrogate area](ABENSURROGATE_AREA_GLOSRY.html) of the [system code page](ABENSYSTEM_CODEPAGE_GLOSRY.html)\\ [UTF-16](ABENUTF16_GLOSRY.html) are handled as two characters by the CDS string functions. This must be respected when the length is determined and these characters must not be split by mistake. Functions `UPPER` and `LOWER` do not change the character of the surrogate area.
-   In the case of the function `REPLACE`, it should be noted that the maximum possible length of the result can easily reach the allowed length of 1333. This produces a syntax error. In general, the maximum possible length is calculated by dividing the length of `arg1` by the length of `arg2`, multiplied by the length of `arg3`. For reaching the limit, the same holds as for ABAP SQL.
-   The function `REPLACE_REGEXPR` accesses the PCRE1 library implemented in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html).
-   In CDS view entities, the function `REPLACE_REGEXPR` allows more parameters than the same function in [`ABAP SQL`](ABENSQL_STRING_FUNC.html) (`UNGREEDY`, for example). However, this functionality can also be implemented through the [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) syntax itself.

@AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_sql\_func\_string\_ve\\n as select from demo\_expressions\\n\\{\\n length( char1 ) as r\_length,\\n instr( char1, 'CD' ) as r\_instr,\\n concat( char1, char2 ) as r\_concat,\\n concat\_with\_space( char1, char2, 10 ) as r\_concat\_with\_space,\\n left( char1, 3 ) as r\_left,\\n lower( char1 ) as r\_lower,\\n right( char2, 3 ) as r\_right,\\n lpad( char1, 10, 'x' ) as r\_lpad,\\n rpad( char2, 10, 'y' ) as r\_rpad,\\n ltrim( char1, 'A' ) as r\_ltrim,\\n rtrim( char1, 'E' ) as r\_rtrim,\\n replace\_regexpr( pcre => '\\\\\\\\\\Cg',\\n value => char2,\\n with => 'bb',\\n result\_length => 4 ) as r\_replace\_regexpr,\\n replace( char2, 'ghi', 'XXX' ) as r\_replace,\\n substring( char2, 2, 3 ) as r\_substring,\\n upper( char2 ) as r\_upper\\n\\}\\n **Function** **Result** \\ **Valid Argument Types** **Result Type**\\ [`CONCAT(arg1, arg2)`](ABENSQL_FUNCTIONS_STRING.html) Concatenates strings in `arg1` and `arg2`. Trailing blanks in `arg1`, `arg2`, and in the result are ignored. The maximum length of the result is 1333. `arg1`, `arg2`: see below [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if an argument has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of the result. [`CONCAT_WITH_SPACE(arg1, arg2, spaces)`](ABENSQL_FUNCTIONS_STRING.html) Concatenates strings in `arg1` and `arg2` as with `CONCAT`. The number of blanks specified in `spaces` is inserted between `arg1` and `arg2`. The maximum length of the result is 1333. \\ `arg1`, `arg2`: see below \\
\\
`spaces`: positive [numeric literal](ABENCDS_LITERAL_V2.html) greater than 0. The upper limit of spaces is 1333 minus `arg1` and `arg2`. [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if an argument has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of the result. [`INSTR(arg, sub)`](ABENSQL_FUNCTIONS_STRING.html) Position of the first occurrence of the string from `sub` in `arg` (case-sensitive). `arg` respects leading blanks and ignores trailing blanks. `sub` respects all blanks. `sub` must contain at least one character. If no occurrences are found, the result is 0. \\ `arg`: see below \\
\\
`sub`: non-empty [character literal](ABENCDS_LITERAL_V2.html) [`INT4`](ABENDDIC_BUILTIN_TYPES.html)\\ [`LEFT(arg, len)`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the `len` left characters of `arg` (ignoring the trailing blanks). The value of `len` cannot be greater than the length of `arg`. `arg`: see below \\
\\
`len`: \\
\- positive literals not equal to zero\\
\- suitable fields of a data source of the current CDS view entity \\
\- path expressions that identify a suitable field of a data source \\
\- input parameters from the parameter list \\
\- reuse expressions using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html) \\
\- aggregate expressions \\
\- arithmetic expressions \\
\- case distinctions \\
\- cast expressions \\
\- built-in functions. \\
The operands must have one of the following data types: `INT1`, `INT2`, `INT4`. [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len`\\ [`LENGTH(arg)`](ABENSQL_FUNCTIONS_STRING.html) Number of characters in `arg` ignoring trailing blanks `arg`: see below [`INT4`](ABENDDIC_BUILTIN_TYPES.html)\\ [`LOWER(arg)`](ABENSQL_FUNCTIONS_STRING.html) String with a length of `arg`, in which all uppercase letters are transformed to lowercase letters \\ `arg`: see below, with the exception of [`NUMC`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), and [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg` in the length of `arg`\\ [`LPAD(arg, len, src)`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the right-aligned content of `arg` without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument `src` (respecting all blanks). Leading blanks from `arg` are preserved. If more characters are required than exist in `src`, the content of `src` is used repeatedly. If `len` is less than the length of `arg`, it is truncated on the right. If `src` is empty and `len` is greater than the length of `arg`, `arg` remains unchanged. \\ `arg`: see below \\
\\
`len`: positive [numeric literal](ABENCDS_LITERAL_V2.html) greater than 0 and less than or equal to 1333 \\
\\
`src`: [Character literal](ABENCDS_LITERAL_V2.html) [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len`\\ [`LTRIM(arg, char)`](ABENSQL_FUNCTIONS_STRING.html) String with the content of `arg` in which all trailing blanks and leading characters are removed that match the character in `char`. A blank in `char` is significant. \\ `arg`: see below \\
\\
`char`: [Character literal](ABENCDS_LITERAL_V2.html) with length 1 [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of `arg`. [`REPLACE(arg1, arg2, arg3)`](ABENSQL_FUNCTIONS_STRING.html) String `arg1`, in which all instances of `arg2` are replaced by the content from `arg3`. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333. \\ `arg1`, `arg2`, `arg3`: see below [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg1` or `arg3` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the maximum possible length of the result. [`REPLACE_REGEXPR(PCRE => pcre, \ VALUE => arg1, \ WITH => arg2, \ RESULT_LENGTH => res[, \ OCCURRENCE => occ][, \ CASE_SENSITIVE => case][, \ SINGLE_LINE => bool][, \ MULTI_LINE => bool][, \ UNGREEDY => bool])`](ABENSQL_FUNCTIONS_STRING.html)\\ A [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) `pcre` is replaced in `arg1` with the character string specified in `arg2`. `occ` is optional and determines the number of occurrences of `pcre` to be replaced. By default, all occurrences are replaced. The search is case-sensitive by default, but this can be overridden using the parameter `case`. Single-line, multiline and ungreedy regular expression matching can be set with the parameter `bool`. \\ `pcre`: [Perl Compatible Regular Expression (PCRE)](ABENPCRE_GLOSRY.html). [Elementary CDS operands](ABENCDS_OPERANDS_V2.html) and [expressions](ABENCDS_EXPRESSIONS_V2.html) are possible for `pcre` as long as they return a suitable data type. Suitable data types are `CHAR`, `NUMC`, and `SSTRING`.\\
**Note:**\\ *pcre* is not interpreted in extended mode. \\
**Caution:** If *pcre* is specified as a literal, a backslash (*\\\\*) must be escaped using four backslashes (*\\\\\\\\\\\\\\\\*). Rules for escaping in CDS literals are described in topic [CDS DDL - CDS View Entity, *literal*](ABENCDS_LITERAL_V2.html). \\
\\
*arg1*: see below, with the exception of [*CLNT*](ABENDDIC_BUILTIN_TYPES.html) \\
\\
*arg2*: see below, with the exception of [*CLNT*](ABENDDIC_BUILTIN_TYPES.html) \\
\\
*res*: positive [numeric literal](ABENCDS_LITERAL_V2.html) greater than 0 and less than or equal to 1333 \\
\\
*occ*: Positive [numeric literal](ABENCDS_LITERAL_V2.html) of type [*INT1*](ABENDDIC_BUILTIN_TYPES.html), [*INT2*](ABENDDIC_BUILTIN_TYPES.html), or [*INT4*](ABENDDIC_BUILTIN_TYPES.html) greater than or equal to 1. Alternatively, *ALL* can be specified. In this case, all occurrences of the value *arg1* are replaced. \\
\\
*case*: 'X' or ' '. Alternatively, the [character literals](ABENCDS_LITERAL_V2.html) 'true' or 'false' (case-sensitive), that are internally handled like the values 'X' or ' ', can be used. The default value is 'true'. \\
\\
*bool*: 'X' or ' '. Alternatively, the [character literals](ABENCDS_LITERAL_V2.html) 'true' or 'false' (case-sensitive), that are internally handled like the values 'X' or ' ', can be used. The default value is 'false'. [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) with the maximum possible length of `res`. [`RIGHT(arg,len)`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the `len` right characters of `arg` (ignoring the trailing blanks). The value of `len` cannot be greater than the length of `arg`. \\ `arg`: see below \\
\\
`len`: \\
\- positive literals not equal to zero\\
\- suitable fields of a data source of the current CDS view entity \\
\- path expressions that identify a suitable field of a data source \\
\- input parameters from the parameter list \\
\- reuse expressions using `$projection` \\
\- aggregate expressions \\
\- arithmetic expressions \\
\- case distinctions \\
\- cast expressions \\
\- built-in functions. \\
The operands must have one of the following data types: `INT1`, `INT2`, `INT4`. [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len`\\ [`RPAD(arg, len, src)`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the left-aligned content of `arg` without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument `src` (respecting all blanks). Leading blanks from `arg` are preserved. If more characters are required than exist in `src`, the content of `src` is used repeatedly. If `len` is less than the length of `arg`, it is truncated on the right. If `src` is empty and `len` is greater than the length of `arg`, `arg` remains unchanged. \\ `arg`: see below \\
\\
`len`: positive [numeric literal](ABENCDS_LITERAL_V2.html) greater than 0 and less than or equal to 1333 \\
\\
`src`: [Character literal](ABENCDS_LITERAL_V2.html) [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with length `len`\\ [`RTRIM(arg, char)`](ABENSQL_FUNCTIONS_STRING.html) String with the content of `arg` in which all trailing blanks are removed and all trailing characters that match the character in `char`. A blank in `char` is significant. \\ `arg`: see below \\
\\
`char`: [Character literal](ABENCDS_LITERAL_V2.html) with length 1 [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with the length of `arg`. [`SUBSTRING(arg, pos, len)`](ABENSQL_FUNCTIONS_STRING.html) Substring `arg` from the position `pos` with length `len`. `pos` and `len` must be specified so that the substring is within `arg`. \\ `arg`: see below \\
\\
`pos` and `len`: \\
\- positive literals not equal to zero\\
\- suitable fields of a data source of the current CDS view entity \\
\- path expressions that identify a suitable field of a data source \\
\- input parameters from the parameter list \\
\- reuse expressions using [`$projection`](ABENCDS_REUSABLE_EXPRESSION_V2.html) \\
\- aggregate expressions \\
\- arithmetic expressions \\
\- case distinctions \\
\- cast expressions \\
\- built-in functions. \\
The operands must have one of the following data types: `INT1`, `INT2`, `INT4`. [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) if `arg` has the type [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html), else [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) with length of at lest `len`\\ [`UPPER(arg)`](ABENSQL_FUNCTIONS_STRING.html) String with a length of `arg`, in which all lowercase letters are transformed to uppercase letters. See below, with the exception of [`NUMC`](ABENDDIC_BUILTIN_TYPES.html), [`DATS`](ABENDDIC_BUILTIN_TYPES.html), and [`TIMS`](ABENDDIC_BUILTIN_TYPES.html) Data type of `arg` in the length of `arg` abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_v2\_views.html abencds\_define\_view\_entity.html abencds\_select\_statement\_v2.html abencds\_operands\_and\_expr\_v2.html abencds\_expressions\_v2.html abencds\_builtin\_functions\_v2.html abencds\_sql\_functions\_v2.html