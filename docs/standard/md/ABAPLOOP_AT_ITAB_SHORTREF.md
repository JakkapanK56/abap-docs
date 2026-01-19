---
title: "ABAPLOOP_AT_ITAB_SHORTREF"
description: |
  ABAPLOOP_AT_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPLOOP_AT_ITAB_SHORTREF.htm"
abapFile: "ABAPLOOP_AT_ITAB_SHORTREF.html"
keywords: ["loop", "do", "if", "internal-table", "field-symbol", "ABAPLOOP", "ITAB", "SHORTREF"]
---

[Reference](ABAPLOOP_AT_ITAB_VARIANTS.html)

``LOOP AT itab \{\ \{ INTO wa \}\               |\ \{ ASSIGNING <fs> [CASTING]\ \}\               |\ \{ REFERENCE INTO dref \}\               |\ \{ TRANSPORTING NO FIELDS \}\ \}\               [ USING KEY key_name|(name) ]\               [ FROM idx1]\ [TO idx2]\ [STEP n]\ [WHERE [`log_exp`](ABENLOG_EXP_SHORTREF.html)|(cond_syntax) ]\               [ GROUP BY key | ( key1 = dobj1 key2 = dobj2 ...                                  [gs = GROUP SIZE]\ [gi = GROUP INDEX] )                   [ASCENDING|DESCENDING [AS TEXT]]\                   [WITHOUT MEMBERS]\                  [\ \{INTO group\}\                  |\ \{ASSIGNING <group>\}\                  |\ \{REFERENCE INTO group_ref\}\ ]\ ].    ...  ENDLOOP.``

Reads an internal table `itab` in a loop. A restricted [variant](ABENMESH_LOOP.html) works with [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   [`INTO wa`](ABAPLOOP_AT_ITAB_RESULT.html)\\
    Assigns the read line to a work area `wa`.
-   [`ASSIGNING <fs> [CASTING]`](ABAPLOOP_AT_ITAB_RESULT.html)\\
    Assigns the line read from internal table to a field symbol `<fs>`, where casting can be performed.
-   [`REFERENCE INTO dref`](ABAPLOOP_AT_ITAB_RESULT.html)\\
    Assigns a reference to the line read from internal table to a reference variable `dref`.
-   [`TRANSPORTING NO FIELDS`](ABAPLOOP_AT_ITAB_RESULT.html)\\
    Does not assign the read line.
-   [`USING KEY key_name|(name)`](ABAPLOOP_AT_ITAB_COND.html)\\
    Statically or dynamically specifies a (secondary) table key that determines the processing order.
-   [`[FROM idx1]\ [TO idx2]\ [STEP n]\ [WHERE log_exp|(cond_syntax)]`](ABAPLOOP_AT_ITAB_COND.html)\\
    Restricts the lines to be read, by declaring a lower number and upper number (`idx1` and `idx2` in the relevant table index), by defining the step size and the direction of a loop (value of `n`), or by declaring a static condition `log_exp` or a dynamic condition in `cond_syntax`.
-   [`GROUP BY ...`](ABAPLOOP_AT_ITAB_GROUP_BY.html)\\
    Groups the lines in the internal table by a [group key](ABAPLOOP_AT_ITAB_GROUP_BY_KEY.html) and executes a loop across the groups. [`ASCENDING|DESCENDING`](ABAPLOOP_AT_ITAB_GROUP_BY.html) sorts the groups; [`WITHOUT MEMBERS`](ABAPLOOP_AT_ITAB_GROUP_BY.html) suppresses the grouping variant for the table lines; [`INTO GROUP`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), [`ASSIGNING`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html), and [`REFERENCE INTO`](ABAPLOOP_AT_ITAB_GROUP_BY_BINDING.html) define the output behavior of the group loop.

abenabap.html abenabap\_reference.html abenabap\_shortref.html