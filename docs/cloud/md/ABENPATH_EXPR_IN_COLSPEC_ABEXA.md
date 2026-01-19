---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENPATH_EXPR_IN_COLSPEC_ABEXA.htm"
abapFile: "ABENPATH_EXPR_IN_COLSPEC_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENPATH", "EXPR", "COLSPEC", "ABEXA"]
---

This example demonstrates [path expressions](ABENABAP_SQL_PATH.html) in the [`SELECT` list](ABAPSELECT_LIST.html) in ABAP SQL.

The first `SELECT` statement accesses the CDS view entity `demo_cds_assoc_scarr`:

This view entity exposes its [CDS association](ABENCDS_ASSOCIATION_GLOSRY.html)\\ `_spfli` in its `SELECT` list. The CDS association `_spfli` uses the view entity `demo_cds_assoc_spfli` as an [association target](ABENASSOCIATION_TARGET_GLOSRY.html):

This view entity exposes its [CDS associations](ABENCDS_ASSOCIATION_GLOSRY.html)\\ `_sflight` and `_sairport` in its `SELECT` list, making it possible to specify them in path expressions after `_spfli`. These CDS associations use wrappers of DDIC database tables as data sources.

The `SELECT` statement contains three path expressions in its `SELECT` list alongside an elementary column specification. The first association contains only the CDS association `_spfli` of the CDS view entity `demo_cds_assoc_scarr` specified after `FROM`. The CDS associations of the data source of the root element are added to the other two path expressions. The path expressions specify the [cardinality](ABENCARDINALITY_GLOSRY.html) of the associations, which prevents syntax check warnings indicating that the path expressions affect the [cardinality](ABENCARDINALITY_GLOSRY.html) of the result set.

The second `SELECT` statement demonstrates which joins must be created in ABAP SQL to achieve the same result. This is guaranteed by an assertion.

The third `SELECT` statement accesses the CDS view entity `demo_cds_use_assocs`:

This view shows how the same paths specified in the `SELECT` statement of the view in [CDS DDL syntax](ABENCDS_PATH_EXPRESSION_V1.html) and also achieves the same result.

Finally, a fourth `SELECT` statement accesses the CDS view entity `demo_cds_outer_joins`:

In this view, the same result is again achieved using joins.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_association\_path DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_association\_path IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA carrid TYPE scarr-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n "Path expressions in ABAP SQL \\n SELECT scarr~carrname, \\n \\\\\_spfli\[ MANY TO MANY \]-connid AS connid, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sflight\[ \\n MANY TO MANY \]-fldate AS fldate, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sairport-name AS name \\n FROM demo\_cds\_assoc\_scarr AS scarr \\n WHERE scarr~carrid = @carrid \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result1). \\n\\ \\n "Joins in ABAP SQL \\n SELECT demo\_cds\_assoc\_scarr~carrname, \\n demo\_cds\_assoc\_spfli~connid, \\n sflight~fldate AS fldate, \\n sairport~name AS name \\n FROM demo\_cds\_assoc\_scarr \\n LEFT OUTER JOIN demo\_cds\_assoc\_spfli \\n ON demo\_cds\_assoc\_spfli~carrid = \\n demo\_cds\_assoc\_scarr~carrid \\n LEFT OUTER JOIN demo\_cds\_sflight AS sflight \\n ON sflight~carrid = demo\_cds\_assoc\_spfli~carrid AND \\n sflight~connid = demo\_cds\_assoc\_spfli~connid \\n LEFT OUTER JOIN demo\_cds\_sairport AS sairport \\n ON sairport~id = demo\_cds\_assoc\_spfli~airpfrom \\n WHERE demo\_cds\_assoc\_scarr~carrid = @carrid \\n ORDER BY demo\_cds\_assoc\_scarr~carrname, \\n demo\_cds\_assoc\_spfli~connid, \\n fldate \\n INTO TABLE @FINAL(result2). \\n ASSERT result1 = result2. \\n\\ \\n "Path expressions in CDS \\n SELECT \* \\n FROM demo\_cds\_use\_assocs( p\_carrid = @carrid ) \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result3). \\n ASSERT result1 = result3. \\n\\ \\n "Joins in CDS \\n SELECT \* \\n FROM demo\_cds\_outer\_joins( p\_carrid = @carrid ) \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result4). \\n ASSERT result1 = result4. \\n\\ \\n out->write( result1 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_scarr\\n as select from scarr\\n association \[1..\*\] to demo\_cds\_assoc\_spfli as \_spfli on\\n scarr.carrid = \_spfli.carrid\\n \\{\\n \_spfli,\\n key carrid,\\n carrname\\n \\}\\n\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_assoc\_spfli \\n as select from\\n spfli\\n association \[1..\*\] to demo\_cds\_sflight as \_sflight on\\n spfli.carrid = \_sflight.carrid\\n and spfli.connid = \_sflight.connid\\n association \[1..1\] to demo\_cds\_sairport as \_sairport on\\n spfli.airpfrom = \_sairport.id\\n \\{\\n \_sflight,\\n \_sairport,\\n key carrid,\\n key connid,\\n airpfrom\\n \\}\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_use\_assocs\\n with parameters\\n p\_carrid :s\_carrid\\n as select from\\n demo\_cds\_assoc\_scarr as scarr\\n \\{\\n scarr.carrname,\\n scarr.\_spfli.connid,\\n scarr.\_spfli.\_sflight.fldate,\\n scarr.\_spfli.\_sairport.name\\n \\}\\n where\\n scarr.carrid = $parameters.p\_carrid\\n @AccessControl.authorizationCheck: #NOT\_REQUIRED\\ndefine view entity demo\_cds\_outer\_joins\\n with parameters\\n p\_carrid :s\_carrid\\n as select from\\n demo\_cds\_assoc\_scarr\\n left outer join demo\_cds\_assoc\_spfli on\\n demo\_cds\_assoc\_spfli.carrid = demo\_cds\_assoc\_scarr.carrid\\n left outer join demo\_cds\_sflight as sflight on\\n sflight.carrid = demo\_cds\_assoc\_spfli.carrid\\n and sflight.connid = demo\_cds\_assoc\_spfli.connid\\n left outer join demo\_cds\_sairport as sairport on\\n sairport.id = demo\_cds\_assoc\_spfli.airpfrom\\n \\{\\n demo\_cds\_assoc\_scarr.carrname as carrname,\\n demo\_cds\_assoc\_spfli.connid as connid,\\n sflight.fldate as fldate,\\n sairport.name as name\\n \\}\\n where\\n demo\_cds\_assoc\_scarr.carrid = $parameters.p\_carrid\\n \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_cds\_association\_path DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_cds\_association\_path IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA carrid TYPE scarr-carrid VALUE 'AA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrid ). \\n\\ \\n "Path expressions in ABAP SQL \\n SELECT scarr~carrname, \\n \\\\\_spfli\[ MANY TO MANY \]-connid AS connid, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sflight\[ \\n MANY TO MANY \]-fldate AS fldate, \\n \\\\\_spfli\[ MANY TO MANY \]\\\\\_sairport-name AS name \\n FROM demo\_cds\_assoc\_scarr AS scarr \\n WHERE scarr~carrid = @carrid \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result1). \\n\\ \\n "Joins in ABAP SQL \\n SELECT demo\_cds\_assoc\_scarr~carrname, \\n demo\_cds\_assoc\_spfli~connid, \\n sflight~fldate AS fldate, \\n sairport~name AS name \\n FROM demo\_cds\_assoc\_scarr \\n LEFT OUTER JOIN demo\_cds\_assoc\_spfli \\n ON demo\_cds\_assoc\_spfli~carrid = \\n demo\_cds\_assoc\_scarr~carrid \\n LEFT OUTER JOIN demo\_cds\_sflight AS sflight \\n ON sflight~carrid = demo\_cds\_assoc\_spfli~carrid AND \\n sflight~connid = demo\_cds\_assoc\_spfli~connid \\n LEFT OUTER JOIN demo\_cds\_sairport AS sairport \\n ON sairport~id = demo\_cds\_assoc\_spfli~airpfrom \\n WHERE demo\_cds\_assoc\_scarr~carrid = @carrid \\n ORDER BY demo\_cds\_assoc\_scarr~carrname, \\n demo\_cds\_assoc\_spfli~connid, \\n fldate \\n INTO TABLE @FINAL(result2). \\n ASSERT result1 = result2. \\n\\ \\n "Path expressions in CDS \\n SELECT \* \\n FROM demo\_cds\_use\_assocs( p\_carrid = @carrid ) \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result3). \\n ASSERT result1 = result3. \\n\\ \\n "Joins in CDS \\n SELECT \* \\n FROM demo\_cds\_outer\_joins( p\_carrid = @carrid ) \\n ORDER BY carrname, connid, fldate \\n INTO TABLE @FINAL(result4). \\n ASSERT result1 = result4. \\n\\ \\n out->write( result1 ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_operands.html abenabap\_sql\_path.html