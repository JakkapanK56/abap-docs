---
title: "ABENAMDP_CS_ABEXA"
description: |
  ABENAMDP_CS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENAMDP_CS_ABEXA.htm"
abapFile: "ABENAMDP_CS_ABEXA.html"
keywords: ["select", "do", "case", "method", "class", "data", "ABENAMDP", "ABEXA"]
---

This example demonstrates how SQLScript procedures are implemented using AMDP. Since they implement a read access and are [client-safe](ABENCLIENT_SAFE_GLOSRY.html) by using the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html), the AMDP class can have the ABAP language version [ABAP for Cloud Development](ABENABAP_FOR_CLOUD_DEV_GLOSRY.html).

Simple [SQLScript procedures](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) are implemented in AMDP methods of an AMDP class `CL_DEMO_AMDP_CS`. Client handling is done by the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html). A [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) and a [DDIC database table](ABENDDIC_DB_TABLE_GLOSRY.html) are used as sources. The resulting data are filtered implicitly by the current client and are the same for both method calls.

This is a syntax example. The same function can be achieved with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.

\* Public class definition \\nCLASS cl\_demo\_amdp\_sql\_script\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_sql\_script\_cs IMPLEMENTATION. \\n METHOD main. \\n NEW cl\_demo\_amdp\_cs( \\n )->get\_scarr\_cds( IMPORTING carriers = DATA(result\_cds) ). \\n\\ \\n NEW cl\_demo\_amdp\_cs( \\n )->get\_scarr\_ddic( IMPORTING carriers = DATA(result\_ddic) ). \\n\\ \\n SORT result\_cds BY carrid. \\n SORT result\_ddic BY carrid. \\n\\ \\n ASSERT result\_cds = result\_ddic. \\n\\ \\n out->write( result\_cds ). \\n ENDMETHOD. \\nENDCLASS. METHOD get\_scarr\_cds BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING demo\_cds\_scarr\_entity. \\n carriers = select carrid, carrname, currcode, url \\n from demo\_cds\_scarr\_entity; \\nENDMETHOD. METHOD get\_scarr\_ddic BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING scarr. \\n carriers = select carrid, carrname, currcode, url \\n from scarr; \\nENDMETHOD. \* Public class definition \\nCLASS cl\_demo\_amdp\_sql\_script\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_sql\_script\_cs IMPLEMENTATION. \\n METHOD main. \\n NEW cl\_demo\_amdp\_cs( \\n )->get\_scarr\_cds( IMPORTING carriers = DATA(result\_cds) ). \\n\\ \\n NEW cl\_demo\_amdp\_cs( \\n )->get\_scarr\_ddic( IMPORTING carriers = DATA(result\_ddic) ). \\n\\ \\n SORT result\_cds BY carrid. \\n SORT result\_ddic BY carrid. \\n\\ \\n ASSERT result\_cds = result\_ddic. \\n\\ \\n out->write( result\_cds ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html