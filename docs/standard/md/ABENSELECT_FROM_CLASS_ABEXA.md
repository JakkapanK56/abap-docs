---
title: "ABENSELECT_FROM_CLASS_ABEXA"
description: |
  ABENSELECT_FROM_CLASS_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSELECT_FROM_CLASS_ABEXA.htm"
abapFile: "ABENSELECT_FROM_CLASS_ABEXA.html"
keywords: ["select", "method", "class", "data", "ABENSELECT", "FROM", "CLASS", "ABEXA"]
---

This example demonstrates how an attribute of a class is accessed using an ABAP SQL [query](ABENASQL_QUERY_GLOSRY.html).

The class `CL_DEMO_SCARR_SPFLI` has a tabular attribute `SCARR_SPFLI_TAB` that is filled with joined data from the database in its constructor. The above class reads data from this attribute with a `SELECT` statement in the same way as it would read from a CDS view.

\* Public class definition \\nCLASS cl\_demo\_select\_from\_class DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_class IMPLEMENTATION. \\n METHOD main. \\n FINAL(join) = NEW cl\_demo\_scarr\_spfli( ). \\n\\ \\n SELECT \* \\n FROM @join->scarr\_spfli\_tab AS scarr\_spfli \\n WHERE cityfrom = 'FRANKFURT' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_select\_from\_class DEFINITION \\n PUBLIC \\n INHERITING FROM cl\_demo\_classrun \\n CREATE PUBLIC . \\n PUBLIC SECTION. \\n METHODS main \\n REDEFINITION . \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_select\_from\_class IMPLEMENTATION. \\n METHOD main. \\n FINAL(join) = NEW cl\_demo\_scarr\_spfli( ). \\n\\ \\n SELECT \* \\n FROM @join->scarr\_spfli\_tab AS scarr\_spfli \\n WHERE cityfrom = 'FRANKFURT' \\n INTO TABLE @FINAL(result). \\n\\ \\n out->write( result ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenabap\_sql\_reading.html abenselect\_clauses.html abapfrom\_clause.html abapselect\_data\_source.html abapselect\_itab.html