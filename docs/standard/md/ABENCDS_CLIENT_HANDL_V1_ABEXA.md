---
title: "ABENCDS_CLIENT_HANDL_V1_ABEXA"
description: |
  ABENCDS_CLIENT_HANDL_V1_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENCDS_CLIENT_HANDL_V1_ABEXA.htm"
abapFile: "ABENCDS_CLIENT_HANDL_V1_ABEXA.html"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "ABENCDS", "CLIENT", "HANDL", "ABEXA"]
---

This example demonstrates how [client-dependent](ABENCDS_VIEW_CLIENT_HANDLING_V1.html) CDS DDIC-based views (obsolete) are handled.

The program accesses the following CDS views:

The view `DEMO_CDS_SPFLI_CLIENT_0` is a regular client-dependent CDS DDIC-based view (obsolete) in which the client column is not specified in the `SELECT` list. The CDS DDIC-based view (obsolete) `DEMO_CDS_SPFLI_CLIENT_1` is used to demonstrate the behavior in rare cases where the client column is specified in the `SELECT` list of a client-dependent CDS view.

RTTI is used to read the components of the associated data types:

The statement `SELECT` is used to make the following accesses:

The accesses to the CDS-managed DDIC views (obsolete) of [CDS DDIC-based views (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) shown here are for demonstration purposes only. This way of accessing CDS DDIC-based views (obsolete) is obsolete and only the CDS entities should now be accessed.

-   The structure of the client-dependent CDS entity without client column in the `SELECT` list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-dependent [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) without client column in the `SELECT` list has a client column.
-   Nevertheless, the structure of the client-dependent CDS entity with client column in the `SELECT` list does not have a client column.
-   The CDS-managed DDIC view (obsolete) of the client-dependent [CDS DDIC-based view (obsolete)](ABENCDS_V1_VIEW_GLOSRY.html) with client column in the `SELECT` list has a client column.

-   Regular access to a client-dependent CDS entity without client column in the `SELECT` list. The data from the [current client](ABENCURRENT_CLIENT_GLOSRY.html) is read. The result set does not have a client column.
-   Regular access to a CDS-managed DDIC view (obsolete) of the client-dependent CDS entity without client column in the `SELECT` list. The data from the current client is read. The result set has a client column.
-   Regular access to a CDS-managed DDIC view (obsolete) of the client-dependent CDS entity with client column in the `SELECT` list. The data from the current client is read. The result set does not have a client column.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN0'\\n@AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\ndefine view demo\_cds\_spfli\_client\_0\\n as select from\\n spfli\\n \\{\\n key spfli.carrid,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n \\}\\n @AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN1'\\n@AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\ndefine view demo\_cds\_spfli\_client\_1\\n as select from\\n spfli\\n \\{\\n key spfli.mandt,\\n key spfli.carrid,\\n key spfli.connid,\\n spfli.cityfrom,\\n spfli.cityto\\n \\}\\n REPORT demo\_cds\_client\_handling.\\n\\nCLASS demo DEFINITION.\\n PUBLIC SECTION.\\n CLASS-METHODS main.\\nENDCLASS.\\n\\nCLASS demo IMPLEMENTATION.\\n METHOD main.\\n DATA(out) = cl\_demo\_output=>new( ).\\n\\n out->next\_section( 'Data Types' ).\\n\\n out->write(\\n name = 'Client dependent, no client field, CDS entity'\\n data = CAST cl\_abap\_structdescr(\\n cl\_abap\_typedescr=>describe\_by\_name(\\n 'DEMO\_CDS\_SPFLI\_CLIENT\_0' )\\n )->components ).\\n\\n out->write(\\n name = 'Client dependent, no client field, database view'\\n data = CAST cl\_abap\_structdescr(\\n cl\_abap\_typedescr=>describe\_by\_name(\\n 'DEMO\_CDS\_PRJCTN0' )\\n )->components ).\\n\\n out->write(\\n name = 'Client dependent, client field, CDS entity'\\n data = CAST cl\_abap\_structdescr(\\n cl\_abap\_typedescr=>describe\_by\_name(\\n 'DEMO\_CDS\_SPFLI\_CLIENT\_1' )\\n )->components ).\\n\\n out->write(\\n name = 'Client dependent, client field, database view'\\n data = CAST cl\_abap\_structdescr(\\n cl\_abap\_typedescr=>describe\_by\_name(\\n 'DEMO\_CDS\_PRJCTN1' )\\n )->components ).\\n\\n out->next\_section( 'SELECT Statements' ).\\n\\n SELECT \*\\n FROM demo\_cds\_spfli\_client\_0\\n ORDER BY carrid, connid\\n INTO TABLE @DATA(result1)\\n UP TO 1 ROWS.\\n out->write(\\n name = 'Client dependent, no client field, CDS entity'\\n data = result1 ).\\n\\n SELECT \*\\n FROM demo\_cds\_spfli\_client\_1\\n ORDER BY carrid, connid\\n INTO TABLE @DATA(result4)\\n UP TO 1 ROWS.\\n out->write(\\n name = 'Client dependent, client field, CDS entity'\\n data = result4 ).\\n\\n out->display( ).\\n ENDMETHOD.\\nENDCLASS.\\n\\nSTART-OF-SELECTION.\\n demo=>main( ).\\n abenabap.html abencds.html abencds\_obsolete.html abencds\_entities\_obsolete.html abencds\_ddic\_entity.html abencds\_v1\_views.html abencds\_view\_client\_handling\_v1.html