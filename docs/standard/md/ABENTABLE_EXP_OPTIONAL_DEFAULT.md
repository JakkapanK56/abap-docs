---
title: "ABENTABLE_EXP_OPTIONAL_DEFAULT"
description: |
  ABENTABLE_EXP_OPTIONAL_DEFAULT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLE_EXP_OPTIONAL_DEFAULT.htm"
abapFile: "ABENTABLE_EXP_OPTIONAL_DEFAULT.html"
keywords: ["select", "do", "if", "case", "catch", "class", "data", "field-symbol", "ABENTABLE", "EXP", "OPTIONAL", "DEFAULT"]
---

`... OPTIONAL|\{DEFAULT def\} ...`

Specifies a default value for table lines not found. If the [type of the result](ABENTABLE_EXP_RESULT.html) of a table expression [`table_exp`](ABENTABLE_EXPRESSIONS.html) is defined using the value operator `VALUE` or the reference operator `REF`, a default value can be specified after the table expression. If the line [`itab_line`](ABENTABLE_EXP_ITAB_LINE.html) specified in the table expression is not found, an exception of the class `CX_SY_ITAB_LINE_NOT_FOUND` is not raised if a default value is specified and the result is determined by the default value instead.

`def` is a [general expression position](ABENGENERAL_EXPR_POSITION_GLOSRY.html).

If the operand of `VALUE` or `REF` is a single table expression, the default value applies to a single line in the corresponding table. If the operand is a [chaining](ABENTABLE_EXP_CHAINING.html) of table expressions, the default value applies to the result of the chaining, that is, to its right end, which can express a structure component or a table line. A default value specified explicitly must match the result of the chaining accordingly. When a default value is specified for a chaining, the first exception for a missing line across the entire chaining is caught and the default value is returned as a result.

If no line of the specified key is found, the table expression returns a line in which the component `carrid` has the value *NUL* and all other components are initial.

This example demonstrates the difference between specifying the default value for the value operator `VALUE` and the reference operator `REF`. Once this source code section is executed, `var1` is an initial structure with the type `SCARR` and `dref1` is an initial reference variable with the static type of this structure. The reference variable `dref1` does not point to an initial structure. In the case of the default value specified using `DEFAULT`, a reference variable must be specified for `REF`. This is done here using the instance operator `NEW`, not `VALUE`.

[Table Expressions, Default Value](ABENTABLE_EXP_DEFAULT_ABEXA.html)

-   `OPTIONAL`

-   If `VALUE` is used, the default value is an initial data object with the data type of the table expression.
-   If `REF` is used, the default value is an initial reference variable with the static type of the table expression.

-   `DEFAULT`

-   If `VALUE` is used, the default value is specified using a data object `def`, which must be convertible to the data type of the table expression, If `def` is not compatible with the data type of the result of the expression, a conversion is made to this data type in accordance with the [conversion rules](ABENCONVERSION_RULES.html).
-   If `REF` is used, the default value is specified using a reference variable `def`, whose static type is the data type of the table expression.

-   In addition to the functions [`line_exists`](ABENLINE_EXISTS_FUNCTION.html) and [`line_function`](ABENLINE_INDEX_FUNCTION.html), a characteristic default value specified for missing lines also enables the existence of lines to be checked without catching an exception or checking the return value after the statement `ASSIGN`.
-   A default value `def` specified after `DEFAULT` can itself be a table expression with default value. This enables alternative searches to be performed within an expression.
-   There is no operator for the default behavior of a table expression in which the [result](ABENTABLE_EXP_RESULT.html) is usually a temporary field symbol, which means that no default value can be specified here.

DATA spfli\_tab TYPE SORTED TABLE OF spfli \\n WITH UNIQUE KEY carrid connid. \\n\\ \\nSELECT \* \\n FROM spfli \\n INTO TABLE @spfli\_tab. \\n\\ \\ncl\_demo\_output=>display( VALUE #( spfli\_tab\[ carrid = 'LH' \\n connid = '400' \] \\n DEFAULT VALUE #( carrid = 'NUL' ) ) ). DATA itab TYPE TABLE OF scarr WITH EMPTY KEY. \\n\\ \\nFINAL(var1) = VALUE #( itab\[ 1 \] OPTIONAL ). \\nFINAL(var2) = VALUE #( itab\[ 1 \] DEFAULT VALUE #( carrid = 'XXX' \\n carrname = 'xxx' ) ). \\n\\ \\nFINAL(dref1) = REF #( itab\[ 1 \] OPTIONAL ). \\nFINAL(dref2) = REF #( itab\[ 1 \] DEFAULT NEW #( carrid = 'XXX' \\n carrname = 'xxx' ) ). \\n\\ \\nASSERT var1 IS INITIAL. \\nASSERT dref1 IS INITIAL. \\n\\ \\nASSERT var2 = dref2->\*. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abentable\_expressions.html