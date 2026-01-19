---
title: "ABENSIMPLE_STRUCTURE_ABEXA"
description: |
  ABENSIMPLE_STRUCTURE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSIMPLE_STRUCTURE_ABEXA.htm"
abapFile: "ABENSIMPLE_STRUCTURE_ABEXA.html"
keywords: ["method", "class", "data", "ABENSIMPLE", "STRUCTURE", "ABEXA"]
---

This example demonstrates the declaration of a simple structure.

Declaration of a simple local structure `address` with three elementary components to which start values are assigned. When the method `DISPLAY` of class `CL_DEMO_OUTPUT` is called, the whole structure is addressed.

\* Public class definition \\nCLASS cl\_demo\_simple\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_simple\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n name TYPE string VALUE \`Mr. Duncan Pea\`, \\n street TYPE string VALUE \`Vegetable Lane 11\`, \\n city TYPE string VALUE \`349875 Botanica\`, \\n END OF address. \\n out->write( address ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_simple\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_simple\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n name TYPE string VALUE \`Mr. Duncan Pea\`, \\n street TYPE string VALUE \`Vegetable Lane 11\`, \\n city TYPE string VALUE \`349875 Botanica\`, \\n END OF address. \\n out->write( address ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_struc.html