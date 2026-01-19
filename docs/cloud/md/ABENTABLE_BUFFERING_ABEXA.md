---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENTABLE_BUFFERING_ABEXA.htm"
abapFile: "ABENTABLE_BUFFERING_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENTABLE", "BUFFERING", "ABEXA"]
---

This example demonstrates the effect of [table buffering](ABENTABLE_BUFFERING_GLOSRY.html).

[ABAP SQL queries](ABENASQL_QUERY_GLOSRY.html) are processed for the fully buffered DDIC database table `SPFLI`. The ratio of the execution times with and without access to the table buffer is determined and shown. Normally, accessing the data in the table buffer is considerably faster than bypassing the buffer and fetching the data from the database again and again.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_buffering DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_buffering IMPLEMENTATION. \\n METHOD main. \\n DATA(sum1) = CONV decfloat34( 0 ). \\n DATA(sum2) = CONV decfloat34( 0 ). \\n\\ \\n "Load table buffer \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result0). \\n\\ \\n DO 1000 TIMES. \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result1) . \\n\\ \\n FINAL(t2) = utclong\_current( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result2) \\n BYPASSING BUFFER. \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(tdelta1) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t3 \\n low = t2 \\n IMPORTING seconds = DATA(tdelta2) ). \\n\\ \\n\\ \\n sum1 += tdelta1. \\n sum2 += tdelta2. \\n\\ \\n ENDDO. \\n\\ \\n out->write( |Ratio: \\{ sum2 / sum1 DECIMALS = 2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_table\_buffering DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_table\_buffering IMPLEMENTATION. \\n METHOD main. \\n DATA(sum1) = CONV decfloat34( 0 ). \\n DATA(sum2) = CONV decfloat34( 0 ). \\n\\ \\n "Load table buffer \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result0). \\n\\ \\n DO 1000 TIMES. \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result1) . \\n\\ \\n FINAL(t2) = utclong\_current( ). \\n\\ \\n SELECT \* \\n FROM spfli \\n INTO TABLE @FINAL(result2) \\n BYPASSING BUFFER. \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(tdelta1) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t3 \\n low = t2 \\n IMPORTING seconds = DATA(tdelta2) ). \\n\\ \\n\\ \\n sum1 += tdelta1. \\n sum2 += tdelta2. \\n\\ \\n ENDDO. \\n\\ \\n out->write( |Ratio: \\{ sum2 / sum1 DECIMALS = 2 \\}| ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_oview.html abensap\_puffering.html