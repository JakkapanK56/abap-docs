---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENAMDP_ABAP_TYPES_CS_ABEXA.htm"
abapFile: "ABENAMDP_ABAP_TYPES_CS_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "ABENAMDP", "ABAP", "TYPES", "ABEXA"]
---

The example demonstrates how to access ABAP types using the [AMDP macro](ABENAMDP_MACRO_GLOSRY.html)\\ [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html). The AMDP method uses the AMDP option [`CDS SESSION CLIENT DEPENDENT`](ABAPMETHODS_AMDP_OPTIONS_CLIENT.html) and is [client-safe](ABENCLIENT_SAFE_GLOSRY.html).

This example calls the following [AMDP method](ABENAMDP_METHOD_GLOSRY.html) of the class `CL_DEMO_AMDP_ABAP_TYPES_CS`:

In the method, a local table variable `mytab` is declared using `DECLARE` in [SQLScript](ABENSQL_SCRIPT_GLOSRY.html). All columns of the table variable are declared using the `[AMDP](ABENAMDP_MACRO_GLOSRY.html) macro`\\ [`$ABAP.type`](ABENAMDP_ABAP_TYPES.html) with reference to ABAP types. The first four ABAP types, `MANDT`, `SYST_UNAME`, `SYST_LANGU`, and `SYST_DATUM`, are defined in the ABAP Dictionary. Type `line_text` comes from a `TYPES` statement of its own class. `f` stands for the built-in numeric ABAP type.

The table variable is filled using assignments to columns with one row, where the specification of the AMDP macro `$ABAP.type` is also shown in a `CAST` expression. Finally, the content of the table variable is imported into the tabular output parameter `itab`, whose row type is made up of components of the same ABAP types, which are used to define the table variable.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_abap\_types\_acc\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_abap\_types\_acc\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE cl\_demo\_amdp\_abap\_types\_cs=>itab. \\n\\ \\n cl\_demo\_amdp\_abap\_types\_cs=>demo\_abap\_types( \\n IMPORTING itab = itab ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. METHOD demo\_abap\_types BY DATABASE PROCEDURE \\n FOR HDB LANGUAGE SQLSCRIPT. \\n\\ \\n DECLARE mytab table( mandt "$ABAP.type( mandt )", \\n uname "$ABAP.type( syst\_uname )", \\n langu "$ABAP.type( syst\_langu )", \\n datum "$ABAP.type( syst\_datum )", \\n text "$ABAP.type( line-text )", \\n number "$ABAP.type( f )" ); \\n\\ \\n mytab.mandt\[1\] := session\_context('CLIENT'); \\n mytab.uname\[1\] := session\_context('APPLICATIONUSER'); \\n mytab.langu\[1\] := session\_context('LOCALE\_SAP'); \\n mytab.datum\[1\] := session\_context('SAP\_SYSTEM\_DATE'); \\n mytab.text\[1\] := cast( 0123456789 as "$ABAP.type( line-text )" ); \\n mytab.number\[1\] := 333 ; \\n\\ \\n itab = select \* from :mytab; \\nENDMETHOD. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_amdp\_abap\_types\_acc\_cs DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_amdp\_abap\_types\_acc\_cs IMPLEMENTATION. \\n METHOD main. \\n DATA itab TYPE cl\_demo\_amdp\_abap\_types\_cs=>itab. \\n\\ \\n cl\_demo\_amdp\_abap\_types\_cs=>demo\_abap\_types( \\n IMPORTING itab = itab ). \\n\\ \\n out->write( itab ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenamdp.html abenamdp\_examples.html abenamdp\_cs\_abexas.html