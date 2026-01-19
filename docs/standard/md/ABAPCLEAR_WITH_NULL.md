---
title: "ABAPCLEAR_WITH_NULL"
description: |
  ABAPCLEAR_WITH_NULL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPCLEAR_WITH_NULL.htm"
abapFile: "ABAPCLEAR_WITH_NULL.html"
keywords: ["do", "case", "data", "ABAPCLEAR", "WITH", "NULL"]
---

[Short Reference](ABAPCLEAR_SHORTREF.html)

`CLEAR dobj WITH NULL.`

This variant of the statement [`CLEAR`](ABAPCLEAR.html), which is not allowed in ABAP Objects, replaces all bytes in `dobj` with the value hexadecimal 0. In this case, the data object `dobj` must be flat.

The addition `WITH NULL` should only be used for byte-like data objects and should therefore be replaced by the addition `CLEAR WITH val`, which offers a higher degree of security in this context.

Usage of `CLEAR WITH NULL`.

Usage of `CLEAR WITH val`.

CLEAR f WITH NULL. CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL. \\nCLEAR f WITH hex. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenobsolete\_assignments.html