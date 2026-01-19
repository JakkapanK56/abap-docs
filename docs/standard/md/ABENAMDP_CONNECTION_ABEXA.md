---
title: "ABENAMDP_CONNECTION_ABEXA"
description: |
  ABENAMDP_CONNECTION_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_CONNECTION_ABEXA.htm"
abapFile: "ABENAMDP_CONNECTION_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENAMDP", "CONNECTION", "ABEXA"]
---

The example demonstrates an AMDP method with the input parameter `connection`. Since no AMDP option for client handling is used, the AMDP method is not [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

A simple [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) is implemented in the AMDP method `GET_SCARR` of the AMDP class `CL_DEMO_AMDP_CONNECTION`:

The method has an optional input parameter with the predefined name `connection`, which can be used to specify whether the [standard connection](ABENSTANDARD_DB_CONNECTION_GLOSRY.html) or a [service connection](ABENSERVICE_CONNECTION_GLOSRY.html) is used. If an allowed name such as *DEFAULT* or *R/3\*my\_conn* is passed, the method is executed using either the standard connection or a service connection. Invalid names raise an exception and the exception text is displayed.

\* Public class definition \\nCLASS cl\_demo\_amdp\_service\_cnnctn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_service\_cnnctn IMPLEMENTATION. \\n METHOD main. \\n IF NOT cl\_abap\_dbfeatures=>use\_features( \\n EXPORTING \\n requested\_features = \\n VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ). \\n out->write( \\n \`Current database system does not support AMDP procedures\` ). \\n RETURN. \\n ENDIF. \\n\\ \\n DATA connection TYPE dbcon\_name VALUE 'R/3\*my\_conn'. \\n cl\_demo\_input=>new( )->request( CHANGING field = connection ). \\n\\ \\n TRY. \\n NEW cl\_demo\_amdp\_connection( \\n )->get\_scarr( EXPORTING \\n connection = connection \\n clnt = sy-mandt \\n IMPORTING \\n carriers = FINAL(result) ). \\n CATCH cx\_amdp\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. METHOD get\_scarr BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING scarr. \\n carriers = select \* \\n from scarr \\n WHERE mandt = clnt; \\nENDMETHOD. \* Public class definition \\nCLASS cl\_demo\_amdp\_service\_cnnctn DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_service\_cnnctn IMPLEMENTATION. \\n METHOD main. \\n IF NOT cl\_abap\_dbfeatures=>use\_features( \\n EXPORTING \\n requested\_features = \\n VALUE #( ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ). \\n out->write( \\n \`Current database system does not support AMDP procedures\` ). \\n RETURN. \\n ENDIF. \\n\\ \\n DATA connection TYPE dbcon\_name VALUE 'R/3\*my\_conn'. \\n cl\_demo\_input=>new( )->request( CHANGING field = connection ). \\n\\ \\n TRY. \\n NEW cl\_demo\_amdp\_connection( \\n )->get\_scarr( EXPORTING \\n connection = connection \\n clnt = sy-mandt \\n IMPORTING \\n carriers = FINAL(result) ). \\n CATCH cx\_amdp\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_abexas.html