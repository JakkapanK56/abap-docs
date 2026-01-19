---
title: "ABAPASSIGN_LOCAL_COPY_SHORTREF"
description: |
  ABAPASSIGN_LOCAL_COPY_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPASSIGN_LOCAL_COPY_SHORTREF.htm"
abapFile: "ABAPASSIGN_LOCAL_COPY_SHORTREF.html"
keywords: ["do", "if", "class", "data", "internal-table", "field-symbol", "ABAPASSIGN", "LOCAL", "COPY", "SHORTREF"]
---

[Reference](ABAPASSIGN_LOCAL_COPY.html)

`ASSIGN LOCAL COPY    OF \{\ \{[INITIAL]\ \{ dobj[+off][(len)]\                    | (name)                    | oref->(attr_name)                    |\ \{class|(class_name)\}=>\{attr|(attr_name)\}\                    | dref->* \}\ \}\       |\ \{INITIAL LINE OF \{itab|(itab_name)\}\}\ \}\    TO <fs>    [CASTING ...].`

**Obsolete:** In a [procedure](ABENPROCEDURE_GLOSRY.html), creates a local [anonymous data object](ABENANONYMOUS_DATA_OBJECT_GLOSRY.html) as a copy of a memory area and assigns it to the field symbol `<fs>`.

**Specifies the memory area:**

**Specifies the content:**

**Specifies the data type:**

-   Additions other than `LINE OF` - See [`ASSIGN`](ABAPASSIGN_SHORTREF.html).
-   `LINE OF itab|(itab_name)` - Copy of a line of an internal table `itab`.

-   `INITIAL`\\
    Initializes the anonymous data object. Otherwise, the content of the memory area is used.

-   `CASTING ...`\\
    Specifies the data type used to handle the memory area. See [`ASSIGN`](ABAPASSIGN_SHORTREF.html).

abenabap.html abenabap\_reference.html abenabap\_shortref.html