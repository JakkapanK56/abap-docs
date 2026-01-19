---
title: "ABAPON"
description: |
  ABAPON - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPON.htm"
abapFile: "ABAPON.html"
keywords: ["select", "loop", "do", "while", "if", "class", "data", "ABAPON"]
---

[Short Reference](ABAPON_CHANGE_OF_SHORTREF.html)

`ON CHANGE OF dobj [OR dobj1 [OR dobj2] ...].`\\ 
  `statement_block1`\\ 
`[ELSE.`\\ 
  `statement_block2]`\\ 
`ENDON.`

The statements `ON CHANGE OF` and `ENDON`, which are forbidden in classes, define a [control structure](ABENCONTROL_STRUCTURE_GLOSRY.html) that can contain two statement blocks: `statement_block1` and `statement_block2`. After `ON CHANGE OF`, any number of data objects `dobj1`, `dobj2`... of any data type linked by `OR` can be specified.

The first time a statement `ON CHANGE OF` is executed, the first statement block `statement_block1` is executed if at least one of the specified data objects is not initial. The first statement block is executed for each additional execution of the same statement `ON CHANGE OF`, if the content of one of the specified data objects has changed since the last time the statement `ON CHANGE OF` was executed. The optional second statement block `statement_block2` after `ELSE` is executed if the first statement block is not executed.

Each time the statement `ON CHANGE OF` is executed, the content of all the specified data objects is stored in an internal helper variable that is global to the program. This helper variable is linked to this statement and cannot be accessed in the program. The helper variables and their content are preserved longer than the lifetime of [procedures](ABENPROCEDURE_GLOSRY.html). A helper variable of this type can only be initialized if its statement `ON CHANGE OF` is executed while the associated data object is initial.

This control structure is particularly prone to errors and should be replaced by [branches](ABENBRANCH_GLOSRY.html) with explicitly declared helper variables.

In a `SELECT` loop, a statement block should only be executed if the content of column `CARRID` has changed.

The following section of a program shows how the `ON` control structure can be replaced by an `IF` control structure with an explicit helper variable `carrid_buffer`.

DATA spfli\_wa TYPE spfli. \\n\\ \\nSELECT \* \\n FROM spfli \\n ORDER BY carrid \\n INTO @spfli\_wa. \\n\\ \\n ... \\n\\ \\n ON CHANGE OF spfli\_wa-carrid. \\n ... \\n ENDON. \\n\\ \\n ... \\n\\ \\nENDSELECT. DATA: spfli\_wa TYPE spfli, \\n carrid\_buffer TYPE spfli-carrid. \\n\\ \\nCLEAR carrid\_buffer. \\n\\ \\nSELECT \* \\n FROM spfli \\n ORDER BY carrid \\n INTO @spfli\_wa. \\n\\ \\n ... \\n\\ \\n IF spfli\_wa-carrid <> carrid\_buffer. \\n carrid\_buffer = spfli\_wa-carrid. \\n ... \\n ENDIF. \\n\\ \\n ... \\n\\ \\nENDSELECT. abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_control\_structures.html