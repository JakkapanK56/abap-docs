---
title: "ABAPLOOP_AT_GROUP_SHORTREF"
description: |
  ABAPLOOP_AT_GROUP_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_GROUP_SHORTREF.htm"
abapFile: "ABAPLOOP_AT_GROUP_SHORTREF.html"
keywords: ["loop", "internal-table", "ABAPLOOP", "GROUP", "SHORTREF"]
---

[Reference](ABAPLOOP_AT_GROUP.html)

`LOOP AT GROUP group \{\ \{ INTO wa \}\                      |\ \{ ASSIGNING <fs> [CASTING]\ \}\                      |\ \{ REFERENCE INTO dref \}\                      |\ \{ TRANSPORTING NO FIELDS \}\ \}\                    [WHERE log_exp]\                    [GROUP BY ...].    ...  ENDLOOP.`

Reads the members of a group `group` from an internal table.

-   [`INTO`](ABAPLOOP_AT_ITAB_RESULT.html), [`ASSIGNING`](ABAPLOOP_AT_ITAB_RESULT.html), [`REFERENCE INTO`](ABAPLOOP_AT_ITAB_RESULT.html), [`TRANSPORTING NO FIELDS`](ABAPLOOP_AT_ITAB_RESULT.html)\\
    Determines the output behavior (like in [`LOOP AT itab`](ABAPLOOP_AT_ITAB_SHORTREF.html)).
-   [`WHERE log_exp`](ABAPLOOP_AT_ITAB_COND.html)\\
    Static `WHERE` condition (like in [`LOOP AT itab`](ABAPLOOP_AT_ITAB_SHORTREF.html)).
-   [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html)\\
    Further grouping (like in [`LOOP AT itab`](ABAPLOOP_AT_ITAB_SHORTREF.html)).

abenabap.html abenabap\_reference.html abenabap\_shortref.html