---
title: "This relational expression has the same effect as the comparison expression"
description: |
  `... operand IN selcrit ...`(ABENLOGEXP_SELECT_OPTION.html) Here, `operand` is the data object for which the selection table(ABENSELECTION_TABLE_GLOSRY.html) `selcrit` was declared using `SELECT-OPTIONS selcrit FOR operand`(ABAPSELECT-OPTIONS.html). The short form is only possible for select
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOGEXP_IN_SHORT_FORM.htm"
abapFile: "ABENLOGEXP_IN_SHORT_FORM.html"
keywords: ["select", "do", "if", "method", "data", "ABENLOGEXP", "SHORT", "FORM"]
---

`... selcrit ...`

This relational expression has the same effect as the comparison expression

[`... operand IN selcrit ...`](ABENLOGEXP_SELECT_OPTION.html)

Here, `operand` is the data object for which the [selection table](ABENSELECTION_TABLE_GLOSRY.html)\\ `selcrit` was declared using

[`SELECT-OPTIONS selcrit FOR operand`](ABAPSELECT-OPTIONS.html).

The short form is only possible for selections tables declared using the statement `SELECT-OPTIONS` and with a statically specified data object. More specifically, the short form is not possible for [ranges tables](ABENRANGES_TABLE_GLOSRY.html).

Fills a selection table `s_number` and evaluates it using the short form `number IN s_number`. The output consists of the numbers 5, 7, and 9.

-   Using this short form makes a program more difficult to understand. In particular, using this short form in processing blocks that are not immediately adjacent to the declaration of the selection table declaration can make the program confusing.
-   More specifically, this short form should not be confused with a [predicative method call](ABENPREDICATIVE_METHOD_CALL_GLOSRY.html). A call of this type is false if its result is initial, whereas the short form shown here is always true for an initial selection table.

DATA number TYPE i. \\nSELECT-OPTIONS s\_number FOR number NO-DISPLAY. \\n\\ \\ns\_number\[\] = VALUE #( \\n ( sign = 'I' option = 'EQ' low = 9 ) \\n ( sign = 'I' option = 'BT' low = 3 high = 7 ) \\n ( sign = 'E' option = 'EQ' low = 6 ) \\n ( sign = 'E' option = 'BT' low = 1 high = 4 ) ). \\n\\ \\nDO 10 TIMES. \\n number = sy-index. \\n IF s\_number. \\n cl\_demo\_output=>write\_data( sy-index ). \\n ENDIF. \\nENDDO. \\ncl\_demo\_output=>display( ). abenabap.html abenabap\_reference.html abenabap\_obsolete.html abenobsolete\_program\_flow.html abenobsolete\_logexp.html