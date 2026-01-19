---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSQL_SPATIAL_FUNC_AGG_ABEXA.htm"
abapFile: "ABENSQL_SPATIAL_FUNC_AGG_ABEXA.html"
keywords: ["select", "insert", "delete", "do", "if", "try", "catch", "method", "class", "data", "ABENSQL", "SPATIAL", "FUNC", "AGG", "ABEXA"]
---

This example demonstrates [aggregate spatial functions](ABENSQL_SPATIAL_FUNC_A.html) in [SQL expressions](ABAPSQL_EXPR.html).

Uses the aggregate spatial functions supported by ABAP SQL as elements of a `SELECT` list.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_function\_spatial\_a DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_function\_spatial\_a IMPLEMENTATION. \\n METHOD main. \\n DATA ewkb TYPE x \\n VALUE \`01010000200000000000000000000000000000000000000000\` \\n LENGTH 25. \\n DATA wkb TYPE x VALUE \`010100000000000000000000400000000000001040\` \\n LENGTH 21. \\n\\ \\n DELETE FROM demo\_geo\_point. "#EC CI\_NOWHERE \\n INSERT demo\_geo\_point FROM TABLE @( VALUE #( \\n ( point1 = \`010100002000000000E561A1D634A748400D71AC8BDB482140\` \\n point2 = \`0101000020000000006919A9F754BC49408A20CEC3090C1F40\` ) \\n ) ). \\n\\ \\n TRY. \\n SELECT SINGLE \\n st\_alphashapeaggr( point1, fltp\`1.0\`, 'meter' ) \\n AS alphashapeaggr, \\n st\_alphashapeareaaggr( point1, fltp\`1.0\` ) \\n AS alphashapeareaaggr, \\n st\_assvgaggr( point1 ) AS st\_assvgaggr, \\n st\_collectaggr( point1 ) AS st\_collectaggr, \\n st\_concavehullaggr( point1 ) AS st\_concavehullaggr, \\n st\_convexhullaggr( point1 ) AS st\_convexhullaggr, \\n st\_envelopeaggr( point1 ) AS st\_envelopeaggr, \\n st\_intersectionaggr( point1 ) AS st\_intersectionaggr, \\n st\_unionaggr( point1 ) AS st\_unionaggr \\n FROM demo\_geo\_point \\n INTO @DATA(aggregate\_fcts). \\n\\ \\n WITH +cte AS ( \\n SELECT st\_new\_polygon( 'Polygon(( 0 0, 2 0, 1 2, 0 0 ))' ) \\n AS geo, 1 AS anint, 'ABC' AS achar, 'DEF' AS anotherchar \\n FROM demo\_geo\_point ) \\n SELECT SINGLE \\n st\_asesrijson\_multicolumn( geo, anint, achar, \\n geom\_name = 'GEO', object\_id\_name = 'ANINT' ) \\n AS st\_asesrijson\_multicolumn, \\n st\_asgeojson\_multicolumn( geo, anint, achar, \\n geom\_name = 'GEO', feature\_id\_name = 'ANINT' ) \\n AS st\_asgeojson\_multicolumn, \\n st\_asmvt( geo, anint, achar, geom\_name = 'GEO', \\n layer\_name = 'ANINT' ) AS st\_asmvt \\n FROM +cte \\n INTO @DATA(aggregate\_fcts\_exp\_list). \\n\\ \\n out->write( aggregate\_fcts ). \\n out->write( aggregate\_fcts\_exp\_list ). \\n CATCH cx\_root INTO DATA(error). \\n out->write( error->get\_longtext( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_function\_spatial\_a DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_function\_spatial\_a IMPLEMENTATION. \\n METHOD main. \\n DATA ewkb TYPE x \\n VALUE \`01010000200000000000000000000000000000000000000000\` \\n LENGTH 25. \\n DATA wkb TYPE x VALUE \`010100000000000000000000400000000000001040\` \\n LENGTH 21. \\n\\ \\n DELETE FROM demo\_geo\_point. "#EC CI\_NOWHERE \\n INSERT demo\_geo\_point FROM TABLE @( VALUE #( \\n ( point1 = \`010100002000000000E561A1D634A748400D71AC8BDB482140\` \\n point2 = \`0101000020000000006919A9F754BC49408A20CEC3090C1F40\` ) \\n ) ). \\n\\ \\n TRY. \\n SELECT SINGLE \\n st\_alphashapeaggr( point1, fltp\`1.0\`, 'meter' ) \\n AS alphashapeaggr, \\n st\_alphashapeareaaggr( point1, fltp\`1.0\` ) \\n AS alphashapeareaaggr, \\n st\_assvgaggr( point1 ) AS st\_assvgaggr, \\n st\_collectaggr( point1 ) AS st\_collectaggr, \\n st\_concavehullaggr( point1 ) AS st\_concavehullaggr, \\n st\_convexhullaggr( point1 ) AS st\_convexhullaggr, \\n st\_envelopeaggr( point1 ) AS st\_envelopeaggr, \\n st\_intersectionaggr( point1 ) AS st\_intersectionaggr, \\n st\_unionaggr( point1 ) AS st\_unionaggr \\n FROM demo\_geo\_point \\n INTO @DATA(aggregate\_fcts). \\n\\ \\n WITH +cte AS ( \\n SELECT st\_new\_polygon( 'Polygon(( 0 0, 2 0, 1 2, 0 0 ))' ) \\n AS geo, 1 AS anint, 'ABC' AS achar, 'DEF' AS anotherchar \\n FROM demo\_geo\_point ) \\n SELECT SINGLE \\n st\_asesrijson\_multicolumn( geo, anint, achar, \\n geom\_name = 'GEO', object\_id\_name = 'ANINT' ) \\n AS st\_asesrijson\_multicolumn, \\n st\_asgeojson\_multicolumn( geo, anint, achar, \\n geom\_name = 'GEO', feature\_id\_name = 'ANINT' ) \\n AS st\_asgeojson\_multicolumn, \\n st\_asmvt( geo, anint, achar, geom\_name = 'GEO', \\n layer\_name = 'ANINT' ) AS st\_asmvt \\n FROM +cte \\n INTO @DATA(aggregate\_fcts\_exp\_list). \\n\\ \\n out->write( aggregate\_fcts ). \\n out->write( aggregate\_fcts\_exp\_list ). \\n CATCH cx\_root INTO DATA(error). \\n out->write( error->get\_longtext( ) ). \\n ENDTRY. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abapsql\_expr.html abensql\_builtin\_func.html abenabap\_sql\_builtin\_functions.html abenabap\_sql\_functions.html abensql\_spatial\_func.html abensql\_spatial\_func\_abexas.html