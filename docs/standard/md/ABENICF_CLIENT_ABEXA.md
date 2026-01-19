---
title: "ABENICF_CLIENT_ABEXA"
description: |
  ABENICF_CLIENT_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENICF_CLIENT_ABEXA.htm"
abapFile: "ABENICF_CLIENT_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENICF", "CLIENT", "ABEXA"]
---

This example demonstrates an [ICF](ABENICF_GLOSRY.html) client object.

The factory method `CREATE` of the class `CL_HTTP_CLIENT` is used to create a client object for the address `wikipedia.org`. The reference variable `client` of the type `IF_HTTP_CLIENT` points to this object. A specific request, which also contains the value of a user input, is added to the URI of the `REQUEST` object of the client object. The request is sent and the result is passed to the `RESPONSE` method of the client object. In this example, the HTML page produced by the requested is retrieved and displayed.

For the example to work, the proxy setting for the HTTP client must be configured correctly in transaction `SICF`.

\* Public class definition \\nCLASS cl\_demo\_http\_client DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_http\_client IMPLEMENTATION. \\n METHOD main. \\n DATA query TYPE string VALUE 'SAP'. \\n cl\_demo\_input=>new( )->request( CHANGING field = query ). \\n\\ \\n cl\_http\_client=>create( \\n EXPORTING \\n host = 'wikipedia.org' \\n service = '' \\n IMPORTING \\n client = FINAL(client) \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n RETURN. \\n ENDIF. \\n\\ \\n cl\_http\_utility=>set\_request\_uri( \\n request = client->request \\n uri = \`/wiki/\` && query ). \\n\\ \\n client->send( \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n client->get\_last\_error( \\n IMPORTING message = FINAL(smsg) ). \\n out->write( smsg ). \\n RETURN. \\n ENDIF. \\n\\ \\n client->receive( \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n client->get\_last\_error( \\n IMPORTING message = FINAL(rmsg) ). \\n out->write( rmsg ). \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(html) = client->response->get\_cdata( ). \\n out->write\_html( html ). \\n\\ \\n client->close( ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_http\_client DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_http\_client IMPLEMENTATION. \\n METHOD main. \\n DATA query TYPE string VALUE 'SAP'. \\n cl\_demo\_input=>new( )->request( CHANGING field = query ). \\n\\ \\n cl\_http\_client=>create( \\n EXPORTING \\n host = 'wikipedia.org' \\n service = '' \\n IMPORTING \\n client = FINAL(client) \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n RETURN. \\n ENDIF. \\n\\ \\n cl\_http\_utility=>set\_request\_uri( \\n request = client->request \\n uri = \`/wiki/\` && query ). \\n\\ \\n client->send( \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n client->get\_last\_error( \\n IMPORTING message = FINAL(smsg) ). \\n out->write( smsg ). \\n RETURN. \\n ENDIF. \\n\\ \\n client->receive( \\n EXCEPTIONS \\n OTHERS = 4 ). \\n IF sy-subrc <> 0. \\n client->get\_last\_error( \\n IMPORTING message = FINAL(rmsg) ). \\n out->write( rmsg ). \\n RETURN. \\n ENDIF. \\n\\ \\n FINAL(html) = client->response->get\_cdata( ). \\n out->write\_html( html ). \\n\\ \\n client->close( ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenicf.html