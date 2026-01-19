---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLOOP_GROUP_BY_SORT_ABEXA.htm"
abapFile: "ABENLOOP_GROUP_BY_SORT_ABEXA.html"
keywords: ["loop", "do", "while", "if", "case", "method", "class", "data", "types", "ABENLOOP", "GROUP", "SORT", "ABEXA"]
---

This example demonstrates how groupings are used for sorts.

In this example, the additions `ASCENDING` and `DESCENDING` of [`GROUP BY`](ABAPLOOP_AT_ITAB_GROUP_BY.html) are used to sort a character-like table first while ignoring case and then sort within the groups to separate uppercase from lowercase. A further [executable example](ABENFOR_GROUP_BY_SORT_ABEXA.html) shows how the `LOOP` statements can be replaced by a single expression.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n LOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY to\_upper( ) ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL() \\n GROUP BY DESCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n jtab = VALUE #( BASE jtab \\n FOR IN GROUP ( ) ). \\n ENDLOOP. \\n ENDLOOP. \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_loop\_grp\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_loop\_grp\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n LOOP AT itab ASSIGNING FIELD-SYMBOL() \\n GROUP BY to\_upper( ) ASCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n LOOP AT GROUP ASSIGNING FIELD-SYMBOL() \\n GROUP BY DESCENDING \\n ASSIGNING FIELD-SYMBOL(). \\n jtab = VALUE #( BASE jtab \\n FOR IN GROUP ( ) ). \\n ENDLOOP. \\n ENDLOOP. \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abaploop\_at\_itab\_variants.html abaploop\_at\_itab\_group\_by.html abenloop\_group\_by\_abexas.html