---
title: "ABAPINFOTYPES_SHORTREF"
description: |
  ABAPINFOTYPES_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINFOTYPES_SHORTREF.htm"
abapFile: "ABAPINFOTYPES_SHORTREF.html"
keywords: ["data", "types", "internal-table", "ABAPINFOTYPES", "SHORTREF"]
---

[Reference](ABAPINFOTYPES.html)

`INFOTYPES nnnn [NAME name]\                 [OCCURS n]\                 [MODE N]\                 [VALID FROM intlim1 TO intlim2]\                 [AS PERSON TABLE].`

**Special Statement:**\\
Creates an internal table with the name `pnnnn` for an infotype of the SAP ERP component HR.

-   `nnnn`\\
    Four-digit, numeric key of an info type.
-   `NAME name`\\
    Defines the name of the internal table as `name`.
-   `OCCURS n`\\
    Defines the initial memory usage of the internal table.
-   `MODE N`\\
    Prevents linking to special [logical databases](ABENLOGICAL_DATA_BASE_GLOSRY.html).
-   `VALID FROM intlim1 TO intlim2`\\
    Creates the columns `intlim1` and `intlim2` for the obsolete abbreviated form of [`PROVIDE`](ABAPPROVIDE_OBSOLETE.html) as interval limits.
-   `AS PERSON TABLE`\\
    Creates the name of the internal table as `ppnnnn`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html