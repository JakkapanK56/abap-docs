---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_INTER_CDS_PARA_ABEXA.htm"
abapFile: "ABENSELECT_INTER_CDS_PARA_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSELECT", "INTER", "CDS", "PARA", "ABEXA"]
---

This example demonstrates an intersection of a CDS view with input parameters.

This example uses a [common table expression](ABENCOMMON_TABLE_EXPRESSION_GLOSRY.html) and two `SELECT` statements joined using [`INTERSECT`](ABAPUNION.html) to access the following CDS view entity.

This fills the input parameter `p_unit` with different values.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_parameters\_intrsct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_parameters\_intrsct IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n from\_distance TYPE s\_distance VALUE 0000, \\n to\_distance TYPE s\_distance VALUE 1000. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = from\_distance \\n )->add\_field( CHANGING field = to\_distance \\n )->request( ). \\n\\ \\n WITH \\n +union AS ( \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'MI' ) \\n UNION \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'KM' ) ) \\n\\ \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM +union \\n INTERSECT \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'KM' ) \\n ORDER BY distid, carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@Metadata.allowExtensions\\n@EndUserText.label: 'Demo für Parameter-View'\\ndefine view entity demo\_cds\_parameters\\n with parameters\\n p\_distance\_l :s\_distance,\\n p\_distance\_u :s\_distance,\\n p\_unit :s\_distid\\n as select from spfli\\n\\{\\n key carrid,\\n key connid,\\n cityfrom,\\n cityto,\\n distance,\\n distid\\n\\}\\nwhere\\n distid = $parameters.p\_unit\\n and distance between $parameters.p\_distance\_l and $parameters.p\_distance\_u;\\n \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_parameters\_intrsct DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_parameters\_intrsct IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n from\_distance TYPE s\_distance VALUE 0000, \\n to\_distance TYPE s\_distance VALUE 1000. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = from\_distance \\n )->add\_field( CHANGING field = to\_distance \\n )->request( ). \\n\\ \\n WITH \\n +union AS ( \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'MI' ) \\n UNION \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'KM' ) ) \\n\\ \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM +union \\n INTERSECT \\n SELECT carrid, connid, cityfrom, cityto, distance, distid \\n FROM demo\_cds\_parameters( p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = 'KM' ) \\n ORDER BY distid, carrid, connid \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abapunion.html abenintersect\_abexas.html