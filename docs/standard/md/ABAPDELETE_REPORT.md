---
title: "ABAPDELETE_REPORT"
description: |
  ABAPDELETE_REPORT - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_REPORT.htm"
abapFile: "ABAPDELETE_REPORT.html"
keywords: ["insert", "delete", "do", "if", "try", "data", "ABAPDELETE", "REPORT"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`DELETE REPORT prog.`

[`... STATE state`](#ABAP_ONE_ADD@1@)

Deletes the source code, properties, text elements, and generated form of the program, whose name is contained in the data object `prog`. An entry for `prog` in the database table `TADIR` remains unchanged.

This statement does not delete the package assignment, the documentation, or the variants of the program in `prog` on the database. For this reason, the function module `RS_DELETE_PROGRAM` should be used to delete a program completely.

This addition determines whether the statement uses the active version or an inactive version of the repository object. `state` can have the values *A* (for active) and *I* (for inactive), which is checked statically if specified as a literal.

-   If the addition `state` is not specified, the statement accesses either

-   the active version of the repository object or
-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

-   Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module `RS_WORKING_AREA_PREPARE`. If the worklist is not prepared, the statement accesses the active version of the repository object.
-   If the addition `state` is specified, the statement accesses

-   the active version of the repository object if *A* is specified,
-   the inactive version of the repository object if *I* is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and `sy-subrc` is set to 4.

-   *Cause:*\\ `state` has a value other than *A* or *I*.
    *Runtime error:*\\ `INSERT_REPORT_ILLEGAL_STATE`

`**sy-subrc**` **Meaning** 0 The program was deleted. 4 The program did not exist. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abenabap\_generic\_program.html abengeneric\_internal.html