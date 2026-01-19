---
title: "ABENSUBMIT_LIST_ABEXA"
description: |
  ABENSUBMIT_LIST_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSUBMIT_LIST_ABEXA.htm"
abapFile: "ABENSUBMIT_LIST_ABEXA.html"
keywords: ["select", "if", "try", "catch", "method", "class", "data", "ABENSUBMIT", "LIST", "ABEXA"]
---

The example demonstrates how to affect the basic list of a called program.

If the called program has no specifications of `LINE-SIZE` or `LINE-COUNT` itself in the `REPORT` statement, the values `width` and `length` are used for its basic list.

REPORT demo\_program\_submit\_line.\\n\\nSELECTION-SCREEN BEGIN OF SCREEN 1100.\\nPARAMETERS: name TYPE sy-repid\\n DEFAULT 'DEMO\_PROGRAM\_READ\_TABLES' OBLIGATORY,\\n width TYPE i DEFAULT 80,\\n length TYPE i DEFAULT 0.\\nSELECTION-SCREEN END OF SCREEN 1100.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\n PRIVATE SECTION.\\n CLASS-METHODS security\_check\\n IMPORTING name TYPE sy-repid\\n RETURNING value(checked\_name) TYPE sy-repid.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA prog\_type TYPE trdir-subc.\\n CALL SELECTION-SCREEN 1100 STARTING AT 10 10.\\n IF sy-subrc <> 0.\\n RETURN.\\n ENDIF.\\n SELECT SINGLE subc\\n FROM trdir\\n WHERE name = @name\\n INTO @prog\_type.\\n IF sy-subrc <> 0 OR prog\_type <> '1'.\\n MESSAGE 'Program not found or wrong type' TYPE 'I'\\n DISPLAY LIKE 'E'.\\n RETURN.\\n ENDIF.\\n name = security\_check( name ).\\n IF name IS INITIAL.\\n MESSAGE 'Program execution not allowed' TYPE 'I'\\n DISPLAY LIKE 'E'.\\n RETURN.\\n ENDIF.\\n SUBMIT (name) LINE-SIZE width LINE-COUNT length AND RETURN.\\n ENDMETHOD.\\n METHOD security\_check.\\n DATA include\_list TYPE HASHED TABLE OF string\\n WITH UNIQUE KEY table\_line.\\n AUTHORITY-CHECK OBJECT 'S\_DEVELOP'\\n ID 'DEVCLASS' FIELD 'SABAPDEMOS'\\n ID 'OBJTYPE' FIELD 'PROG'\\n ID 'OBJNAME' DUMMY\\n ID 'P\_GROUP' DUMMY\\n ID 'ACTVT' FIELD '16'.\\n IF sy-subrc <> 0.\\n CLEAR checked\_name.\\n RETURN.\\n ENDIF.\\n SELECT obj\_name\\n FROM tadir\\n WHERE pgmid = 'R3TR' AND\\n object = 'PROG' AND\\n devclass = 'SABAPDEMOS'\\n INTO TABLE @include\_list. "#EC CI\_SGLSELECT\\n TRY.\\n checked\_name = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(\\n val = name\\n whitelist = include\_list ).\\n CATCH cx\_abap\_not\_in\_whitelist.\\n CLEAR checked\_name.\\n RETURN.\\n ENDTRY.\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abenabap\_reference.html abenabap\_execution.html abenabap\_program\_call.html abenabap\_submit\_report.html abapsubmit.html abapsubmit\_list\_options.html