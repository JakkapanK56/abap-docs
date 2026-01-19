---
title: "ABAPDATA_OCCURS"
description: |
  ABAPDATA_OCCURS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_OCCURS.htm"
abapFile: "ABAPDATA_OCCURS.html"
keywords: ["do", "class", "data", "ABAPDATA", "OCCURS"]
---

[Short Reference](ABAPDATA_OCCURS_SHORTREF.html)

`DATA itab \{\ \{TYPE [REF TO] type\}`\\ 
          `|\ \{LIKE [REF TO] dobj\}\ \} OCCURS n`\\ 
          `[[WITH HEADER LINE]](ABAPDATA_HEADER_LINE.html).`

This statement is forbidden in classes. It has exactly the same function as the following [`DATA`](ABAPDATA_ITAB.html) statement for the declaration of a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) and is replaced by this:

DATA itab \\{\\ \\{TYPE STANDARD TABLE OF \[REF TO\] type\\}\\ \\n          |\\ \\{LIKE STANDARD TABLE OF \[REF TO\] dobj\\}\\ \\}\\ \\n          WITH NON-UNIQUE DEFAULT KEY \\n          INITIAL SIZE n \\n          \[WITH HEADER LINE\].

The use of the addition [`WITH HEADER LINE`](ABAPDATA_HEADER_LINE.html) is obsolete

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_declarations.html abenitab\_declare\_obsolete.html