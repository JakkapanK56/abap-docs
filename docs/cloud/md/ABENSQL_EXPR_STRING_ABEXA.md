---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_STRING_ABEXA.htm"
abapFile: "ABENSQL_EXPR_STRING_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSQL", "EXPR", "STRING", "ABEXA"]
---

This example demonstrates how strings are concatenated in [SQL expressions](ABAPSQL_EXPR.html).

In a `SELECT` list, two columns of a result set of a query are created using concatenations of strings.

-   The first column `key` cannot be created using the operator [`&&`](ABENSQL_STRING.html). The column `CONNID` does not have the required data type and [cast expressions](ABENSQL_CAST.html) cannot be used either. The built-in function [`CONCAT`](ABENSQL_STRING_FUNC.html) is used instead.
-   The second column `connection` can be constructed from columns and literals using the operator [`&&`](ABENSQL_STRING.html).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_string DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_string IMPLEMENTATION. \\n METHOD main. \\n SELECT FROM spfli \\n FIELDS concat( concat( carrid,'\_' ), connid ) AS key, \\n 'from' && ' ' && cityfrom && \\n ' to' && ' ' && cityto AS connection \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_string DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_string IMPLEMENTATION. \\n METHOD main. \\n SELECT FROM spfli \\n FIELDS concat( concat( carrid,'\_' ), connid ) AS key, \\n 'from' && ' ' && cityfrom && \\n ' to' && ' ' && cityto AS connection \\n INTO TABLE @FINAL(results). \\n\\ \\n out->write( results ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_string.html