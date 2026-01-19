---
title: "ABENNEWS-46-INCLUDES"
description: |
  ABENNEWS-46-INCLUDES - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNEWS-46-INCLUDES.htm"
abapFile: "ABENNEWS-46-INCLUDES.html"
keywords: ["if", "ABENNEWS", "INCLUDES"]
---

The statements [`INCLUDE STRUCTURE rec.`](ABAPINCLUDE_TYPE.html) and [`INCLUDE TYPE type.`](ABAPINCLUDE_TYPE.html) were enhanced so that symbolic accesses to groups of fields in structures are possible.

**Variants**

**Advantages**

-   The addition `AS`\\ `name` causes the components of a type or structure included using `INCLUDE` to be accessed as a whole under the alias `name`.
-   The addition `RENAMING WITH SUFFIX suff` renames the component names by appending the ID `suff`. The structure type can then be included more than once.

-   [Flat](ABENFLAT_GLOSRY.html) structures and hierarchy views can be defined simultaneously.
-   There are no problems in [alignment](ABENALIGNMENT_GLOSRY.html) because the flat structure is aligned automatically so that it can carry the hierarchical structure.
-   Flat and hierarchical views use the same memory, so that no exchange between the different memory areas is necessary.
-   Existing structures can be enhanced compatibly and are integrated in full into ABAP Dictionary.

abenabap.html abennews.html abennews-4.html abennews-46a.html