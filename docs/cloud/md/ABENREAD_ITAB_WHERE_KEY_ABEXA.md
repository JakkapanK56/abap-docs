---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENREAD_ITAB_WHERE_KEY_ABEXA.htm"
abapFile: "ABENREAD_ITAB_WHERE_KEY_ABEXA.html"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "internal-table", "ABENREAD", "ITAB", "WHERE", "KEY", "ABEXA"]
---

This example measures the runtime of the statement `READ TABLE` with a `WHERE` condition and an equivalent `WITH KEY` addition..

The internal table `itab` is filled with data and the first line of a set of lines is searched that is located pretty much at the bottom of the table. The example shows that searching with a [`WHERE`](ABAPREAD_TABLE_WHERE.html) condition is not as fast as searching with the [`WITH KEY`](ABAPREAD_TABLE_FREE.html) addition. Because of that, the pragma `##read_where_ok` must be used.

Additionally, the same functionality is implemented with [`LOOP AT`](ABAPLOOP_AT_ITAB.html) combined with [`EXIT`](ABAPEXIT_LOOP.html). The performance of `LOOP ... WHERE` and `READ WHERE` are about the same. `READ WHERE` provides an easier to use syntax but no performance gain.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_read\_table\_where\_key DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_read\_table\_where\_key IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM sbook \\n ORDER BY carrid \\n INTO TABLE @FINAL(itab). "#EC CI\_NOWHERE \\n\\ \\n IF line\_exists( itab\[ carrid = 'UA' \] ). \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n READ TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WITH KEY carrid = 'UA'. \\n FINAL(idx1) = sy-tabix. \\n FINAL(t2) = utclong\_current( ). \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n READ TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE carrid = 'UA' ##READ\_WHERE\_OK. \\n FINAL(idx2) = sy-tabix. \\n FINAL(t4) = utclong\_current( ). \\n\\ \\n FINAL(t5) = utclong\_current( ). \\n LOOP AT itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE carrid = 'UA'. \\n FINAL(idx3) = sy-tabix. \\n EXIT. \\n ENDLOOP. \\n FINAL(t6) = utclong\_current( ). \\n\\ \\n ASSERT idx1 = idx2. \\n ASSERT idx2 = idx3. \\n ASSERT \= . \\n ASSERT \= . \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(tdelta1) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t4 \\n low = t3 \\n IMPORTING seconds = DATA(tdelta2) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t6 \\n low = t5 \\n IMPORTING seconds = DATA(tdelta3) ). \\n\\ \\n out->write( |\\{ tdelta1 \\}\\\\n\\{ tdelta2 \\}\\\\n\\{ tdelta3 \\}| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_read\_table\_where\_key DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_read\_table\_where\_key IMPLEMENTATION. \\n METHOD main. \\n\\ \\n SELECT \* \\n FROM sbook \\n ORDER BY carrid \\n INTO TABLE @FINAL(itab). "#EC CI\_NOWHERE \\n\\ \\n IF line\_exists( itab\[ carrid = 'UA' \] ). \\n\\ \\n FINAL(t1) = utclong\_current( ). \\n READ TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WITH KEY carrid = 'UA'. \\n FINAL(idx1) = sy-tabix. \\n FINAL(t2) = utclong\_current( ). \\n\\ \\n FINAL(t3) = utclong\_current( ). \\n READ TABLE itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE carrid = 'UA' ##READ\_WHERE\_OK. \\n FINAL(idx2) = sy-tabix. \\n FINAL(t4) = utclong\_current( ). \\n\\ \\n FINAL(t5) = utclong\_current( ). \\n LOOP AT itab \\n ASSIGNING FIELD-SYMBOL() \\n WHERE carrid = 'UA'. \\n FINAL(idx3) = sy-tabix. \\n EXIT. \\n ENDLOOP. \\n FINAL(t6) = utclong\_current( ). \\n\\ \\n ASSERT idx1 = idx2. \\n ASSERT idx2 = idx3. \\n ASSERT \= . \\n ASSERT \= . \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t2 \\n low = t1 \\n IMPORTING seconds = DATA(tdelta1) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t4 \\n low = t3 \\n IMPORTING seconds = DATA(tdelta2) ). \\n\\ \\n cl\_abap\_utclong=>diff( EXPORTING high = t6 \\n low = t5 \\n IMPORTING seconds = DATA(tdelta3) ). \\n\\ \\n out->write( |\\{ tdelta1 \\}\\\\n\\{ tdelta2 \\}\\\\n\\{ tdelta3 \\}| ). \\n ENDIF. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapread\_table.html