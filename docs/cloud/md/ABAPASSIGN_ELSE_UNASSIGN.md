---
title: "ABAPASSIGN_ELSE_UNASSIGN"
description: |
  ABAPASSIGN_ELSE_UNASSIGN - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPASSIGN_ELSE_UNASSIGN.htm"
abapFile: "ABAPASSIGN_ELSE_UNASSIGN.html"
keywords: ["do", "if", "case", "data", "field-symbol", "ABAPASSIGN", "ELSE", "UNASSIGN"]
---

`... ELSE UNASSIGN ...`

This addition to the statement [`ASSIGN`](ABAPASSIGN.html) unassigns the field symbol if the assignment is not successful. The addition can be specified for the following variants of the `ASSIGN` statement:

These variants set `sy-subrc`. If the assignment is not successful, and `sy-subrc` is set to 4 or 8, then:

After a successful assignment, the next assignment is not successful because of a wrong dynamic specification. `sy-subrc` is set to 4 and the field symbol that was assigned before is unassigned.

-   [dynamic assignments](ABAPASSIGN_MEM_AREA_DYNAMIC_DOBJ.html)
-   [assignments of dynamic components](ABAPASSIGN_DYNAMIC_COMPONENTS.html)
-   [dynamic access](ABAPASSIGN_MEM_AREA_DYNAMIC_ACCESS.html)
-   [assignment of a table expression](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html)

-   If `ELSE UNASSIGN` is specified, no memory area is assigned to the field symbol. The field symbol has the state unassigned after the `ASSIGN` statement.
-   If `ELSE UNASSIGN` is not specified, the field symbol keeps its previous state.

-   For the [static variant](ABAPASSIGN_MEM_AREA_STATIC_DOBJ.html) of the `ASSIGN` statement, the addition `ELSE UNASSIGN` is implicitly set and cannot be used explicitly.
-   Using the addition for the variants listed above harmonizes their behavior with the behavior of the static variant.
-   Setting a field symbol to unassigned in case of an unsuccessful assignment prevents unintentional use of a previous assignment.
-   Using the addition allows the success of the assignment to be checked using the predicate [`IS ASSIGNED`](ABENLOGEXP_ASSIGNED.html) as well as checking `sy-subrc`.
-   The assignment variants for constructor expressions [`NEW`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) or [`CASE`](ABAPASSIGN_MEM_AREA_WRITABLE_EXP.html) are either successful or lead to an exception and the addition `ELSE UNASSIGN` is not possible.
-   If the addition is specified, but the assignment is interrupted by an exception and `sy-subrc` is not set, the field symbol keeps its previous state.
-   The addition is not possible for obsolete variants of the `ASSIGN` statement.

FINAL(field) = \`exists\`. \\n\\ \\nASSIGN ('field') TO FIELD-SYMBOL() ELSE UNASSIGN. \\nASSERT sy-subrc = 0 AND IS ASSIGNED. \\n\\ \\nASSIGN ('exists') TO ELSE UNASSIGN. \\nASSERT sy-subrc = 4 AND IS NOT ASSIGNED. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenvalue\_assignments.html abenreference\_assignments.html abenset\_field\_symbols.html abapassign.html