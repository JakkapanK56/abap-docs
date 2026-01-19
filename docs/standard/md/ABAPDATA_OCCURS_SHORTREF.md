---
title: "ABAPDATA_OCCURS_SHORTREF"
description: |
  ABAPDATA_OCCURS_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_OCCURS_SHORTREF.htm"
abapFile: "ABAPDATA_OCCURS_SHORTREF.html"
keywords: ["do", "data", "ABAPDATA", "OCCURS", "SHORTREF"]
---

[Reference](ABAPDATA_OCCURS.html)

`DATA itab \{\ \{TYPE [REF TO] type\}\            |\ \{LIKE [REF TO] dobj\}\ \} OCCURS n            [WITH HEADER LINE].`

**Obsolete:** Declares a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) with a [standard key](ABENSTANDARD_KEY_GLOSRY.html) and the initial memory requirement `n`.

-   `TYPE`\\
    Defines the line type with a reference to a data type.
-   `LIKE`\\
    Defines the line type with a reference to a data object.
-   `REF TO`\\
    Creates the line type as a reference type.
-   [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html)\\
    Defines a header line with the same name.

abenabap.html abenabap\_reference.html abenabap\_shortref.html