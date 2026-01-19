---
title: "ABAPON_CHANGE_OF_SHORTREF"
description: |
  ABAPON_CHANGE_OF_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPON_CHANGE_OF_SHORTREF.htm"
abapFile: "ABAPON_CHANGE_OF_SHORTREF.html"
keywords: ["do", "if", "data", "ABAPON", "CHANGE", "SHORTREF"]
---

[Reference](ABAPON.html)

`ON CHANGE OF dobj [OR dobj1 [OR dobj2] ...].    statement_block  ENDON.`

**Obsolete:** Defines a control structure with a statement block `statement_block`. The statement block is executed if the data object `dobj` has changed since the last time the statement `ON CHANGE OF` was executed.

-   `OR dobj1 [OR dobj2] ...`\\
    Executes the statement block even if the content of one of the data objects `dobj1`, `dobj2`, ... changed.

abenabap.html abenabap\_reference.html abenabap\_shortref.html