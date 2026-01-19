---
title: "ABENSQL_TYPE_CONV_FUNC"
description: |
  ABENSQL_TYPE_CONV_FUNC - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSQL_TYPE_CONV_FUNC.htm"
abapFile: "ABENSQL_TYPE_CONV_FUNC.html"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "ABENSQL", "TYPE", "CONV", "FUNC"]
---

`... BINTOHEX( sql_exp )    | HEXTOBIN( sql_exp )    | TO_CLOB( sql_exp )    | TO_BLOB( sql_exp ) ...`

[1a. `... BINTOHEX( sql_exp )`](#ABAP_VARIANT_1a@1a@)

[1b. `... HEXTOBIN( sql_exp )`](#ABAP_VARIANT_1b@1b@)

[2a. `... TO_CLOB( sql_exp )`](#ABAP_VARIANT_2a@1a@)

[2b. `... TO_BLOB( sql_exp )`](#ABAP_VARIANT_2b@1b@)

Functions for conversions between data types in an ABAP SQL statement.

The `BINTOHEX` and `HEXTOBIN` functions convert byte strings to character strings and vice versa. The argument `sql_exp` can be an [SQL expression](ABAPSQL_EXPR.html), where literals are only possible to a limited extend:

If the argument has a [null value](ABENNULL_VALUE_GLOSRY.html), the result of the entire conversion function is the null value.

The functions `HEXTOBIN` and `BINTOHEX` enforce the [strict mode from ABAP release 7.68](ABENABAP_SQL_STRICTMODE_768.html).

The `ID` column of the DDIC database table `IWREFERENC` contains 32-character character-like [UUIDs](ABENUUID_GLOSRY.html) in hexadecimal representation. The statement `SELECT` reads a UUID once directly and once as the result of the built-in function `HEXTOBIN`. The function produces the same result as a conversion using the class `CL_SYSTEM_UUID`. Of course, in ABAP the simple assignment `uuid16 = wa-uuid32` would be possible instead of the method call, since the [conversion](ABENCONVERSION_TYPE_C.html) of `c` to `x` has the same result.

The `TO_CLOB` function converts the value of the operand `sql_exp` from a character string of fixed length of type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html) to a [CLOB](ABENCLOB_GLOSRY.html) of type [`STRING`](ABENDDIC_BUILTIN_TYPES.html). The argument `sql_exp` can be a [column](ABENABAP_SQL_COLUMNS.html), a [literal](ABENABAP_SQL_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host constant](ABENHOST_VARIABLE_GLOSRY.html), or an [SQL expression](ABAPSQL_EXPR.html). The data type of the argument must be [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`SSTRING`](ABENDDIC_BUILTIN_TYPES.html). The result is a [CLOB](ABENCLOB_GLOSRY.html) of type [`STRING`](ABENDDIC_BUILTIN_TYPES.html).

If the argument has a [null value](ABENNULL_VALUE_GLOSRY.html), the result of the conversion function is the null value.

The `SELECT`\-statement reads the value of column `CHAR10` from the DDIC database table `DEMO_DDIC_TYPES` and converts it from type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) to a [CLOB](ABENCLOB_GLOSRY.html) of type [`STRING`](ABENDDIC_BUILTIN_TYPES.html). Then, a reader stream is created that reads the [CLOB](ABENCLOB_GLOSRY.html) in chunks of two characters and returns a list of 2-digit numbers.

The `TO_BLOB` function converts the value of the operand `sql_exp` from a byte field of type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) to a byte string [(BLOB)](ABENBLOB_GLOSRY.html) of type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html). The argument `sql_exp` can be a [column](ABENABAP_SQL_COLUMNS.html), a [literal](ABENABAP_SQL_LITERALS.html), a [host variable](ABENABAP_SQL_HOST_VARIABLES.html), a [host constant](ABENHOST_VARIABLE_GLOSRY.html), or an [SQL expression](ABAPSQL_EXPR.html). The data type of the argument must be [`RAW`](ABENDDIC_BUILTIN_TYPES.html). The result is a [BLOB](ABENBLOB_GLOSRY.html) of type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html).

If the argument has a [null value](ABENNULL_VALUE_GLOSRY.html), the result of the entire conversion function is the null value.

A variable of the built-in ABAP type [`x`](ABENBUILTIN_TYPES_BYTE.html), which maps to the ABAP Dictionary type [`RAWSTRING`](ABENDDIC_BUILTIN_TYPES.html), is inserted into a database field, which requires type [`RAW`](ABENDDIC_BUILTIN_TYPES.html), which maps to the ABAP type [`xstring`](ABENBUILTIN_TYPES_BYTE.html), using the conversion function `TO_BLOB`.

-   These SQL functions execute special conversions that cannot be handled in a general [`CAST`](ABENSQL_CAST.html) expression.
-   For all type conversion functions, the syntax check is performed in the corresponding [strict mode](ABENABAP_SQL_STRICT_MODES.html).

-   `BINTOHEX` takes a byte string and converts it to a character string that contains the half bytes of the value of `sql_exp` converted to the hexadecimal characters *0* to *9* and *A* to *F* left justified. The valid argument type is [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with a maximum length of 255. The result has the type [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) with twice the length of the value of `sql_exp`.
-   `HEXTOBIN` converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of the value of `sql_exp`. Any leading blanks are removed before the conversion from the value of `sql_exp` and all trailing blanks are then replaced by *0*. The valid argument types are [`CHAR`](ABENDDIC_BUILTIN_TYPES.html) or [`NUMC`](ABENDDIC_BUILTIN_TYPES.html) with a maximum length of 510. The result has the type [`RAW`](ABENDDIC_BUILTIN_TYPES.html) with half the length of the value of `sql_exp`. The number of characters in the argument must be even and can contain only the hexadecimal characters *0* to *9* and *A* to *F* in uppercase or lowercase and leading and trailing blanks. Character-like literals can be specified. If literals, host variables, or host expressions determine the argument directly, and not as part of a larger SQL expression, they cannot contain any leading blanks.

-   After the conversion, [streaming and locators](ABENSTREAMS_LOCATORS.html) can be used on the result and length restrictions can be avoided. For example, when using `STRING_AGG` in combination with `TO_CLOB`, it is possible to read data strings that are much greater than the strings that can be read with `STRING_AGG` alone.
-   When using [streaming and locators](ABENSTREAMS_LOCATORS.html) in combination with the conversion function `TO_CLOB`, it is not allowed to use [LOB interfaces](ABENLOB_INTERFACES.html) and the addition [`CREATING`](ABAPSELECT_CREATING.html).
-   `TO_CLOB` enforces the [strict mode from ABAP release 7.79](ABENABAP_SQL_STRICTMODE_779.html).

-   After the conversion, [streaming and locators](ABENSTREAMS_LOCATORS.html) can be used on the result and possible length restrictions can be avoided.
-   When using [streaming and locators](ABENSTREAMS_LOCATORS.html) in combination with the conversion function `TO_BLOB`, [LOB interfaces](ABENLOB_INTERFACES.html) and the addition [`CREATING`](ABAPSELECT_CREATING.html) cannot be used.
-   `TO_BLOB` enforces the [strict mode from ABAP release 7.80](ABENABAP_SQL_STRICTMODE_780.html).

SELECT SINGLE id AS uuid32, hextobin( id ) AS uuid16 \\n FROM iwreferenc \\n WHERE tcode = 'SE38' \\n INTO @FINAL(wa). \\n\\ \\nIF sy-subrc = 0. \\n TRY. \\n DATA uuid16 LIKE wa-uuid16. \\n cl\_system\_uuid=>convert\_uuid\_c32\_static( \\n EXPORTING \\n uuid = wa-uuid32 \\n IMPORTING \\n uuid\_x16 = uuid16 ). \\n ASSERT wa-uuid16 = uuid16. \\n CATCH cx\_uuid\_error. \\n ... \\n ENDTRY. \\nENDIF. DELETE FROM demo\_ddic\_types. \\nINSERT demo\_ddic\_types \\n FROM @( VALUE #( id = 'X' char10 = '0123456789' ) ). \\n\\ \\nDATA reader TYPE REF TO cl\_abap\_db\_c\_reader. \\n\\ \\nSELECT SINGLE to\_clob( char10 ) AS clob \\n FROM demo\_ddic\_types \\n WHERE id = 'X' \\n INTO @reader. \\n\\ \\nDO. \\n cl\_demo\_output=>write( reader->read( 2 ) ). \\n IF NOT reader->data\_available( ). \\n EXIT. \\n ENDIF. \\nENDDO. \\n\\ \\ncl\_demo\_output=>display( ). DATA raw\_value TYPE x LENGTH 255 VALUE '41424344'. \\n\\ \\nDELETE FROM demo\_ddic\_types. \\nINSERT demo\_ddic\_types FROM @( VALUE #( id = 1 raw10 = raw\_value ) ). \\nSELECT SINGLE \\n to\_blob( raw10 ) AS blob \\n FROM demo\_ddic\_types \\n WHERE id = 1 \\n INTO @FINAL(result). abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_special\_functions.html abenabap\_sql\_conversion\_functions.html