---
title: "ABENSQL_STRING"
description: |
  ABENSQL_STRING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_STRING.htm"
abapFile: "ABENSQL_STRING.html"
keywords: ["select", "do", "if", "case", "data", "types", "internal-table", "ABENSQL", "STRING"]
---

`... sql_elem1 && sql_elem2  [&& sql_elem3 ... ] ...`

String expression in ABAP SQL. The operator `&&` concatenates the character strings in two adjacent operands into a single character string. [Elementary SQL expressions](ABENSQL_ELEM.html) can be specified as the operands `sql_elem1`, `sql_elem2` with the following restrictions:

The result of the concatenation must be no longer than 255 characters. Trailing blanks are handled as follows:

The result has the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) in the resulting length and can be assigned to the ABAP types `c` and `string` in accordance with the associated [assignment rule](ABENSELECT_INTO_CONVERSION.html).

If the operand of a string expression has the [null value](ABENNULL_VALUE_GLOSRY.html), the result of the full string expression is the null value.

The two columns in a result set are created using a concatenation of character-like columns of the data source and of literals.

[SQL Expressions, Concatenations](ABENSQL_EXPR_STRING_ABEXA.html)

-   A literal must be a non-empty [text field literal](ABENTEXT_FIELD_LITERAL_GLOSRY.html) of type `c`.
-   Host variables and host expressions must be of ABAP type `c`.
-   Columns of [data sources](ABAPSELECT_DATA_SOURCE.html) must have one of the dictionary types [`CHAR`](ABENDDIC_BUILTIN_TYPES.html), [`CLNT`](ABENDDIC_BUILTIN_TYPES.html), [`CUKY`](ABENDDIC_BUILTIN_TYPES.html), [`LANG`](ABENDDIC_BUILTIN_TYPES.html), or [`UNIT`](ABENDDIC_BUILTIN_TYPES.html).

-   Precisely one blank is respected in host variables declared using `CONSTANTS` and in text field literals consisting only of blanks.
-   In all other cases, trailing blanks are cut off on the right.

-   Specifying a string expression always means specifying an [SQL expression](ABAPSQL_EXPR.html). String expressions can only be specified for operand positions for which SQL expressions are possible.
-   Strings can also be concatenated using the SQL function [`CONCAT`](ABENSQL_STRING_FUNC.html). The function `CONCAT` is restricted to concatenating two operands but has the following benefits when compared to the operator `&&`:

-   It allows any SQL expressions as operands.
-   It allows more data types.
-   It does not apply any special handling to constants and text field literals that contain only blanks.
-   It allows results to be longer than 255 characters.

-   A string expression cannot be evaluated by the [ABAP SQL in-memory engine](ABENABAP_SQL_INMEMENG.html) and always causes [table buffer](ABENTABLE_BUFFER_GLOSRY.html) to be bypassed and an internal table accessed by [`FROM @itab`](ABAPSELECT_ITAB.html) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

SELECT FROM spfli \\n INNER JOIN scarr \\n ON spfli~carrid = scarr~carrid \\n FIELDS spfli~carrid && ' ' && '(' && scarr~carrname && ')' \\n AS carrier, \\n cityfrom && ' ' && '-' && ' ' && cityto \\n AS connection \\n ORDER BY spfli~carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\ncl\_demo\_output=>display( result ). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html