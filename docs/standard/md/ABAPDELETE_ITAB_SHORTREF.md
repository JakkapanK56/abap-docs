---
title: "ABAPDELETE_ITAB_SHORTREF"
description: |
  ABAPDELETE_ITAB_SHORTREF - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPDELETE_ITAB_SHORTREF.htm"
abapFile: "ABAPDELETE_ITAB_SHORTREF.html"
keywords: ["delete", "loop", "do", "if", "internal-table", "ABAPDELETE", "ITAB", "SHORTREF"]
---

[Reference](ABAPDELETE_ITAB.html)

``DELETE \{\ \{\ \{TABLE itab              \{\{FROM wa [USING KEY key_name|(name)]\}\              |\{WITH TABLE KEY [key_name|(name) COMPONENTS]\                               \{comp_name1|(name1)\} = dobj1                               \{comp_name2|(name2)\} = dobj2                               ... \}\}\}\           |\ \{itab INDEX idx [USING KEY key_name|(name)]\}\           |\ \{itab [USING KEY loop_key]\}\ \}\         |\ \{itab [USING KEY key_name|(name)]\                 [FROM idx1]\ [TO idx2]\ [STEP n]|[WHERE [`log_exp]`](ABENLOG_EXP_SHORTREF.html)|(cond_syntax)\}\         |\ \{ADJACENT DUPLICATES FROM itab             [ USING KEY key_name|(name) ]\             [COMPARING comp1 comp2 ...|\{ALL FIELDS\}]\}\ \}.``

Deletes lines from an internal table `itab`. A restricted [variant](ABENMESH_DELETE.html) works with [mesh paths](ABENMESH_PATH_GLOSRY.html).

-   [`TABLE itab FROM wa`](ABAPDELETE_ITAB_KEY.html)\\
    Specifies a line to be deleted. The line matches the key values of a work area `wa`.
-   [`TABLE itab WITH TABLE KEY \{comp_name1|(name1)\} = dobj1 \{comp_name2|(name2)\} = dobj2 ...`](ABAPDELETE_ITAB_KEY.html)\\
    Specifies a line to be deleted by specifying components of the primary table key statically of dynamically.
-   [`itab INDEX idx`](ABAPDELETE_ITAB_LINE.html)\\
    Specifies a line to be deleted by specifying the line number of a table index `idx`.
-   [`itab [USING KEY loop_key]`](ABAPDELETE_ITAB_LINE.html)\\
    Defines the lines to be deleted in a loop across the current line.
-   [`itab [FROM idx1]\ [TO idx2]\ [STEP n]|[WHERE log_exp|(cond_syntax)]`](ABAPDELETE_ITAB_LINES.html)\\
    Specifies multiple lines to be deleted by specifying a lower and upper line number in a table index `idx1` and `idx2` and a step size `n`. These can be restricted by specifying a static condition `log_exp` or a dynamic condition in `cond_syntax`.
-   [`ADJACENT DUPLICATES FROM itab [COMPARING comp1 comp2 ...|\{ALL FIELDS\}]`](ABAPDELETE_DUPLICATES.html)\\
    Specifies adjacent identical lines. Using `COMPARING`, the relevant comparison components can be specified.
-   [`KEY key_name|(name)`](ABAPDELETE_ITAB.html)\\
    Specifies, statically or dynamically, a (secondary) table key that is used to search for the lines to be deleted.
    

abenabap.html abenabap\_reference.html abenabap\_shortref.html