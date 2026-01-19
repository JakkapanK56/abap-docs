---
title: "ABAPDELETE_ITAB_INDEX"
description: |
  ABAPDELETE_ITAB_INDEX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPDELETE_ITAB_INDEX.htm"
abapFile: "ABAPDELETE_ITAB_INDEX.html"
keywords: ["select", "delete", "loop", "if", "catch", "data", "types", "internal-table", "ABAPDELETE", "ITAB", "INDEX"]
---

``...   \{ itab INDEX idx [USING KEY [`keyname`](ABENKEYNAME.html)]\ \}\      |\ \{ itab [USING KEY loop_key]\} ...``

[1. `... itab INDEX idx [USING KEY keyname]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... itab [USING KEY loop_key]`](#ABAP_ALTERNATIVE_2@2@)

These alternatives specify the lines to be deleted using the specification of a line number relating to a table index.

[`... USING KEY keyname`](#ABAP_ONE_ADD@1@)

If the `INDEX` addition is used, the `DELETE` statement deletes the line in the line number specified in `idx` in a table index. `idx` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the operand type `i`. If `idx` contains the value 0 or less, an uncatchable exception is raised.

If the addition `USING KEY` is not used, the addition `INDEX` can only be used with [index tables](ABENINDEX_TABLE_GLOSRY.html) and determines the line to be deleted from the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).

Deletion of the table line that has the same value as the input field `carrid` in the key field `carrid`, by using the primary table index.

[Deleting Lines Using an Index](ABENDELETE_LINE_IDX_ABEXA.html)

The addition `USING KEY` can be used to specify a table key can be specified in [`keyname`](ABENKEYNAME.html) to specify the table index to be used explicitly.

If the table has a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), this can be specified in `keyname`. The line to be deleted is then determined from its [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html). A secondary [hash key](ABENHASH_KEY_GLOSRY.html) cannot be specified.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified under its name `primary_key`, the table must be an index table, and the behavior is the same as when `USING KEY` is not specified.

If a sorted secondary key exists, the `INDEX` addition can be used for all table types, if `USING KEY` is used.

The `DELETE` statement deletes the third line of the internal table, since this has the line number 1 in the secondary table index belonging to the secondary table key `skey`.

[`... USING KEY loop_key`](#ABAP_ONE_ADD@2@)

This variant is only possible within a [`LOOP`](ABAPLOOP_AT_ITAB.html) across the same internal table. The current table line of the `LOOP` is then deleted implicitly. If the addition [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html) is specified in `LOOP`, the addition `USING KEY loop_key` must be specified for this variant.

If the current line was already deleted in the same loop, however, the behavior is undefined.

This variant is not allowed outside of a `LOOP` and raises a warning in the syntax check if it is not known statically that is executed in a loop.

This alternative is not recommended. Instead, use the addition `INDEX` to specify the line number explicitly.

The following loop deletes all lines of an internal table, since the short form of the statement [`DELETE`](ABAPDELETE_ITAB.html) always deletes the current first line.

This addition is required if the table key used by the `LOOP` is specified explicitly in the statement `LOOP`. It states explicitly that the current table line is deleted by the `LOOP`. No other key can be specified apart from the predefined name [`loop_key`](ABAPLOOP_AT_ITAB_COND.html). If no explicit table key is specified for `LOOP`, the addition `USING KEY loop_key` is optional.

Since the primary table key is specified explicitly for the `LOOP` loop, `USING KEY loop_key` must be specified for `DELETE` as well.

DATA carrid TYPE scarr-carrid. \\ncl\_demo\_input=>request( CHANGING field = carrid ). \\n\\ \\nDATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nFINAL(idx) = line\_index( scarr\_tab\[ KEY primary\_key carrid = carrid \] ). \\n\\ \\nIF idx is NOT INITIAL. \\n DELETE scarr\_tab INDEX idx. \\nENDIF. DATA itab TYPE TABLE OF i WITH EMPTY KEY \\n WITH UNIQUE SORTED KEY skey COMPONENTS TABLE\_LINE. \\n\\ \\nitab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ). \\n\\ \\nDELETE itab INDEX 1 USING KEY skey. DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nLOOP AT itab ASSIGNING FIELD-SYMBOL(). \\n DELETE itab. \\nENDLOOP. DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line. \\nitab = VALUE #( ( 1 ) ( 2 ) ( 3 ) ). \\n\\ \\nLOOP AT itab USING KEY primary\_key \\n ASSIGNING FIELD-SYMBOL(). \\n DELETE itab USING KEY loop\_key. \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapdelete\_itab.html abapdelete\_itab\_line.html