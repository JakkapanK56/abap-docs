---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENCDS_FUNC_CLIENT_DEP_CS_ABEXA.htm"
abapFile: "ABENCDS_FUNC_CLIENT_DEP_CS_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENCDS", "FUNC", "CLIENT", "DEP", "ABEXA"]
---

This example demonstrates client-dependent CDS table functions that are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) and suited for [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

This example class accesses the [client-dependent](ABENCDS_FUNC_CLIENT_HANDLING.html)\\ [CDS table function](ABENCDS_TABLE_FUNCTION_GLOSRY.html)\\ `DEMO_CDS_GET_SCARR_SPFLI_CS` that is [client-safe](ABENCLIENT_SAFE_GLOSRY.html). Client safety is enforced by the annotation `[ClientHandling.clientSafe](ABENCDS_1549616294_ANNO.html)` and the annotation `[ClientHandling.algorithm](ABENCDS_1114072352_ANNO.html)` must be used with the value `#SESSION_VARIABLE`. There is no input parameter of dictionary type `CLNT`. The implementing AMDP class `CL_DEMO_AMDP_FUNCTIONS_CS` has language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html) and is also client-safe.

Another CDS table function `DEMO_CDS_GET_SCARR_SPFLI_DD_CS` does exactly the same, but is implemented by another method of the same AMDP class that accesses DDIC database tables instead of CDS view entities in a client safe way.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_functions\_clnt\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_functions\_clnt\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE s\_carr\_id VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n carrid = to\_upper( carrid ). \\n\\ \\n SELECT \* \\n FROM demo\_cds\_get\_scarr\_spfli\_cs( carrid = @carrid ) \\n INTO TABLE @DATA(result\_cds) \\n ##db\_feature\_mode\[amdp\_table\_function\]. \\n\\ \\n SELECT \* \\n FROM demo\_cds\_get\_scarr\_spfli\_dd\_cs( carrid = @carrid ) \\n INTO TABLE @DATA(result\_ddic) \\n ##db\_feature\_mode\[amdp\_table\_function\]. \\n\\ \\n ASSERT result\_cds = result\_ddic. \\n\\ \\n out->write( result\_cds ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. @AccessControl.authorizationCheck: #NOT\_ALLOWED\\n@ClientHandling.type: #CLIENT\_DEPENDENT\\n@ClientHandling.algorithm: #SESSION\_VARIABLE\\n@ClientHandling.clientSafe: true\\ndefine table function DEMO\_CDS\_GET\_SCARR\_SPFLI\_CS\\n with parameters\\n carrid :s\_carr\_id\\nreturns\\n\\{\\n client :s\_mandt;\\n carrname :s\_carrname;\\n connid :s\_conn\_id;\\n cityfrom :s\_from\_cit;\\n cityto :s\_to\_city;\\n\\}\\nimplemented by method\\n CL\_DEMO\_AMDP\_FUNCTIONS\_CS=>GET\_SCARR\_SPFLI\_FOR\_CDS; \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_functions\_clnt\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_functions\_clnt\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA carrid TYPE s\_carr\_id VALUE 'LH'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n carrid = to\_upper( carrid ). \\n\\ \\n SELECT \* \\n FROM demo\_cds\_get\_scarr\_spfli\_cs( carrid = @carrid ) \\n INTO TABLE @DATA(result\_cds) \\n ##db\_feature\_mode\[amdp\_table\_function\]. \\n\\ \\n SELECT \* \\n FROM demo\_cds\_get\_scarr\_spfli\_dd\_cs( carrid = @carrid ) \\n INTO TABLE @DATA(result\_ddic) \\n ##db\_feature\_mode\[amdp\_table\_function\]. \\n\\ \\n ASSERT result\_cds = result\_ddic. \\n\\ \\n out->write( result\_cds ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abencds.html abencds\_entities.html abencds\_f1\_ddl\_syntax.html abencds\_view\_entity.html abencds\_table\_functions.html abencds\_func\_client\_handling.html abencds\_tabfunc\_abexas.html