---
title: "ABAPREAD_TABLE_INDEX"
description: |
  ABAPREAD_TABLE_INDEX - ABAP Cloud language reference documentation
library: "cloud"
libraryName: "ABAP Cloud"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABAPREAD_TABLE_INDEX.htm"
abapFile: "ABAPREAD_TABLE_INDEX.html"
keywords: ["select", "loop", "do", "if", "data", "internal-table", "ABAPREAD", "TABLE", "INDEX"]
---

``... INDEX idx [USING KEY [`keyname`](ABENKEYNAME.html)] ...``

[`... USING KEY keyname`](#ABAP_ONE_ADD@1@)

Using the `INDEX` addition, the `READ` statement reads the line in the line number specified in `idx` in a table index. `idx` is a [numeric expression position](ABENNUMERICAL_EXPR_POSITION_GLOSRY.html) with the operand type `i`. If the value of `idx` is less than or equal to 0 or greater than the number of table lines, no line is read and `sy-subrc` is set to 4. After a successful read, the system field `sy-tabix` contains the line number specified in `idx` in the primary or secondary table index used.

If the addition `USING KEY` is not used, the addition `INDEX` can only be specified for [index tables](ABENINDEX_TABLE_GLOSRY.html) and determines the line to be read from the [primary table index](ABENPRIMARY_TABLE_INDEX_GLOSRY.html).

[Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) allow corresponding reads to also be performed in operand positions. The syntax shown here can be mapped to a [line specification](ABENTABLE_EXP_ITAB_LINE.html) in a table expression.

Reading of the first ten lines of the internal table `sflight_tab` using the primary table index. Instead of the `DO` loop, a [`LOOP`](ABAPLOOP_AT_ITAB.html) or a corresponding iteration expression with [`FOR`](ABENFOR_ITAB.html) is used for this purpose.

The addition `USING KEY` can be used to specify a table key in [`keyname`](ABENKEYNAME.html) to specify the table index to be used explicitly.

If the table has a [sorted](ABENSORTED_KEY_GLOSRY.html)\\ [secondary key](ABENSECONDARY_TABLE_KEY_GLOSRY.html), this can be specified in `keyname` and the line to be read is then determined from its [secondary table index](ABENSECONDARY_TABLE_INDEX_GLOSRY.html). A secondary [hash key](ABENHASH_KEY_GLOSRY.html) cannot be specified.

If the [primary table key](ABENPRIMARY_TABLE_KEY_GLOSRY.html) is specified using its name `primary_key`, the table must be an index table, and the behavior is the same as if `USING KEY` was not specified.

Reading of the first ten lines of the internal table `sflight_tab` using a secondary table index. Instead of the `DO` loop, a [`LOOP`](ABAPLOOP_AT_ITAB.html) or a corresponding iteration expression with [`FOR`](ABENFOR_ITAB.html) is used for this purpose.

-   If a sorted secondary key exists, the addition `INDEX` can be used for all table categories, if `USING KEY` is used.
-   [Table expressions](ABENTABLE_EXPRESSION_GLOSRY.html) allow corresponding reads to also be performed in operand positions. The table key for an index is specified using [`KEY keyname INDEX`](ABENTABLE_EXP_ITAB_LINE.html).

DATA: sflight\_tab TYPE SORTED TABLE OF sflight \\n WITH NON-UNIQUE KEY seatsocc, \\n sflight\_wa LIKE LINE OF sflight\_tab. \\n\\ \\n... \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = 'LH' AND \\n connid = '400' \\n INTO TABLE @sflight\_tab. \\n\\ \\n... \\n\\ \\nDO 10 TIMES. \\n READ TABLE sflight\_tab INDEX sy-index INTO sflight\_wa. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n ... \\nENDDO. DATA: sflight\_tab TYPE HASHED TABLE OF sflight \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate \\n WITH NON-UNIQUE SORTED KEY occupied\_seats \\n COMPONENTS seatsocc, \\n sflight\_wa LIKE LINE OF sflight\_tab. \\n\\ \\n... \\n\\ \\nSELECT \* \\n FROM sflight \\n WHERE carrid = 'LH' AND \\n connid = '400' \\n INTO TABLE @sflight\_tab. \\n\\ \\n... \\n\\ \\nDO 10 TIMES. \\n READ TABLE sflight\_tab \\n INDEX sy-index USING KEY occupied\_seats \\n INTO sflight\_wa. \\n IF sy-subrc <> 0. \\n EXIT. \\n ENDIF. \\n ... \\nENDDO. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html