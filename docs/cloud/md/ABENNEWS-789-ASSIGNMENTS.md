---
title: "ABENNEWS-789-ASSIGNMENTS"
description: |
  ABENNEWS-789-ASSIGNMENTS - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNEWS-789-ASSIGNMENTS.htm"
abapFile: "ABENNEWS-789-ASSIGNMENTS.html"
keywords: ["insert", "loop", "do", "if", "case", "internal-table", "field-symbol", "ABENNEWS", "789", "ASSIGNMENTS"]
---

[1. New Dynamic Component Specification in `ASSIGN`](#ABAP_MODIFICATION_1@4@)

[2. New Addition `ELSE UNASSIGN`](#ABAP_MODIFICATION_2@4@)

Components of structures can be assigned to field symbols with the new syntax [`struc-(comp)`](ABAPASSIGN_DYNAMIC_COMPONENTS.html) that largely replaces the variant `ASSIGN COMPONENT OF`.

The new addition [`ELSE UNASSIGN`](ABAPASSIGN_ELSE_UNASSIGN.html) can be specified for the following variants of the statement [`ASSIGN`](ABAPASSIGN.html):

It can be also specified with the addition `ASSIGNING` of the following internal table statements:

All these statements set `sy-subrc`. If an assignment is not successful, `sy-subrc` is set to the value 4 or sometimes 8. If the addition `ELSE UNASSIGN` is specified, the state of the field symbol is set to unassigned in that case. The field symbol is assigned only if the assignment is successful. If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state, which was the only behavior up to now. Using `ELSE UNASSIGN` introduces the same behavior as for the [static variant](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) to the above variants. In another way around, one can say that the static variant uses `ELSE UNASSIGN` implicitly.

-   [dynamic assignments](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html)
-   [assignments of dynamic components](ABAPASSIGN_DYNAMIC_COMPONENTS.html)
-   [dynamic access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)
-   [assignment of a table expression](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html)

-   [`READ TABLE`](ABAPREAD_TABLE_OUTDESC.html)
-   [`LOOP AT itab`](ABAPLOOP_AT_ITAB_RESULT.html)
-   [`INSERT`](ABAPINSERT_ITAB_RESULT.html)
-   [`MODIFY`](ABAPMODIFY_ITAB_RESULT.html)

abenabap.html abennews.html abennews-78.html abennews-789.html