---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCALL_FUNCTION_ABEXA.htm"
abapFile: "ABENCALL_FUNCTION_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "ABENCALL", "FUNCTION", "ABEXA"]
---

This example demonstrates how function modules are called.

The function modules `READ_SPFLI_INTO_TABLE` and `READ_SPFLI_INTO_TABLE_NEW` read all data from the database table `SPFLI` where the key field `CARRID` matches the import parameter `id` into the internal tables `itab` or `jtab`. If no suitable data can be found, exceptions are raised.

Otherwise, the table is passed to the caller as an export parameter.

The actual parameters `carrier` and `itab` or `itab` have the same data types as the corresponding interface parameters of the function module. The exceptions are handled. The relevant exception text is accessed in different ways.

-   In `READ_SPFLI_INTO_TABLE`, the non-class-based exception `NOT_FOUND` is raised by [`MESSAGE ... RAISING`](ABAPMESSAGE_RAISING.html).
-   In `READ_SPFLI_INTO_TABLE_NEW`, the class-based exception is raised `CX_NO_FLIGHT_FOUND` by [`RAISE EXCEPTION ... MESSAGE`](ABAPRAISE_EXCEPTION.html). `CX_NO_FLIGHT_FOUND` implements the interface `IF_T100_DYN_MSG`.

-   In non-class-based exceptions, it is implicitly available via system fields.
-   In class-based exceptions, it is specified by attributes of the exception object.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_function IMPLEMENTATION. \\n METHOD main. \\n DATA: itab TYPE spfli\_tab, \\n jtab TYPE spfli\_tab. \\n\\ \\n DATA carrier TYPE s\_carr\_id VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE' \\n EXPORTING \\n id = carrier \\n IMPORTING \\n itab = itab \\n EXCEPTIONS \\n not\_found = 4. \\n IF sy-subrc <> 0. \\n MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno \\n INTO FINAL(msg). \\n out->write( msg ). \\n ENDIF. \\n\\ \\n TRY. \\n CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW' \\n EXPORTING \\n id = carrier \\n IMPORTING \\n itab = jtab. \\n CATCH cx\_no\_flight\_found INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ASSERT itab = jtab. \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_call\_function DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_call\_function IMPLEMENTATION. \\n METHOD main. \\n DATA: itab TYPE spfli\_tab, \\n jtab TYPE spfli\_tab. \\n\\ \\n DATA carrier TYPE s\_carr\_id VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier ). \\n\\ \\n CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE' \\n EXPORTING \\n id = carrier \\n IMPORTING \\n itab = itab \\n EXCEPTIONS \\n not\_found = 4. \\n IF sy-subrc <> 0. \\n MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno \\n INTO FINAL(msg). \\n out->write( msg ). \\n ENDIF. \\n\\ \\n TRY. \\n CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW' \\n EXPORTING \\n id = carrier \\n IMPORTING \\n itab = jtab. \\n CATCH cx\_no\_flight\_found INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ASSERT itab = jtab. \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_execution.html abencall\_processing\_blocks.html abencall\_procedures.html abapcall\_function.html abapcall\_function\_general.html