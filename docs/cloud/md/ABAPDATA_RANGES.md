---
title: "ABAPDATA_RANGES"
description: |
  ABAPDATA_RANGES - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDATA_RANGES.htm"
abapFile: "ABAPDATA_RANGES.html"
keywords: ["select", "do", "if", "data", "types", "ABAPDATA", "RANGES"]
---

`DATA range_tab \{TYPE RANGE OF type\}|\{LIKE RANGE OF dobj\}`\\ 
               `[INITIAL SIZE n]`\\ 
               ``[`[VALUE IS INITIAL]`](ABAPDATA_OPTIONS.html)``\\ 
               ``[`[READ-ONLY]`](ABAPDATA_OPTIONS.html).``

This statement defines a [ranges table](ABENRANGES_TABLE_GLOSRY.html)\\ `range_tab` with the table type described in the section [`TYPES` - `RANGE OF`](ABAPTYPES_RANGES.html). The table type defined here, however, is not a standalone type, but exists as a property of the data object `range_tab`.

The addition [`VALUE IS INITIAL`](ABAPDATA_OPTIONS.html) can be used to specify an initial [start value](ABENSTART_VALUE_GLOSRY.html).

In this example, a ranges table is declared, filled, and evaluated in the [`WHERE`](ABAPWHERE.html) condition of a [`SELECT`](ABAPSELECT.html) statement.

DATA carrid\_range TYPE RANGE OF spfli-carrid. \\n\\ \\ncarrid\_range = VALUE #( \\n ( sign = 'I' option = 'BT' low = 'AA' high = 'LH' ) ). \\n\\ \\nSELECT \* \\n FROM spfli \\n WHERE carrid IN @carrid\_range \\n INTO TABLE @FINAL(spfli\_tab). abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html