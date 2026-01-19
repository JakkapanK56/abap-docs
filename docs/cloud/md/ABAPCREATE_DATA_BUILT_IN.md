---
title: "ABAPCREATE_DATA_BUILT_IN"
description: |
  ABAPCREATE_DATA_BUILT_IN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPCREATE_DATA_BUILT_IN.htm"
abapFile: "ABAPCREATE_DATA_BUILT_IN.html"
keywords: ["if", "case", "data", "types", "ABAPCREATE", "DATA", "BUILT"]
---

`CREATE DATA dref```\ [`area_handle`]``\\ 
                 `TYPE \{abap_type|(name)\}`\\ 
                      `[LENGTH len] [DECIMALS dec].`

Creation of a data object with an explicitly specified data type. For the data type, all [built-in data types](ABENBUILTIN_DATA_TYPE_GLOSRY.html), apart from `b` and `s`, can be used that are more specific than the static type of `dref` or are identical to it. The name of the type can be specified as follows:

For the ABAP types `c`, `n`, `p`, and `x`, the length of the data type `dtype` can be determined by specifying a numeric data object `len` after the addition `LENGTH`, which, when the statement is executed, contains a value within the [length range](ABENBUILT_IN_TYPES_COMPLETE.html) specified for the respective type. If the addition `LENGTH` is not specified, the standard length from the table is used. For all other ABAP types, the length is determined by the value in the table and the addition `LENGTH` cannot be specified.

For the ABAP type `p`, the number of [decimal places](ABENDECIMAL_PLACE_GLOSRY.html) can be determined by specifying a numeric data object `dec` after the addition `DECIMALS`. If `DECIMALS` is specified, the same applies as to the statement [`TYPES`](ABAPTYPES_SIMPLE.html). If the addition `DECIMALS` is not specified, no decimal places are created.

If a data type `abap_type` is used, the [instance operator](ABENINSTANCE_OPERATOR_GLOSRY.html)\\ [`NEW`](ABENCONSTRUCTOR_EXPRESSION_NEW.html) acts like the statement `CREATE DATA dref TYPE abap_type` and can be used in [general expression positions](ABENGENERAL_EXPR_POSITION_GLOSRY.html). The dynamic specification of `name` is not possible here.

Creation of an anonymous data object of the type of a packed number with length specification and decimal places.

[Creating Elementary Data Objects](ABENCREATE_SIMPLE_DATA_ABEXA.html)

-   `abap_type`
-   Direct static specification as `abap_type`.
-   `(name)`
-   Specification as the content of a character-like data object `name` without case-sensitivity. The following can be specified for `name`:

-   Literal or constant
-   If the data object `name` is specified as a character literal or as a constant, it can be evaluated statically and the specified type is recognized as the used object.
-   Variable
-   If the data object `name` is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

-   When the statement is executed, `name` is not evaluated until runtime (in both cases).

FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\nDATA dref TYPE REF TO data. \\n\\ \\nCREATE DATA dref TYPE p LENGTH 8 DECIMALS 3. \\n\\ \\ndref->\* = 1 / 3. \\n\\ \\nout->write( dref->\* ). \\n\\ \\nout->display( ). abenabap.html abenabap\_reference.html abencreate\_objects.html abapcreate\_data.html