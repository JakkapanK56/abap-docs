---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENFRIENDS_ABEXA.htm"
abapFile: "ABENFRIENDS_ABEXA.html"
keywords: ["do", "if", "method", "class", "ABENFRIENDS", "ABEXA"]
---

This example demonstrates an interface that is a [friend](ABENFRIENDS.html) of a class.

The empty global interface `IF_DEMO_FRIEND` is a friend of the global class `CL_DEMO_FRIENDSHIP`. Every class that implements `IF_DEMO_FRIEND` can access the private components of `CL_DEMO_FRIENDSHIP`.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_oo\_friendship DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n INTERFACES if\_demo\_friend. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_oo\_friendship IMPLEMENTATION. \\n METHOD main. \\n out->write( cl\_demo\_friendship=>attr ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_oo\_friendship DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\n INTERFACES if\_demo\_friend. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_oo\_friendship IMPLEMENTATION. \\n METHOD main. \\n out->write( cl\_demo\_friendship=>attr ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_objects.html abenabap\_objects\_abexas.html