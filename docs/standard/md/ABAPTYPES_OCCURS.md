---
title: "ABAPTYPES_OCCURS"
description: |
  ABAPTYPES_OCCURS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPTYPES_OCCURS.htm"
abapFile: "ABAPTYPES_OCCURS.html"
keywords: ["do", "class", "types", "ABAPTYPES", "OCCURS"]
---

[Short Reference](ABAPTYPES_OCCURS_SHORTREF.html)

`TYPES dtype \{\ \{TYPE [REF TO] type\}`\\ 
            `|\ \{LIKE [REF TO] dobj\}\ \} OCCURS n.`

This statement is forbidden in classes. The statement has the same function as the following [`TYPES`](ABAPTYPES_ITAB.html) statement for defining [standard table](ABENSTANDARD_TABLE_GLOSRY.html) types, and is replaced by the following:

TYPES dtype \\{\\ \\{TYPE STANDARD TABLE OF \[REF TO\] type\\}\\ \\n            |\\ \\{LIKE STANDARD TABLE OF \[REF TO\] dobj\\}\\ \\}\\ \\n            WITH NON-UNIQUE DEFAULT KEY \\n            INITIAL SIZE n.

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html