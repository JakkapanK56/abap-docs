---
title: "ABENTABLES_PARAMETERS_RESTRICTIONS"
description: |
  ABENTABLES_PARAMETERS_RESTRICTIONS - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENTABLES_PARAMETERS_RESTRICTIONS.htm"
abapFile: "ABENTABLES_PARAMETERS_RESTRICTIONS.html"
keywords: ["if", "case", "data", "internal-table", "ABENTABLES", "PARAMETERS", "RESTRICTIONS"]
---

In some variants of statements, which use a work area to access internal tables, the work area must be compatible with the line type of the internal table. This is checked statically by the syntax check.

In the case of `TABLES` parameters typed using the obsolete addition [`STRUCTURE`](ABAPFUNCTION_TYPING_OBSOLETE.html), the compatibility of the work area with the type specified in `STRUCTURE` is checked. The [header line](ABENHEADER_LINE_GLOSRY.html) that always exists for `TABLES` parameters also has this type.

If a `TABLES` parameter is typed using `STRUCTURE` it can also be bound to actual parameters whose line type is longer than the type of the `TABLES` parameter and that are therefore incompatible with a work area recognized as correct by the syntax check. This causes problems if the components of the `TABLES` parameter are accessed dynamically within the procedure, since the data type of the actual parameter is evaluated at runtime. Therefore, memory limits can be violated by statements accessing a work area that references the type specified using `STRUCTURE`. This is why the following accesses produce the runtime error `ITAB_STRUC_ACCESS_VIOLATION`:

This exception can occur particularly if the [header line](ABENHEADER_LINE_GLOSRY.html) is used as an implicit work area. An explicit work area with the type of the actual parameter should be used to avoid this runtime error.

-   The following statements are terminated when the component specified in `name` is used to access a memory area after `wa`.

-   `[READ TABLE itab](ABAPREAD_TABLE.html)\ [INTO wa](ABAPREAD_TABLE_OUTDESC.html) ... [COMPARING|TRANSPORTING ... (name) ...](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)`
-   `[MODIFY itab](ABAPMODIFY_ITAB.html)\ [FROM wa TRANSPORTING ... (name) ...](ABAPMODIFY_ITAB_SINGLE.html)`
-   `[APPEND wa TO itab SORTED BY ... (name) ...](ABAPAPPEND.html)`

-   The following statements are terminated when `wa` is shorter than the line type:

-   `[READ TABLE itab](ABAPREAD_TABLE.html)\ [INTO wa](ABAPREAD_TABLE_OUTDESC.html) ... [COMPARING ALL FIELDS.](ABAPREAD_TABLE_TRANSPORT_OPTIONS.html)`
-   `[COLLECT wa INTO itab ...](ABAPCOLLECT.html)`

abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_modularization.html abenfunction\_modules\_obsolete.html abaptables\_parameters\_obsolete.html