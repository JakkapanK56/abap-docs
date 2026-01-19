---
title: "ABAPMINIMUM"
description: |
  ABAPMINIMUM - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPMINIMUM.htm"
abapFile: "ABAPMINIMUM.html"
keywords: ["do", "if", "class", "data", "ABAPMINIMUM"]
---

[Short Reference](ABAPMINIMUM_SHORTREF.html)

`MINIMUM dobj.`

For each [`WRITE`](ABAPWRITE-.html) statement that writes the content of the data object `dobj` to a list at any list level after the statement `MINIMUM`, which is forbidden in classes, is executed, the minimum value of all values of `dobj` produced as output since the statement `MINIMUM` was executed with `WRITE` is determined implicitly and assigned to a data object `min_dobj`.

The statement `MINIMUM` declares the global data object `min_dobj` with the same type as `dobj`. All data objects can be specified for `dobj` that can be written to a list using the statement `WRITE`. The statement `MINIMUM` must not be specified within a [procedure](ABENPROCEDURE_GLOSRY.html) and it can only be specified once in a program.

This statement is not allowed in classes because it works with implicitly created global variables. The built-in function [`nmin`](ABENNMAX_NMIN_FUNCTIONS.html) can, for example, be used instead.

See [`SUMMING`](ABAPSUMMING.html)

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenlists\_obsolete.html abencalculate\_obsolete.html