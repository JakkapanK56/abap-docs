---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_CHANGING_CS_ABEXA.htm"
abapFile: "ABENAMDP_CHANGING_CS_ABEXA.html"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "ABENAMDP", "CHANGING", "ABEXA"]
---

This example demonstrates how an SQLScript procedure is implemented using AMDP with a tabular `CHANGING` parameter. Since the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) is used for the AMDP methods, they are [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The following [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) is implemented in the AMDP method `GET_CARRIERS` of the AMDP class `CL_DEMO_AMDP_CHANGING_CS`:

The tabular `CHANGING` parameter `carriers` can be used in the procedure in read positions and write positions. Internally, the database procedure uses an identically named output parameter to which the initial value of the `CHANGING` parameter is assigned at the beginning of the execution of the procedure using the invisible `IN` parameter `carriers__in__` (see [SQLScript for the SAP HANA Database](ABENAMDP_HDB_SQLSCRIPT.html)).

A further method `CALL_GET_CARRIERS` demonstrates how the SQLScript procedure implemented in `GET_CARRIERS` is called from a different SQLScript procedure.

In this case, the implicit `IN` parameter `carriers__in__` must be filled explicitly with the actual parameter to be modified.

This is a syntax example. The same function can be achieved with the same efficiency in ABAP SQL. AMDP is not needed in simple cases like this.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_changing\_para\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_changing\_para\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA lower TYPE scarr-carrid VALUE 'AA'. \\n DATA upper TYPE scarr-carrid VALUE 'BA'. \\n DATA call\_flag TYPE abap\_boolean. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = lower \\n )->add\_field( CHANGING field = upper \\n )->add\_line( \\n )->add\_field( EXPORTING text = 'Indirect call' \\n as\_checkbox = abap\_true \\n CHANGING field = call\_flag \\n )->request( ). \\n\\ \\n DATA carriers TYPE cl\_demo\_amdp\_changing\_cs=>t\_carriers. \\n SELECT mandt, carrid \\n FROM scarr \\n WHERE carrid BETWEEN @lower AND @upper \\n ORDER BY mandt, carrid \\n INTO CORRESPONDING FIELDS OF TABLE @carriers. \\n out->write( carriers ). \\n\\ \\n TRY. \\n IF call\_flag IS INITIAL. \\n NEW cl\_demo\_amdp\_changing\_cs( \\n )->get\_carriers( CHANGING carriers = carriers ). \\n ELSE. \\n NEW cl\_demo\_amdp\_changing\_cs( \\n )->call\_get\_carriers( CHANGING carriers = carriers ). \\n ENDIF. \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( carriers ). \\n ENDMETHOD. \\nENDCLASS. METHOD get\_carriers BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING demo\_cds\_scarr\_entity. \\n carriers = select s.\* \\n from demo\_cds\_scarr\_entity as s \\n inner join :carriers as c \\n on s.mandt = c.mandt and \\n s.carrid = c.carrid; \\nENDMETHOD. METHOD call\_get\_carriers BY DATABASE PROCEDURE FOR HDB \\n LANGUAGE SQLSCRIPT \\n USING cl\_demo\_amdp\_changing\_cs=>get\_carriers. \\n call "CL\_DEMO\_AMDP\_CHANGING\_CS=>GET\_CARRIERS"( \\n CARRIERS\_\_IN\_\_ => :CARRIERS, \\n CARRIERS => :CARRIERS ); \\nENDMETHOD. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_changing\_para\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_changing\_para\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA lower TYPE scarr-carrid VALUE 'AA'. \\n DATA upper TYPE scarr-carrid VALUE 'BA'. \\n DATA call\_flag TYPE abap\_boolean. \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = lower \\n )->add\_field( CHANGING field = upper \\n )->add\_line( \\n )->add\_field( EXPORTING text = 'Indirect call' \\n as\_checkbox = abap\_true \\n CHANGING field = call\_flag \\n )->request( ). \\n\\ \\n DATA carriers TYPE cl\_demo\_amdp\_changing\_cs=>t\_carriers. \\n SELECT mandt, carrid \\n FROM scarr \\n WHERE carrid BETWEEN @lower AND @upper \\n ORDER BY mandt, carrid \\n INTO CORRESPONDING FIELDS OF TABLE @carriers. \\n out->write( carriers ). \\n\\ \\n TRY. \\n IF call\_flag IS INITIAL. \\n NEW cl\_demo\_amdp\_changing\_cs( \\n )->get\_carriers( CHANGING carriers = carriers ). \\n ELSE. \\n NEW cl\_demo\_amdp\_changing\_cs( \\n )->call\_get\_carriers( CHANGING carriers = carriers ). \\n ENDIF. \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( carriers ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html