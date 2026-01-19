---
title: "ABAPINCLUDE_TYPE_SHORTREF"
description: |
  ABAPINCLUDE_TYPE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINCLUDE_TYPE_SHORTREF.htm"
abapFile: "ABAPINCLUDE_TYPE_SHORTREF.html"
keywords: ["ABAPINCLUDE", "TYPE", "SHORTREF"]
---

[Reference](ABAPINCLUDE_TYPE.html)

`INCLUDE \{\ \{TYPE struc_type\}\          |\ \{STRUCTURE struc\}\ \}\          [AS name [RENAMING WITH SUFFIX suffix]].`

Includes all components of the structured type `struc_type` or the structure `struc` at the current position in a structure definition.

-   `AS name`\\
    Defines a higher-level `name` for the included components.
-   `RENAMING WITH SUFFIX suffix`\\
    Renames the bound components by adding the ending `suffix`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html