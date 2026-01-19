---
title: "ABENCONSUME_BS_ABEXA"
description: |
  ABENCONSUME_BS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSUME_BS_ABEXA.htm"
abapFile: "ABENCONSUME_BS_ABEXA.html"
keywords: ["if", "try", "catch", "method", "class", "data", "internal-table", "ABENCONSUME", "ABEXA"]
---

This example demonstrates how the OData data of business services can be consumed in ABAP with a demonstration class.

Business services are designed mainly for accessing AS ABAP from outside, however for demonstration purposes here, an ICF client implemented in ABAP is used to read the ICF nodes of business services. The ICF client is implemented in the class `CL_DEMO_BS_CONSUMPTION` that offers some methods for examining the OData data of [service bindings](ABENSERVICE_BINDING_GLOSRY.html) whose names are passed by parameter:

The class `CL_DEMO_CONSUME_BS_SIMPLE` shown above uses the class to extract the data of individual CDS entities exposed in service definitions to internal tables and display it. The class `CL_DEMO_BS_SIMPLE_URL` displays a URL that can be copied and pasted to a web browser in order to display the OData data in XML or JSON format.

Further example classes are:

The defaults for the input parameters of the class access service definitions and service bindings that were created for these demonstrations. These service bindings use the OData protocol (version 2) for [Web APIs](ABENWEB_API_GLOSRY.html).

See also [Consuming Business Services with Client Proxy](ABENCONSUME_BS_CLIENT_PROXY_ABEXA.html)

-   Several methods are available for reading URLs for use in browsers.
-   One method reads the non-handled OData data in XML or JSON format.
-   One method extracts important metadata to internal tables.
-   One method extracts the actual data to internal tables.

-   `CL_DEMO_BS_URLS` gets the URLs of service bindings.
-   `CL_DEMO_BS_ODATA` gets the unhandled OData data of service bindings.
-   `CL_DEMO_BS_META_DATA` gets important metadata as the content of internal tables.
-   `CL_DEMO_CONSUME_BS_WITH_PARAMS` demonstrates parameter passing to exposed CDS entities with input parameters.
-   `CL_DEMO_CONSUME_BS_WITH_ASSOCS` demonstrates how paths are specified for exposed CDS entities joined using associations.

\* Public class definition \\nCLASS cl\_demo\_consume\_bs\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA(service\_binding) = \`demo\_sb\_scarr\_spfli\`. \\n DATA(entity) = \`demo\_cds\_scarr\_spfli\`. \\n DATA(limit) = 50. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = service\_binding \\n )->add\_field( CHANGING field = entity \\n )->add\_field( CHANGING field = limit \\n )->request( ). \\n IF limit < 1 OR limit > 1000. \\n out->write( 'Enter a number between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n TRY. \\n cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab( \\n EXPORTING \\n entity = entity \\n limit = limit \\n IMPORTING \\n itab = FINAL(itab) ). \\n CATCH cx\_demo\_bs\_consumption INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( itab->\* ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_consume\_bs\_simple DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_simple IMPLEMENTATION. \\n METHOD main. \\n DATA(service\_binding) = \`demo\_sb\_scarr\_spfli\`. \\n DATA(entity) = \`demo\_cds\_scarr\_spfli\`. \\n DATA(limit) = 50. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = service\_binding \\n )->add\_field( CHANGING field = entity \\n )->add\_field( CHANGING field = limit \\n )->request( ). \\n IF limit < 1 OR limit > 1000. \\n out->write( 'Enter a number between 1 and 1000' ). \\n RETURN. \\n ENDIF. \\n\\ \\n TRY. \\n cl\_demo\_bs\_consumption=>new( service\_binding )->odata\_to\_itab( \\n EXPORTING \\n entity = entity \\n limit = limit \\n IMPORTING \\n itab = FINAL(itab) ). \\n CATCH cx\_demo\_bs\_consumption INTO FINAL(exc). \\n out->write\_text( exc->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( itab->\* ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_service\_definitions.html abenservice\_bindings\_abexas.html