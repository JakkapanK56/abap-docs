---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFOR_GROUP_BY_SORT_ABEXA.htm"
abapFile: "ABENFOR_GROUP_BY_SORT_ABEXA.html"
keywords: ["loop", "do", "if", "method", "class", "data", "types", "ABENFOR", "GROUP", "SORT", "ABEXA"]
---

This example demonstrates sorts with `FOR` expressions.

This example works in the same way as the [executable example](ABENLOOP_GROUP_BY_SORT_ABEXA.html) for sorts across groupings using `LOOP`. Here, all groupings are collected in a single expression using three [`FOR` expressions](ABENFOR_GROUPS_OF.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_grps\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n jtab = VALUE #( FOR GROUPS OF IN itab \\n GROUP BY to\_upper( ) ASCENDING \\n FOR GROUPS OF IN GROUP \\ \\n GROUP BY DESCENDING \\n FOR IN GROUP ( ) ). \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_grps\_by\_sort DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION. \\n METHOD main. \\n TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n FINAL(itab) = \\n VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` ) \\n ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ). \\n out->write( itab ). \\n\\ \\n DATA jtab TYPE itab. \\n jtab = VALUE #( FOR GROUPS OF IN itab \\n GROUP BY to\_upper( ) ASCENDING \\n FOR GROUPS OF IN GROUP \\ \\n GROUP BY DESCENDING \\n FOR IN GROUP ( ) ). \\n out->write( jtab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_expr\_func.html abenfor\_itab.html abenfor\_grouping\_abexas.html