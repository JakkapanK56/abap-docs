---
title: "ABENDB_COPY_ABEXA"
description: |
  ABENDB_COPY_ABEXA - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENDB_COPY_ABEXA.htm"
abapFile: "ABENDB_COPY_ABEXA.html"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "types", "ABENDB", "COPY", "ABEXA"]
---

The example demonstrates how column content can be copied using [locators](ABENLOCATOR_GLOSRY.html).

The method `main`\\ [derives](ABAPTYPES_LOB_HANDLE.html) an [LOB handle structure](ABENLOB_HANDLE_STRUCTURE_GLOSRY.html) from the structure of the DDIC database table `DEMO_BLOB_TABLE`, where the component `PICTURE` is declared as an [LOB handle component](ABENLOB_HANDLE_COMPONENT_GLOSRY.html) for a locator. This locator is then [created](ABENSELECT_INTO_LOB_HANDLES.html) in a `SELECT` statement.

A new value is then assigned to the key field of the LOB handle structure and the LOB handle structure is used as a work area in an `INSERT` statement. As a result, the content of the column to which the locator is linked is [copied](ABENIUM_LOB.html) to the corresponding column of the new row without the content having to be transported to the ABAP class.

If data previously written in the executable [writer stream example](ABENDB_WRITER_ABEXA.html) is read, this is the data of a figure in the GIF format. By specifying the new name, the copied figure can be displayed using the [example for reader streams](ABENDB_READER_ABEXA.html).

\* Public class definition \\nCLASS cl\_demo\_db\_copy DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_db\_copy IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n source TYPE c LENGTH 255 \\n VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif', \\n target TYPE c LENGTH 255 \\n VALUE 'picture\_copy'. \\n\\ \\n DATA wa TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = source \\n )->request( CHANGING field = target ). \\n\\ \\n SELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = @source \\n INTO @wa-picture. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \\n 'Nothing found, run DEMO\_DB\_WRITER first!' ). \\n RETURN. \\n ENDIF. \\n\\ \\n wa-name = target. \\n INSERT demo\_blob\_table FROM @wa. \\n\\ \\n IF sy-subrc = 0. \\n out->write( \\n 'You can run DEMO\_DB\_READER with new name now' ). \\n ELSE. \\n out->write( \\n 'Target already exists' ). \\n ENDIF. \\n\\ \\n wa-picture->close( ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. \* Public class definition \\nCLASS cl\_demo\_db\_copy DEFINITION \\n INHERITING FROM cl\_demo\_classrun \\n PUBLIC \\n CREATE PUBLIC. \\n PUBLIC SECTION. \\n METHODS main REDEFINITION. \\nENDCLASS. \\n\\ \\n\* Public class implementation \\nCLASS cl\_demo\_db\_copy IMPLEMENTATION. \\n METHOD main. \\n\\ \\n DATA: \\n source TYPE c LENGTH 255 \\n VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif', \\n target TYPE c LENGTH 255 \\n VALUE 'picture\_copy'. \\n\\ \\n DATA wa TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS. \\n\\ \\n cl\_demo\_input=>new( \\n )->add\_field( CHANGING field = source \\n )->request( CHANGING field = target ). \\n\\ \\n SELECT SINGLE picture \\n FROM demo\_blob\_table \\n WHERE name = @source \\n INTO @wa-picture. \\n\\ \\n IF sy-subrc <> 0. \\n out->write( \\n 'Nothing found, run DEMO\_DB\_WRITER first!' ). \\n RETURN. \\n ENDIF. \\n\\ \\n wa-name = target. \\n INSERT demo\_blob\_table FROM @wa. \\n\\ \\n IF sy-subrc = 0. \\n out->write( \\n 'You can run DEMO\_DB\_READER with new name now' ). \\n ELSE. \\n out->write( \\n 'Target already exists' ). \\n ENDIF. \\n\\ \\n wa-picture->close( ). \\n\\ \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abendb\_access.html abenabap\_sql.html abenstreams\_locators.html abenlobs\_abexas.html