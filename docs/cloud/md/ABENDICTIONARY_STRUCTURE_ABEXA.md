---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENDICTIONARY_STRUCTURE_ABEXA.htm"
abapFile: "ABENDICTIONARY_STRUCTURE_ABEXA.html"
keywords: ["select", "do", "if", "method", "class", "data", "types", "internal-table", "ABENDICTIONARY", "STRUCTURE", "ABEXA"]
---

This example demonstrates a structure from the ABAP Dictionary and its use.

Structure types of the ABAP Dictionary are typically used in ABAP programs to define structures or internal tables with a structured line type to process data that is imported from the database. The example shows how a structure `carrier` local to a method is declared by reference to a database table `SCARR` defined in the ABAP Dictionary, and used as the target area of a [`SELECT`](ABAPSELECT.html) statement.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_dictionary\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dictionary\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr. \\n carrier-carrid = 'UA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier-carrid ). \\n SELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = @carrier-carrid \\n INTO @carrier. \\n out->write( carrier ). \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_dictionary\_structure DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_dictionary\_structure IMPLEMENTATION. \\n METHOD main. \\n DATA carrier TYPE scarr. \\n carrier-carrid = 'UA'. \\n cl\_demo\_input=>new( )->request( CHANGING field = carrier-carrid ). \\n SELECT SINGLE \* \\n FROM scarr \\n WHERE carrid = @carrier-carrid \\n INTO @carrier. \\n out->write( carrier ). \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abentypes\_and\_objects.html abendata\_objects.html abendata\_objects\_structure.html abenstructure\_abexas.html