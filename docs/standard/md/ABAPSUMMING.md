---
title: "ABAPSUMMING"
description: |
  ABAPSUMMING - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSUMMING.htm"
abapFile: "ABAPSUMMING.html"
keywords: ["select", "do", "if", "catch", "class", "data", "ABAPSUMMING"]
---

[Short Reference](ABAPSUMMING_SHORTREF.html)

`SUMMING dobj.`

For every [`WRITE`](ABAPWRITE-.html) statement that after executing the statement `SUMMING`, which is forbidden in classes, writes the content of data object `dobj` onto a list of any list level, the total of all values of `dobj` output with `WRITE` since the execution of `SUMMING` is determined implicitly and assigned to a data object `sum_dobj`.

The statement `SUMMING` declares the global data object `sum_dobj` with the same type as `dobj`. [Numeric data objects](ABENNUMERIC_DATA_OBJECT_GLOSRY.html) can be specified for `dobj`. The statement `SUMMING` can be executed only once in a program. It can be specified within a [procedure](ABENPROCEDURE_GLOSRY.html), but the declared data object `sum_dobj` is not local.

If the content of `dobj` in a `WRITE` statement cannot be interpreted as a number or the addition produces an overflow after the statement `SUMMING` is executed, an uncatchable exception is raised.

This statement is not allowed in classes because it works with implicitly created global variables. Instead, explicit [calculations](ABENCOMPUTE_EXPRESSIONS.html) can be made.

Implicit determination of minimum, maximum and total of a list of flight distances.

The program produces a syntax check warning because the names of the data objects declared using `MINIMUM`, `MAXIMUM` and `SUMMING` contain the invalid *\-* character.

Without using the implicit statements `MINIMUM`, `MAXIMUM` and `SUMMING`, the same result can be achieved using explicitly calculated help fields.

PARAMETERS p\_carrid TYPE spfli-carrid. \\n\\ \\nDATA spfli\_wa TYPE spfli. \\n\\ \\nMINIMUM spfli\_wa-distance. \\nMAXIMUM spfli\_wa-distance. \\nSUMMING spfli\_wa-distance. \\n\\ \\nSELECT carrid, connid, distance \\n FROM spfli \\n WHERE carrid = @p\_carrid \\n INTO CORRESPONDING FIELDS OF @spfli\_wa. \\n WRITE: / spfli\_wa-carrid, spfli\_wa-connid, \\n spfli\_wa-distance. \\nENDSELECT. \\n\\ \\nULINE. \\nWRITE: min\_spfli\_wa-distance, \\n max\_spfli\_wa-distance, \\n sum\_spfli\_wa-distance. PARAMETERS p\_carrid TYPE spfli-carrid. \\n\\ \\nDATA: spfli\_wa TYPE spfli, \\n min\_distance TYPE spfli-distance VALUE +99999, \\n max\_distance TYPE spfli-distance VALUE -99999, \\n sum\_distance TYPE spfli-distance. \\n\\ \\nSELECT carrid, connid, distance \\n FROM spfli \\n WHERE carrid = @p\_carrid \\n INTO CORRESPONDING FIELDS OF @spfli\_wa. \\n WRITE: / spfli\_wa-carrid, spfli\_wa-connid, \\n spfli\_wa-distance. \\n IF spfli\_wa-distance < min\_distance. \\n min\_distance = spfli\_wa-distance. \\n ENDIF. \\n IF spfli\_wa-distance > max\_distance. \\n max\_distance = spfli\_wa-distance. \\n ENDIF. \\n sum\_distance += spfli\_wa-distance. \\nENDSELECT. \\n\\ \\nULINE. \\nWRITE: min\_distance, \\n max\_distance, \\n sum\_distance. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abengui\_obsolete.html abenlists\_obsolete.html abencalculate\_obsolete.html