---
title: "ABENDESCRIPTIVE_FUNCTIONS_TABLE"
description: |
  ABENDESCRIPTIVE_FUNCTIONS_TABLE - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDESCRIPTIVE_FUNCTIONS_TABLE.htm"
abapFile: "ABENDESCRIPTIVE_FUNCTIONS_TABLE.html"
keywords: ["select", "if", "data", "internal-table", "ABENDESCRIPTIVE", "FUNCTIONS", "TABLE"]
---

`... lines( arg ) ...`

The [built-in](ABENBUILT_IN_FUNCTIONS.html) function `lines` returns the number of lines in an internal table. The argument `arg` is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html) that expects an internal table. The return value has the type `i`.

The function specified here is one of the functions that can be used in the obsolete [extended functional operand positions](ABENEXTENDED_FUNCTIONAL_POSITIONS.html) if its argument is a single data object.

The number of lines in an internal table filled from a database table must match the number of lines on the database.

SELECT carrid \\n FROM scarr \\n INTO TABLE @FINAL(itab). \\n\\ \\nSELECT COUNT(\*) \\n FROM scarr \\n INTO @FINAL(lines). \\n\\ \\nASSERT lines( itab ) = lines. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenitab\_functions.html