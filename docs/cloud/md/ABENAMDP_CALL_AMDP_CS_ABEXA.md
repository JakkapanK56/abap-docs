---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_CALL_AMDP_CS_ABEXA.htm"
abapFile: "ABENAMDP_CALL_AMDP_CS_ABEXA.html"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "ABENAMDP", "CALL", "AMDP", "ABEXA"]
---

This example demonstrates how am AMDP procedure is called from an AMDP procedure. The AMDP methods involved use the AMDP options [`READ-ONLY`](ABAPMETHODS_AMDP_OPTIONS.html) and [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and are [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

The [SQLScript procedure](ABENSQL_SCRIPT_PROCEDURE_GLOSRY.html) of the AMDP method `GET_SCARR` of the AMDP class `CL_DEMO_AMDP_CALL_AMDP_CS` calls a different AMDP procedure that is implemented in the private AMDP method `GET_SCARR_AMDP` of the same class:

The called database procedure must be specified after the addition [`USING`](ABAPMETHOD_BY_DB_PROC.html) of the statement `METHOD`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_call\_amdp\_prcd\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_call\_amdp\_prcd\_cs IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TRY. \\n cl\_demo\_amdp\_call\_amdp\_cs=>get\_scarr( \\n IMPORTING carriers = FINAL(carriers) ). \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( carriers ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. METHOD get\_scarr BY DATABASE PROCEDURE \\n FOR HDB LANGUAGE SQLSCRIPT \\n USING cl\_demo\_amdp\_call\_amdp\_cs=>get\_scarr\_amdp. \\n call "CL\_DEMO\_AMDP\_CALL\_AMDP\_CS=>GET\_SCARR\_AMDP"( :carriers ); \\nENDMETHOD. METHOD get\_scarr\_amdp BY DATABASE PROCEDURE \\n FOR HDB LANGUAGE SQLSCRIPT \\n USING demo\_cds\_scarr\_entity. \\n carriers = select carrid, carrname, currcode, url \\n from demo\_cds\_scarr\_entity; \\nENDMETHOD. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_call\_amdp\_prcd\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_call\_amdp\_prcd\_cs IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TRY. \\n cl\_demo\_amdp\_call\_amdp\_cs=>get\_scarr( \\n IMPORTING carriers = FINAL(carriers) ). \\n CATCH cx\_amdp\_execution\_error cx\_amdp\_version\_error \\n cx\_amdp\_creation\_error INTO FINAL(amdp\_error). \\n out->write( amdp\_error->get\_text( ) ). \\n RETURN. \\n ENDTRY. \\n\\ \\n out->write( carriers ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html