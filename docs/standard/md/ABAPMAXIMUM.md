---
title: "ABAPMAXIMUM"
description: |
  ABAPMAXIMUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMAXIMUM.htm"
abapFile: "ABAPMAXIMUM.html"
keywords: ["do", "if", "class", "data", "ABAPMAXIMUM"]
---

[Short Reference](ABAPMAXIMUM_SHORTREF.html)

`MAXIMUM dobj.`

For each [`WRITE`](ABAPWRITE-.html) statement that writes the content of the data object `dobj` to a list at any list level after the statement `MAXIMUM`, which is forbidden in classes, is executed, the maximum value of all values of `dobj` produced as output since the statement `MAXIMUM` was executed with `WRITE` is determined implicitly and assigned to a data object `max_dobj`.

The statement `MAXIMUM` declares the global data object `max_dobj` with the same type as `dobj`. All data objects can be specified for `dobj` that can be written to a list using the statement `WRITE`. The statement `MAXIMUM` must not be specified within a [procedure](ABENPROCEDURE_GLOSRY.html) and can only be specified once in a program.

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [`nmax`](ABENNMAX_NMIN_FUNCTIONS.html) can, for example, be used instead.

See [`SUMMING`](ABAPSUMMING.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenlists\_obsolete.html abencalculate\_obsolete.html