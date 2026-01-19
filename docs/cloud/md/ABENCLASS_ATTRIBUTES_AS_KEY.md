---
title: "ABENCLASS_ATTRIBUTES_AS_KEY"
description: |
  ABENCLASS_ATTRIBUTES_AS_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCLASS_ATTRIBUTES_AS_KEY.htm"
abapFile: "ABENCLASS_ATTRIBUTES_AS_KEY.html"
keywords: ["delete", "loop", "if", "internal-table", "ABENCLASS", "ATTRIBUTES", "KEY"]
---

If the line type of an internal table contains object reference variables as components `comp`, the attributes `attr` of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expressions:

If a table contains unstructured lines with the type of an object reference variable, the attributes of the object to which a line points can be addressed using `table_line->attr`.

-   `LOOP AT itab ... WHERE comp->attr ...`
-   `READ TABLE itab ... WITH [TABLE] KEY comp->attr = ...`
-   `... itab [ KEY ... comp->attr = ... ] ...`
-   `SORT itab BY comp->attr ...`
-   `DELETE itab WHERE comp->attr ...`
-   `MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...`

abenabap.html abenabap\_reference.html abenabap\_objects.html abenobject.html