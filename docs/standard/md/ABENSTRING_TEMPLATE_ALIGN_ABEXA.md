---
title: "ABENSTRING_TEMPLATE_ALIGN_ABEXA"
description: |
  ABENSTRING_TEMPLATE_ALIGN_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTRING_TEMPLATE_ALIGN_ABEXA.htm"
abapFile: "ABENSTRING_TEMPLATE_ALIGN_ABEXA.html"
keywords: ["if", "method", "class", "data", "ABENSTRING", "TEMPLATE", "ALIGN", "ABEXA"]
---

This example demonstrates how to specify an alignment and how to pad embedded expressions.

The alignment of three string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.

\* Public class definition \\nCLASS cl\_demo\_str\_template\_align\_pad DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_align\_pad IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA pad TYPE c LENGTH 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = pad ). \\n\\ \\n out->write( \\n |\\{ 'Left' WIDTH = 20 ALIGN = LEFT PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Right' WIDTH = 20 ALIGN = RIGHT PAD = pad \\}<---| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_str\_template\_align\_pad DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_str\_template\_align\_pad IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA pad TYPE c LENGTH 1. \\n cl\_demo\_input=>new( )->request( CHANGING field = pad ). \\n\\ \\n out->write( \\n |\\{ 'Left' WIDTH = 20 ALIGN = LEFT PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad \\}<---| \\n )->write( \\n |\\{ 'Right' WIDTH = 20 ALIGN = RIGHT PAD = pad \\}<---| ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_data\_working.html abenabap\_data\_string.html abenstring\_processing\_expr\_func.html abapcompute\_string.html abenstring\_templates.html abenstring\_templates\_abexas.html