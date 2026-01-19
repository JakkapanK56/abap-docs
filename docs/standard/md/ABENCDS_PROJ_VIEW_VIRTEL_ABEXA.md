---
title: "ABENCDS_PROJ_VIEW_VIRTEL_ABEXA"
description: |
  ABENCDS_PROJ_VIEW_VIRTEL_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_PROJ_VIEW_VIRTEL_ABEXA.htm"
abapFile: "ABENCDS_PROJ_VIEW_VIRTEL_ABEXA.html"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "ABENCDS", "PROJ", "VIEW", "VIRTEL", "ABEXA"]
---

This example demonstrates how a [virtual element](ABENCDS_VIRTUAL_ELEMENT_GLOSRY.html) is calculated at runtime.

The example accesses the CDS projection view `DEMO_SALES_PV_SO_EXP` in which a virtual element `expiry_date` is bound to an ABAP class `CL_DEMO_SALES_VIRT_ELEM_EXIT`:

When using ABAP SQL, the class `CL_DEMO_SALES_VIRT_ELEM_EXIT` is not accessed and the virtual element is not calculated. When using the service binding, the class `CL_DEMO_SALES_VIRT_ELEM_EXIT` is accessed. When using the OData service, the results of the query are provided by the [RAP query engine](ABENRAP_QUERY_ENGINE_GLOSRY.html). The RAP query engine uses ABAP SQL and also calls the method for calculating the virtual element.

-   First, it reads data from the view using an ABAP SQL `SELECT` statement.
-   Second, it reads data from the view using the [service binding](ABENSERVICE_BINDING_GLOSRY.html)\\ `DEMO_SB_SALES_PV_SO_EXP`. For that, an [OData Client Proxy](https://help.sap.com/docs/ABAP_PLATFORM_NEW/68bf513362174d54b58cddec28794093/bb778da49bf34e03a699eb476d4bb316) is used, that accesses the OData service of the service binding.

\* Public class definition \\nCLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt IMPLEMENTATION. \\n METHOD main. \\n FINAL(service\_binding) = \`DEMO\_SB\_SALES\_PV\_SO\_EXP\`. \\n FINAL(entity) = \`DEMO\_SALES\_PV\_SO\_EXP\`. \\n\\ \\n SELECT \* \\n FROM demo\_sales\_pv\_so\_exp \\n INTO TABLE @FINAL(from\_select). "#EC CI\_NOWHERE \\n out->write( from\_select ). \\n\\ \\n DATA from\_bs TYPE STANDARD TABLE OF demo\_sales\_pv\_so\_exp \\n WITH EMPTY KEY. \\n\\ \\n TRY. \\n /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy( \\n VALUE #( service\_id = service\_binding \\n service\_version = '0001' ) \\n )->create\_resource\_for\_entity\_set( CONV #( entity ) \\n )->create\_request\_for\_read( \\n )->execute( \\n )->get\_business\_data( \\n IMPORTING et\_business\_data = from\_bs ). \\n out->write( from\_bs ). \\n CATCH /iwbep/cx\_gateway INTO FINAL(exc2). \\n out->write( exc2->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cnsme\_bs\_prj\_view\_virt IMPLEMENTATION. \\n METHOD main. \\n FINAL(service\_binding) = \`DEMO\_SB\_SALES\_PV\_SO\_EXP\`. \\n FINAL(entity) = \`DEMO\_SALES\_PV\_SO\_EXP\`. \\n\\ \\n SELECT \* \\n FROM demo\_sales\_pv\_so\_exp \\n INTO TABLE @FINAL(from\_select). "#EC CI\_NOWHERE \\n out->write( from\_select ). \\n\\ \\n DATA from\_bs TYPE STANDARD TABLE OF demo\_sales\_pv\_so\_exp \\n WITH EMPTY KEY. \\n\\ \\n TRY. \\n /iwbep/cl\_cp\_client\_proxy\_fact=>create\_v2\_local\_proxy( \\n VALUE #( service\_id = service\_binding \\n service\_version = '0001' ) \\n )->create\_resource\_for\_entity\_set( CONV #( entity ) \\n )->create\_request\_for\_read( \\n )->execute( \\n )->get\_business\_data( \\n IMPORTING et\_business\_data = from\_bs ). \\n out->write( from\_bs ). \\n CATCH /iwbep/cx\_gateway INTO FINAL(exc2). \\n out->write( exc2->get\_text( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_proj\_views.html abencds\_pv\_transactional\_query.html abencds\_proj\_view\_element\_list.html abencds\_proj\_view\_element.html abencds\_proj\_view\_virtual\_element.html