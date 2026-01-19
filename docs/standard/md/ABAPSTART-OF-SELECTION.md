---
title: "ABAPSTART-OF-SELECTION"
description: |
  ABAPSTART-OF-SELECTION - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABAPSTART-OF-SELECTION.htm"
abapFile: "ABAPSTART-OF-SELECTION.html"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "ABAPSTART", "SELECTION"]
---

[Short Reference](ABAPSTART-OF-SELECTION_SHORTREF.html)

`START-OF-SELECTION.`

This event keyword defines the standard processing block of an executable program. The associated event is raised by the [ABAP runtime framework](ABENABAP_RUNTIME_FRMWK_GLOSRY.html) during the [processing](ABENREPORTING_PROCESS.html) of an [executable program](ABENEXECUTABLE_PROGRAM_GLOSRY.html) after selection screen [processing](ABENSELSCREEN_PROCESSING_GLOSRY.html) of any standard selection screen.

In an executable program, the following statements are assigned to an implicit `START-OF-SELECTION` event block, which is inserted before any explicit `START-OF-SELECTION` event block if one exists:

If the program is linked to a [logical database](ABENLOGICAL_DATA_BASE_GLOSRY.html), preparatory work can be performed in `START-OF-SELECTION` before the logical database reads data. If the program is not linked to a logical database, this event block represents a *main program*, so to speak, from which [procedures](ABENPROCEDURE_GLOSRY.html) or classic [screens](ABENSCREEN_GLOSRY.html) are called.

The following program section shows the recommended use of `START-OF-SELECTION` in an executable program. A dedicated method is called instead of implementing functionality directly.

The following three executable programs all have the same functionality:

The first program contains an explicit event block `START-OF-SELECTION` and shows the recommended arrangement.

In the second program, there is an assignment before the first processing block, which constructs an implicit event block `START-OF-SELECTION` before the explicit event block.

In the third program, there is no explicit processing block. All statements implicitly construct the event block `START-OF-SELECTION`.

The third program has the same form as the first program. The second program, however, would have the following form if expressed explicitly:

-   All statements that are not declaration and are listed before the first explicit [processing block](ABENPROCESSING_BLOCK_GLOSRY.html).
-   All functional statements of the program if it does not contain any explicit processing blocks.

REPORT ... \\n\\ \\nCLASS cls DEFINITION. \\n PUBLIC SECTION. \\n CLASS-METHODS main. \\nENDCLASS. \\n\\ \\nCLASS cls IMPLEMENTATION. \\n METHOD main. \\n ... \\n ENDMETHOD. \\nENDCLASS. \\n\\ \\nSTART-OF-SELECTION. \\n cls=>main( ). REPORT ... \\n\\ \\nDATA text TYPE string. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n text = \`Hello World!\`. \\n out->write\_data( text ). \\n\\ \\n out->display( ). REPORT ... \\n\\ \\nDATA text TYPE string. \\n\\ \\ntext = \`Hello World!\`. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write\_data( text ). \\n\\ \\n out->display( ). REPORT ... \\n\\ \\nDATA text TYPE string. \\n\\ \\nFINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\ntext = \`Hello World!\`. \\nout->write\_data( text ). \\n\\ \\nout->display( ). REPORT ... \\n\\ \\nDATA text TYPE string. \\n\\ \\nSTART-OF-SELECTION. \\n text = \`Hello World!\`. \\n\\ \\nSTART-OF-SELECTION. \\n FINAL(out) = cl\_demo\_output=>new( ). \\n\\ \\n out->write\_data( text ). \\n\\ \\n out->display( ). abenabap.html abenabap\_reference.html abenabap\_program\_layout.html abenabap\_language\_modularization.html abenevent\_blocks.html abenabap\_processing\_blocks.html