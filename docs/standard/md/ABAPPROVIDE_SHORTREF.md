---
title: "ABAPPROVIDE_SHORTREF"
description: |
  ABAPPROVIDE_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPPROVIDE_SHORTREF.htm"
abapFile: "ABAPPROVIDE_SHORTREF.html"
keywords: ["loop", "if", "internal-table", "ABAPPROVIDE", "SHORTREF"]
---

[Reference](ABAPPROVIDE.html)

``PROVIDE FIELDS \{*|\{comp1 comp2 ...\}\}\                 FROM itab1 INTO wa1 VALID flag1 ...                 BOUNDS intliml1 AND intlimu1                 [WHERE [`log_exp1`](ABENLOG_EXP_SHORTREF.html)]\          FIELDS \{*|\{comp1 comp2 ...\}\}\                 FROM itab2 INTO wa2 VALID flag2                 BOUNDS intliml2 AND intlimu2                 [WHERE [`log_exp2`](ABENLOG_EXP_SHORTREF.html)]\                 ...          BETWEEN extliml AND extlimu          [INCLUDING GAPS].    ...  ENDPROVIDE.``

Evaluates a join of special internal tables in a loop. The join is based on overlapping value intervals in the internal tables involved.

-   `FIELDS \{*|\{comp1 comp2 ...\}\}`\\
    Specifies the columns to be read.
-   `FROM itab1 ... FROM itab2 ...`\\
    Specifies the internal tables involved.
-   `INTO wa1 ... INTO wa2 ...`\\
    Specifies work areas for the results.
-   `VALID flag1 ... VALID flag2 ...`\\
    Specifies whether the intervals of the internal tables in the current loop overlap or not.
-   `BOUNDS intliml1 AND intlimu1 ... BOUNDS intliml2 AND intlimu2 ...`\\
    Specifies two special columns for every internal table, whose values must be interpreted as limits of closed intervals.
-   `WHERE log_exp1 ... WHERE log_exp2 ...`\\
    Specifies conditions using logical expressions: `log_exp1`, `log_exp2`, ... and so on.
-   `BETWEEN extliml AND extlimu`\\
    Specifies an outer interval.
-   `INCLUDING GAPS`\\
    Runs the loop for non-overlapping intervals as well.

abenabap.html abenabap\_reference.html abenabap\_shortref.html