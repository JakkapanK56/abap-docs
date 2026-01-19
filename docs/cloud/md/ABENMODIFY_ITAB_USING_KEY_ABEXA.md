---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENMODIFY_ITAB_USING_KEY_ABEXA.htm"
abapFile: "ABENMODIFY_ITAB_USING_KEY_ABEXA.html"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "field-symbol", "ABENMODIFY", "ITAB", "USING", "KEY", "ABEXA"]
---

The example shows an index access to a hashed table.

The table `sflight_tab` is a hashed table with a unique primary key and a non-unique secondary sorted key. Since a secondary sorted key is specified in the statement `MODIFY` after `USING KEY`, it is possible to access the hashed table using the associated secondary table index.

This example only demonstrates the syntax. Generally, instead of using the statement `MODIFY`, modifications of this type should be made using a field symbol or a data reference:

LOOP AT sflight\_tab ASSIGNING <sflight\_wa> USING KEY plane\_type \\n                    WHERE planetype = 'A310-300'. \\n  <sflight\_wa>-seatsmax = <sflight\_wa>-seatsmax + 20. \\nENDLOOP.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_modify\_table\_using\_key DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_modify\_table\_using\_key IMPLEMENTATION. \\n METHOD main. \\n DATA: sflight\_tab TYPE HASHED TABLE \\n OF sflight \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate \\n WITH NON-UNIQUE SORTED KEY plane\_type \\n COMPONENTS planetype, \\n sflight\_wa LIKE LINE OF sflight\_tab, \\n count TYPE i. \\n\\ \\n SELECT \* "#EC CI\_ALL\_FIELDS\_NEEDED \\n FROM sflight \\n WHERE carrid = 'LH' \\n INTO TABLE @sflight\_tab. \\n\\ \\n LOOP AT sflight\_tab INTO sflight\_wa USING KEY plane\_type \\n WHERE planetype = 'A310-300'. \\n sflight\_wa-seatsmax += 20. \\n MODIFY sflight\_tab INDEX sy-tabix \\n USING KEY loop\_key \\n FROM sflight\_wa \\n TRANSPORTING seatsmax. \\n IF sy-subrc = 0. \\n count += 1. \\n ENDIF. \\n ENDLOOP. \\n\\ \\n out->write( |\\{ count \\} flights modified| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_modify\_table\_using\_key DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_modify\_table\_using\_key IMPLEMENTATION. \\n METHOD main. \\n DATA: sflight\_tab TYPE HASHED TABLE \\n OF sflight \\n WITH UNIQUE KEY primary\_key \\n COMPONENTS carrid connid fldate \\n WITH NON-UNIQUE SORTED KEY plane\_type \\n COMPONENTS planetype, \\n sflight\_wa LIKE LINE OF sflight\_tab, \\n count TYPE i. \\n\\ \\n SELECT \* "#EC CI\_ALL\_FIELDS\_NEEDED \\n FROM sflight \\n WHERE carrid = 'LH' \\n INTO TABLE @sflight\_tab. \\n\\ \\n LOOP AT sflight\_tab INTO sflight\_wa USING KEY plane\_type \\n WHERE planetype = 'A310-300'. \\n sflight\_wa-seatsmax += 20. \\n MODIFY sflight\_tab INDEX sy-tabix \\n USING KEY loop\_key \\n FROM sflight\_wa \\n TRANSPORTING seatsmax. \\n IF sy-subrc = 0. \\n count += 1. \\n ENDIF. \\n ENDLOOP. \\n\\ \\n out->write( |\\{ count \\} flights modified| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapmodify\_itab.html abapmodify\_itab\_single.html