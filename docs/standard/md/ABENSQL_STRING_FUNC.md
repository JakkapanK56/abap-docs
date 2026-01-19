---
title: "ABENSQL_STRING_FUNC"
description: |
  ABENSQL_STRING_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_STRING_FUNC.htm"
abapFile: "ABENSQL_STRING_FUNC.html"
keywords: ["select", "insert", "do", "if", "case", "class", "data", "types", "internal-table", "ABENSQL", "STRING", "FUNC"]
---

`... func( arg1[, arg2] ... ) ...`

Calls a string function `func` as an [SQL expression](ABAPSQL_EXPR.html) or operand of an expression in ABAP SQL. The arguments `arg1`, `arg2`, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The following table shows the string functions that can be specified as SQL expressions and the requirements on the arguments. The value *x* in the ABAP SQL In-Memory Engine column indicates that the function can be executed in the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG_GLOSRY.html) and that the use of [this function](ABENSQL_ENGINE_EXPR.html) does not bypass [table buffering](ABENTABLE_BUFFERING_GLOSRY.html) and does not cause the transport of an internal table accessed with [`FROM @itab`](ABAPSELECT_ITAB.html) to the database.

The arguments `sql_exp`, `sql_exp1`, `sql_exp2`, and `sql_exp3` can be any [SQL expressions](ABAPSQL_EXPR.html) with the following data types. The possible data types are the [dictionary types](ABENDDIC_BUILTIN_TYPES.html)\\ `CHAR`, `CLNT`, `CUKY`, `DATS`, `LANG`, `NUMC`, `TIMS`, `UNIT`, and `SSTRING` with the following exceptions:

The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](ABENDDIC_BUILTIN_TYPES.html) to the dictionary types above. The result types are also [dictionary types](ABENDDIC_BUILTIN_TYPES.html).

The argument `pcre` can be any [SQL expression](ABAPSQL_EXPR.html) or [null expression](ABENSQL_NULL.html) with an appropriate data type. The possible data types are `CHAR` and `SSTRING`. `pcre` must contain a [Perl Compatible Regular Expression (PCRE)](ABENPCRE_GLOSRY.html). The operands passed to the argument `pcre` are not interpreted in extended mode. The pattern *?x* can be used to enable extended mode.

If an argument of a string function has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the full string function is the null value.

The `SELECT` statement returns the maximum length of a URL in the DDIC database table `SCARR`.

Concatenation of multiple columns of a DDIC database table to a character-like column in the class `CL_DEMO_SQL_FUNCTION_CONCAT` using `CONCAT`. An alignment is achieved using `LPAD` and `RPAD`. A concatenation of this type is not possible using the operator [`&&`](ABENSQL_STRING.html).

-   The type `NUMC` is not allowed for `LIKE_REGEXPR`, `LOCATE_REGEXPR`, `LOCATE_REGEXPR_AFTER`, `OCCURRENCES_REGEXPR`, `REPLACE_REGEXPR`\\ `SUBSTRING_REGEXPR`.
-   The types `NUMC`, `DATS` and `TIMS` are not allowed for `INITCAP`, `LOWER`, `UPPER`.

-   In the case of the function `REPLACE`, it should be noted that the maximum possible length of the result can easily reach the allowed length of 1333, which produces a syntax error. In general, the maximum possible length is calculated by dividing the length of `sql_exp1` by the length of `sql_exp2`, multiplied by the length of `sql_exp3`.
-   All string functions with the result type `SSTRING` can have a maximum of 1333 characters. This length restriction can be avoided by using the type conversion function [`TO_CLOB`](ABENSQL_TYPE_CONV_FUNC.html) on the result, thus converting it to type `STRING`.
-   Not all of the parameters that can be specified for the `REPLACE_REGEXPR` function in [ABAP CDS view entities](ABENCDS_SQL_FUNCTIONS_CHARACTER_V2.html) (`UNGREEDY`, for example) can be specified for ABAP SQL as well. This functionality can be implemented through the [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) syntax itself.
-   The functions `LPAD` and `RPAD` can produce the result type `SSTRING` with an undefined length. This result type can be propagated to other expressions and functions.
-   ABAP SQL string functions enforce the [strict mode of the syntax check from ABAP release 7.62](ABENABAP_SQL_STRICTMODE_762.html).
-   The functions that include the `pcre` parameter access the PCRE1 library implemented in the [SAP HANA database](ABENHANA_DATABASE_GLOSRY.html). They enforce the [strict mode of the syntax check from ABAP release 7.81](ABENABAP_SQL_STRICTMODE_781.html). The [regular expressions](ABENREGULAR_EXPRESSIONS.html) of general ABAP work with the PCRE2 library implemented in the ABAP Kernel.

-   [String functions](ABENSQL_STRING_FUNC_ABEXA.html)
-   [SQL expressions, concatenations](ABENSQL_EXPR_STRING_ABEXA.html)

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nSELECT FROM scarr \\n FIELDS MAX( length( url ) ) AS maxlen \\n INTO @FINAL(result). \\n\\ \\nout->display( result ). SELECT CONCAT\_WITH\_SPACE( CONCAT( carrid, \\n LPAD( carrname,21,' ' ) ), \\n RPAD( url,40,' ' ), 3 ) AS line \\n FROM scarr \\n INTO TABLE @FINAL(result). **Syntax** **Meaning** **Valid Argument Types** **Result Type** **ABAP SQL In-Memory Engine**\\ [`CONCAT( sql_exp1,sql_exp2 )`](ABENSQL_FUNCTIONS_STRING.html) Concatenates strings in `sql_exp1` and `sql_exp2`. Trailing blanks in `sql_exp1`, `sql_exp2`, and in the result are ignored. The maximum length of the result is 1333. See below `SSTRING` if an argument has the type `SSTRING`, otherwise `CHAR` with the length of the result. x [`CONCAT_WITH_SPACE( sql_exp1,sql_exp2,spaces )`](ABENSQL_FUNCTIONS_STRING.html) Concatenates strings in `sql_exp1` and `sql_exp2` as with `CONCAT`. The number of blanks specified in `spaces` is inserted between `sql_exp1` and `sql_exp2`. The maximum length of the result is 1333. \\ `sql_exp2`: see below \\
\\
`spaces`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333 `SSTRING` if an argument has the type `SSTRING`, otherwise `CHAR` with the length of the result. x [`INITCAP( sql_exp )`](ABENSQL_FUNCTIONS_STRING.html) String with a length of `sql_exp`, in which the first letter of a word is transformed to uppercase, and all other letters are transformed to lowercase. A word is delimited by the following: beginning of a string, blank space, new line, form feed, carriage return, line feed, and anything after *!*\\ *"*\\ *#*\\ *$*\\ *%*\\ *&*\\ *'*\\ *(*\\ *)*\\ *\**\\ *+*\\ *,*\\ *\-*\\ *.*\\ */*\\ *:*\\ *;*\\ *<*\\ *\=*\\ *\>*\\ *?*\\ *@*\\ *\[*\\ *\\\\*\\ *\]*\\ *^*\\ *\_*\\ *\`*\\ *\\{*\\ *|*\\ *\\}*\\ *~*. See below `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `sql_exp` - [`INSTR( sql_exp,sub )`](ABENSQL_FUNCTIONS_STRING.html) Position of the first occurrence of the string from `sub` in `sql_exp` (case-sensitive). `sql_exp` respects leading blanks and ignores trailing blanks. `sub` respects all blanks. `sub` must contain at least one character. If no occurrences are found, the result is 0. `sql_exp`: see below \\
\\
`sub`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`, `n`, `d`, or `t` `INT4` - [`LEFT( sql_exp,len )`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the `len` left characters of `sql_exp` (ignoring the trailing blanks). The value of `len` cannot be greater than the length of `sql_exp`. `sql_exp`: see below \\
\\
`len`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333 `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of the result x [`LENGTH( sql_exp )`](ABENSQL_FUNCTIONS_STRING.html) Number of characters in `sql_exp` ignoring trailing blanks See below `INT4` x [`LIKE_REGEXPR( pcre = pcre, \ value = sql_exp[, \ case_sensitive = case] )`](ABENSQL_FUNCTIONS_STRING.html) Checks whether `sql_exp` contains any occurrence of a [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) `pcre` and returns 1 if yes and 0 if no. The search is case-sensitive by default, but this can be overridden using the parameter `case`. `pcre`: see below \\
`sql_exp`: see below \\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) `INT4` - [`LOCATE( sql_exp, sub[,start[,occ]] )`](ABENSQL_FUNCTIONS_STRING.html) Returns the position of a substring `sub` in `sql_exp` (case-sensitive). Both `sql_exp` and `sub` respect all blanks and must contain at least one character. `start` and `occ` are optional parameters. `occ` can only be specified if `start` is specified. `start` specifies the offset from which to start the search, and `occ` determines the number of occurrences. \\
\\
Notes on the result: \\
If no occurrences are found or `occ` is less than 1, the result is 0. \\
If `sql_exp`, `sub` or `occ` are specified as [null value](ABENNULL_VALUE_GLOSRY.html), the result is 0. \\
If `start` is greater than 0, the matching is carried out starting from this position. \\
If `start` is 0, `NULL` or not specified, the matching is carried out starting from the first position. A setting of 1 for `start` has the same effect. \\
If `start` is less than 0, the starting position is the end of the string, i. e. if `start` is -2, the starting position is the second to last character of the string. The matching then goes in the reverse direction from right to left. \\
If `occ` is specified, the matched position is returned. If no match is found with the specified occurrence, the result is 0. \\
If `occ` is not specified, the first matched position is returned. A setting of 1 for `occ` is the same as not specifying it. `sql_exp`: see below \\
\\
`sub`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`, `n`, `d`, or `t`, or [null expression](ABENSQL_NULL.html) \\
\\
`occ`: `i` or `int8` \\
\\
`start`: `i` or `int8` `INT4` - [`LOCATE_REGEXPR( pcre = pcre, \ value = sql_exp[, \ occurrence = occ][, \ case_sensitive = case][, \ start = start][, \ group = group] )`](ABENSQL_FUNCTIONS_STRING.html) Searches `sql_exp` for a [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) pattern `pcre` and returns the offset of the match. The other parameters are optional. `occ` determines the number of occurrences of `pcre`. The search is case-sensitive by default, but this can be overridden using the parameter `case`. The parameter `start` specifies the offset from which to start the search. The parameter `group` specifies the number of the group of the matched substring. \\
\\
If `occ` is not greater than 0 or `start` or `group` are less than 0, the result is a [null value](ABENNULL_VALUE_GLOSRY.html). `pcre`: see below \\
\\
`sql_exp`: see below \\
\\
`occ`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333; [expressions](ABENEXPRESSION_GLOSRY.html) are also possible if they return an integer of type `INT4` \\
\\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) \\
\\
`start`: `i` or `int8` \\
\\
`group`: `i` or `int8` `INT4` - [`LOCATE_REGEXPR_AFTER( pcre = pcre, \ value = sql_exp[, \ occurrence = occ][, \ case_sensitive = case][, \ start = start][, \ group = group] )`](ABENSQL_FUNCTIONS_STRING.html) Searches `sql_exp` for a [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) pattern `pcre` and returns the offset of the match plus *1*. The other parameters are optional. `occ` determines the number of occurrences of `pcre`. The search is case-sensitive by default, but this can be overridden using the parameter `case`. The parameter `start` specifies the offset from which to start the search. The parameter `group` specifies the number of the group of the matched substring. \\
\\
If `occ` is not greater than 0 or `start` or `group` are less than 0, the result is a [null value](ABENNULL_VALUE_GLOSRY.html). `pcre`: see below \\
\\
`sql_exp`: see below \\
\\
`occ`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333; [expressions](ABENEXPRESSION_GLOSRY.html) are also possible if they return an integer of type `INT4` \\
\\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) \\
\\
`start`: `i` or `int8` \\
\\
`group`: `i` or `int8` `INT4` - [`LOWER( sql_exp )`](ABENSQL_FUNCTIONS_STRING.html) String with a length of `sql_exp`, in which all uppercase letters are transformed to lowercase letters. See below `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `sql_exp` x [`LPAD( sql_exp,len,src )`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the right-aligned content of `sql_exp` without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument `src` (respecting all blanks). Leading blanks from `sql_exp` are preserved. If more characters are required than exist in `src`, the content of `src` is used repeatedly. If `len` is less than the length of `sql_exp`, it is truncated on the right. If `src` is empty and `len` is greater than the length of `sql_exp`, `sql_exp` remains unchanged. `sql_exp`: see below \\
\\
`len`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, or `i` greater than -2147483648 and less than 67108864. If `len` is used as a [literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html), the ABAP type `int8` is possible too. The result is empty if `len` is less than or equal to 0. The length of the result is 1 if `len` is used as a constant less than or equal to 1. \\
\\
`src`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`, `d`, `t`, `n`, or `string` with a maximum of 1333 characters `SSTRING` if `sql_exp` has the type `SSTRING`, `SSTRING` with undefined length if `len` is used as an SQL expression or with a length outside the range of 1 to 1333, otherwise `CHAR` with the length of `len`. - [`LTRIM( sql_exp,char )`](ABENSQL_FUNCTIONS_STRING.html) String with the content of `sql_exp` in which all leading characters that match the characters in `char` are removed. Trailing blanks are removed from `sql_exp` but are significant in `char`. `sql_exp`: see below \\
\\
`char`: [Literal](ABENABAP_SQL_LITERALS.html), [host variable](ABENABAP_SQL_HOST_VARIABLES.html), [host constant](ABENABAP_SQL_HOST_VARIABLES.html), or [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` or `n` `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `sql_exp` - [`OCCURRENCES_REGEXPR( pcre = pcre, \ value = sql_exp[, \ case_sensitive = case] )`](ABENSQL_FUNCTIONS_STRING.html) Counts all occurrences of a [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) `pcre` in `sql_exp` and returns the number of occurrences. The search is case-sensitive by default, but this can be overridden using the parameter `case`. `pcre`: see below \\
`sql_exp`: see below \\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) `INT4`\\ - [`REPLACE( sql_exp1,sql_exp2,sql_exp3 )`](ABENSQL_FUNCTIONS_STRING.html) String `sql_exp1`, in which all instances of `sql_exp2` are replaced by the content from `sql_exp3`. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333. See below `SSTRING` if an argument has the type `SSTRING`, otherwise `CHAR` with the maximum possible length of the result. - [`REPLACE_REGEXPR( pcre = pcre, \ value = sql_exp1, \ with = sql_exp2[,\ occurrence = occ][,\ case_sensitive = case][,\ start = start] )`](ABENSQL_FUNCTIONS_STRING.html) A [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) `pcre` is replaced in `sql_exp1` with the character string specified in `sql_exp2`. `occ` is optional and determines the number of occurrences of `pcre` to be replaced. By default, all occurrences are replaced. The search is case-sensitive by default, but this can be overridden using the parameter `case`. The parameter `start` specifies the offset from which to start the search. `pcre`: see below \\
\\
`sql_exp1`: see below \\
\\
`sql_exp2`: see below \\
\\
`occ`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333; [expressions](ABENEXPRESSION_GLOSRY.html) are also possible if they return an integer of type `INT4` \\
\\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) \\
\\
`start`: `i` or `int8`\\ `SSTRING`\\ - [`RIGHT( sql_exp,len )`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the `len` right characters of `arg` (ignoring the trailing blanks). The value of `len` cannot be greater than the length of `sql_exp`. `sql_exp`: see below \\
\\
`len`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333 `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of the result x [`RPAD( sql_exp,len,src )`](ABENSQL_FUNCTIONS_STRING.html) String of the length `len` with the left-aligned content of `sql_exp` without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument `src` (respecting all blanks). Leading blanks from `sql_exp` are preserved. If more characters are required than exist in `src`, the content of `src` is used repeatedly. If `len` is less than the length of `sql_exp`, it is truncated on the right. If `src` is empty and `len` is greater than the length of `sql_exp`, `sql_exp` remains unchanged. `sql_exp`: see below \\
\\
`len`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, or `i` greater than -2147483648 and less than 67108864. If `len` is used as a [literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html), the ABAP type `int8` is possible too. The result is empty if `len` is less than or equal to 0. The length of the result is 1 if `len` is used as a constant less than or equal to 1. \\
\\
`src`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c`, `d`, `t`, `n`, or `string` with a maximum of 1333 characters `SSTRING` if `sql_exp` has the type `SSTRING`, `SSTRING` with undefined length if `len` is used as an SQL expression or with a length outside the range of 1 to 1333, otherwise `CHAR` with the length of `len`. - [`RTRIM( sql_exp,char )`](ABENSQL_FUNCTIONS_STRING.html) String with the content of `sql_exp` in which all trailing characters that match the characters in `char` are removed. Trailing blanks are removed from `sql_exp` but are significant in `char`. `sql_exp`: see below \\
\\
`char`: [Literal](ABENABAP_SQL_LITERALS.html), [host variable](ABENABAP_SQL_HOST_VARIABLES.html), [host constant](ABENABAP_SQL_HOST_VARIABLES.html), or [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `c` or `n` `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `sql_exp` - [`SUBSTRING( sql_exp,pos,len )`](ABENSQL_FUNCTIONS_STRING.html) Substring `sql_exp` from the position `pos` with length `len`. `pos` and `len` must be specified so that the substring is within `sql_exp`. \\
\\
The function is always executed in the table buffer. `sql_exp`: see below \\
\\
`pos`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, `int8` \\
\\
`len`: [SQL expression](ABAPSQL_EXPR.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, `int8` If `len` is a constant: \\
`SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `len` \\
If `len` is not a constant: \\
the result has the same data type as the first parameter (`sql_exp`) x [`SUBSTRING_REGEXPR( pcre = pcre, \ value = sql_exp[, \ occurrence = occ][, \ case_sensitive = case][, \ start = start][, \ group = group] )`](ABENSQL_FUNCTIONS_STRING.html) Searches `sql_exp` for a [Perl Compatible Regular Expression](ABENPCRE_GLOSRY.html) (PCRE) pattern `pcre` and returns the matched substring. The other parameters are optional. `occ` determines the number of occurrences of `pcre`. The search is case-sensitive by default, but this can be overridden using the parameter `case`. The parameter `start` specifies the offset from which to start the search. The parameter `group` specifies the number of the group of the matched substring. \\
\\
If `occ` is not greater than 0 or `start` or `group` are less than 0, the result is a [null value](ABENNULL_VALUE_GLOSRY.html). `pcre`: see below \\
\\
`sql_exp`: see below \\
\\
`occ`: [Literal](ABENABAP_SQL_LITERALS.html) or [host constant](ABENABAP_SQL_HOST_VARIABLES.html) with the [ABAP type](ABENBUILT_IN_TYPES_COMPLETE.html)\\ `b`, `s`, `i`, or `int8` greater than 0 and less than or equal to 1333; [expressions](ABENEXPRESSION_GLOSRY.html) are also possible if they return an integer of type `INT4` \\
\\
`case`: 'X', ' ', or [null expression](ABENSQL_NULL.html) \\
\\
`start`: `i` or `int8` \\
\\
`group`: `i` or `int8` The same type as `sql_exp`. - [`UPPER( sql_exp )`](ABENSQL_FUNCTIONS_STRING.html) String with a length of `sql_exp`, in which all lowercase letters were transformed to uppercase letters. See below `SSTRING` if `sql_exp` has the type `SSTRING`, otherwise `CHAR` with the length of `sql_exp` x abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html