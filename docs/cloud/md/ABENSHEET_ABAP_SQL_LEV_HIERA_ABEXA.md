---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSHEET_ABAP_SQL_LEV_HIERA_ABEXA.htm"
abapFile: "ABENSHEET_ABAP_SQL_LEV_HIERA_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSHEET", "ABAP", "SQL", "LEV", "HIERA", "ABEXA"]
---

This example generates a [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) from flight model data.

Data from DDIC database tables `SCARR`, `SPFLI` and `SFLIGHT` are joined in a CTE of the [`WITH`](ABAPWITH.html) statement that is used as a data source of the hierarchy generator [`HIERARCHY`](ABENSELECT_HIERARCHY_GENERATOR.html) using the addition [`LEVELS`](ABENSELECT_HIERARCHY_GEN_LEVEL.html). The columns `CARRID`, `CONNID` and `FLDATE` are specified as level columns. The resulting [level-based hierarchy](ABENLEVEL_BASED_HIERA_GLOSRY.html) is used as a data source for the [hierarchy aggregate navigator](ABENHIERARCHY_AGG_NAVI_GLOSRY.html)\\ [`HIERARCHY_DESCENDANTS_AGGREGATE`](ABENSELECT_HIERARCHY_DESC_AGG.html) that sums up the flight prices for each flight connection.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_leveled\_hierarchy DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_leveled\_hierarchy IMPLEMENTATION. \\n METHOD main. \\n\\ \\n WITH +flights AS ( \\n SELECT FROM scarr AS s \\n INNER JOIN spfli AS p \\n ON s~carrid = p~carrid \\n INNER JOIN sflight AS f \\n ON p~carrid = f~carrid AND p~connid = f~connid \\n FIELDS s~carrid, \\n s~carrname, \\n p~connid, \\n p~cityfrom, \\n p~cityto, \\n f~fldate, \\n f~price, \\n f~currency ) \\n SELECT FROM HIERARCHY( \\n SOURCE +flights \\n LEVELS ( carrid, connid, fldate ) \\n SIBLINGS ORDER BY connid, fldate ) \\n FIELDS node\_id AS node, \\n carrname, \\n cityfrom, cityto, \\n CAST( price AS CHAR( 20 ) ) AS price, currency \\n WHERE carrid = 'LH' \\n INTO TABLE @FINAL(flight\_hiera). \\n\\ \\n out->write( flight\_hiera ). \\n\\ \\n\\ \\n WITH +flights AS ( \\n SELECT FROM scarr AS s \\n INNER JOIN spfli AS p \\n ON s~carrid = p~carrid \\n INNER JOIN sflight AS f \\n ON p~carrid = f~carrid AND p~connid = f~connid \\n FIELDS s~carrid, \\n s~carrname, \\n p~connid, \\n p~cityfrom, \\n p~cityto, \\n f~fldate, \\n f~price, \\n f~currency \\n WHERE p~carrid = 'LH' AND f~currency = 'EUR' ) \\n SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE( \\n SOURCE HIERARCHY( \\n SOURCE +flights \\n LEVELS ( carrid, connid, fldate ) \\n SIBLINGS ORDER BY connid, fldate ) \\n MEASURES MIN( price ) AS min, \\n MAX( price ) AS max, \\n SUM( price ) AS sum \\n WHERE hierarchy\_level = 2 ) AS agg \\n FIELDS agg~carrid, agg~carrname, agg~connid, \\n agg~min, agg~max, agg~sum \\n INTO TABLE @FINAL(flight\_hiera\_agg). \\n\\ \\n out->write( flight\_hiera\_agg ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_sql\_leveled\_hierarchy DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_sql\_leveled\_hierarchy IMPLEMENTATION. \\n METHOD main. \\n\\ \\n WITH +flights AS ( \\n SELECT FROM scarr AS s \\n INNER JOIN spfli AS p \\n ON s~carrid = p~carrid \\n INNER JOIN sflight AS f \\n ON p~carrid = f~carrid AND p~connid = f~connid \\n FIELDS s~carrid, \\n s~carrname, \\n p~connid, \\n p~cityfrom, \\n p~cityto, \\n f~fldate, \\n f~price, \\n f~currency ) \\n SELECT FROM HIERARCHY( \\n SOURCE +flights \\n LEVELS ( carrid, connid, fldate ) \\n SIBLINGS ORDER BY connid, fldate ) \\n FIELDS node\_id AS node, \\n carrname, \\n cityfrom, cityto, \\n CAST( price AS CHAR( 20 ) ) AS price, currency \\n WHERE carrid = 'LH' \\n INTO TABLE @FINAL(flight\_hiera). \\n\\ \\n out->write( flight\_hiera ). \\n\\ \\n\\ \\n WITH +flights AS ( \\n SELECT FROM scarr AS s \\n INNER JOIN spfli AS p \\n ON s~carrid = p~carrid \\n INNER JOIN sflight AS f \\n ON p~carrid = f~carrid AND p~connid = f~connid \\n FIELDS s~carrid, \\n s~carrname, \\n p~connid, \\n p~cityfrom, \\n p~cityto, \\n f~fldate, \\n f~price, \\n f~currency \\n WHERE p~carrid = 'LH' AND f~currency = 'EUR' ) \\n SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE( \\n SOURCE HIERARCHY( \\n SOURCE +flights \\n LEVELS ( carrid, connid, fldate ) \\n SIBLINGS ORDER BY connid, fldate ) \\n MEASURES MIN( price ) AS min, \\n MAX( price ) AS max, \\n SUM( price ) AS sum \\n WHERE hierarchy\_level = 2 ) AS agg \\n FIELDS agg~carrid, agg~carrname, agg~connid, \\n agg~min, agg~max, agg~sum \\n INTO TABLE @FINAL(flight\_hiera\_agg). \\n\\ \\n out->write( flight\_hiera\_agg ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abenselect\_hierarchy\_data.html abenselect\_hierarchy.html abenselect\_hierarchy\_generator.html abenselect\_hierarchy\_gen\_level.html