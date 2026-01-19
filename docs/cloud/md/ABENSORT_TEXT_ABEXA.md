---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSORT_TEXT_ABEXA.htm"
abapFile: "ABENSORT_TEXT_ABEXA.html"
keywords: ["insert", "do", "if", "try", "method", "class", "data", "ABENSORT", "TEXT", "ABEXA"]
---

This example demonstrates the alphabetical sorting of character strings.

The table `itab` contains a column of text fields and a column of associated country-specific sortable binary characters that were created in a sortable format using conversions. The table is sorted three times. First, binarily for the key field `text`, then binarily for the `xtext` field, and finally alphabetically for the key field `text`.

In the first sort *Möller* comes after *Muller*, because the internal representation of 'ö' comes after the representation for 'u'. Both the other sorts are alphabetical. The binary sort performed on `xtext` has the same result as an alphabetical sort on the field `text`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_sort\_text DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_sort\_text IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: BEGIN OF line, \\n text(6) TYPE c, \\n xtext TYPE xstring, \\n END OF line. \\n\\ \\n DATA itab LIKE HASHED TABLE OF line WITH UNIQUE KEY text. \\n\\ \\n line-text = 'Muller'(001). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Möller'(002). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Moller'(003). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Miller'(004). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab BY xtext. \\n out->write\_data( itab ). \\n\\ \\n SORT itab AS TEXT. \\n out->write\_data( itab ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_int\_tbls\_sort\_text DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_int\_tbls\_sort\_text IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: BEGIN OF line, \\n text(6) TYPE c, \\n xtext TYPE xstring, \\n END OF line. \\n\\ \\n DATA itab LIKE HASHED TABLE OF line WITH UNIQUE KEY text. \\n\\ \\n line-text = 'Muller'(001). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Möller'(002). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Moller'(003). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n line-text = 'Miller'(004). \\n CONVERT TEXT line-text INTO SORTABLE CODE line-xtext. \\n INSERT line INTO TABLE itab. \\n\\ \\n SORT itab. \\n out->write\_data( itab ). \\n\\ \\n SORT itab BY xtext. \\n out->write\_data( itab ). \\n\\ \\n SORT itab AS TEXT. \\n out->write\_data( itab ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenitab.html abentable\_processing\_statements.html abapsort\_itab.html