---
title: "ABENEXTRACT_AT_ABEXA"
description: |
  ABENEXTRACT_AT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENEXTRACT_AT_ABEXA.htm"
abapFile: "ABENEXTRACT_AT_ABEXA.html"
keywords: ["select", "insert", "loop", "method", "class", "data", "ABENEXTRACT", "ABEXA"]
---

This example demonstrates how extracts are processed.

This example continues the example given under [`EXTRACT`](ABAPEXTRACT.html). After the extract dataset is filled, it is sorted by field group `header` and, afterwards, group level processing is executed in a `LOOP`. Here, structured output is created.

REPORT demo\_extract\_at.\\n\\nDATA: spfli\_wa TYPE spfli,\\n sflight\_wa TYPE sflight.\\n\\nFIELD-GROUPS: header, flight\_info, flight\_date.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA: spfli\_tab LIKE TABLE OF spfli\_wa,\\n sflight\_tab LIKE TABLE OF sflight\_wa.\\n\\n INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate\\n INTO header,\\n spfli\_wa-cityfrom spfli\_wa-cityto\\n INTO flight\_info.\\n\\n DATA(date\_placeholder) = '--------'.\\n\\n SELECT \*\\n FROM spfli\\n ORDER BY carrid, connid\\n INTO TABLE @spfli\_tab.\\n\\n SELECT \*\\n FROM sflight\\n ORDER BY carrid, connid, fldate\\n INTO TABLE @sflight\_tab.\\n\\n LOOP AT spfli\_tab INTO spfli\_wa.\\n sflight\_wa-fldate = date\_placeholder.\\n EXTRACT flight\_info.\\n LOOP AT sflight\_tab INTO sflight\_wa TO 100\\n WHERE carrid = spfli\_wa-carrid AND\\n connid = spfli\_wa-connid.\\n EXTRACT flight\_date.\\n ENDLOOP.\\n ENDLOOP.\\n\\n SORT STABLE.\\n LOOP.\\n AT FIRST.\\n FINAL(out) = cl\_demo\_output=>new(\\n )->begin\_section( \`Flight list\`\\n )->begin\_section( \`--------------------\` ).\\n ENDAT.\\n AT flight\_info WITH flight\_date.\\n out->next\_section( |\\{ spfli\_wa-carrid \\} \\{\\n spfli\_wa-connid \\} \\{\\n spfli\_wa-cityfrom \\} \\{\\n spfli\_wa-cityto \\}| ).\\n ENDAT.\\n AT flight\_date.\\n out->write( |\\{ spfli\_wa-carrid \\} \\{\\n spfli\_wa-connid \\} \\{\\n sflight\_wa-fldate \\}| ).\\n ENDAT.\\n AT LAST.\\n out->line( )->write( |\\{ cnt(spfli\_wa-carrid) \\} Airlines| ).\\n ENDAT.\\n ENDLOOP.\\n out->display( ).\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_obsolete.html abendata\_internal\_obsolete.html abenabap\_extracts\_extended.html abenextract\_abexas.html