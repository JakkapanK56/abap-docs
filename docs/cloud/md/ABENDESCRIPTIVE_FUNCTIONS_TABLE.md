---
title: "ABENDESCRIPTIVE_FUNCTIONS_TABLE"
description: |
  ABENDESCRIPTIVE_FUNCTIONS_TABLE - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDESCRIPTIVE_FUNCTIONS_TABLE.htm"
abapFile: "ABENDESCRIPTIVE_FUNCTIONS_TABLE.html"
keywords: ["select", "data", "internal-table", "ABENDESCRIPTIVE", "FUNCTIONS", "TABLE"]
---

`... lines( arg ) ...`

The [built-in](ABENBUILT_IN_FUNCTIONS.html) function `lines` returns the number of lines in an internal table. The argument `arg` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html) that expects an internal table. The return value has the type `i`.

The number of lines in an internal table filled from a database table must match the number of lines on the database.

SELECT carrid \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nSELECT COUNT(\*) \\n FROM scarr \\n INTO @FINAL(lines). \\n\\ \\nASSERT lines( itab ) = lines. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenitab\_functions.html