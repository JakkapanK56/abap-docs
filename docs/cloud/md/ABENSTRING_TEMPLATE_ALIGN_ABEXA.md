---
title: "Demo for ABAP Keyword Documentation"
description: |
  n'! n'! Disclaimer:  n'! This class represents a demonstration program of the ABAP Keyword n'! Documentation, primarily intended to provide a better explanation n'! and visualization of syntax. It is not intended for production use n'! and may use demo artifacts that are not rel
library: "cloud"
libraryName: "ABAP Cloud"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/ABENSTRING_TEMPLATE_ALIGN_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_ALIGN_ABEXA.html"
keywords: ["do", "if", "method", "class", "data", "ABENSTRING", "TEMPLATE", "ALIGN", "ABEXA"]
---

This example demonstrates how to specify an alignment and how to pad embedded expressions.

The alignment of three string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.

\* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_align\_pad DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_align\_pad IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA pad TYPE c LENGTH 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = pad ). \\n\\ \\n out->write( \\n |\\{ 'Left' WIDTH = 20 ALIGN = LEFT PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Right' WIDTH = 20 ALIGN = RIGHT PAD = pad \\}<---| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\n"!

Demo for ABAP Keyword Documentation

\\ \\n"! \\n"!

**Disclaimer:**
\\ \\n"! This class represents a demonstration program of the ABAP Keyword \\n"! Documentation, primarily intended to provide a better explanation \\n"! and visualization of syntax. It is not intended for production use \\n"! and may use demo artifacts that are not released as APIs for use \\n"! in ABAP for Cloud Development.

\\ \\nCLASS cl\_demo\_str\_template\_align\_pad DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_align\_pad IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA pad TYPE c LENGTH 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = pad ). \\n\\ \\n out->write( \\n |\\{ 'Left' WIDTH = 20 ALIGN = LEFT PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Right' WIDTH = 20 ALIGN = RIGHT PAD = pad \\}<---| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html