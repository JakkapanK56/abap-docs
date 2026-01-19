---
title: "ABENLOOP_GROUP_BY_SORT_ABEXA"
description: |
  ABENLOOP_GROUP_BY_SORT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENLOOP_GROUP_BY_SORT_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_SORT_ABEXA.html"
keywords: ["loop", "while", "case", "method", "class", "data", "types", "ABENLOOP", "GROUP", "SORT", "ABEXA"]
---

This example demonstrates how groupings are used for sorts.

In this example, the additions `ASCENDING` and `DESCENDING` of [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) are used to sort a character-like table first while ignoring case and then sort within the groups to separate uppercase from lowercase. A further [executable example](ABENFOR_GROUP_BY_SORT_ABEXA.html) shows how the `LOOP` statements can be replaced by a single expression.

\* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n LOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY to\_upper( ) ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL() \\n GROUP BY DESCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n jtab = VALUE #( BASE jtab \\n FOR IN GROUP ( ) ). \\n ENDLOOP. \\n ENDLOOP. \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_loop\_grp\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n LOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY to\_upper( ) ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL() \\n GROUP BY DESCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n jtab = VALUE #( BASE jtab \\n FOR IN GROUP ( ) ). \\n ENDLOOP. \\n ENDLOOP. \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html