---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSELECT_FROM_CLASS_ABEXA.htm"
abapFile: "ABENSELECT_FROM_CLASS_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENSELECT", "FROM", "CLASS", "ABEXA"]
---

This example demonstrates how an attribute of a class is accessed using an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html).

The class `CL_DEMO_SCARR_SPFLI` has a tabular attribute `SCARR_SPFLI_TAB` that is filled with joined data from the database in its constructor. The above class reads data from this attribute with a `SELECT` statement in the same way as it would read from a CDS view.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_from\_class DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_class IMPLEMENTATION. \\n METHOD main. \\n FINAL(join) = NEW cl\_demo\_scarr\_spfli( ). \\n\\ \\n SELECT \* \\n FROM @join->scarr\_spfli\_tab AS scarr\_spfli \\n WHERE cityfrom = 'FRANKFURT' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_select\_from\_class DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_class IMPLEMENTATION. \\n METHOD main. \\n FINAL(join) = NEW cl\_demo\_scarr\_spfli( ). \\n\\ \\n SELECT \* \\n FROM @join->scarr\_spfli\_tab AS scarr\_spfli \\n WHERE cityfrom = 'FRANKFURT' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abapselect\_itab.html