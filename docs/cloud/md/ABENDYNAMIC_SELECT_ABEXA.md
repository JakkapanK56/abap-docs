---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDYNAMIC_SELECT_ABEXA.htm"
abapFile: "ABENDYNAMIC_SELECT_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENDYNAMIC", "SELECT", "ABEXA"]
---

This example demonstrates how [`SELECT`](ABAPSELECT.html) statements can be specified fully dynamically in a string.

A [`SELECT`](ABAPSELECT.html) statement and all clauses in front of the [`INTO`](ABAPINTO_CLAUSE.html) clause can be specified dynamically as the content of a string. For security reasons, only a part of the string can be passed from the outside and is checked by a method of `CL_ABAP_DYN_PRG`.

In ABAP SQL, a dynamic `SELECT` statement can be used in the dynamic form of the statement [`WITH`](ABAPWITH.html).

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class `CL_ABAP_DYN_PRG` or the built-in function [`escape`](ABENESCAPE_FUNCTIONS.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_dynamic\_select\_cloud DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dynamic\_select\_cloud IMPLEMENTATION. \\n METHOD main. \\n DATA(key) = \`UA\`. \\n FINAL(in) = cl\_demo\_input=>new( ). \\n in->request( CHANGING field = key ). \\n\\ \\n DATA(dynamic\_select) = \`SELECT \* FROM spfli WHERE carrid = \` && \\n cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ). \\n\\ \\n DATA: \\n result TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n TRY. \\n\\ \\n WITH \\n (dynamic\_select) \\n INTO TABLE @result. \\n\\ \\n\\ \\n CATCH cx\_sy\_dynamic\_osql\_semantics INTO FINAL(exc1). \\n out->write( exc1->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_dynamic\_select\_cloud DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dynamic\_select\_cloud IMPLEMENTATION. \\n METHOD main. \\n DATA(key) = \`UA\`. \\n FINAL(in) = cl\_demo\_input=>new( ). \\n in->request( CHANGING field = key ). \\n\\ \\n DATA(dynamic\_select) = \`SELECT \* FROM spfli WHERE carrid = \` && \\n cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ). \\n\\ \\n DATA: \\n result TYPE TABLE OF spfli WITH EMPTY KEY. \\n\\ \\n TRY. \\n\\ \\n WITH \\n (dynamic\_select) \\n INTO TABLE @result. \\n\\ \\n\\ \\n CATCH cx\_sy\_dynamic\_osql\_semantics INTO FINAL(exc1). \\n out->write( exc1->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html