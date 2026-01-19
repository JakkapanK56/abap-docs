---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_CDS_PARA_ABEXA.htm"
abapFile: "ABENSELECT_CDS_PARA_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSELECT", "CDS", "PARA", "ABEXA"]
---

This example demonstrates a read performed on a [CDS view entity](ABENCDS_V2_VIEW_GLOSRY.html) using parameter passing.

[`SELECT`](ABAPSELECT.html) is used to access a CDS view entity with parameters as a [data source](ABAPSELECT_DATA_SOURCE.html). Actual parameters are assigned to the input parameters of the view. The values of these actual parameters are defined via user input.

The view `demo_cds_param_view_entity` used has the following CDS source code with a [list of input parameters](ABENCDS_PARAMETER_LIST_V2.html):

Those rows are read from the DDIC database table `SPFLI` for which the distance in the transferred unit lies between the two passed values.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_param\_view\_entity DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_param\_view\_entity IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n from\_distance TYPE s\_distance VALUE 2000, \\n to\_distance TYPE s\_distance VALUE 6000, \\n unit TYPE s\_distid VALUE 'MI'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = from\_distance \\n )->add\_field( CHANGING field = to\_distance \\n )->add\_field( CHANGING field = unit \\n )->request( ). \\n\\ \\n SELECT \* \\n FROM demo\_cds\_param\_view\_entity( \\n p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = @unit ) \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\n@EndUserText.label: 'View Entity with Input Parameters'\\ndefine view entity Demo\_Cds\_Param\_View\_Entity \\n with parameters\\n p\_distance\_l :s\_distance,\\n p\_distance\_u :s\_distance,\\n p\_unit :s\_distid\\n as select from\\n spfli\\n \\{\\n key carrid,\\n key connid,\\n cityfrom,\\n cityto,\\n distance,\\n distid \\n \\}\\n where\\n distid = $parameters.p\_unit\\n and distance between $parameters.p\_distance\_l \\n and $parameters.p\_distance\_u; \\n \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_param\_view\_entity DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_param\_view\_entity IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n from\_distance TYPE s\_distance VALUE 2000, \\n to\_distance TYPE s\_distance VALUE 6000, \\n unit TYPE s\_distid VALUE 'MI'. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = from\_distance \\n )->add\_field( CHANGING field = to\_distance \\n )->add\_field( CHANGING field = unit \\n )->request( ). \\n\\ \\n SELECT \* \\n FROM demo\_cds\_param\_view\_entity( \\n p\_distance\_l = @from\_distance, \\n p\_distance\_u = @to\_distance, \\n p\_unit = @unit ) \\n ORDER BY carrid, connid \\n INTO TABLE @FINAL(result). \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenabap\_sql\_parameters.html