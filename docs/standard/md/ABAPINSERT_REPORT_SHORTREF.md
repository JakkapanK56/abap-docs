---
title: "ABAPINSERT_REPORT_SHORTREF"
description: |
  ABAPINSERT_REPORT_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPINSERT_REPORT_SHORTREF.htm"
abapFile: "ABAPINSERT_REPORT_SHORTREF.html"
keywords: ["insert", "if", "try", "internal-table", "ABAPINSERT", "REPORT", "SHORTREF"]
---

[Reference](ABAPINSERT_REPORT.html)

`INSERT REPORT prog FROM itab                [MAXIMUM WIDTH INTO wid]\                \{\ [KEEPING DIRECTORY ENTRY]\                |\ \{\ [PROGRAM TYPE pt]\                    [FIXED-POINT ARITHMETIC fp]\                    [VERSION|\{UNICODE ENABLING\} vs]\ \}\                |\ [DIRECTORY ENTRY dir]\ \}.`

Inserts the source code contained in the internal table `itab` as an ABAP program `prog` into the [repository](ABENREPOSITORY_GLOSRY.html).

-   `MAXIMUM WIDTH INTO wid`\\
    Returns the number of characters of the longest source code line passed in `wid`.
-   `KEEPING DIRECTORY ENTRY`\\
    Preserves the properties of an existing program.
-   `PROGRAM TYPE pt`\\
    The [program type](ABENPROGRAM_TYPE_GLOSRY.html) is specified by `pt`.
-   `FIXED-POINT ARITHMETIC fp`\\
    Defines fixed point arithmetic by specifying blank or *X* in `fp`.
-   `VERSION vs`\\
    Defines the [ABAP language version](ABENABAP_VERSIONS.html) by specifying the version ID in `vs`.
-   `UNICODE ENABLING vs`\\
    **Obsolete:** Works like `VERSION vs`.
-   `DIRECTORY ENTRY dir`\\
    The [program properties](ABENPROGRAM_PROPERTY_GLOSRY.html) are specified by the entries in the structure `dir` of the type `TRDIR`.

abenabap.html abenabap\_reference.html abenabap\_shortref.html