---
title: "ABENNESTED_STRUCTURE_ABEXA"
description: |
  ABENNESTED_STRUCTURE_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENNESTED_STRUCTURE_ABEXA.htm"
abapFile: "ABENNESTED_STRUCTURE_ABEXA.html"
keywords: ["select", "method", "class", "data", "ABENNESTED", "STRUCTURE", "ABEXA"]
---

This example demonstrates the declaration of a nested structure with substructures.

Declaration of a nested local structure `address` with three structured components. When the method `DISPLAY` of class `CL_DEMO_OUTPUT` is called, each substructure is addressed using the structure component selector (`-`).

\* Public class definition \\nCLASS cl\_demo\_nested\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nested\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n BEGIN OF name, \\n title TYPE string VALUE \`Mr.\`, \\n prename TYPE string VALUE \`Duncan\`, \\n surname TYPE string VALUE \`Pea\`, \\n END OF name, \\n BEGIN OF street, \\n name TYPE string VALUE \`Vegetable Lane\`, \\n number TYPE string VALUE \`11\`, \\n END OF street, \\n BEGIN OF city, \\n zipcode TYPE string VALUE \`349875\`, \\n name TYPE string VALUE \`Botanica\`, \\n END OF city, \\n END OF address. \\n out->write( address-name \\n )->write( address-street \\n )->write( address-city ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_nested\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nested\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n BEGIN OF name, \\n title TYPE string VALUE \`Mr.\`, \\n prename TYPE string VALUE \`Duncan\`, \\n surname TYPE string VALUE \`Pea\`, \\n END OF name, \\n BEGIN OF street, \\n name TYPE string VALUE \`Vegetable Lane\`, \\n number TYPE string VALUE \`11\`, \\n END OF street, \\n BEGIN OF city, \\n zipcode TYPE string VALUE \`349875\`, \\n name TYPE string VALUE \`Botanica\`, \\n END OF city, \\n END OF address. \\n out->write( address-name \\n )->write( address-street \\n )->write( address-city ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_struc.html