---
title: "ABENSTATEMENT_GUIDL"
description: |
  ABENSTATEMENT_GUIDL - Standard ABAP language reference documentation
library: "standard"
libraryName: "Standard ABAP"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ABENSTATEMENT_GUIDL.htm"
abapFile: "ABENSTATEMENT_GUIDL.html"
keywords: ["select", "loop", "if", "try", "method", "class", "data", "ABENSTATEMENT", "GUIDL"]
---

An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines.

**Maximum of one statement per program line**

Write a maximum of one statement in every source code line. Long statements can and should be split at suitable places. This means the statements can be divided up across consecutive lines.

Using multiple statements in one line makes the source code harder to read. If a line contains an entire control structure, the lack of indentations makes it especially difficult to identify the logical structure. Therefore you should try to avoid using more than one statement in a program line.

Besides reduced readability, using multiple statements in one line can also make the code more difficult to debug. Even in single steps, ABAP Debugger stops a maximum of once per executable program line. This makes it impractical for the debugging process if there is more than one statement in a line.

If a statement spans [multiple lines](ABENLINE_WIDTH_GUIDL.html) (which occurs frequently due to the potential length of complex ABAP statements), there should be no empty lines between the parts of the statement. The breaks in the statement should occur at semantically suitable places so that groups with a similar semantic meaning are next to each other, if possible. Indentations should be used to ensure that the statement is as well structured and readable as possible.

The following source code shows a program section with correct syntax but that is poorly laid out and difficult to understand. Even the [Pretty Printer](ABENUSE_PRETTY_PRINTER_GUIDL.html) can barely improve the layout of the pattern shown here.

The following source code shows the same code as above but with the recommended limit of one statement per line. The complex `SELECT` statement contains numerous clauses and hence spans multiple consecutive lines.

CLASS class DEFINITION. \\n PUBLIC SECTION. METHODS meth. ENDCLASS.CLASS class IMPLEMENTATION. METHOD meth. \\n DATA: itab TYPE TABLE OF dbtab, wa TYPE dbtab. \\n SELECT \* FROM dbtab WHERE column = ' ' INTO TABLE @itab. \\n IF sy-subrc <> 0. RETURN. ENDIF. \\n LOOP AT itab INTO wa. ... ENDLOOP. \\n ENDMETHOD. ENDCLASS. CLASS class DEFINITION. \\n PUBLIC SECTION. \\n METHODS meth. \\nENDCLASS.CLASS class IMPLEMENTATION. \\n METHOD meth. \\n DATA: itab TYPE TABLE OF dbtab, \\n wa TYPE dbtab. \\n SELECT \* \\n FROM dbtab \\n WHERE column = ' ' \\n INTO TABLE @itab. \\n IF sy-subrc <> 0. \\n RETURN. \\n ENDIF. \\n LOOP AT itab INTO wa. \\n ... \\n ENDLOOP. \\n ENDMETHOD. \\nENDCLASS. abenabap.html abenabap\_reference.html abenabap\_pgl.html abenstructure\_style\_gdl.html abenformatting\_code\_gdl.html