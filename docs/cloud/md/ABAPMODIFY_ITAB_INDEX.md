---
title: "ABAPMODIFY_ITAB_INDEX"
description: |
  ABAPMODIFY_ITAB_INDEX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPMODIFY_ITAB_INDEX.htm"
abapFile: "ABAPMODIFY_ITAB_INDEX.html"
keywords: ["select", "delete", "loop", "if", "catch", "data", "types", "internal-table", "ABAPMODIFY", "ITAB", "INDEX"]
---

``...   \{ itab INDEX idx [USING KEY [`keyname`](ABENKEYNAME.html)]\ \}\      |\ \{ itab [USING KEY loop_key]\} ...``

[1. `... itab INDEX idx [USING KEY keyname]`](#ABAP_ALTERNATIVE_1@2@)

[2. `... itab [USING KEY loop_key]`](#ABAP_ALTERNATIVE_2@2@)

These alternatives specify the lines to be changed using the specification of a line number relating to a table index.

[`... USING KEY keyname`](#ABAP_ONE_ADD@1@)

Using the addition `INDEX`, the statement `MODIFY` modifies the line in the line number specified in `idx` in a table index. `idx` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the operand type `i`. If `idx` contains the value 0 or less, an uncatchable exception is raised.

If the addition `USING KEY` is not used, the addition `INDEX` can only be used with [index tables](ABENINDEX_TABLE_GLOSRY.html) and determines the line to be modified from its [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).

If a line specified using `INDEX` is modified without the addition [`TRANSPORTING`](ABAPMODIFY_ITAB_SINGLE.html), all components of the line are transported. If it is known statically that write-protected [secondary table keys](ABENSECONDARY_TABLE_KEY_GLOSRY.html) would be overwritten by this, a syntax error occurs. If it can only be determined at runtime, the corresponding runtime error occurs.

If the components of a primary sorted table key are modified in a line specified using `INDEX`, however, a runtime error occurs only if the value of the component changes.

The addition `INDEX` can also be positioned after `FROM wa`.

Conversion of the local currency of an airline in the internal table `scarr_tab` by accessing the index. The addition `TRANSPORTING` ensures that only the component `currcode` is modified and only this component is filled in the structure constructed by the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html).

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) to specify the table index to be used explicitly.

If the table has a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), this can be specified in `keyname`. The line to be modified is then determined from its [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html). A secondary [hash key](ABENHASH_KEY_GLOSRY.html) cannot be specified.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified under its name `primary_key`, the table must be an index table, and the behavior is the same as if `USING KEY` were not specified.

If a sorted secondary key exists, the addition `INDEX` can be used for all table types if `USING KEY` is used.

In this example, the letter *D* is replaced by *X* in the fourth line, since this line has the index value 1 in the sorted key `skey`.

[`... USING KEY loop_key`](#ABAP_ONE_ADD@2@)

This variant is only possible within a [`LOOP`](ABAPLOOP_AT_ITAB.html) across the same internal table. The current table line of the `LOOP` is modified implicitly. If the addition [`USING KEY`](ABAPLOOP_AT_ITAB_COND.html) is specified in `LOOP`, the addition `USING KEY loop_key` must be specified for this variant.

If the current lines were already deleted in the same loop pass, the behavior is undefined.

This variant is not allowed outside of `LOOP` statements. A syntax check warning occurs if it cannot be known statically whether the variant is specified in a loop.

The use of this alternative is not recommended. Instead, the addition `INDEX` should be used to specify the line number explicitly.

The internal table contains the numbers 11 to 20 after the loop. Each existing number is raised by 10 in the loop.

This addition is required if the table key used by the `LOOP` is specified explicitly in the statement `LOOP`. It states explicitly that the current table line of the `LOOP` is modified. No other key can be specified apart from the predefined name [`loop_key`](ABAPLOOP_AT_ITAB_COND.html). If no explicit table key is specified for `LOOP`, the addition `USING KEY loop_key` is optional.

In this example, the letters of the first column are replaced by the letters whose position in `sy-abcde` is given by the value `sy-tabix`. The table is processed in the order of the secondary index, which produces the same order with respect to this index in the first column as in the second column.

DATA: carrid TYPE scarr-carrid VALUE 'LH', \\n currcode TYPE scarr-currcode VALUE 'EUR'. \\ncl\_demo\_input=>new( \\n )->add\_field( CHANGING field = carrid \\n )->add\_field( CHANGING field = currcode )->request( ). \\n\\ \\nDATA scarr\_tab TYPE SORTED TABLE OF scarr \\n WITH UNIQUE KEY carrid. \\n\\ \\nSELECT \* \\n FROM scarr \\n INTO TABLE @scarr\_tab. \\n\\ \\nFINAL(idx) = line\_index( scarr\_tab\[ carrid = carrid \] ). \\n\\ \\nIF idx IS NOT INITIAL. \\n MODIFY scarr\_tab \\n INDEX idx \\n FROM VALUE #( currcode = currcode ) \\n TRANSPORTING currcode. \\nENDIF. TYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line \\n WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS col2. \\n\\ \\nitab = VALUE #( ( col1 = 'A' col2 = 6 ) \\n ( col1 = 'B' col2 = 4 ) \\n ( col1 = 'B' col2 = 7 ) \\n ( col1 = 'D' col2 = 1 ) \\n ( col1 = 'E' col2 = 3 ) \\n ( col1 = 'F' col2 = 9 ) \\n ( col1 = 'G' col2 = 2 ) \\n ( col1 = 'H' col2 = 5 ) \\n ( col1 = 'I' col2 = 8 ) ). \\n\\ \\nMODIFY itab INDEX 1 \\n USING KEY skey \\n FROM VALUE #( col1 = 'X' ) \\n TRANSPORTING col1. DATA itab TYPE TABLE OF i WITH EMPTY KEY. \\n\\ \\nitab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ). \\n\\ \\nLOOP AT itab INTO FINAL(wa). \\n MODIFY itab FROM wa + 10. \\nENDLOOP. TYPES: \\n BEGIN OF line, \\n col1 TYPE c LENGTH 1, \\n col2 TYPE i, \\n END OF line. \\n\\ \\nDATA itab TYPE STANDARD TABLE OF line \\n WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS col2. \\n\\ \\nitab = VALUE #( ( col1 = 'A' col2 = 6 ) \\n ( col1 = 'B' col2 = 4 ) \\n ( col1 = 'B' col2 = 7 ) \\n ( col1 = 'D' col2 = 1 ) \\n ( col1 = 'E' col2 = 3 ) \\n ( col1 = 'F' col2 = 9 ) \\n ( col1 = 'G' col2 = 2 ) \\n ( col1 = 'H' col2 = 5 ) \\n ( col1 = 'I' col2 = 8 ) ). \\n\\ \\nFINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`. \\nLOOP AT itab INTO FINAL(wa) USING KEY skey. \\n MODIFY itab \\n USING KEY loop\_key \\n FROM VALUE #( col1 = substring( val = abcde \\n off = sy-tabix - 1 \\n len = 1 ) ) \\n TRANSPORTING col1. \\nENDLOOP. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html abapmodify\_itab\_single.html