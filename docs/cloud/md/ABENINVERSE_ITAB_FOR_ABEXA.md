---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENINVERSE_ITAB_FOR_ABEXA.htm"
abapFile: "ABENINVERSE_ITAB_FOR_ABEXA.html"
keywords: ["do", "while", "if", "method", "class", "data", "ABENINVERSE", "ITAB", "FOR", "ABEXA"]
---

This example demonstrates a [table reduction](ABENTABLE_REDUCTION_GLOSRY.html) implemented by a conditional iteration.

The example shows how an inverse [table iteration](ABENFOR_ITAB.html) could be performed by an iteration expression accessing a table expression before the addition [`STEP`](ABENFOR_COND.html) was introduced for direct table iterations.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_reverse\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_reverse\_iteration IMPLEMENTATION. \\n METHOD main. \\n DATA \\n itab TYPE STANDARD TABLE OF i \\n WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line. \\n\\ \\n itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ). \\n\\ \\n FINAL(output) = \\n REDUCE string( \\n INIT o = \`\` \\n FOR i = lines( itab ) THEN i - 1 WHILE i > 0 \\n NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN \\n WHEN r > 2 THEN r && \` \` ) ). \\n\\ \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_for\_reverse\_iteration DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_for\_reverse\_iteration IMPLEMENTATION. \\n METHOD main. \\n DATA \\n itab TYPE STANDARD TABLE OF i \\n WITH EMPTY KEY \\n WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line. \\n\\ \\n itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ). \\n\\ \\n FINAL(output) = \\n REDUCE string( \\n INIT o = \`\` \\n FOR i = lines( itab ) THEN i - 1 WHILE i > 0 \\n NEXT o &&= COND #( LET r = itab\[ KEY sort\_key INDEX i \] IN \\n WHEN r > 2 THEN r && \` \` ) ). \\n\\ \\n out->write( output ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_flow\_logic.html abeniteration\_expressions.html abenfor.html abeniteration\_expressions\_abexas.html