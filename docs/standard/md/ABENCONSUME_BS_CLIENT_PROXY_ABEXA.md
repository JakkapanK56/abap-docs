---
title: "ABENCONSUME_BS_CLIENT_PROXY_ABEXA"
description: |
  ABENCONSUME_BS_CLIENT_PROXY_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCONSUME_BS_CLIENT_PROXY_ABEXA.htm"
abapFile: "ABENCONSUME_BS_CLIENT_PROXY_ABEXA.html"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "ABENCONSUME", "CLIENT", "PROXY", "ABEXA"]
---

This example demonstrates how the OData data of business services can be consumed in ABAP using an OData Client Proxy.

Methods of the [SAP Gateway](ABENSAP_GATEWAY_GLOSRY.html) framework are used to create a local [OData Client Proxy](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) and to retrieve the data exposed by a CDS service binding `DEMO_SB_SCARR_SPFLI`. The service binding provides the following service definition:

This service definition exposes the following CDS view entity:

The data provided by that view are retrieved.

\* Public class definition \\nCLASS cl\_demo\_consume\_bs\_clnt\_proxy DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_clnt\_proxy IMPLEMENTATION. \\n METHOD main. \\n DATA scarr\_spfli TYPE STANDARD TABLE OF demo\_cds\_scarr\_spfli \\n WITH EMPTY KEY. \\n\\ \\n TRY. \\n /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy( \\n VALUE #( service\_id = 'demo\_sb\_scarr\_spfli' \\n service\_version = '0001' ) \\n )->create\_resource\_for\_entity\_set( 'demo\_cds\_scarr\_spfli' \\n )->create\_request\_for\_read( \\n )->execute( \\n )->get\_business\_data( \\n IMPORTING et\_business\_data = scarr\_spfli ). \\n out->write( scarr\_spfli ). \\n CATCH /iwbep/cx\_gateway INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. @EndUserText.label: 'Expose demo\_cds\_scarr\_spfli'\\ndefine service demo\_sd\_scarr\_spfli \\{\\n expose demo\_cds\_scarr\_spfli;\\n\\} @AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\ndefine view demo\_cds\_scarr\_spfli(\\n id,\\n carrier,\\n flight,\\n departure,\\n destination\\n )\\n as select from spfli\\n join scarr on scarr.carrid = spfli.carrid\\n\\{\\n key spfli.carrid,\\n key scarr.carrname,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n\\}\\n \* Public class definition \\nCLASS cl\_demo\_consume\_bs\_clnt\_proxy DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_consume\_bs\_clnt\_proxy IMPLEMENTATION. \\n METHOD main. \\n DATA scarr\_spfli TYPE STANDARD TABLE OF demo\_cds\_scarr\_spfli \\n WITH EMPTY KEY. \\n\\ \\n TRY. \\n /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy( \\n VALUE #( service\_id = 'demo\_sb\_scarr\_spfli' \\n service\_version = '0001' ) \\n )->create\_resource\_for\_entity\_set( 'demo\_cds\_scarr\_spfli' \\n )->create\_request\_for\_read( \\n )->execute( \\n )->get\_business\_data( \\n IMPORTING et\_business\_data = scarr\_spfli ). \\n out->write( scarr\_spfli ). \\n CATCH /iwbep/cx\_gateway INTO FINAL(exc). \\n out->write( exc->get\_text( ) ). \\n ENDTRY. \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_service\_definitions.html abenservice\_bindings\_abexas.html