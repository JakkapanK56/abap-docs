---
title: "ABENFOR_GROUP_BY_SORT_ABEXA"
description: |
  ABENFOR_GROUP_BY_SORT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENFOR_GROUP_BY_SORT_ABEXA.htm"
abapFile: "ABENFOR_GROUP_BY_SORT_ABEXA.html"
keywords: ["loop", "method", "class", "data", "types", "ABENFOR", "GROUP", "SORT", "ABEXA"]
---

This example demonstrates sorts with `FOR` expressions.

This example works in the same way as the [executable example](ABENLOOP_GROUP_BY_SORT_ABEXA.html) for sorts across groupings using `LOOP`. Here, all groupings are collected in a single expression using three [`FOR` expressions](ABENFOR_GROUPS_OF.html).

\* Public class definition \\nCLASS cl\_demo\_for\_grps\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n jtab = VALUE #( FOR GROUPS OF IN itab \\n GROUP BY to\_upper( ) ASCENDING \\n FOR GROUPS OF IN GROUP \\ \\n GROUP BY DESCENDING \\n FOR IN GROUP ( ) ). \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_for\_grps\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n jtab = VALUE #( FOR GROUPS OF IN itab \\n GROUP BY to\_upper( ) ASCENDING \\n FOR GROUPS OF IN GROUP \\ \\n GROUP BY DESCENDING \\n FOR IN GROUP ( ) ). \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abenfor\_grouping\_abexas.html