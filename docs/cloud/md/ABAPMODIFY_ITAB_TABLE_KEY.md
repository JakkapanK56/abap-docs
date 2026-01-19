---
title: "ABAPMODIFY_ITAB_TABLE_KEY"
description: |
  ABAPMODIFY_ITAB_TABLE_KEY - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_ITAB_TABLE_KEY.htm"
abapFile: "ABAPMODIFY_ITAB_TABLE_KEY.html"
keywords: ["select", "delete", "if", "data", "types", "internal-table", "ABAPMODIFY", "ITAB", "TABLE", "KEY"]
---

``... TABLE itab [USING KEY [`keyname`](ABENKEYNAME.html)] ...``\\ 

For `wa`, a work area compatible to the line type of the internal table must be specified. It is a [functional operand position](ABENFUNCTIONAL_POSITION_GLOSRY.html). The first line found in the internal table is processed whose values in the columns of the table key used match those of the corresponding components of `wa`. If the key fields in `wa` are empty, no entries are processed.

If the `USING KEY` addition is not specified, the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is used. If the `USING KEY` addition is specified, the table key specified in [`keyname`](ABENKEYNAME.html) is used.

The same applies when searching for a line to be modified as to key access using the statement [`READ`](ABAPREAD_TABLE_KEY.html).

If the [primary table key](ABENPRIMARY_KEY_GLOSRY.html) is used to access a [standard table](ABENSTANDARD_TABLE_GLOSRY.html) and the key is [empty](ABENITAB_EMPTY_KEY.html), the first line of the internal table is deleted. If this is known statically, the syntax check produces a warning.

When using the primary table key, it should be noted that this key can be the [standard key](ABENSTANDARD_KEY_GLOSRY.html), which can also have unexpected consequences:

Conversion of the local currency of an airline using primary key access to the internal table `scarr_tab`. The structure of the work area is constructed using the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) from the result of a read with a [table expression](ABENTABLE_EXPRESSION_GLOSRY.html), in which the component `currcode` is assigned the new value. The addition `TRANSPORTING` modifies this component only in the associated table line.

-   For structured line types, the standard key covers all character-like and byte-like components.
-   The standard key of a standard table can be [empty](ABENITAB_EMPTY_KEY.html).

DATA: carrid TYPE scarr-carrid VALUE 'LH', \\n currcode TYPE scarr-currcode VALUE 'EUR'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = currcode )->request( ). \\n\\ \\nDATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nMODIFY TABLE scarr\_tab \\n FROM VALUE #( \\n BASE scarr\_tab\[ KEY primary\_key carrid = carrid \] \\n currcode = currcode ) \\n TRANSPORTING currcode. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html abapmodify\_itab\_single.html