---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENLET_ABEXA.htm"
abapFile: "ABENLET_ABEXA.html"
keywords: ["do", "if", "method", "class", "types", "internal-table", "ABENLET", "ABEXA"]
---

This example demonstrates a `LET` expression in a constructor expression.

A constructor expression with the value operator [`VALUE`](ABENCONSTRUCTOR_EXPRESSION_VALUE.html) constructs lines in an internal table to which the value of the local helper variable `it` is passed.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_let\_it\_be DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_let\_it\_be IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE text( LET it = \`be\` IN \\n ( |To \\{ it \\} is to do| ) \\n ( |To \\{ it \\}, or not to \\{ it \\}| ) \\n ( |To do is to \\{ it \\}| ) \\n ( |Do \\{ it \\} do \\{ it \\} do| ) ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_let\_it\_be DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_let\_it\_be IMPLEMENTATION. \\n METHOD main. \\n\\ \\n TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY. \\n\\ \\n out->write( \\n VALUE text( LET it = \`be\` IN \\n ( |To \\{ it \\} is to do| ) \\n ( |To \\{ it \\}, or not to \\{ it \\}| ) \\n ( |To do is to \\{ it \\}| ) \\n ( |Do \\{ it \\} do \\{ it \\} do| ) ) ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendeclarations.html abenlocal\_expr\_declarations.html abaplet.html