---
title: "ABAPDATA_BEGIN_OF_SHORTREF"
description: |
  ABAPDATA_BEGIN_OF_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDATA_BEGIN_OF_SHORTREF.htm"
abapFile: "ABAPDATA_BEGIN_OF_SHORTREF.html"
keywords: ["do", "class", "data", "internal-table", "ABAPDATA", "BEGIN", "SHORTREF"]
---

[Reference](ABAPDATA_STRUC.html)

``DATA BEGIN OF struc [READ-ONLY]\ [OCCURS n].    ...    [`INCLUDE ...`](ABAPINCLUDE_TYPE_SHORTREF.html)\    ...  DATA END OF struc [VALID BETWEEN intlim1 AND intlim2].``

Declares a data object or instance attribute `struc`. This variant of the statement `DATA` creates a structure whose components can be declared using any `DATA` statements or adopted from other structures using `INCLUDE`.

-   [`READ-ONLY`](ABAPDATA_OPTIONS.html)\\
    Protects a non-private structure against writes from outside its own class.
-   [`OCCURS n`](ABAPDATA_BEGIN_OF_OCCURS.html)\\
    **Obsolete:** Creates an internal table with a structured line type, [standard key](ABENSTANDARD_KEY_GLOSRY.html), a [header line](ABENHEADER_LINE_GLOSRY.html), and [initial memory requirement](ABENINITIAL_MEM_REQ_GLOSRY.html)\\ `n`.
-   [`VALID BETWEEN intlim1 AND intlim2`](ABAPDATA_BEGIN_OF_OCCURS.html)\\
    **Obsolete:** Defines the columns `intlim1` and `intlim2` in an internal table, created using `OCCURS`, as interval limits for the obsolete short form of [`PROVIDE`](ABAPPROVIDE_OBSOLETE.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html