---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_EXPR_NULL_ABEXA.htm"
abapFile: "ABENSQL_EXPR_NULL_ABEXA.html"
keywords: ["select", "delete", "do", "if", "case", "method", "class", "data", "types", "ABENSQL", "EXPR", "NULL", "ABEXA"]
---

This example demonstrates [null expressions](ABENSQL_NULL.html) in ABAP SQL.

In the `SELECT` list, two [simple case distinctions](ABENSQL_SIMPLE_CASE.html) are made which both explicitly specify the null expression `NULL` after `ELSE`.

The [null value](ABENNULL_VALUE_GLOSRY.html) is converted to the type-dependent [initial value](ABENINITIAL_VALUE_GLOSRY.html) in both cases when passed to the result table.

-   The column `distance` returns the result of all matches and if there is no match returns the null value.
-   The column `null` returns an unknown result for the first comparison, which is true, and the null value for the second comparison, which is not true.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_null DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_null IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF result, \\n carrid TYPE scarr-carrid, \\n distid TYPE spfli-distid, \\n distance TYPE string, \\n null TYPE string, \\n END OF result. \\n\\ \\n DATA result TYPE TABLE OF result \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\n SELECT FROM scarr \\n LEFT OUTER JOIN spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS scarr~carrid, \\n distid, \\n CASE distid \\n WHEN 'MI' THEN 'Miles' \\n WHEN 'KM' THEN 'Kilometers' \\n ELSE NULL \\n END AS distance, \\n CASE distid \\n WHEN 'MI' THEN NULL \\n WHEN NULL THEN 'Kilometers' \\n ELSE NULL \\n END AS null \\n ORDER BY scarr~carrid \\n INTO TABLE @result. \\n\\ \\n DELETE ADJACENT DUPLICATES FROM result. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_expr\_null DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_expr\_null IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES: BEGIN OF result, \\n carrid TYPE scarr-carrid, \\n distid TYPE spfli-distid, \\n distance TYPE string, \\n null TYPE string, \\n END OF result. \\n\\ \\n DATA result TYPE TABLE OF result \\n WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line. \\n\\ \\n SELECT FROM scarr \\n LEFT OUTER JOIN spfli \\n ON scarr~carrid = spfli~carrid \\n FIELDS scarr~carrid, \\n distid, \\n CASE distid \\n WHEN 'MI' THEN 'Miles' \\n WHEN 'KM' THEN 'Kilometers' \\n ELSE NULL \\n END AS distance, \\n CASE distid \\n WHEN 'MI' THEN NULL \\n WHEN NULL THEN 'Kilometers' \\n ELSE NULL \\n END AS null \\n ORDER BY scarr~carrid \\n INTO TABLE @result. \\n\\ \\n DELETE ADJACENT DUPLICATES FROM result. \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_null.html