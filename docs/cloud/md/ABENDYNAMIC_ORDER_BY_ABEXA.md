---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDYNAMIC_ORDER_BY_ABEXA.htm"
abapFile: "ABENDYNAMIC_ORDER_BY_ABEXA.html"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "types", "ABENDYNAMIC", "ORDER", "ABEXA"]
---

This example demonstrates how sorting is specified dynamically for `SELECT`.

[RTTI](ABENRUN_TIME_TYPE_IDENTIFIC_GLOSRY.html) is used to create input fields for all columns of the table `SPFLI` except for the client column. The values *X* or *A* for ascending sorts and `D` for descending sorts can be entered in these columns. A dynamic `ORDER BY` clause is generated from the input as a character string and used in a `SELECT` statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_dynamic\_ordr\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_dynamic\_ordr\_by IMPLEMENTATION. \\n METHOD main. \\n TYPES flag TYPE c LENGTH 1. \\n DATA: flag\_tab TYPE TABLE OF flag WITH EMPTY KEY, \\n order\_by TYPE string, \\n spfli\_tab TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n "Input screen for columns \\n FINAL(components) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SPFLI' ) )->components. \\n FINAL(in) = cl\_demo\_input=>new( ). \\n LOOP AT components FROM 2 ASSIGNING FIELD-SYMBOL(). \\n APPEND INITIAL LINE TO flag\_tab ASSIGNING FIELD-SYMBOL(). \\n in->add\_field( \\n EXPORTING text = CONV string( \-name ) \\n CHANGING field = ). \\n ENDLOOP. \\n in->request( ). \\n\\ \\n "Create ORDER BY clause \\n LOOP AT components FROM 2 ASSIGNING . \\n FINAL(idx) = sy-tabix. \\n FINAL(flag) = flag\_tab\[ idx - 1 \]. \\n order\_by &&= \\n COND string( WHEN to\_upper( flag ) = \`X\` OR \\n to\_upper( flag ) = \`A\` \\n THEN |, \\{ \-name \\} ASCENDING| \\n WHEN to\_upper( flag ) = \`D\` \\n THEN |, \\{ \-name \\} DESCENDING| \\n ELSE \`\` ). \\n ENDLOOP. \\n SHIFT order\_by BY 2 PLACES LEFT. \\n\\ \\n "Database access \\n TRY. \\n SELECT \* \\n FROM spfli \\n ORDER BY (order\_by) \\n INTO TABLE @spfli\_tab. \\n CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n out->write( spfli\_tab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_dynamic\_ordr\_by DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_dynamic\_ordr\_by IMPLEMENTATION. \\n METHOD main. \\n TYPES flag TYPE c LENGTH 1. \\n DATA: flag\_tab TYPE TABLE OF flag WITH EMPTY KEY, \\n order\_by TYPE string, \\n spfli\_tab TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n "Input screen for columns \\n FINAL(components) = CAST cl\_abap\_structdescr( \\n cl\_abap\_typedescr=>describe\_by\_name( 'SPFLI' ) )->components. \\n FINAL(in) = cl\_demo\_input=>new( ). \\n LOOP AT components FROM 2 ASSIGNING FIELD-SYMBOL(). \\n APPEND INITIAL LINE TO flag\_tab ASSIGNING FIELD-SYMBOL(). \\n in->add\_field( \\n EXPORTING text = CONV string( \-name ) \\n CHANGING field = ). \\n ENDLOOP. \\n in->request( ). \\n\\ \\n "Create ORDER BY clause \\n LOOP AT components FROM 2 ASSIGNING . \\n FINAL(idx) = sy-tabix. \\n FINAL(flag) = flag\_tab\[ idx - 1 \]. \\n order\_by &&= \\n COND string( WHEN to\_upper( flag ) = \`X\` OR \\n to\_upper( flag ) = \`A\` \\n THEN |, \\{ \-name \\} ASCENDING| \\n WHEN to\_upper( flag ) = \`D\` \\n THEN |, \\{ \-name \\} DESCENDING| \\n ELSE \`\` ). \\n ENDLOOP. \\n SHIFT order\_by BY 2 PLACES LEFT. \\n\\ \\n "Database access \\n TRY. \\n SELECT \* \\n FROM spfli \\n ORDER BY (order\_by) \\n INTO TABLE @spfli\_tab. \\n CATCH cx\_sy\_dynamic\_osql\_error INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n out->write( spfli\_tab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abaporderby\_clause.html