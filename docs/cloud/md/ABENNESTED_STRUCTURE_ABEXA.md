---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENNESTED_STRUCTURE_ABEXA.htm"
abapFile: "ABENNESTED_STRUCTURE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "ABENNESTED", "STRUCTURE", "ABEXA"]
---

This example demonstrates the declaration of a nested structure with substructures.

Declaration of a nested local structure `address` with three structured components. When the method `DISPLAY` of class `CL_DEMO_OUTPUT` is called, each substructure is addressed using the structure component selector (`-`).

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_nested\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nested\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n BEGIN OF name, \\n title TYPE string VALUE \`Mr.\`, \\n prename TYPE string VALUE \`Duncan\`, \\n surname TYPE string VALUE \`Pea\`, \\n END OF name, \\n BEGIN OF street, \\n name TYPE string VALUE \`Vegetable Lane\`, \\n number TYPE string VALUE \`11\`, \\n END OF street, \\n BEGIN OF city, \\n zipcode TYPE string VALUE \`349875\`, \\n name TYPE string VALUE \`Botanica\`, \\n END OF city, \\n END OF address. \\n out->write( address-name \\n )->write( address-street \\n )->write( address-city ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_nested\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_nested\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA: \\n BEGIN OF address, \\n BEGIN OF name, \\n title TYPE string VALUE \`Mr.\`, \\n prename TYPE string VALUE \`Duncan\`, \\n surname TYPE string VALUE \`Pea\`, \\n END OF name, \\n BEGIN OF street, \\n name TYPE string VALUE \`Vegetable Lane\`, \\n number TYPE string VALUE \`11\`, \\n END OF street, \\n BEGIN OF city, \\n zipcode TYPE string VALUE \`349875\`, \\n name TYPE string VALUE \`Botanica\`, \\n END OF city, \\n END OF address. \\n out->write( address-name \\n )->write( address-street \\n )->write( address-city ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenabap\_declarations.html abenobjects\_statements.html abapdata.html abapdata\_struc.html