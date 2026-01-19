---
title: "ABENEQUALS_BIT_EXPR"
description: |
  ABENEQUALS_BIT_EXPR - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEQUALS_BIT_EXPR.htm"
abapFile: "ABENEQUALS_BIT_EXPR.html"
keywords: ["if", "method", "data", "ABENEQUALS", "BIT", "EXPR"]
---

``result = [`bit_exp`](ABAPCOMPUTE_BIT.html).``

If a [bit expression](ABENBIT_EXPRESSION_GLOSRY.html)\\ [`bit_exp`](ABAPCOMPUTE_BIT.html) is specified on the right side of the [assignment operator `=`](ABENEQUALS_OPERATOR.html), a byte chain with the [calculation length](ABENBITEXP_LENGTH.html) is calculated and assigned to the left side `result` like a [source field with the type `xstring`](ABENCONVERSION_TYPE_XSTRING.html).

The following can be specified for `result`:

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

-   A [variable](ABENVARIABLE_GLOSRY.html) with the type `x` or `xstring`.
-   A [variable](ABENVARIABLE_GLOSRY.html) with the type `c` or `string`.
-   An inline declaration [`DATA(var)`](ABENDATA_INLINE.html) or [`FINAL(var)`](ABENFINAL_INLINE.html). The data type of the declared variable `var` is `xstring`.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'. \\nDATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'. \\n\\ \\nFINAL(result1) = hex1 BIT-AND hex2. \\nFINAL(result2) = hex1 BIT-OR hex2. \\ncl\_demo\_output=>write( result1 ). \\ncl\_demo\_output=>display( result2 ). abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenequals\_operator.html abenequals\_calc\_expr.html