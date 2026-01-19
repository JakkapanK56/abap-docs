---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_CUSTOM_QUERY_ABEXA.htm"
abapFile: "ABENCDS_CUSTOM_QUERY_ABEXA.html"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "internal-table", "ABENCDS", "CUSTOM", "QUERY", "ABEXA"]
---

This example demonstrates how an ABAP method can be used for data provisioning in a CDS custom entity.

The CDS custom entity `DEMO_CDS_CUSTOM_ENTITY` is bound to the ABAP class `CL_DEMO_CUSTOM_ENTITY_QUERY`. This class implements the interface `IF_RAP_QUERY_PROVIDER` and generates an internal table with newly created UUID values. The number of UUID values can be passed as parameter.

The example accesses the CDS custom entity `DEMO_CDS_CUSTOM_ENTITY` and fills it with data using the [service binding](ABENSERVICE_BINDING_GLOSRY.html)\\ `DEMO_SB_CUSTOM_QUERY`, which binds the service definition `DEMO_SD_CUSTOM_ENTITY` to an OData node in ICF. This is done using the demonstration class `CL_DEMO_BS_CONSUMPTION`, which accesses the OData service of the service binding by using an ICF client.

Class `CL_DEMO_BS_CUSTOM_QUERY_URL` displays a URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

It should be noted that no data is queried from the database in this example and that the data is generated from ABAP only.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_consume\_bs\_cstm\_query DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_cstm\_query IMPLEMENTATION. \\n METHOD main. \\n FINAL(service\_binding) = \`DEMO\_SB\_CUSTOM\_QUERY\`. \\n FINAL(entity) = \`DEMO\_CDS\_CUSTOM\_ENTITY\`. \\n\\ \\n DATA(p\_number) = \`10\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = p\_number \\n )->request( ). \\n IF p\_number CN '0123456789' OR p\_number < 1 OR p\_number > 100. \\n out->write( 'Enter a number between 1 and 100' ). \\n RETURN. \\n ENDIF. \\n\\ \\n TRY. \\n cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab( \\n EXPORTING \\n parameters = VALUE #( ( p\_number ) ) \\n IMPORTING \\n itab = FINAL(itab) ). \\n CATCH cx\_demo\_bs\_consumption INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( itab->\* ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_consume\_bs\_cstm\_query DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_cstm\_query IMPLEMENTATION. \\n METHOD main. \\n FINAL(service\_binding) = \`DEMO\_SB\_CUSTOM\_QUERY\`. \\n FINAL(entity) = \`DEMO\_CDS\_CUSTOM\_ENTITY\`. \\n\\ \\n DATA(p\_number) = \`10\`. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = p\_number \\n )->request( ). \\n IF p\_number CN '0123456789' OR p\_number < 1 OR p\_number > 100. \\n out->write( 'Enter a number between 1 and 100' ). \\n RETURN. \\n ENDIF. \\n\\ \\n TRY. \\n cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab( \\n EXPORTING \\n parameters = VALUE #( ( p\_number ) ) \\n IMPORTING \\n itab = FINAL(itab) ). \\n CATCH cx\_demo\_bs\_consumption INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( itab->\* ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_custom\_entities.html abencds\_f1\_define\_custom\_entity.html abencds\_f1\_custom\_query.html