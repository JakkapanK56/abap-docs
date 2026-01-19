---
title: "ABAPDELETE_TEXTPOOL"
description: |
  ABAPDELETE_TEXTPOOL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_TEXTPOOL.htm"
abapFile: "ABAPDELETE_TEXTPOOL.html"
keywords: ["insert", "delete", "do", "if", "data", "ABAPDELETE", "TEXTPOOL"]
---

**This statement is for internal use only. \\nIt must not be used in application programs.**

`DELETE TEXTPOOL prog LANGUAGE lg.`

[`... STATE state`](#ABAP_ONE_ADD@1@)

[All](ABENTEXT_ELEMENT_GLOSRY.html) text elements in the program whose name is in the field `prog` are deleted from the library in the specified language `lg`.
\\
If the value `'*'` is used for `lg`, the text elements of all languages are deleted.

Deletion of all text elements of the program *PROGNAME* in the language *English*.

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

DATA PROGRAM LIKE SY-REPID VALUE 'PROGNAME'. \\n\\ \\nDELETE TEXTPOOL PROGRAM LANGUAGE 'E'. abenabap.html abenabap\_reference.html abenprogram\_editing.html abenabap\_language\_dynamic.html abentextpool.html abengeneric\_text\_internal.html